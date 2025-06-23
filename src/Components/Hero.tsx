const brandLogos = [
  "/assets/images/client-databiz.svg",
  "/assets/images/client-audiophile.svg",
  "/assets/images/client-meet.svg",
  "/assets/images/client-maker.svg",
];


const HeroSection = () => {
  return (
    <section className="bg-white py-4 md:py-16 md:px-12 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 justify-between md:px-12 lg:px-45">
        {/* Left Content */}
        <div className="md:w-1/2 gap-10 flex flex-col items-center md:items-start text-center md:text-left md:p-4">
          <h1 className="hidden md:block text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-none">
            Make <br /> Remote Work
          </h1>
          <h1 className="md:hidden block text-4xl md:text-5xl font-bold text-gray-800 leading-none justify-center ">
            Make remote Work
          </h1>

          <p className="text-gray-600 md:text-gray-400 text-xl px-4 md:px-0 w-full max-w-md">
           Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. 
          </p>
          <button className="border-2 bg-black text-white px-5 py-2 rounded-xl hover:bg-white hover:text-black  cursor-pointer">
            Learn More
          </button>

          {/* Brand Logos */}
          <div className="mt-10 md:mt-40 flex justify-center gap-6 md:gap-10 flex-wrap">
            {brandLogos.map((logo, i) => (
                <img
                key={i}
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-5 md:h-6 md:w-auto object-contain grayscale hover:grayscale-0 transition"
                />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className=" ">
        {/* Mobile Image */}
        <img
            src="/assets/images/image-hero-mobile.png"
            alt="Hero Mobile"
            className="block md:hidden w-full mx-auto object-cover"
        />

        {/* Desktop Image */}
        <img
            src="/assets/images/image-hero-desktop.png"
            alt="Hero Desktop"
            className="hidden md:block w-full max-w-md lg:max-w-lg mx-auto object-cover"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
