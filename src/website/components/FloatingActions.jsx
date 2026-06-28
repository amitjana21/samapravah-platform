export default function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actionStyle = {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "800",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(15,23,42,0.22)",
    fontSize: "20px",
  };

  return (
    <div
      className="website-floating-actions"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        display: "grid",
        gap: "12px",
      }}
    >
      <a
        className="website-action-hover"
        href="https://wa.me/918777732521"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Sama Pravah"
        style={{
          ...actionStyle,
          background: "#25D366",
        }}
      >
        💬
      </a>

      <a
        className="website-action-hover"
        href="tel:8777732521"
        aria-label="Call Sama Pravah"
        style={{
          ...actionStyle,
          background: "#2563eb",
        }}
      >
        📞
      </a>

      <button
        className="website-action-hover"
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          ...actionStyle,
          background: "#0f172a",
        }}
      >
        ↑
      </button>
    </div>
  );
}
