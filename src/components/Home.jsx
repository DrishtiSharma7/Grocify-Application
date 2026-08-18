import { BadgeCheck, MoveRight, Users2 } from "lucide-react";
import basket from "../assets/basket.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-2 items-center justify-between h-fit w-screen bg-gray-100 pt-24 pb-16">
      <div className="mx-16">
        <div className="inline-flex items-center gap-3 rounded-full bg-orange-100 px-4 py-2 mb-8 ">
          <BadgeCheck size={20} className="text-orange-700 " />
          <span className="text-sm font-semibold text-orange-700">
            Export Best Quality
          </span>
        </div>

        <h1 className=" text-7xl font-bold text-black-900 pr-18">
          Tasty Organic Fruits & Veggies In{" "}
          <span className="text-orange-700">Your City</span>
        </h1>

        <div className="mt-6">
          <p className="text-xl text-orange-950">
            Fresh, organic produce delivered straight from the farm to your
            doorstep. Experience the best quality in your city.
          </p>
        </div>
        <div className="inline-flex mt-8 gap-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-2 font-mono hover:bg-orange-600 hover:cursor-pointer">
            <span className="text-sm font-semibold text-white">
              <Link to="/shop">Shop Now</Link>
            </span>
            <MoveRight size={20} className="text-white" />
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 border-2 border-amber-700 px-8 py-2 hover:bg-gray-200 hover:cursor-pointer">
            <BadgeCheck size={20} className="text-orange-700 " />
            <span className="text-sm font-semibold text-orange-700">
              <Link to="/process">How it works</Link>
            </span>
          </div>
        </div>
        <div className="mt-20 ">
            <div className="inline-flex items-center gap-6 rounded-full px-8 py-3 mb-8 bg-yellow-50">
            <Users2 className="rounded-full bg-amber-50" />
            <h2 className="text-lg font-semibold">Happy Customers</h2>
            <MoveRight size={20} className="text-black" />
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={basket} alt="logo" className="w-2/3 h-2/3  animate-jump " />
      </div>
    </div>
  );
}

export default Home;
