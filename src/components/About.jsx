import React from "react";
import marcinimg from "../assets/images/marcin.jpg";
import ryszardimg from "../assets/images/ryszard.jpg";
import tytusimg from "../assets/images/tytus.jpg";
import wojtekimg from "../assets/images/wojciech.jpg";
import olgierdimg from "../assets/images/olgierd.jpg";
import pawelimg from "../assets/images/pawel.jpg";
import oskarimg from "../assets/images/oskar.jpg";
import DeveloperCard from "./DeveloperCard";


const About = () => {

  const developers = [
    {
      name: "Olgierd Karpacz",
      linkedInLink: "https://www.linkedin.com/in/olgierd-karpacz/",
      githubLink: "https://github.com/OKarpacz",
      imageUrl: olgierdimg,
    },
    {
      name: "Marcin Węgłowski",
      linkedInLink: "https://www.linkedin.com/in/marcin-w%C4%99g%C5%82owski/",
      githubLink: "https://github.com/mweglowski",
      imageUrl: marcinimg,
    },
    {
      name: "Ryszard Rakowicz",
      linkedInLink: "https://www.linkedin.com/in/ryszard-rakowicz-a403112b5/",
      githubLink: "https://github.com/Ryszardoo",
      imageUrl: ryszardimg,
    },
    {
      name: "Wojciech Bińczyk",
      linkedInLink: "https://www.linkedin.com/in/wojciech-binczyk/",
      githubLink: "https://github.com/Rekar7",
      imageUrl: wojtekimg,
    },
    {
      name: "Tytus Sosiński",
      linkedInLink: "https://www.linkedin.com/in/tytus-sosi%C5%84ski-2bb019204/",
      githubLink: "https://github.com/tytus-sosinski",
      imageUrl: tytusimg,
    },
    {
      name: "Paweł Beiger",
      linkedInLink: "https://www.linkedin.com/in/pawelbeiger/",
      githubLink: "https://github.com/P4steo",
      imageUrl: pawelimg,
    },
    {
      name: "Oskar Dulik",
      linkedInLink: "https://www.linkedin.com/in/",
      githubLink: "https://github.com/Oskar474",
      imageUrl: oskarimg,
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center mt-[20vh]" id="about">
      <div className="text-4xl text-center">
        <div className="flex justify-center items-center font-bold">
          <p className="px-4">Welcome to CannonCode!</p>
        </div>

        <div className="flex flex-col items-center" style={{ fontSize: '20px' }}>
          <p className="p-[2em] text-justify-20px max-w-[600px]">
            Here is where science meets innovation! In our dynamic community, we
            push boundaries through collaborative projects, shaping tomorrow's
            tech. Whether you're captivated by algorithms, design, or
            problem-solving, CannonCode is your coding launchpad. Join us, and
            together, let's fire up the cannons of creativity and script the
            future!
          </p>
          <div className="p-8 w-full mt-[10vh] flex flex-col items-center font-bold" style={{ fontSize: '32px' }}>
            <p>THE DEVS</p>
          </div>

          <div className="flex flex-wrap gap-4 p-[2em] max-w-[750px]">
            {developers.map((developer, index) => (
              <DeveloperCard
                key={index}
                name={developer.name}
                imageUrl={developer.imageUrl}
                linkedInLink={developer.linkedInLink}
                githubLink={developer.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;