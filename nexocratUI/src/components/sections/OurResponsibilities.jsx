import NexocratToSocietyImg from "../../assets/Images/Nexocrat-to-our-society.jpg";
import NexocratToPlanetImg from "../../assets/Images/Nexocrat-to-our-planet.jpg";
import NexocratToNeighboursImg from "../../assets/Images/Nexocrat-to-our-neighbors.jpg";

const responsibilitiesData = {
  title: "Our Responsibilities",
  responsibilities: [
    {
      title: "To Our Society",
      imgSrc: NexocratToSocietyImg,
      content:
        "We ensure that everyone we interact with feels welcome, safe, and informed. We respect and value people—including our employees, customers, and partners.",
    },
    {
      title: "To Our Planet",
      imgSrc: NexocratToPlanetImg,
      content:
        "Sustainability is a part of everything we do. Close collaboration with our stakeholders helps us build a better tomorrow.",
    },
    {
      title: "To Our Neighbours",
      imgSrc: NexocratToNeighboursImg,
      content:
        "When we say we put people first, we mean all people. In addition to our employees and customers, we consider the communities we serve in all that we do.",
    },
  ],
};

const OurResponsibilities = () => {
  return (
    <div className="bg-brand-dark">
      <div className="our-responsibilities max-w-7xl mx-auto py-4 md:py-10 text-white">
        <span className="text-3xl font-semibold pl-16 ml-8">
          {responsibilitiesData.title}
        </span>
        <div className="responsibilities-block grid md:grid-cols-3 justify-center gap-6 mt-4 px-4 md:px-16">
          {responsibilitiesData.responsibilities.map((responsibility, i) => (
            <div
              key={i}
              className="responsibility-item flex flex-col items-center text-center m-2 md:m-8"
            >
              <img
                className="w-[75%] md:w-full"
                src={responsibility.imgSrc}
                alt="image"
              />
              <div className="mt-4 mb-2">{responsibility.title}</div>
              <div>{responsibility.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurResponsibilities;
