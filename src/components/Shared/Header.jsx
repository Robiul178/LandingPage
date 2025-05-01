import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      {/* Logo Section */}
      <div className="flex gap-12 items-center ">
        <div className="flex items-center space-x-2">
          <img src="/images/lolo.png" alt="" className="h-8 w-fit" />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600">
            Consulting
          </a>
          <a href="#" className="hover:text-blue-600">
            AI Coach
          </a>
        </nav>
      </div>

      {/* Get Started Button */}
      <button className="border border-black rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white transition">
        Get started
      </button>
    </header>
  );
}
