export default function WebsiteStyles() {
  return (
    <style>
      {`
        html {
          scroll-behavior: smooth;
        }

        .website-fade-in {
          animation: websiteFadeIn 0.8s ease both;
        }

        .website-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .website-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(15, 23, 42, 0.12) !important;
          border-color: rgba(37, 99, 235, 0.25) !important;
        }

        .website-link-hover {
          transition: color 0.2s ease;
        }

        .website-link-hover:hover {
          color: #2563eb !important;
        }

        .website-action-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .website-action-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.22) !important;
        }

        @keyframes websiteFadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 760px) {
          .website-desktop-nav {
            display: none !important;
          }

          .website-hero-title {
            font-size: 38px !important;
          }

          .website-floating-actions {
            right: 16px !important;
            bottom: 16px !important;
          }
        }
      `}
    </style>
  );
}
