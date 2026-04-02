/** CSS-driven drift (compositor-friendly) instead of Framer on every frame */
export default function StarfieldBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
      <div
        className="starfield-layer-a absolute -inset-[200px]"
        aria-hidden
      />
      <div
        className="starfield-layer-b absolute -inset-[200px]"
        aria-hidden
      />
    </div>
  );
}
