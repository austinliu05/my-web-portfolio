// components/ScrollProgressBar.tsx
import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll()

  // 1) Smooth the raw 0→1 value with a spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  })

  // 2) (Optional) map progress → color stops
  //    here we go from red → orange → cyan as you scroll
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#ff4e50', '#ffa500', '#00bcd4']
  )

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        background,
      }}
    />
  )
}

export default ScrollProgressBar
