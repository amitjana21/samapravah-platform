import { useState } from "react";

export default function WebsiteImage({
  src,
  alt,
  style,
  wrapperStyle,
  className,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#e2e8f0",
        ...wrapperStyle,
      }}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          className="website-image-skeleton"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
      )}
      <img
        className={className}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.25s ease",
          ...style,
        }}
      />
    </div>
  );
}
