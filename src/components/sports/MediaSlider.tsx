// MediaSlider.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { wrap } from "popmotion";
import "./MediaSlider.scss";

export interface MediaItem {
    id: string | number;
    src: string;
    type: "image" | "video";
    orientation: "horizontal" | "vertical";
    caption?: string; // optional
}

interface MediaSliderProps {
    items: MediaItem[];
    autoPlayInterval?: number;
}

const sliderVariants = {
    incoming: (d: number) => ({
        x: d > 0 ? "100%" : "-100%",
        scale: 1.2,
        opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", scale: 1, opacity: 0.2 }),
};

const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04] as [number, number, number, number],
};

const MediaSlider: React.FC<MediaSliderProps> = ({
    items,
}) => {
    const [[index, direction], setState] = useState<[number, number]>([0, 0]);
    const currentIndex = wrap(0, items.length, index);
    const constraintsRef = useRef<HTMLDivElement>(null);
    // keep paginate in a ref so the interval callback sees the latest setter
    const paginateRef = useRef<(dir: number) => void>();
    paginateRef.current = dir => setState(([prev]) => [prev + dir, dir]);

    const paginate = (dir: number) => setState([index + dir, dir]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) paginate(-1);
        if (info.offset.x < -threshold) paginate(1);
    };

    const skipTo = (target: number) => {
        const dir = target > currentIndex ? 1 : -1;
        setState([target, dir]);
    };

    return (
        <div className="media-slider">
            <div className="slider-view" ref={constraintsRef}>
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
                        dragMomentum={false}
                        dragPropagation={false}
                        onDragEnd={handleDragEnd}
                        className="slide"
                    >
                        {items[currentIndex].type === "video" ? (
                            <video
                                src={items[currentIndex].src}
                                className={`media-content ${items[currentIndex].orientation}`}
                                controls
                                autoPlay
                                muted
                                loop
                                preload="metadata"
                            />
                        ) : (
                            <img
                                src={items[currentIndex].src}
                                className={`media-content ${items[currentIndex].orientation}`}
                                alt=""
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="controls">
                <div className="arrow" onClick={() => paginate(-1)}>‹</div>
                <div className="arrow" onClick={() => paginate(1)}>›</div>
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
                                alt=""
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaSlider;
