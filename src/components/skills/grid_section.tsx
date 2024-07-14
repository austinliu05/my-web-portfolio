import React from 'react';
import './grid_section.css';
import { ASSETS_SKILLS_BASE_PATH } from '../../constants';

interface GridItem {
    name: string;
    imageUrl: string;
}

interface GridSectionProps {
    title: string;
    items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ title, items }) => {
    return (
        <section className="grid-section">
            <h2>{title}</h2>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div className="grid-item" key={index}>
                        <img src={`${ASSETS_SKILLS_BASE_PATH}${item.imageUrl}`} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GridSection;
