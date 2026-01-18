export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#0a0a0a]">
      {/* Drifting Gradients */}
      <div className="absolute top-[-20%] left-[-10%] size-150 bg-primary/10 rounded-full blur-[120px] animate-drift" />
      <div
        className="absolute bottom-[-20%] right-[-10%] size-125 bg-black/10 rounded-full blur-[100px] animate-drift"
        style={{ animationDelay: "-5s" }}
      />

      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
};
