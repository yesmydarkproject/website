import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, { shouldForwardProp: isValidMotionProp });

export default ChakraBox;
