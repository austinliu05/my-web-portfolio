import React from 'react';
import { motion } from 'framer-motion';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
    isOn: boolean;
    onToggle: () => void;
}

// springy bounce
const bounce = { type: 'spring', stiffness: 700, damping: 30 };

export default function ToggleSwitch({ isOn, onToggle }: ToggleSwitchProps) {
    // track width (56) - 2*padding (8) - thumb width (20) = 28px travel
    const travel = 56 - 8 - 20;

    return (
        <div className="toggle-switch-container">
            <div className="toggle-switch" onClick={onToggle}>
                <motion.div
                    className="toggle-switch__thumb"
                    initial={false}
                    animate={{ x: isOn ? travel : 0 }}
                    transition={bounce}
                />
            </div>
        </div>
    );
}
