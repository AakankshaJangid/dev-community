import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const quoteLine1 = "YoUr sKillS & EXpeRieNceS aRe UniQUe,";
  const quoteLine2 = "let yOUr RESUME reFLect that";
  const speed = 120;

  useEffect(() => {
    let currentText = '';
    let i = 0;

    const typeText = () => {
      if (i < quoteLine1.length + quoteLine2.length) {
        if (i < quoteLine1.length) {
          currentText += quoteLine1.charAt(i);
        } else {
          currentText += quoteLine2.charAt(i - quoteLine1.length);
        }

        setText(currentText);
        i++;
        setTimeout(typeText, speed);
      } else {
        setShowCursor(!showCursor);
      }
    };

    typeText();
  }, [showCursor]);

  return (
    <div className="text-xl font-semibold text-center">
      <p>{text}{showCursor && <span className="animate-blink">|</span>}</p>
    </div>
  );
};

export default Resume;
