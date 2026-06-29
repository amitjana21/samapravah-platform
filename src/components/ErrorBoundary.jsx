import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Website error boundary caught an error:", error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main
        role="alert"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "560px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "18px",
            boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0 0 12px", color: "#2563eb" }}>
            Something went wrong
          </h1>
          <p style={{ margin: "0 0 24px", color: "#475569", lineHeight: "1.7" }}>
            We could not load this page properly. Please refresh the page or
            contact Sama Pravah support if the problem continues.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Refresh Page
          </button>
        </section>
      </main>
    );
  }
}
