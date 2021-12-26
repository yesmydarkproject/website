import styled from "@emotion/styled";
import gsap from "gsap";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Container = styled.div`
  /* top: 0;
  left: 0; */
`;

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

class Circle {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public fill: string,
    public ctx: CanvasRenderingContext2D | null
  ) {}

  draw() {
    if (!this.ctx) return;

    const { x, y, radius, fill, ctx } = this;
    ctx.save();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.restore();
  }
}

export interface Handler {
  animate(): void;
}

const LaplusLiquidSceneChange = forwardRef<Handler>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tl = useRef<gsap.core.Tween>();
  const [started, setStarted] = useState(false);

  useImperativeHandle(ref, () => ({
    animate() {
      if (!canvasRef.current) return;

      setStarted(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let completed = false;

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      resize();
      window.addEventListener("resize", resize);

      const circle = new Circle(
        canvas.width / 2,
        canvas.height,
        0,
        "#281b4d",
        ctx
      );

      const rAF = window.requestAnimationFrame; /* ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          // IE Fallback
          function (callback) {
            window.setTimeout(callback, 20);
          }; */
      function animate() {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = "source-over";
          circle.draw();
        }
        if (!completed) rAF(animate);
      }
      rAF(animate);

      tl.current = gsap.to(circle, {
        duration: 1.2,
        radius: Math.max(canvas.width, canvas.height),
        ease: "cubic.out",
        onComplete: () => {
          completed = true;
        },
      });
      tl.current.play();
    },
  }));

  return (
    <Container style={{ display: started ? "block" : "none" }}>
      <Canvas ref={canvasRef} />
    </Container>
  );
});

export default LaplusLiquidSceneChange;
