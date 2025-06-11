import angular from "../../assets/technologies/angular.svg";
import aws from "../../assets/technologies/aws.svg";
import azure from "../../assets/technologies/azure.svg";
import docker from "../../assets/technologies/docker.png";
import dotnet from "../../assets/technologies/dotnet.svg";
import gcp from "../../assets/technologies/gcp.svg";
import github from "../../assets/technologies/github.svg";
import mongodb from "../../assets/technologies/mongodb.svg";
import nodejs from "../../assets/technologies/nodejs.svg";
import postgresql from "../../assets/technologies/postgresql.svg";
import python from "../../assets/technologies/python.png";
import react from "../../assets/technologies/react.svg";
import typescript from "../../assets/technologies/typescript.svg";
import unity from "../../assets/technologies/unity.svg";
import laravel from "../../assets/technologies/laravel.svg";

const ALL_Technologies = [
  { src: angular, alt: "angular icon" },
  { src: aws, alt: "aws icon" },
  { src: azure, alt: "azure icon" },
  { src: docker, alt: "docker icon" },
  { src: dotnet, alt: "dotnet icon" },
  { src: gcp, alt: "gcp icon" },
  { src: github, alt: "github icon" },
  { src: mongodb, alt: "mongodb icon" },
  { src: nodejs, alt: "nodejs icon" },
  { src: postgresql, alt: "postgresql icon" },
  { src: python, alt: "python icon" },
  { src: react, alt: "react icon" },
  { src: typescript, alt: "typescript icon" },
  { src: unity, alt: "unity icon" },
  { src: laravel, alt: "laravel icon" },
  // repeat intentionally
  { src: angular, alt: "angular icon" },
  { src: aws, alt: "aws icon" },
  { src: azure, alt: "azure icon" },
  { src: docker, alt: "docker icon" },
  { src: dotnet, alt: "dotnet icon" },
  { src: gcp, alt: "gcp icon" },
  { src: github, alt: "github icon" },
  { src: mongodb, alt: "mongodb icon" },
  { src: nodejs, alt: "nodejs icon" },
  { src: postgresql, alt: "postgresql icon" },
  { src: python, alt: "python icon" },
  { src: react, alt: "react icon" },
  { src: typescript, alt: "typescript icon" },
  { src: unity, alt: "unity icon" },
];

const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden py-6 md:py-10 bg-gray-100"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Tech Capabilities
          </h2>
        </div>
        <div className="marquee-container flex relative overflow-hidden whitespace-nowrap mt-8 md:mt-12 mb-2">
          <div className="marquee flex inline-block">
            {ALL_Technologies.map((tech, index) => (
              <img
                key={index}
                // className="w-[100px] h-[100px] flex-shrink-0 mr-16 max-w-[200px]"
                className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 mr-16"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
