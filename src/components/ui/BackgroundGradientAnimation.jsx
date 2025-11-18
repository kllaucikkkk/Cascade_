import React, { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  // ref do warstwy, która podąża za myszą
  const interactiveRef = useRef(null);

  // zamiast useState do animacji – trzymamy wartości w refach,
  // dzięki temu nie wywołujemy renderów przy każdym kroku animacji
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);

  // ustawienie CSS variables na body – to było ok
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // animacja ruchu – w pętli requestAnimationFrame, bez setState
  useEffect(() => {
    if (!interactive) return; // jeśli nieinteraktywne, nie odpalaj pętli

    let frameId;

    const animate = () => {
      const el = interactiveRef.current;
      if (el) {
        const curX = curXRef.current;
        const curY = curYRef.current;
        const tgX = tgXRef.current;
        const tgY = tgYRef.current;

        // prosty easing
        curXRef.current = curX + (tgX - curX) / 20;
        curYRef.current = curY + (tgY - curY) / 20;

        el.style.transform = `translate(${Math.round(
          curXRef.current
        )}px, ${Math.round(curYRef.current)}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [interactive]);

  // aktualizacja targetu na ruch myszy
  const handleMouseMove = (event) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  // Safari detection jak było
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={containerClassName}
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      {/* Definicja filtra blur (używana poniżej) */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Gradient – tło, warstwa 1 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: isSafari ? "blur(50px)" : "url(#blurMe) blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            background: `radial-gradient(circle at center, rgb(var(--first-color)) 0, rgb(var(--first-color)) 50%)`,
            mixBlendMode: blendingValue,
            transform: "translate(-50%, -50%)",
            transformOrigin: "center center",
            animation: "moveVertical 30s ease infinite",
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            background: `radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0, rgba(var(--second-color), 0) 50%)`,
            mixBlendMode: blendingValue,
            transform: "translate(-50%, -50%)",
            transformOrigin: "calc(50% - 400px)",
            animation: "moveInCircle 20s reverse infinite",
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            background: `radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0, rgba(var(--third-color), 0) 50%)`,
            mixBlendMode: blendingValue,
            transform: "translate(-50%, -50%)",
            transformOrigin: "calc(50% + 400px)",
            animation: "moveInCircle 40s linear infinite",
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            background: `radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0, rgba(var(--fourth-color), 0) 50%)`,
            mixBlendMode: blendingValue,
            transform: "translate(-50%, -50%)",
            transformOrigin: "calc(50% - 200px)",
            animation: "moveHorizontal 40s ease infinite",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            background: `radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0, rgba(var(--fifth-color), 0) 50%)`,
            mixBlendMode: blendingValue,
            transform: "translate(-50%, -50%)",
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
            animation: "moveInCircle 20s ease infinite",
            opacity: 1,
          }}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
              background: `radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0, rgba(var(--pointer-color), 0) 50%)`,
              mixBlendMode: blendingValue,
              opacity: 0.7,
            }}
          />
        )}
      </div>

      {/* Treść – warstwa 2 */}
      <div
        className={className}
        style={{ position: "relative", zIndex: 2, height: "100%" }}
      >
        {children}
      </div>
    </div>
  );
};
