import React, { useState } from "react";
import { faqs } from "../data/faq";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="flex  gap-4 items-center ">
      <h2 className="text-[32px] text-[#8B7D4C]">{index + 1}</h2>
      <div className="border-b border-gray-200 last:border-0">
        <button
          className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
          onClick={onClick}
        >
          <div className="text-start">
            <h3 className="lg:text-[40px] text-2xl font-light">{question}</h3>
          </div>
          <div>
            {isOpen ? (
              <Minus className="w-5 h-5 text-blue-600" />
            ) : (
              <Plus className="w-5 h-5 text-blue-600" />
            )}
          </div>
        </button>
        <div
          className={`w-full overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40 pb-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function AccordionItems() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
}
