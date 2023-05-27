import styled from "@emotion/styled";
import { motion } from "framer-motion";

const MotionedSvgParent = motion(styled.svg`
  height: auto;
  width: min(20vw, 20vh);
`);

const TheLaplusCross = () => {
  return (
    <MotionedSvgParent
      viewBox="0 0 200 200"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0,
        ease: [0.7, 0.15, 0.3, 0.85],
      }}
    >
      <path
        id="rect234"
        d="m100 0.0035354c-0.009589 105 5.0025 99.999-99.996 99.996 86.019-13.978 86.233-13.644 99.996-99.996z"
        fill="#fced76"
        strokeWidth=".39998"
      />
      <use transform="rotate(90,100,100)" xlinkHref="#rect234" />
      <use transform="rotate(-90,100,100)" xlinkHref="#rect234" />
      <use transform="rotate(180,100,100)" xlinkHref="#rect234" />
    </MotionedSvgParent>
  );
};

export default TheLaplusCross;
