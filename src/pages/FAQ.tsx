import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is The Digital Giving Tree?",
      answer: "The Digital Giving Tree is a dynamic digital donation platform that connects B2B donors with verified grassroots charities. We focus on transparency, scalability, and storytelling to create meaningful connections between donors and the communities they support."
    },
    {
      question: "How do I make a donation?",
      answer: "Making a donation is simple! Browse our verified charities, select the organization you'd like to support, and choose your donation amount. You can donate via credit card, bank transfer, or other secure payment methods. All transactions are encrypted and secure."
    },
    {
      question: "Are the charities verified?",
      answer: "Yes! All charities on our platform undergo a thorough verification process. We verify their legal status, financial records, and operational history to ensure they are legitimate grassroots organizations making a real impact in their communities."
    },
    {
      question: "How can my charity list its needs on the platform?",
      answer: "If you represent a grassroots charity, you can apply to join our platform by filling out our registration form. After verification, you'll be able to create a profile, list your current needs, share your story, and connect with potential donors. The process typically takes 5-7 business days."
    },
    {
      question: "What makes this platform different from others?",
      answer: "We focus specifically on connecting B2B donors with local grassroots charities. Our platform is built on three pillars: transparency (you see exactly where your money goes), scalability (we grow with your charitable giving), and storytelling (every charity has a story to tell, and every donation makes a difference)."
    },
    {
      question: "Is there a minimum donation amount?",
      answer: "No, there is no minimum donation amount. We believe every contribution matters, whether it's $5 or $5,000. All donations, regardless of size, make a real difference to the charities we support."
    },
    {
      question: "Can I track the impact of my donation?",
      answer: "Absolutely! One of our key features is donation tracking. Once you make a donation, you'll receive regular updates on how your contribution is being used and the impact it's making in the community. We believe in complete transparency."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Most donations to registered charities on our platform are tax-deductible. Each charity's profile indicates their tax-exempt status. We recommend consulting with your tax advisor for specific guidance on your donations."
    },
    {
      question: "How does the platform ensure transparency?",
      answer: "We require all charities to provide regular updates on fund usage, maintain detailed financial records, and share impact stories. Donors can view these updates, see where funds are allocated, and understand the tangible outcomes of their contributions."
    },
    {
      question: "Can businesses set up recurring donations?",
      answer: "Yes! We understand that many B2B donors prefer to establish ongoing relationships with charities. You can easily set up monthly, quarterly, or annual recurring donations to support your chosen organizations consistently."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Everything you need to know about The Digital Giving Tree
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-50 transition duration-200"
                >
                  <span className="text-lg font-semibold text-green-800">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-green-600 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-green-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help! Reach out to our team for more information.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
