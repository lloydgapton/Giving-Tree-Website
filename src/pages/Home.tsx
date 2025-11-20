const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Tree */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              The Digital Giving Tree
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Connecting B2B Donors with Local Charities
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A dynamic digital donation platform designed to connect donors and verified 
              grassroots charities. Built for transparency, scalability, and storytelling.
            </p>
          </div>

          {/* Tree Image */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-2xl">
              <img 
                src="/images/tree.svg" 
                alt="Giving Tree" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Donate Now
            </button>
            <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-4 px-8 rounded-lg shadow-lg border-2 border-green-600 transition duration-300 transform hover:scale-105">
              Register Your Charity
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 shadow-md">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Verified Charities
              </h3>
              <p className="text-gray-600">
                All charities are thoroughly vetted and verified to ensure your donations 
                reach legitimate grassroots organizations.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 shadow-md">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Direct Impact
              </h3>
              <p className="text-gray-600">
                See exactly where your donation goes and track the real-world impact 
                of your contribution to local communities.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 shadow-md">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Built on transparency and storytelling, every donation comes with 
                complete visibility into how funds are utilized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We believe in the power of local action and community support. Our platform 
            bridges the gap between businesses looking to make a difference and grassroots 
            charities working tirelessly to improve their communities. Together, we can 
            create lasting change, one donation at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
