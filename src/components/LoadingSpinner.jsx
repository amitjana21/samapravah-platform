export default function LoadingSpinner({ label = "Loading" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "32px",
        color: "#2563eb",
        fontWeight: "700",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: "22px",
          height: "22px",
          border: "3px solid #dbeafe",
          borderTopColor: "#2563eb",
          borderRadius: "50%",
          animation: "loadingSpinner 0.8s linear infinite",
        }}
      />
      <span>{label}</span>
      <style>
        {`
          @keyframes loadingSpinner {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
