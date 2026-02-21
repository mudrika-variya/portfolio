'use client';
import { useState, useEffect } from 'react';

type AnimatedTypingProps = {
  text: string;
  className?: string;
};

export default function AnimatedTyping({ text, className }: AnimatedTypingProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Keep cursor blinking
        setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
      }
    }, 70); 

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <h1 className={className}>
      {displayedText}
      {showCursor && <span className="ml-2 inline-block h-[0.9em] w-1 bg-primary align-text-bottom"></span>}
    </h1>
  );
}
