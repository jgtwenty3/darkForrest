"use client"

// components/AWaves.tsx
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Noise = require('noisejs').Noise;

interface Mouse {
  x: number;
  y: number;
  lx: number;
  ly: number;
  sx: number;
  sy: number;
  v: number;
  vs: number;
  a: number;
  set: boolean;
}

interface Point {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

const AWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;

    const mouse: Mouse = {
      x: -10,
      y: 0,
      lx: 0,
      ly: 0,
      sx: 0,
      sy: 0,
      v: 0,
      vs: 0,
      a: 0,
      set: false,
    };

    let lines: Point[][] = [];
    const noise = new Noise(Math.random());

    const setSize = () => {
      const bounding = canvas!.getBoundingClientRect();
      canvas!.width = bounding.width * dpr;
      canvas!.height = bounding.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const setLines = () => {
      const { width, height } = canvas!.getBoundingClientRect();
      lines = [];
      const xGap = 10;
      const yGap = 32;
      const oWidth = width + 200;
      const oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;

      for (let i = 0; i <= totalLines; i++) {
        const points: Point[] = [];
        for (let j = 0; j <= totalPoints; j++) {
          const point: Point = {
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          };
          points.push(point);
        }
        lines.push(points);
      }
    };

    const updateMousePosition = (x: number, y: number) => {
      mouse.x = x - canvas!.getBoundingClientRect().left;
      mouse.y = y - canvas!.getBoundingClientRect().top + window.scrollY;

      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }
    };

    const movePoints = (time: number) => {
      lines.forEach((points) => {
        points.forEach((p) => {
          const move = noise.perlin2((p.x + time * 0.0125) * 0.002, (p.y + time * 0.005) * 0.0015) * 12;
          p.wave.x = Math.cos(move) * 32;
          p.wave.y = Math.sin(move) * 16;
          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);
          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
          }
          p.cursor.vx += (0 - p.cursor.x) * 0.005;
          p.cursor.vy += (0 - p.cursor.y) * 0.005;
          p.cursor.vx *= 0.925;
          p.cursor.vy *= 0.925;
          p.cursor.x += p.cursor.vx * 2;
          p.cursor.y += p.cursor.vy * 2;
          p.cursor.x = Math.min(100, Math.max(-100, p.cursor.x));
          p.cursor.y = Math.min(100, Math.max(-100, p.cursor.y));
        });
      });
    };

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.beginPath();
      ctx.strokeStyle = theme === "dark" ? "#ffffff" : "#000000";
      lines.forEach((points) => {
        ctx.moveTo(
          points[0].x + points[0].wave.x + points[0].cursor.x,
          points[0].y + points[0].wave.y + points[0].cursor.y
        );
        points.forEach((p, i) => {
          if (i > 0) {
            ctx.lineTo(p.x + p.wave.x + p.cursor.x, p.y + p.wave.y + p.cursor.y);
          }
        });
      });
      ctx.stroke();
    };

    const tick = (time: number) => {
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);
      canvas!.style.setProperty('--x', `${mouse.sx}px`);
      canvas!.style.setProperty('--y', `${mouse.sy}px`);
      movePoints(time);
      drawLines();
      requestAnimationFrame(tick);
    };

    const onResize = () => {
      setSize();
      setLines();
    };

    const onMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.pageX, e.pageY);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      updateMousePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    canvas!.addEventListener('touchmove', onTouchMove);

    setSize();
    setLines();
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      canvas!.removeEventListener('touchmove', onTouchMove);
    };
  }, [theme]);

  return (
    <div className="a-waves">
      <canvas className="js-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default AWaves;
