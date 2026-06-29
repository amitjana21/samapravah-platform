import { useState } from "react";
import { SERVICE_AREAS } from "../../config/appConfig";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    [
      "Service availability",
      "Same-day service is available in many areas depending on technician schedules and booking time.",
    ],
    [
      "Warranty",
      "Selected services include warranty support. Warranty terms are confirmed before the work begins.",
    ],
    [
      "Pricing",
      "Pricing is transparent and starts from the listed visit or service charges. Final pricing depends on the issue and parts required.",
    ],
    [
      "Technician verification",
      "Technicians are verified before assignment and matched to the service category requested by the customer.",
    ],
    [
      "Areas covered",
      `We currently cover ${SERVICE_AREAS.join(", ")}, and nearby areas.`,
    ],
    [
      "Payment methods",
      "Customers can pay through cash, UPI, Google Pay, PhonePe, and Paytm.",
    ],
  ];

  return (
    <section
      id="faq"
      className="website-fade-in"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: "0 0 14px",
          fontSize: "32px",
          color: "#0f172a",
        }}
      >
        Frequently Asked Questions
      </h2>

      <p
        style={{
          maxWidth: "680px",
          margin: "0 auto 40px",
          color: "#64748b",
          textAlign: "center",
          lineHeight: "1.7",
        }}
      >
        Clear answers before you book a home service.
      </p>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gap: "14px",
        }}
      >
        {faqs.map(([question, answer], index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={question}
              className="website-card-hover website-faq-item"
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#0f172a",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {question}
                <span
                  style={{
                    color: "#2563eb",
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                style={{
                  maxHeight: isOpen ? "160px" : 0,
                  overflow: "hidden",
                  transition: "max-height 0.25s ease",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    padding: "0 20px 20px",
                    color: "#64748b",
                    lineHeight: "1.7",
                  }}
                >
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
