import { MoveRight } from "lucide-react";
import GardenerGirl from "../assets/Girl.jpeg";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between h-fit w-full bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-8 lg:px-16 transition-colors">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 dark:bg-blue-950 px-4 py-2 mb-8 ">
          <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
            OUR STORY
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 lg:pr-18">
          Rooted in Quality
        </h1>

        <div className="mt-6 mb-6">
          <p className="text-lg sm:text-xl text-orange-950 dark:text-orange-200">
            At Grocify, we believe that effortless health starts with freshest ingredients. We are on a mission to connect busy urbanites and families with local, sustainable farms. Our "Fresh-to-Table" philosophy ensures that every organic apple and leafy green arrives at your door bursting with vitality, making healthy living not just a choice, but a joyful lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-between border-gray-300 dark:border-gray-700 border-t">
            <div className="grid p-4 pl-2">
                <h2 className="text-3xl sm:text-4xl text-orange-900 dark:text-orange-400 font-bold ">
                    100+
                </h2>
                <p className="text-base sm:text-lg text-orange-800 dark:text-orange-300">
                    Local Farmers Partners
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-3xl sm:text-4xl text-orange-900 dark:text-orange-400 font-bold ">
                    100+
                </h2>
                <p className="text-base sm:text-lg text-orange-800 dark:text-orange-300">
                    Happy Urban Families
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-3xl sm:text-4xl text-orange-900 dark:text-orange-400 font-bold ">
                    24h
                </h2>
                <p className="text-base sm:text-lg text-orange-800 dark:text-orange-300">
                    Farm to Doortep
                </p>
            </div>
            <div className="grid p-4 pl-2">
                <h2 className="text-3xl sm:text-4xl text-orange-900 dark:text-orange-400 font-bold ">
                    100%
                </h2>
                <p className="text-base sm:text-lg text-orange-800 dark:text-orange-300">
                    Organic Commitment
                </p>
            </div>
        </div>
        <div className="flex justify-center lg:justify-start mt-8 gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-orange-800 px-8 py-3 font-mono transition-all hover:bg-orange-600 hover:scale-105 hover:cursor-pointer"
          >
            <span className="text-sm font-semibold text-white">Join Our Community</span>
            <MoveRight size={20} className="text-white" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 lg:mt-0">
        <img
          src={GardenerGirl}
          alt="Gardener tending fresh produce"
          className="w-2/3 sm:w-1/2 lg:w-2/3 h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}

export default About;
