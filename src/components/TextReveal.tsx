import React from 'react';
import { motion, Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  delay?: number;
  shining?: boolean;
  shiningVariant?: 'gold' | 'dark' | 'white';
  staggerChildren?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export default function TextReveal({
  text,
  className = '',
  as = 'h2',
  delay = 0,
  shining = false,
  shiningVariant = 'gold',
  staggerChildren = 0.04,
  highlightWords = [],
  highlightClass = 'gold-shining-text'
}: TextRevealProps) {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay + i * 0.05,
      },
    }),
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -30,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100,
      },
    },
  };

  const getShiningClass = () => {
    if (!shining) return '';
    if (shiningVariant === 'gold') return 'gold-shining-text';
    if (shiningVariant === 'white') return 'white-shining-text';
    return 'shining-text';
  };

  const innerContent = words.map((word, idx) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
    const isHighlighted = highlightWords.some(
      (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
    );

    return (
      <motion.span
        key={idx}
        variants={wordVariants}
        className={`inline-block origin-bottom transition-all ${
          isHighlighted ? highlightClass : ''
        }`}
      >
        {word}
      </motion.span>
    );
  });

  const fullClassName = `inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className} ${getShiningClass()}`;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={fullClassName}
    >
      {innerContent}
    </motion.div>
  );
}
