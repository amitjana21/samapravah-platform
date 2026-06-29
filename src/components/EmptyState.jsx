export default function EmptyState({
  title = "Nothing to show yet",
  message = "Please check back later.",
  action,
}) {
  return (
    <div
      role="status"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "32px",
        textAlign: "center",
        color: "#475569",
      }}
    >
      <h3
        style={{
          color: "#0f172a",
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: "0 0 18px", lineHeight: "1.7" }}>{message}</p>
      {action}
    </div>
  );
}
