import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Home, Store, Info, Workflow, GlobeCheck, SendHorizontal } from "lucide-react"
function Footer() {
  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 border-t px-6 sm:px-8 py-10 transition-colors">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold pl-4 text-orange-900 dark:text-orange-400 font-serif">
          Grocify
        </h2>
        <p className="text-base font-medium p-4 pr-8 text-orange-950 dark:text-orange-200 font-serif">
          Freshness Dilivered at your doorstep. We partner with local farmers to
          bring you the best quality orgainic produce.
        </p>
      </div>
      <div className="flex flex-col pt-2">
        <h2 className="text-2xl font-bold pl-4 text-gray-900 dark:text-gray-100 font-serif">
          Link
        </h2>
        <ul className="text-base font-medium p-4 pr-8 font-serif text-orange-950 dark:text-orange-200">
          <li className="flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Home/><Link to="/home">Home</Link></li>
          <li className="flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Store/><Link to="/shop">Shop</Link></li>
          <li className="flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Info/><Link to="/about">About Us</Link></li>
          <li className="flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Workflow/><Link to="/process">Process</Link></li>
          <li className="flex mb-2 gap-2 hover:text-orange-700 transition-colors"><GlobeCheck/><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex flex-col pt-2">
        <h2 className="text-2xl font-bold pl-4 text-gray-900 dark:text-gray-100 font-serif">
          Contact
        </h2>
        <ul className="text-base font-medium p-4 pr-8 font-serif text-orange-950 dark:text-orange-200">
          <li className="inline-flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Phone/>Phone No. : <span>+91 123456789</span></li>
          <li className="inline-flex mb-2 gap-2 hover:text-orange-700 transition-colors"><Mail/>Mail : <span>grocify@.com</span></li>
          <li className="inline-flex mb-2 gap-2 hover:text-orange-700 transition-colors"><MapPin/> Address : <span>New Delhi, India</span></li>
        </ul>
      </div>
      <div className="flex flex-col pt-3 pl-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-serif">
          Newsletter
        </h2>
        <p className="text-base font-medium pt-4 pb-2 pr-8 text-gray-900 dark:text-gray-100 font-serif">
          Subscribe to our newsletter to get the latest updates and offers
        </p>
        <div className="flex justify-start gap-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-0 px-4 sm:px-8 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md"
          />
          <button className="px-4 py-2 bg-orange-900 text-white rounded-md hover:bg-orange-600 transition-colors shrink-0">
            <SendHorizontal/>
          </button>
        </div>
      </div>
    </div>
    <div className="bg-gray-200 dark:bg-gray-800 h-12 border-gray-300 dark:border-gray-700 border-t transition-colors">
      <p className="text-center text-sm font-medium p-4 text-gray-900 dark:text-gray-100 font-serif">
        © 2026 Grocify. All rights reserved.
      </p>
    </div>
    </div>
  );
}

export default Footer;
