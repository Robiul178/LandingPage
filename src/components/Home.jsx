import React from "react";
import ChatBox from "./ChatBox";
import SidebarActionsPanel from "./SidebarActionsPanel";
import CourseCard from "./sections/CourseCard";
import { courses } from "./data/course";
import AccordionItems from "./sections/AccordionItems";
import TestimonialSection from "./sections/Testimonial";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-100 to-white h-full">
        <div className="max-w-[1440px] mx-auto p-4 lg:p-0">
          <Header />
        </div>
        <div className=" flex items-center justify-center pt-10 lg:pb-52 ">
          <div className="max-w-[1440px] mx-auto w-full lg:grid  grid-cols-1 md:grid-cols-2 gap-12 items-center max-sm:p-4 md:p-4 lg:p-0">
            {/* Left Content */}
            <div>
              <h1 className="lg:text-[70px] md:text-5xl max-sm:text-3xl max-sm:font-semibold text-gray-900  ">
                Your AI-
                <br className="max-sm:hidden" />
                Powered
                <br className="max-sm:hidden" />
                Sales Coach
              </h1>
              <div className="relative top-[50px]">
                <div className="md:flex gap-10 md:mb-10">
                  <div className="lg:w-[204px] lg:h-[198px] md:w-[120px] md:h-[120px]  bg-white rounded-2xl flex items-center justify-center mb-6">
                    <img
                      src="/images/rrr.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="max-w-[346px]  flex flex-col items-center justify-center ">
                    <p className="text-gray-600 md:h-[132px] mb-8 text-[20px] ">
                      Get real-time coaching, script suggestions, and
                      deal-closing strategies powered by advanced AI technology.
                    </p>
                  </div>
                </div>

                <div className="md:flex gap-[70px] mb-6">
                  <div className="flex gap-5 max-sm:mb-6">
                    <div className="lg:w-[89px] lg:h-[86px] md:h-[65px] p-3 flex items-center justify-center bg-white rounded-2xl mt-[6px] shadow-2xl">
                      <img
                        src="/images/backup_table.png"
                        alt=""
                        className="lg:w-[55px] lg:h-[55px] md:w-[40px]"
                      />
                    </div>
                    <div className="max-sm:mt-3">
                      <p className="lg:text-[40px] md:text-[27px] font-bold text-blue-900">
                        7001+
                      </p>
                      <p className="lg:text-[20px] md:text-[16px] text-gray-500">
                        Provide tailored
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 max-sm:mb-6">
                    <div className="lg:w-[89px] lg:h-[86px] md:h-[65px]  p-2  flex items-center justify-center bg-white rounded-2xl mt-[6px] shadow-2xl">
                      <img
                        src="/images/atr.png"
                        alt=""
                        className="lg:w-[55px] lg:h-[55px] md:w-[40px]"
                      />
                    </div>
                    <div className="max-sm:mt-3">
                      <p className="lg:text-[40px] md:text-[27px] font-bold text-blue-900">
                        2000+
                      </p>
                      <p className="lg:text-[20px] md:text-[16px] text-gray-500">
                        Your protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right  */}
            <div className="flex flex-col justify-end lg:mt-0 md:mt-20">
              <div className="w-full  lg:flex justify-center items-center lg:h-0 md:h-[880px] max-sm:h-fit">
                <img
                  src="/images/image.png"
                  alt="AI Robot"
                  className="lg:w-[583px] lg:h-[628px] md:w-full md:h-auto  object-cover max-sm:mt-10"
                />
                {/* Floating Stats Box */}
                <div className="lg:absolute  lg:top-[440px] lg:left-[692.19px] md:relative md:bottom-[300px] bg-white shadow-lg rounded-xl p-6 md:w-[440px] md:h-[359px] max-sm:hidden">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[50px] font-bold text-blue-900">721+</p>
                    <p className="text-[50px] font-bold text-blue-900">1000+</p>
                  </div>
                  <p className="text-[27px] font-semibold text-gray-800 mb-1">
                    Growth is our priority.
                  </p>
                  <p className="text-[16px] text-gray-500 md:pt-[77px]">
                    As a full-service business agency, we specialize in helping
                    companies of all sizes optimize their operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-indigo-950 to-blue-700 py-12 max-sm:p-4 lg:p-0 lg:py-12 md:p-4">
        <div className="max-w-[1440px] mx-auto">
          <div>
            <p className="text-green-400">Live Ai Coach</p>
            <h1 className="text-[40px] my-2 text-white">
              Take a Suggestion Coaching{" "}
            </h1>
          </div>
          <div className=" w-full lg:flex  items-center mt-4 ">
            <div className="lg:mr-3 md:mr-2 ">
              {" "}
              <ChatBox />
            </div>
            <SidebarActionsPanel />
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto p-4 lg:p-0 my-6">
        <div className="mt-4">
          <h1 className="text-[42px] ">Our Courses</h1>
          <div className="lg:flex justify-between">
            <p className="pt-1 text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.{" "}
              <br /> Ac cum eget habitasse in velit fringilla feugiat senectus
              in.
            </p>
            <button className="bg-[#012869] text-white px-3 lg:h-8 w-fit rounded-sm p-2 mt-2 lg:mt-0">
              View All
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto p-4 lg:p-0">
        <div className="py-7">
          <p className="relative right-0 text-2xl">
            Frequently asked <br /> questions
          </p>
          <h1 className="lg:text-[60px] text-4xl lg:my-0 my-3 font-light text-center mb-4">
            Constant collaboration is how <br /> we roll. Let's see if we are a
            good fit.
          </h1>
        </div>
        <AccordionItems />
      </section>
      <section className="max-w-[1440px] mx-auto p-4 lg:p-0">
        <TestimonialSection />
      </section>
      <section
        className="bg-gray-200 py-12"
        // style={{
        //   backgroundImage: `url('/images/dotBanner.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   opacity: "0.14",
        // }}
      >
        <div className="max-w-[1440px] mx-auto p-4 lg:p-0">
          <div className="max-w-[1440px] mx-auto p-4 lg:p-0 ">
            <div className="w-full h-[353px] bg-gradient-to-br z-50 from-indigo-950 to-blue-800 text-center rounded-lg my-10 flex gap-2 flex-col items-center justify-center">
              <h1 className="text-[48px] text-white  ">
                Ready to Hire Smarter?
              </h1>
              <p className="text-[16px] text-white ">
                Unlock Exclusive Insights Subscribe to Our Newsletter
              </p>
              <button className="bg-yellow-200 text-black px-4 py-1 mt-4 rounded-full ">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
