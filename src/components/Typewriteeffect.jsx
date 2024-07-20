import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';
import { useSelector } from "react-redux";

const Typewriteeffect = ({ text }) => {
  const data = useSelector((state) => state.data.value);
  // Regular expression to match LaTeX formulas enclosed in $$ ... $$
  const formulaRegex = /\$\$(.*?)\$\$/g;

  const segments = [];
  let lastIndex = 0;
  let match;

  useEffect(()=>{
    
    
  },[data])
  while ((match = formulaRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    segments.push({ type: 'formula', content: match[1] });
    lastIndex = formulaRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.substring(lastIndex) });
  }

  let typingSpeed = 50;
  const TypewriterText = ({ text,   }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [index, setIndex] = useState(0);
    
    
    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[index]);
          setIndex(prev => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timer);
      }
    }, [index, text, typingSpeed]);

  
  

    return <Typography variant="body1">{displayedText}</Typography>;
  };

  return (
    <Box sx={{ display: "grid", justifyContent:"start"}}>
      {segments.map((segment, index) => (
        <Box key={index} mt={2}>
          {segment.type === 'text' ? (
            <TypewriterText text={segment.content} typingSpeed={typingSpeed}  />
          ) : (
           
              <BlockMath
                style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}
              >
                {segment.content}
              </BlockMath>
            
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Typewriteeffect;
