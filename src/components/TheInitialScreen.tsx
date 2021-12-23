import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Container,
  BeholdText,
  YesMyDarkButton,
} from "./TheInitialScreen.styles";

const TheInitialScreen = () => {
  const [shown, setShown] = useState(true);

  return (
    <>
      <AnimatePresence>
        {shown && (
          <motion.div
            key="screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container>
              <BeholdText color="#e2dde9">刮目せよ!</BeholdText>
              <YesMyDarkButton
                color="#e2dde9"
                hovered="#4c3494"
                onClick={() => setShown(false)}
              >
                Yes My Dark !!
              </YesMyDarkButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TheInitialScreen;
