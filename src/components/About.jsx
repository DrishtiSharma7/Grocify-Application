import { BadgeCheck, MoveRight, Users2 } from "lucide-react";
import GardenerGirl from "../assets/Girl.jpeg";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="grid grid-cols-2 items-center justify-between h-fit w-screen bg-gray-100 pt-12 pb-12">
      <div className="mx-16">
        <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 mb-8 ">
          <span className="text-sm font-semibold text-orange-700">
            OUR STORY
          </span>
        </div>

        <h1 className=" text-5xl font-bold text-black-900 pr-18">
          Rooted in Quality
        </h1>

        <div className="mt-6 mb-6">
          <p className="text-xl text-orange-950">
            At Grocify, we believe that effortless health starts with freshest ingredients. We are on a mission to connect busy urbanites and families with local, sustainable farms. Our "Fresh-to-Table" philosophy ensures that every organic apple and leafy green arrives at your door bursting with vitality, making healthy living not just a choice, but a joyful lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-between  border-gray-300 border-t">
            <div className="grid p-4 pl-2">
                <h2 className="text-4xl text-orange-900 font-bold ">
                    100+
                </h2>
                <p className="text-lg text-orange-800">
                    Local Farmers Partners
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-4xl text-orange-900 font-bold ">
                    100+
                </h2>
                <p className="text-lg text-orange-800">
                    Happy Urban Families
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-4xl text-orange-900 font-bold ">
                    24h
                </h2>
                <p className="text-lg text-orange-800">
                    Farm to Doortep
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-4xl text-orange-900 font-bold ">
                    100%
                </h2>
                <p className="text-lg text-orange-800">
                    Organic Commitment
                </p>
            </div>
        </div>
        <div className="flex mt-8 gap-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-orange-800 px-8 py-3 font-mono hover:bg-orange-600 hover:cursor-pointer">
            <span className="text-sm font-semibold text-white">
              <Link to="/contact">Join Our Community</Link>
            </span>
            
            <MoveRight size={20} className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={GardenerGirl} alt="logo" className="w-2/3 h-2/3 rounded-2xl" />
      </div>
    </div>
  );
}

export default About;
