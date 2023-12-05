import { useState, useEffect, useCallback, useRef } from "react";

interface TypewriterProps {
  words: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const [typing, setTyping] = useState<string[]>([""]);
  const [index, setIndex] = useState<number>(0);
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const animateCursor = useRef<HTMLSpanElement>(null);

  const handleClear = () => {
    setLetterIndex(0);
    if (index === words.length - 1) {
      setIndex(0);
      setTyping([""]);
    } else setIndex(index + 1);
    if (animateCursor.current)
      animateCursor.current.classList.remove("animate-cursor");
  };

  const handleTyping = useCallback(() => {
    if (letterIndex < words[index].length) {
      setTimeout(() => {
        if (letterIndex === 0) {
          setTyping(() => [words[index].charAt(letterIndex)]);
        } else {
          setTyping((prevState) => [
            ...prevState,
            words[index].charAt(letterIndex),
          ]);
        }
        setLetterIndex(letterIndex + 1);
      }, 200);
    } else {
      if (animateCursor.current)
        animateCursor.current.classList.add("animate-cursor");
      setTimeout(() => {
        handleClear();
      }, 3000);
    }
  }, [index, letterIndex]);

  useEffect(() => {
    handleTyping();
  }, [handleTyping]);

  return (
    <div className="flex flex-col justify-center px-1 h-20 xs:h-8 md:h-full mb-2 xs:mb-4">
      <h2>
        I am a <span className="text-green-500">{typing}</span>
        <span ref={animateCursor} className="text-green-500">
          |
        </span>
      </h2>
    </div>
  );
};

export default Typewriter;
