import React from 'react';
import { motion } from 'framer-motion';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
    isOn: boolean;
    onToggle: () => void;
}

// springy bounce for the thumb
const bounce = { type: 'spring', stiffness: 700, damping: 30 };

export default function ToggleSwitch({ isOn, onToggle }: ToggleSwitchProps) {
    // 56px total width − 2×8px padding − 20px thumb = 28px travel
    const travel = 56 - 8 - 20;

    return (
        <div className="toggle-switch-container">
            {/* track is now motion.div so we can animate its bg */}
            <motion.div
                className="toggle-switch"
                onClick={onToggle}
                initial={false}
                animate={{
                    backgroundColor: isOn ? '#10B981' /* green when on */ : '#000000' /* gray when off */
                }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="toggle-switch__thumb"
                    initial={false}
                    animate={{ x: isOn ? travel : 0 }}
                    transition={bounce}
                />
            </motion.div>
        </div>
    );
}
