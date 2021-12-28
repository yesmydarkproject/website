import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

import standing01a from "../../public/laplus/standing01a.png";

import LaplusLiquidSceneChange, {
  Handler as LaplusLiquidSceneChangeHandler,
} from "./LaplusLiquidSceneChange";
import {
  Container,
  BeholdText,
  YesMyDarkButton,
  ImageOuter,
} from "./TheInitialScreen.styles";

interface Props {
  onAnimationCompleted(): void;
}

const TheInitialScreen = ({ onAnimationCompleted }: Props) => {
  const [animated, setAnimated] = useState(false);
  const [shown, setShown] = useState(true);
  const sceneChangeRef = useRef({} as LaplusLiquidSceneChangeHandler);

  return (
    <>
      {shown && (
        <Container>
          <ImageOuter>
            <Image
              src={standing01a}
              layout="responsive"
              sizes="40vw"
              priority
            />
          </ImageOuter>

          <BeholdText color="#e2dde9">刮目せよ!</BeholdText>
          <YesMyDarkButton
            color="#e2dde9"
            hovered="#4c3494"
            onClick={() => {
              sceneChangeRef.current?.animate();
              setTimeout(() => {
                setShown(false);
                setAnimated(true);
              }, 1200);
            }}
          >
            Yes My Dark !!
          </YesMyDarkButton>
        </Container>
      )}
      <AnimatePresence>
        {animated || (
          <motion.div
            key="change"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => onAnimationCompleted()}
          >
            <LaplusLiquidSceneChange ref={sceneChangeRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TheInitialScreen;
