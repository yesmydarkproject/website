import styled from "@emotion/styled";

export const BackgroundedTextContainer = styled.div<{
  transparentFrom: number;
}>`
  background-color: rgb(46 16 101 / 0.45); // bg-violet-950/45
  transition: background-color 0.2s ease-in-out;
  @media (min-width: ${(props) => props.transparentFrom}px) {
    background-color: transparent;
  }
`;

export const Section1TextContainer = styled(BackgroundedTextContainer)`
  @media (min-width: 768px) and (max-width: 1330px) {
    transform: translateY(-120px);
  }
`;

export const Section2Container = styled.div`
  background-image: linear-gradient(
    225deg,
    hsl(255deg 63% 20%) 0%,
    hsl(255deg 64% 25%) 34%,
    hsl(255deg 66% 30%) 57%,
    hsl(254deg 67% 34%) 73%,
    hsl(254deg 68% 39%) 84%,
    hsl(253deg 68% 44%) 92%,
    hsl(253deg 70% 48%) 97%,
    hsl(253deg 71% 53%) 100%
  );
`;
