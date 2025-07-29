const CallToAction = () => (
  <section id="cta" className="py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
        The next chapter of Europe is not written by politicians. It is built by its citizens.
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800 mb-12">
        This is not just another app. It is a proof of concept. A tangible demonstration that our Union can be more than an idea; it can be a living reality we inhabit together, every day. Your email is your signature. Your participation is your vote of confidence in this shared future.
      </p>
      
      {}
      <div className="ml-embedded" data-form="ccLMg8"></div>

      <div className="mt-8">
        {}
        <a href="https://github.com/VerinexEU" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-yellow-500 mx-4">
          View our Constitution on GitHub
        </a>
        
        {}
        <a href="/founding-principles.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline hover:text-yellow-500 mx-4">
          Read our Founding Principles
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;