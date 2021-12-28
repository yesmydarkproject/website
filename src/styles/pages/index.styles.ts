import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { RgbaColor } from "shared/libs/color";
import { getShadowString } from "styles/longShadow";

export const AboveTheFoldContainer = styled.div`
  position: relative;
  background: #351b3e;
  height: 45.57vw;
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(173deg, #4c3494 0%, #4c3b59 80%, #e2dde9 100%);
  background-size: 150% 150%;
  animation: ${backgroundAnimation} 26s ease infinite;
  color: white;
`;

export const ImageStandingOuter = styled.div`
  position: absolute;
  width: 75.78vw;
  height: 123.59vw;
  left: 38.49vw;
  top: -16.09vw;
  user-select: none;
`;

export const BlackBar1 = styled.div`
  background: #0e0e0e;
  position: absolute;
  height: 45.57vw;
  width: 100%;
  margin: 0;
  top: 0px;
  left: 0px;
  clip-path: polygon(0% 0%, 14.5% 0%, 100% 39.4%, 100% 55.6%, 0% 24.1%);
`;

export const BlackBar2 = styled.div`
  background: #0e0e0e;
  position: absolute;
  height: 45.57vw;
  width: 100%;
  margin: 0;
  top: 0px;
  left: 0px;
  clip-path: polygon(86.9% 0%, 96% 0%, 100.7% 100%, 86.2% 100%);
`;

const textCommonStyles = `
  position: absolute;
  margin: 0;
  color: #fafafa;
  font-family: "Noto Sans CJK JP";
  font-weight: 900;
  line-height: 100%;
  white-space: nowrap;
`;

export const TextLaplusTitle = styled.p`
  ${textCommonStyles}
  font-size: 5.5vw;
  top: 7.55vw;
  left: 7.55vw;
  // prettier-ignore
  transform: matrix3d(1, 0.16, 0, 0.0002, -0.15, 0.9, 0, -0.0004, 0, 0, 1, 0, 0, 0, 0, 1);
`;

export const TextLaplusTitleLeader = styled.span`
  font-size: 220%;
  color: #e8004e;
`;

export const TextLaplusNameOuter = styled.p`
  ${textCommonStyles}
  font-size: 4.4vw;
  bottom: 2.2vw;
  right: 3vw;
  text-align: right;
  // prettier-ignore
  transform: matrix3d(0.8, -0.05, 0, -0.0002, 0, 1, 0, -0.0005, 0, 0, 1, 0, 0, 0, 0, 1);
  text-shadow: rgba(10, 10, 10, 0.4) 0px 0px 4px,
    ${getShadowString(
      new RgbaColor(10, 10, 10, 0.018),
      new RgbaColor(0, 0, 0, 0),
      150,
      1,
      0.4
    )};
`;

export const TextLaplusNameLine1 = styled.span`
  display: block;
  padding-right: 1rem;
`;

export const TextLaplusNameLine2 = styled.span`
  display: block;
  font-size: 230%;
  line-height: 91%;
`;

export const TextWebsiteTitleOuter = styled.p`
  ${textCommonStyles}
  font-size: 2.6vw;
  line-height: 110%;
  top: 5.45vw;
  left: 7.55vw;
  // prettier-ignore
  transform: matrix3d(1, 0.172, 0, 0.0002, -0.15, 0.9, 0, -0.0004, 0, 0, 1, 0, 0, 0, 0, 1);
  z-index: 100;
`;

export const TextWebsiteTitleLine1 = styled.span`
  display: block;
`;
export const TextWebsiteTitleLine2 = styled.span`
  display: block;
  font-size: 200%;
  line-height: 100%;
  padding-left: 8vw;
`;

export const TextWebsiteTitleLine2Red = styled.span`
  font-size: 150%;
  line-height: 110%;
  color: #e8004e;
`;

export const BlackBarBehindMenu = styled.div`
  background: rgb(14 14 14 / 95%);
  position: absolute;
  height: 45.57vw;
  width: 100%;
  margin: 0;
  top: 0px;
  left: 0px;
  clip-path: polygon(0% 75%, 100% 56%, 100% 100%, 0% 100%);
`;
