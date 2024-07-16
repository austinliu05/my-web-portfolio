import './game.css';
import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './firebase_config';

interface Cell {
    id: string;
    row: number;
    col: number;
    isClicked: boolean;
    AIPlace: boolean;
    recent?: boolean;
}

interface GridProps {
    gridData: Cell[][];
    onButtonClick: (row: number, col: number, id: string) => void;
}

interface Record {
    Wins: number;
    Losses: number;
    Ties: number;
}

interface GameProps {
    onClose: () => void;
    record: Record;
}

const Game: React.FC<GameProps> = ({ onClose, record }) => {
    const ROWS = 6;
    const COLUMNS = 7;
    const [hasWon, setHasWon] = useState<boolean>(false);
    const [hasLost, setHasLost] = useState<boolean>(false);
    const [hasDraw, setHasDraw] = useState<boolean>(false);
    const [isGameActive, setIsGameActive] = useState<boolean>(true);
    const [isInvalid, setInvalid] = useState<boolean>(false);
    const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
    const [recent] = useState<boolean>(false);

    const generateGrid = (): Cell[][] => {
        const grid: Cell[][] = [];
        for (let row = 0; row < ROWS; row++) {
            const currentRow: Cell[] = [];
            for (let col = 0; col < COLUMNS; col++) {
                currentRow.push({ id: `row${row}-col${col}`, row, col, isClicked: false, AIPlace: false });
            }
            grid.push(currentRow);
        }
        return grid;
    };

    const [gridData, setGridData] = useState<Cell[][]>(generateGrid());

    const Grid: React.FC<GridProps> = ({ gridData, onButtonClick }) => {
        return (
            <div className="grid">
                {gridData.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map(cell => (
                            <button
                                key={cell.id}
                                className={`${cell.isClicked ? 'clicked' : cell.recent ? 'recent' : cell.AIPlace ? 'placed' : !isGameActive || !isPlayerTurn ? 'no-hover' : ''}`}
                                onClick={() => onButtonClick(cell.row, cell.col, cell.id)}>
                                {/* Display game state here */}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const handleButtonClick = (row: number, col: number, id: string): void => {
        console.log(`Button clicked at row ${row}, column ${col}`);
        if (!isGameActive || !isPlayerTurn) {
            return;
        }
        if (gridData[row][col].isClicked || gridData[row][col].AIPlace) {
            setInvalid(true);
            return;
        } else if (row < 5 && !gridData[row + 1][col].isClicked && !gridData[row + 1][col].AIPlace) {
            setInvalid(true);
            return;
        }
        setInvalid(false);

        const newGridData = gridData.map(rowData =>
            rowData.map(cell => (cell.id === id ? { ...cell, isClicked: true } : cell))
        );

        setGridData(newGridData);

        const board: number[][] = [];
        for (let i = 0; i < 6; i++) {
            const currRow: number[] = [];
            for (let j = 0; j < 7; j++) {
                let val = 0;
                if (newGridData[i][j].isClicked) {
                    val = 1;
                } else if (newGridData[i][j].AIPlace) {
                    val = -1;
                }
                if (j === 3) {
                    val = val * 8;
                } else if (j === 2 || j === 4) {
                    val = val * 4;
                } else if (j === 1 || j === 5) {
                    val = val * 2;
                }
                currRow.push(val);
            }
            board.push(currRow);
        }

        const data = { x: row, y: col, board };
        console.log(data);
        sendData(data);
        setIsPlayerTurn(false);
    };

    const [data, setData] = useState<any>([{}]);

    const sendData = (data: { x: number; y: number; board: number[][] }): void => {
        fetch("https://apoxie.pythonanywhere.com/connect4", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseData => {
                console.log("Server Response:", responseData);
                responseData = JSON.parse(responseData);

                if (responseData.status === 'WIN') {
                    setHasWon(true);
                    setIsGameActive(false);
                    updateRecord(record.Wins, record.Losses + 1, record.Ties);
                } else if (responseData.status === 'LOSE') {
                    setHasLost(true);
                    setIsGameActive(false);
                    updateRecord(record.Wins + 1, record.Losses, record.Ties);
                } else if (responseData.status === 'DRAW') {
                    setHasDraw(true);
                    setIsGameActive(false);
                    updateRecord(record.Wins, record.Losses, record.Ties + 1);
                }

                setData(responseData.board);

                const newGridData = JSON.parse(JSON.stringify(gridData)) as Cell[][];
                const x = responseData.x - 1;
                const y = 5 - responseData.y;

                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 7; j++) {
                        if (i === y && x === j) {
                            newGridData[y][x] = { ...newGridData[y][x], recent: true, AIPlace: true };
                        } else if (responseData.board[i][j] >= 1) {
                            newGridData[i][j] = { ...newGridData[i][j], isClicked: true };
                        } else if (responseData.board[i][j] <= -1) {
                            newGridData[i][j] = { ...newGridData[i][j], AIPlace: true, recent: false };
                        } else {
                            newGridData[i][j] = { ...newGridData[i][j], AIPlace: false, isClicked: false, recent: false };
                        }
                    }
                }

                setGridData(newGridData);
                setIsPlayerTurn(true);
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
    };

    const resetGameState = (): void => {
        setHasDraw(false);
        setHasLost(false);
        setHasWon(false);
        setIsGameActive(true);
        setInvalid(false);

        const newGridData = gridData.map(rowData =>
            rowData.map(cell => ({ ...cell, isClicked: false, AIPlace: false, recent: false }))
        );

        setGridData(newGridData);
    };

    const updateRecord = (wins: number, losses: number, ties: number): void => {
        const recordRef = ref(database, 'Connect4/Record');
        set(recordRef, {
            Wins: wins,
            Losses: losses,
            Ties: ties
        }).then(() => {
            console.log('Record updated successfully');
        }).catch(error => {
            console.error('Error updating record: ', error);
        });
    };

    return (
        <div className='game'>
            <div className="popup-container">
                <div className="popup-content">
                    <button className="close-button" onClick={onClose}>&times;</button>
                    <div className='board'>
                        <Grid gridData={gridData} onButtonClick={handleButtonClick} />
                    </div>
                </div>

                {hasWon && (
                    <div className="gameEnd-popup">
                        <div>
                            <h1>You Win!</h1>
                        </div>
                    </div>
                )}
                {hasDraw && (
                    <div className="gameEnd-popup">
                        <div>
                            <h1>Draw!</h1>
                        </div>
                    </div>
                )}
                {hasLost && (
                    <div className="gameEnd-popup">
                        <div>
                            <h1>You Lose!</h1>
                        </div>
                    </div>
                )}
                {isInvalid && (
                    <div className="invalid-popup">
                        <div>
                            <h1>Invalid Move!</h1>
                        </div>
                    </div>
                )}
                {(hasLost || hasDraw || hasWon) && (
                    <button id="playAgainButton" className="play-again-btn" onClick={resetGameState}>
                        Play Again?
                    </button>
                )}
                {isPlayerTurn && isGameActive && !isInvalid && (
                    <div className="move-popup">
                        <div>
                            <h1>Your turn</h1>
                        </div>
                    </div>
                )}
                {!isPlayerTurn && isGameActive && (
                    <div className="move-popup">
                        <div>
                            <h1>AI's turn</h1>
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;
