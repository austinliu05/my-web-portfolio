import React, { useEffect, useState } from 'react';
import './customCursor.css';

const CustomCursor = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [isClicking, setIsClicking] = useState(false);

    // Update the cursor position on mouse move
    const move = (e:any) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    };

    const handleMouseDown = () => {
        setIsClicking(true);
    };

    const handleMouseUp = () => {
        setIsClicking(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div
                className="custom-cursor"
                style={{
                    left: `${cursorX}px`,
                    top: `${cursorY}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
