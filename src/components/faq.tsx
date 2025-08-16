import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQ() {
    const faqs = [
      {
        question: "What types of cards can I use with PayPress?",
        answer: "PayPress supports all major credit and debit cards, including Visa, Mastercard, and American Express. We ensure compatibility with both personal and business cards across different regions."
      },
      {
        question: "How secure are my transactions with PayPress?",
        answer: "We employ bank-grade encryption and multiple layers of security measures to protect all transactions. Our platform is PCI DSS compliant and regularly audited by independent security firms."
      },
      {
        question: "What are the transaction fees and pricing?",
        answer: "Our transaction fees are transparent and competitive. We offer tiered pricing based on volume, starting at 2.9% + $0.30 per transaction. Contact our sales team for custom enterprise pricing."
      },
      {
        question: "How can I get started with PayPress?",
        answer: "Getting started is easy! Simply sign up for an account, complete the verification process, and integrate our payment solution into your business. Our support team is available 24/7 to help."
      },
      {
        question: "Is PayPress available internationally?",
        answer: "Yes, PayPress is available in over 180 countries worldwide. We support multiple currencies and provide local payment methods in many regions."
      }
    ]
  
    return (
      <section className="px-4 lg:px-6 py-16 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" border-b-2 border-white px-6"
              >
                <AccordionTrigger className="text-white text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      
      </section>
    )
  }
  