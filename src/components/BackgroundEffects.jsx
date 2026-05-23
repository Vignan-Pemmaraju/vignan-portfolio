export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* Gradient Glow 1 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* Gradient Glow 2 */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  )
}