const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative overflow-hidden">
    {/* Deep saturated European green gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-green-200 to-lime-200"></div>
    
    {/* Rich saturated green pattern overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.25) 0%, rgba(16, 185, 129, 0.1) 50%),
                       radial-gradient(circle at 80% 20%, rgba(132, 204, 22, 0.22) 0%, rgba(34, 197, 94, 0.08) 50%),
                       radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.18) 0%, rgba(132, 204, 22, 0.06) 50%)`
    }}></div>
    
    {/* Large decorative circles in deep sage tones */}
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-300/60 to-green-200/40 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-lime-300/55 to-emerald-300/45 rounded-full blur-3xl"></div>
    
    {/* Geometric background elements in European greens */}
    <div className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-200/50 rounded-full opacity-35"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-sage-100/60 rotate-45 opacity-45 rounded-lg" style={{backgroundColor: 'rgba(134, 154, 130, 0.3)'}}></div>
    <div className="absolute bottom-32 left-20 w-16 h-16 bg-emerald-100/70 opacity-55 rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-lime-300/45 rotate-12 opacity-40 rounded-lg"></div>
    
    {/* Multiple European star patterns */}
    <div className="absolute top-1/4 right-1/4 opacity-15">
      <div className="relative w-24 h-24">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 rounded-full" 
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.6)',
              transform: `rotate(${i * 30}deg) translateY(-12px)`,
              transformOrigin: '50% 12px'
            }}
          ></div>
        ))}
      </div>
    </div>
    
    {/* Scattered individual stars */}
    <div className="absolute top-20 left-1/4 opacity-20">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(34, 197, 94, 0.7)">
        <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"/>
      </svg>
    </div>
    <div className="absolute bottom-1/4 left-1/6 opacity-18">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(132, 204, 22, 0.6)">
        <path d="M7 0L8.6 5.4L14 7L8.6 8.6L7 14L5.4 8.6L0 7L5.4 5.4L7 0Z"/>
      </svg>
    </div>
    <div className="absolute top-1/3 left-3/4 opacity-16">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(16, 185, 129, 0.5)">
        <path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z"/>
      </svg>
    </div>
    <div className="absolute bottom-1/3 right-1/6 opacity-14">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="rgba(34, 197, 94, 0.4)">
        <path d="M9 0L11.1 6.9L18 9L11.1 11.1L9 18L6.9 11.1L0 9L6.9 6.9L9 0Z"/>
      </svg>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-8 drop-shadow-sm leading-tight">
        What does a Union look like?
      </h1>
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
          For too long, it's been a concept discussed in faraway buildings. A market. A set of rules.
        </p>
        <p className="text-xl md:text-2xl text-blue-800 mt-4 leading-relaxed font-medium">
          Let's build what it <em className="text-yellow-600 font-semibold">feels</em> like.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed">
          A single, shared space where our voices, cultures, and ideas connect.
        </p>
      </div>
      <a href="#cta" className="inline-block bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
        Become a Founding Member
      </a>
    </div>
  </section>
);

export default Hero;