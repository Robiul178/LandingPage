import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-700 p-8">
      <div className="max-w-[1440px] mx-auto md:flex justify-between gap-10">
        <div className="lg:w-[534px] mb-2">
          <div className="flex gap-3 items-center justify-start">
            <img src="/images/Group 2.png" alt="ds" className="h-8 w-fit" />
            <img src="/images/Logo.png" alt="f" className="h-8 w-16" />
          </div>
          <p className="text-sm py-2 mt-3">
            SalesRank.All offers a comprehensive suite of AI-powered solutions
            to help you find expert sales professionals who can elevate every
            aspect of your business. From performance rankings and skill
            verification to industry benchmarking and real-time analytics, we
            provide the insights and tools to optimize your sales strategy and
            drive growth.
          </p>
          <div className="flex gap-4 mt-4">
            <span className="bg-white text-indigo-900 w-10 h-10 rounded-full flex items-center justify-center">
              <Facebook />
            </span>
            <span className="bg-white text-indigo-900 w-10 h-10 rounded-full flex items-center justify-center">
              <Twitter />
            </span>
            <span className="bg-white text-indigo-900 w-10 h-10 rounded-full flex items-center justify-center">
              <Linkedin />
            </span>
            <span className="bg-white text-indigo-900 w-10 h-10 rounded-full flex items-center justify-center">
              <Instagram />
            </span>
          </div>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {["Service", "Agency", "Case Study", "Resource", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center text-sm hover:text-blue-500"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="mb-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Licence</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Copyright", "Email Address"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center text-sm hover:text-blue-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              (405) 555-0120
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Hey@boostim.com
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              2972 Weatherton Rd, Santa Ana, Illinois 85466
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
