const Manifesto = () => (
  <section className="bg-blue-900 text-white py-24 px-6 relative overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 border border-blue-300 rounded-full"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-yellow-400 opacity-20 rotate-45"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 border-2 border-blue-400 opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 opacity-25 rounded-full"></div>
    </div>
    
    {/* European map outline suggestion */}
    <div className="absolute top-1/2 right-10 opacity-5 transform -translate-y-1/2">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
        <path d="M20 40C25 35 35 30 45 35C50 30 60 32 65 35C70 40 75 45 80 40C85 42 90 45 95 50C90 55 85 60 80 65C75 70 70 75 65 70C60 75 55 70 50 75C45 80 40 75 35 70C30 65 25 60 20 55V40Z"/>
      </svg>
    </div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
        More than a market.<br/>A community.
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
          We are 450 million citizens. We share a continent, a complex history, and a foundational belief in human dignity.
        </p>
        
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
          Yet our digital lives are spent in foreign lands, governed by foreign rules. We are divided into algorithmic tribes, our attention a commodity to be bought and sold.
        </p>
        
        <div className="bg-gradient-to-r from-blue-800/70 to-blue-700/70 p-8 rounded-2xl border-l-4 border-yellow-400 my-12">
          <p className="text-2xl md:text-3xl text-yellow-100 font-semibold leading-relaxed">
            This project is an answer. A living experiment.
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
          Can we, the people of this Union, build our own digital commons? A platform that truly reflects our founding principles: <span className="text-yellow-300 font-medium">diverse, democratic, creative,</span> and <span className="text-yellow-300 font-medium">fiercely protective of the individual</span>.
        </p>
      </div>
    </div>
  </section>
);

export default Manifesto;