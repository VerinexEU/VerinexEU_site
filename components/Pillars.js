const Pillar = ({ title, description, icon }) => (
  <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl text-blue-900" dangerouslySetInnerHTML={{ __html: icon }} />
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 leading-tight">{title}</h3>
    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
  </div>
);

const Pillars = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    {/* Deep saturated European sage green background */}
    <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-emerald-200 to-lime-200"></div>
    
    {/* Deep pattern overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.30) 0%, rgba(16, 185, 129, 0.15) 60%),
                       radial-gradient(circle at 70% 80%, rgba(132, 204, 22, 0.28) 0%, rgba(34, 197, 94, 0.12) 60%)`
    }}></div>
    
    {/* Large decorative elements with deep colors */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-emerald-300/70 to-green-200/50 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-lime-300/60 to-emerald-300/55 rounded-full blur-3xl"></div>
    
    {/* European stars scattered throughout */}
    <div className="absolute top-16 left-12 opacity-18">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(34, 197, 94, 0.6)">
        <path d="M7 0L8.6 5.4L14 7L8.6 8.6L7 14L5.4 8.6L0 7L5.4 5.4L7 0Z"/>
      </svg>
    </div>
    <div className="absolute top-32 right-16 opacity-15">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(16, 185, 129, 0.5)">
        <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"/>
      </svg>
    </div>
    <div className="absolute bottom-24 left-20 opacity-16">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(132, 204, 22, 0.7)">
        <path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z"/>
      </svg>
    </div>
    <div className="absolute bottom-40 right-24 opacity-14">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="rgba(34, 197, 94, 0.4)">
        <path d="M9 0L11.1 6.9L18 9L11.1 11.1L9 18L6.9 11.1L0 9L6.9 6.9L9 0Z"/>
      </svg>
    </div>
    <div className="absolute top-1/2 left-8 opacity-12">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="rgba(16, 185, 129, 0.6)">
        <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"/>
      </svg>
    </div>
    <div className="absolute top-1/3 right-8 opacity-17">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="rgba(132, 204, 22, 0.5)">
        <path d="M7.5 0L9.2 5.8L15 7.5L9.2 9.2L7.5 15L5.8 9.2L0 7.5L5.8 5.8L7.5 0Z"/>
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">Our Foundation</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Built on European values, powered by collective vision</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
        <Pillar 
          title="One Code, Many Voices" 
          description="Our source code is our constitution: public, transparent, and belonging to all. Developers from every nation are invited to contribute, strengthen, and own it." 
          icon="&lt;svg viewBox='0 0 64 64' fill='currentColor' class='w-10 h-10'&gt;&lt;path d='M32 2L8 14v36l24 12 24-12V14L32 2zm0 4.8L50.4 16 32 25.2 13.6 16 32 6.8zM12 19.2l18 9v21.6l-18-9V19.2zm20 30.6V28.2l18-9v21.6l-18 9z'/&gt;&lt;/svg&gt;"
        />
        <Pillar 
          title="Our Digital Soil" 
          description="Hosted exclusively within the Union, operated by European companies, and governed by our laws. Our collective data is a strategic asset. We will defend it as our territory." 
          icon="&lt;svg viewBox='0 0 64 64' fill='currentColor' class='w-10 h-10'&gt;&lt;path d='M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 4c11.1 0 20 8.9 20 20s-8.9 20-20 20-20-8.9-20-20 8.9-20 20-20z'/&gt;&lt;path d='M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 4c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z'/&gt;&lt;/svg&gt;"
        />
        <Pillar 
          title="United in Diversity" 
          description="A platform engineered to build bridges, not bubbles. We celebrate our languages, our cultures, and our creativity without divisive algorithms. This is where you discover what unites us." 
          icon="&lt;svg viewBox='0 0 64 64' fill='currentColor' class='w-10 h-10'&gt;&lt;circle cx='20' cy='20' r='8'/&gt;&lt;circle cx='44' cy='20' r='8'/&gt;&lt;circle cx='32' cy='44' r='8'/&gt;&lt;path d='M20 28c-2.2 0-4 1.8-4 4v8h8v-8c0-2.2-1.8-4-4-4zM44 28c-2.2 0-4 1.8-4 4v8h8v-8c0-2.2-1.8-4-4-4zM32 52c-2.2 0-4 1.8-4 4v4h8v-4c0-2.2-1.8-4-4-4z'/&gt;&lt;/svg&gt;"
        />
      </div>
    </div>
  </section>
);

export default Pillars;