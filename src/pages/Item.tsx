import { useState } from "react"

interface ImageResult {
  title: string;
  original: string;
  source: string;
  thumbnail: string;
  link: string;
}

function Item({ img }: { img: ImageResult }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      onClick={() => window.open(img.link, "_blank")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "280px",
        minWidth: "220px",
        backgroundColor: "#dca960",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        border: hovered ? "2px solid #1933b3" : "2px solid transparent",
        boxShadow: hovered
          ? "0 12px 32px rgba(63, 14, 242, 0.45)"
          : "0 4px 15px rgba(0,0,0,0.5)",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "0.3s",
      }}
    >
      {/* Image */}
      <div style={{
        height: "190px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0a0a0a",
      }}>
        <img
          src={imgError ? img.thumbnail : (img.original || img.thumbnail)}
          alt={img.title}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: hovered ? 0.7 : 1,
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Info */}
      <div style={{
        padding: "12px 14px",
        borderTop: hovered ? "2px solid rgba(13, 9, 150, 0.77)" : "1px solid #222",
        backgroundColor: hovered ? "#161616" : "#111111",
        transition: "0.3s",
      }}>
        <h2 style={{
          color: "#80b7ea",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "0 0 4px 0",
          overflow: "hidden",
          letterSpacing: "0.5px",
          lineHeight: "1.5",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}>
          {img.title || "Sport Bike"}
        </h2>
        <p style={{
          color: "#3a80dc",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          margin: "0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}>
          Sumber: {img.source || "—"}
        </p>
      </div>
    </div>
  )
}

export default Item