import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { wrap } from "popmotion";
import "./MediaSlider.scss";

export interface MediaItem {
    id: string | number;
    src: string;
    type: "image" | "video";
    orientation: "horizontal" | "vertical";
}

interface MediaSliderProps {
    items: MediaItem[];
    /** How often (ms) to auto-slide; default 5s */
    autoPlayInterval?: number;
}

const sliderVariants = {
    incoming: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        scale: 1.2,
        opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        scale: 1,
        opacity: 0.2,
    }),
};

const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04] as [number, number, number, number],
};

const MediaSlider: React.FC<MediaSliderProps> = ({
    items,
    autoPlayInterval = 2000,
}) => {
    const [[index, direction], setState] = useState<[number, number]>([0, 0]);
    const currentIndex = wrap(0, items.length, index);

    // keep a ref so the interval callback always has latest paginate
    const paginateRef = useRef<(dir: number) => void>();
    paginateRef.current = (dir) => setState(([prev]) => [prev + dir, dir]);

    // Auto-play effect
    useEffect(() => {
        const play = () => {
            paginateRef.current?.(1);
        };
        const timer = setInterval(play, autoPlayInterval);
        return () => clearInterval(timer);
    }, [autoPlayInterval]);

    const paginate = (newDirection: number) => {
        setState([index + newDirection, newDirection]);
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        const threshold = 50;
        if (info.offset.x > threshold) paginate(-1);
        if (info.offset.x < -threshold) paginate(1);
    };

    const skipTo = (targetIndex: number) => {
        const dir = targetIndex > currentIndex ? 1 : -1;
        setState([targetIndex, dir]);
    };

    return (
        <div className="media-slider">
            <div className={`slider-view ${items[currentIndex].orientation}`}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="exit"
                        transition={sliderTransition}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                        className="slide"
                    >
                        {items[currentIndex].type === "video" ? (
                            <video
                                src={items[currentIndex].src}
                                controls
                                autoPlay
                                muted
                                loop
                                className="media-content"
                            />
                        ) : (
                            <img
                                src={items[currentIndex].src}
                                className="media-content"
                                alt={items[currentIndex].orientation}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="controls">
                <div className="arrow arrow-left" onClick={() => paginate(-1)}>
                    ‹
                </div>
                <div className="arrow arrow-right" onClick={() => paginate(1)}>
                    ›
                </div>
            </div>

            <div className="thumbnails">
                {items.map((item, idx) => (
                    <div
                        key={item.id}
                        className={`thumb ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => skipTo(idx)}
                    >
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                muted
                                autoPlay
                                loop
                                className="thumb-content"
                            />
                        ) : (
                            <img
                                src={item.src}
                                className="thumb-content"
                                alt={item.orientation}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaSlider;
