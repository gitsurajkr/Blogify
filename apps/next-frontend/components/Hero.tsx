export const Hero = () => {
  return (
    <section
      className="pb-30 relative bg-black border-b-8 border-green-400 shadow-2xl min-h-screen flex items-center justify-center overflow-hidden"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Clean Pixel Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-24 grid-rows-16 h-full w-full">
          {Array.from({ length: 384 }).map((_, i) => (
            <div
              key={i}
              className="border border-green-500 opacity-50"
            ></div>
          ))}
        </div>
      </div>

      {/* Static Geometric Patterns */}
      <div className="absolute inset-0">
        {/* Corner decorative blocks */}
        <div className="absolute top-8 left-8 w-16 h-16 border-4 border-green-400 bg-green-900 opacity-40"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-4 border-green-400 bg-green-900 opacity-40"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-green-400 bg-green-900 opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-green-400 bg-green-900 opacity-40"></div>

        {/* Decorative pixel strips */}
        <div className="absolute top-1/4 left-0 right-0 h-2 bg-green-500 opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-green-500 opacity-30"></div>
        <div className="absolute top-0 bottom-0 left-1/4 w-2 bg-green-500 opacity-30"></div>
        <div className="absolute top-0 bottom-0 right-1/4 w-2 bg-green-500 opacity-30"></div>

        {/* Static pixel art elements */}
        {/* <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-8 gap-1">
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
          </div>
        </div> */}

        {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-8 gap-1">
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
            <div className="w-3 h-3 bg-green-300"></div>
            <div className="w-3 h-3 bg-green-400"></div>
          </div>
        </div> */}
      </div>

      {/* Subtle Static Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="text-center max-w-7xl mx-auto">

          {/* Enhanced Main Title */}
          <div className=" relative">
            {/* Enhanced Mission Statement Box */}
            <div className="bg-gray-900 border-8 border-green-400 p-8 sm:p-10 lg:p-12 max-w-6xl mx-auto shadow-2xl relative group hover:border-cyan-400 transition-all duration-300">
              {/* Enhanced Corner decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 group-hover:bg-cyan-400 transition-colors duration-300"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 group-hover:bg-cyan-400 transition-colors duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 group-hover:bg-pink-400 transition-colors duration-300"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 group-hover:bg-pink-400 transition-colors duration-300"></div>

              {/* Mid-side decorations */}
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-green-500 transform -translate-y-1/2 group-hover:bg-green-300 transition-colors duration-300"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-green-500 transform -translate-y-1/2 group-hover:bg-green-300 transition-colors duration-300"></div>

              <div className="border-4 border-green-600 bg-black p-6 sm:p-8 relative overflow-hidden group-hover:border-green-300 transition-all duration-300">
                {/* Inner scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <p className="text-green-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-bold mb-8 relative z-10 group-hover:text-green-100 transition-colors duration-300" style={{
                  fontFamily: 'monospace',
                  letterSpacing: '0.2em',
                  textShadow: '3px 3px 0px #000, 1px 1px 0px #22c55e',
                  fontWeight: '900'
                }}>
                  ENTER THE DIGITAL DIMENSION
                </p>

                <div className="border-t-4 border-green-600 pt-8 group-hover:border-green-400 transition-colors duration-300">
                  <p className="text-green-200 font-mono text-base sm:text-lg md:text-xl relative z-10 group-hover:text-green-100 transition-colors duration-300">
                    🗺️ Explore legendary dev quests • Master ancient coding arts
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-20 relative">
          </div>
          {/* Enhanced Bottom Decoration */}
          <div className="mt-20 flex justify-center items-center relative">
            <div className="bg-gray-900 border-4 border-green-500 px-8 py-4 shadow-2xl relative">
              {/* Corner pixels */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400"></div>

              <div className="flex items-center gap-6 text-green-400 font-mono">
                <div className="w-24 h-3 bg-green-400"></div>
                <span className="text-base sm:text-lg font-bold bg-black border-2 border-green-400 px-4 py-2">⚡ LEVEL UP YOUR CODING JOURNEY ⚡</span>
                <div className="w-24 h-3 bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
