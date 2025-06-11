const whoWeAreData = {
  title: "Who We Are",
  heading:
    "We are a team of curious minds and sharp problem-solvers who believe IT should do more than support - It should lead.",
  slogan: "If it's tech, we don't just do it - We do it better.",
  details_about_us:
    "At Nexocrat, we transform bold ideas into impactful digital solutions. Headquartered at the intersection of innovation and technology-with global development teams including a strong presence in India — We specialize in bridging the gap between your business vision and real-world execution. Whether you're a disruptive startup or an established enterprise, Nexocrat delivers custom strategies aligned to your unique goals. Our service offerings include custom software development, CRM implementation, quality assurance, DevOps, and product branding, all designed to scale seamlessly with your growth. ",
  more_details_about_us:
    "From concept to launch, we are your dedicated technology partner-committed to precision, agility, and innovation. Our team of expert developers, strategists, and designers work collaboratively to build reselient, calable solutions that empower your business in the digital age. <b>Let Nexocrat be the driving force behind your next big leap.</b>",
  what_we_do: `At <strong class="text-blue-600">Nexocrat</strong>, we are more than just an IT company — we are a team of passionate technologists, creative thinkers, and strategic problem-solvers. Driven by innovation and guided by purpose, we deliver next-generation digital solutions that help businesses thrive in a connected world.`,
  what_defines_us: [
    {
      title: "Innovation-First",
      content:
        "We challenge norms and constantly explore emerging tech to unlock smarter, faster solutions.",
    },
    {
      title: "Client-Centric",
      content:
        "Your success is our mission. We collaborate closely to understand your vision and bring it to life.",
    },
    {
      title: "Integrity & Transparency",
      content:
        "We believe in honest communication, ethical practices, and delivering what we promise.",
    },
    {
      title: "Agile Execution",
      content:
        "From planning to deployment, we move fast, stay flexible, and keep quality at the core.",
    },
  ],
};

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 pt-4 md:pt-12">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Column */}
          <div className="text-center md:w-1/2 w-full">
            <div className="text-gray-800 font-semibold ">
              <span className="text-base text-indigo-600 uppercase ">
                {whoWeAreData.title}
              </span>
              <h2 className="text-xl md:text-2xl mt-2">
                {whoWeAreData.heading}
              </h2>
              <div className="text-xl md:text-3xl text-gray-800 mt-4">
                {whoWeAreData.slogan}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 w-full md:border-l border-gray-300 md:pl-10 md:ml-10">
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>{whoWeAreData.details_about_us}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: whoWeAreData.more_details_about_us,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-20 px-4 md:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <p
              className="text-lg text-gray-600 mb-6 md:mb-10"
              dangerouslySetInnerHTML={{ __html: whoWeAreData.what_we_do }}
            ></p>
          </div>
          <div className="max-w-6xl mx-auto grid gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 px-4 text-center">
            {whoWeAreData.what_defines_us.map((whatDefinesUs, i) => (
              <div
                key={i}
                className="p-3 md:p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {whatDefinesUs.title}
                </h3>
                <p className="text-sm text-gray-600">{whatDefinesUs.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
