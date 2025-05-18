export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <p className="text-sm sm:text-base tracking-widest text-[rgb(183,171,152)] uppercase mb-6">
        Minh Pham
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold leading-[0.9] tracking-tight">
        <span className="block text-[rgb(183,171,152)]">MAKING</span>
        <span className="block text-[rgb(235,89,57)]">GOOD</span>
        <span className="block text-[rgb(235,89,57)]">SHIT</span>
        <span className="block text-[rgb(183,171,152)]">SINCE</span>
        <span className="block text-[rgb(183,171,152)]">2009</span>
      </h1>
    </div>
  )
}
