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
      id="skillset"
      className="relative overflow-hidden py-10 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Tech Capabilities
          </h2>
        </div>
        <div className="overflow-hidden whitespace-nowrap marquee-container">
          <div className="marquee inline-block">
            {ALL_Technologies.map((tech, index) => (
              <img key={index} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
