import React from "react";
import { Link } from "react-router-dom";
import Spotlight1 from "../../assets/image (3).svg";
import Spotlight2 from "../../assets/image (4).svg";
import Spotlight3 from "../../assets/image (5).svg";

type SpotLightCardProps = {
  image: string;
  description: string;
  name: string;
  price: string;
  per: string;
};

const SpotLightCard: React.FC<SpotLightCardProps> = ({
  image,
  name,
  price,
  per,
  description,
}) => {
  return (
    <div className="bg-white border border-[#F9F9F9] rounded-lg py-2 px-5  group transform transition-transform duration-300 shadow-sm hover:shadow-md">
      <div className="">
        <img
          src={image}
          alt={name}
          className="w-full lg:w-[366px] h-[271px] rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <p className="font-semibold text-[20px]">{name}</p>
      <p className="text-black/80 text-[16px] py-2">{description}</p>
      <p className="text-[14px] py-1">
        By{" "}
        <span className="semi-bold text-[#28A745]">
          community Health Initiatives
        </span>
      </p>

      <div className="w-full bg-gray-200 rounded-full h-[5px] my-2">
        <div className="bg-[#28A745] h-full rounded-full" />
      </div>
      {/* <div className="slidecontainer">
          <input
            type="range"
            name="price"
            id="price"
            min="1"
            max="100"
            value="50"
            className="slider "
          />
        </div> */}
      <p className="text-[16px] font-semibold py-2">{price}</p>
      <span className="text-[12px] text-[#838383]">{per}</span>
    </div>
  );
};

const Spotlight = () => {
  const spotItems = [
    {
      id: 1,
      name: "Climate Action Now",
      price: "N12,050 ",
      description:
        "Join us in funding local environmental projects aimed at combating climate change and promoting sustainability",
      image: Spotlight1,
      per: "raised",
    },
    {
      id: 2,
      name: "Support For Orphans",
      price: "N12,050 ",
      description:
        "This campaign will offer food, shelter, and education to orphans, helping them build a better future",
      image: Spotlight2,
      per: "raised",
    },
    {
      id: 3,
      name: "Support Entepreneurs",
      price: "N12,050 ",
      description:
        "This campaign supports small businesses by providing them with the capital they need to grow and thrive",
      image: Spotlight3,
      per: "raised",
    },
  ];

  return (
    <section
      id="browseCampaigns"
      className="px-5 lg:px-10 lg:mt-[100px] mt-[80px]"
    >
      <h1 className="text-[40px] font-bold">In the Spotlight</h1>
      <div className="grid grid-cols-1 gap-6 my-5 py-5 w-full no-scrollbar overflow-x-auto lg:grid-cols-3 md:grid-cols-2">
        {spotItems.map((campaign) => (
          <SpotLightCard
            key={campaign.id}
            description={campaign.description}
            image={campaign.image}
            name={campaign.name}
            price={campaign.price}
            per={campaign.per}
          />
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
