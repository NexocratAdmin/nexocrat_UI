const data = {
  heading: "Why Nexocrat is One-Stop Station for any of your Services?",
  description:
    "Developers at our web application design services firm provide web-based application development services to maximize ROI and boost profitability for your business by implementing strategic solutions and innovative approaches.",
  features: [
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053545/webapp_1.png",
      title: "Cost-Effective Process",
      desc: "At Nexocrat, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality.",
    },
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053546/webapp_2.png",
      title: "All Under One Roof",
      desc: "We are a one-stop web application development company, offering a comprehensive range of services, from concept to deployment, all conveniently available under one roof.",
    },
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053546/webapp_3.png",
      title: "Creative Team",
      desc: "Creative web app developers at Nexocrat are committed to turning your vision into innovative web solutions, infusing creativity into every aspect of your project.",
    },
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053546/webapp_4.png",
      title: "24/7 Help Desk",
      desc: "With a commitment to assistance, Nexocrat ensures that you have support whenever you need it, guaranteeing a seamless development experience.",
    },
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053546/webapp_5.png",
      title: "New Technology Integration",
      desc: "Being at the forefront of technology, Nexocrat integrates new advancements into your web apps, keeping you ahead of the curve.",
    },
    {
      img: "https://media.apptunix.com/wp-content/uploads/2024/05/02053547/webapp_6.png",
      title: "Post-Deployment Services",
      desc: "Our web development services go beyond launch by ensuring the ongoing success of your web application with regular updates, maintenance, and support.",
    },
  ],
};

const OneStopSolution = () => {
  return (
    <section className="py-16 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {data.heading}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="rotatable-item bg-white text-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 mb-4 transition-all duration-1000 rotatey180"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneStopSolution;
