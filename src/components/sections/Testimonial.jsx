import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="">
      <blockquote className="mb-8">
        <p className="lg:text-[36px] text-2xl  leading-relaxed">
          "They thoroughly analyze our industry and target audience, allowing
          them to develop customized campaigns that effectively reach and engage
          our customers. Their creative ideas and cutting-edge techniques have
          helped us stay ahead of the competition."
        </p>
      </blockquote>

      <div className="md:flex max-sm:items-center justify-between">
        <div className="flex items-center lg:justify-center gap-2">
          {" "}
          <div className="w-8 h-8 rounded-full bg-gray-400 mx-2"></div>
          <div>
            <p className="font-bold text-gray-800">Michael Kaizer</p>
            <p className="text-gray-600">CEO of Basecamp Corp</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 ">
          <button className="px-3 py-1 text-[#0A2651] rounded-full border border-blue-900 ">
            <ArrowLeft />
          </button>
          <p className="text-gray-500">
            <span className="underline text-blue-900">01</span>/05
          </p>
          <button className="px-3 py-1 bg-[#0a2651] rounded-full border border-blue-900 ">
            <ArrowRight color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <TestimonialCard />
      </div>
    </section>
  );
};

export default TestimonialSection;
