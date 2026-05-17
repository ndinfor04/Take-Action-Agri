
export default function TakeActionNGOWebsite() {
  const programs = [
    {
      title: 'Sustainable Agriculture',
      description:
        'Training farmers on climate-smart agriculture, organic farming, and modern techniques that increase food production while protecting the environment.',
    },
    {
      title: 'Environmental Protection',
      description:
        'Tree planting campaigns, waste management education, and community clean-up activities to protect ecosystems and reduce pollution.',
    },
    {
      title: 'Youth & Women Empowerment',
      description:
        'Supporting women and young people through vocational training, agricultural support, and entrepreneurship opportunities.',
    },
    {
      title: 'Organic Farming Promotion',
      description:
        'Promoting organic farming practices that improve soil health, reduce chemical pollution, protect biodiversity, and create a healthier environment for future generations.',
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <header className="bg-green-800 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="NGO Logo"
              className="w-16 h-16 rounded-full bg-white p-1"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Take Action Agr & Environmental Protection
              </h1>
              <p className="text-sm text-green-100">
                Building sustainable communities through agriculture and environmental care.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Protecting Nature. Empowering Communities.
          </h2>
          <p className="text-lg max-w-3xl">
            Supporting sustainable agriculture, organic farming, environmental protection,
            and local communities across Cameroon.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to improving livelihoods through sustainable agricultural
            practices, organic farming promotion, and environmental protection initiatives.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-10 text-center">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-700">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
            Annual Impact Report
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Agricultural Training
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>✅ 1,500+ farmers trained</li>
                <li>✅ Organic farming workshops</li>
                <li>✅ Climate-smart agriculture support</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Community Support
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>✅ Farming tools and seeds distribution</li>
                <li>✅ Material support to local communities</li>
                <li>✅ Environmental awareness campaigns</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Financial Assistance
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>✅ Small grants for farmers</li>
                <li>✅ Youth entrepreneurship support</li>
                <li>✅ Emergency community assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Contact Us
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            📍 Douala, Cameroon
          </p>

          <p className="text-lg text-gray-700 mb-4">
            📧 tackeaction@gmail.com
          </p>

          <p className="text-lg text-gray-700">
            📞 +237 672 390 843
          </p>
        </div>
      </section>
    </div>
  );
}
