'use client';
import { useState } from 'react';

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is import/export?',
      answer:
        'Import/export refers to the process of buying and selling goods across international borders. It involves various regulations and logistics to ensure compliance and timely delivery. Understanding this process is crucial for successful international trade.',
    },
    {
      question: 'What are shipping times?',
      answer:
        'Shipping times vary based on the destination and shipping method chosen. Typically, international shipments can take anywhere from a few days to several weeks. We provide estimated delivery times during the checkout process.',
    },
    {
      question: 'What are the costs?',
      answer:
        'Costs for import/export services depend on various factors including product type, weight, and destination. Additional fees may apply for customs clearance and duties. We strive to provide transparent pricing with no hidden fees.',
    },
    {
      question: 'How to track shipments?',
      answer:
        "You can track your shipments through our website using the tracking number provided in your confirmation email. This allows you to see real-time updates on your shipment's status. For further assistance, feel free to contact our support team.",
    },
    {
      question: 'What are customs duties?',
      answer:
        "Customs duties are taxes imposed by governments on imported goods. The amount varies based on the product's value and classification. It's essential to factor these costs into your overall budget when importing.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-8">
      {/* Left Section */}
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">FAQs</h1>
        <p className="text-lg text-gray-600 mb-6">
          Find answers to your most pressing questions about our import and
          export services.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-lg">
          Contact
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 text-xl font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="py-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
