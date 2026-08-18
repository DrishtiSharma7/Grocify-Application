import FruitesAndVegies from "../assets/FruitesAndVegies.jpeg";

function Contact() {
  return (
    <div className="grid grid-col-2 items-start justify-between h-fit w-screen bg-gray-100 py-16 px-16">
      <div className="flex items-center gap-3 px-6 py-2 mb-8">
        <div className="pr-8">
          <h1 className="text-5xl font-bold text-black-900 pb-2">
            We'd love to hear from you
          </h1>
          <span className="text-xl text-orange-950">
            Whether you have a question about our local sourcing, need help with
            an order, or just want to share recipe, our team is ready to assist.
          </span>
          <div className=" ">
            <div>
                <div className="bg-white boarder border-gray-600 rounded-2xl p-8">
                    <h2>
                        Get in Touch
                    </h2>
                </div>
            </div>

        </div>
        </div>
        
        <div>
          <img
            src={FruitesAndVegies}
            alt="FruitsAndVegies"
            className="w-124 h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
