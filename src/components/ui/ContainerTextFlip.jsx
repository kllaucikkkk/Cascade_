'use client';

import React, { useState, useEffect, useId } from 'react';
import { motion } from 'motion/react';

export function ContainerTextFlip({
  words = ['pieniędzmi', 'budżetem', 'oszczędnościami'],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  // Zamiast splitować elementy, renderuj string + kropkę:
  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={`relative inline-block flip-container ${className || ''}`}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut',
        }}
        className={`inline-block ${textClassName || ''}`}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block flip-word-inner">
          {/* Animuje litery */}
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: index * 0.02,
              }}
              className="flip-letter"
            >
              {letter}
            </motion.span>
          ))}
          {/* Lekka kropka doklejana zawsze po słowie */}
          <span className="word light flip-dot">.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
