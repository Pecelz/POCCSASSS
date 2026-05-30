import { useEffect, useState } from "react"

// ── Interfaces ───────────────────────────────────────────────────
interface SportBikes {
  thumbnail: string;
  title: string;
  price: string;      
  source: string;
  link: string;
  original: string;        
}

interface SerpApiResponse {
  shopping_results: SportBikes[]
}

// ── Component ──────────────────────────────────────────────────────────────
function Preview() {
  const [data, setData] = useState<SerpApiResponse | null>(null)

  // const API_KEY = "2bff4fa5abf1b1acc3101a971b257f413ddca9681f968f28d852511a76d345e5"
  // const ENDPOINT = "https://serpapi.com/search"

  const params = {
    engine: "google_images", // ✅ matches images_results
    q: "kawasaki ninja",
    hl: "en",
    gl: "us",
}

  //useEffect fetches /api/search (secure backend route)
  useEffect(() => {
    const queryString = new URLSearchParams(params).toString()
    fetch(`/api/search?${queryString}`)
      .then((res) => res.json())
      .then((result: SerpApiResponse) => {
        console.log(result)
        setData(result)
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  //Show Loading while data is empty
  if (!data) {
    return (
      <div style={styles.loadingWrapper}>
        <div style={styles.spinner} />
        <div style={styles.loadingText}>Loading</div>
      </div>
    )
  }

    //Display shopping_results
  return (
    <div style={styles.grid}>
      {data.shopping_results.map((img, index) => (
        <Item key={index} img={img} />
      ))}
    </div>
  )
}

// ── Item Card ──────────────────────────────────────────────────────────────
function Item({ img }: { img: SportBikes }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      style={{
        ...styles.card,
        transform: hovered ? "scale(1.03)" : "scale(1)",
        boxShadow: hovered
          ? "0 0 0 2px #e8002a, 0 16px 40px rgba(0,0,0,0.6)"
          : "0 2px 12px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number badge */}
      <div style={styles.badge}>
        #{String(img.title?.charAt(0) || "—")}
      </div>

      {/* Image */}
      <div style={styles.imgWrapper}>
        <img
          src={imgError ? img.thumbnail : (img.thumbnail || img.original)}
          alt={img.title}
          width={700}
          onError={() => setImgError(true)}
          style={{
            ...styles.img,
            opacity: hovered ? 0.75 : 1,
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        {hovered && (
          <div style={styles.overlay}>
            <span style={styles.viewBtn}>View →</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{
        ...styles.info,
        borderTop: hovered ? "2px solid #e8002a" : "1px solid rgba(255,255,255,0.06)",
        background: hovered ? "#161616" : "#111111",
      }}>
        <h2 style={styles.title}>
          {img.title || "Sport Bike"}
        </h2>
        <p style={styles.source}>Sumber: {img.source}</p>
      </div>
    </div>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  loadingWrapper: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "3px solid rgba(232,0,42,0.2)",
    borderTop: "3px solid #e8002a",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  loadingText: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "28px",
    letterSpacing: "4px",
    color: "#444440",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "2px",
    padding: "0 24px 80px",
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  card: {
    position: "relative",
    background: "#111111",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
    padding: "3px 10px",
    background: "rgba(8,8,8,0.85)",
    border: "1px solid rgba(232,0,42,0.4)",
    color: "#e8002a",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "1px",
  },
  imgWrapper: {
    position: "relative",
    height: "200px",
    overflow: "hidden",
    background: "#0a0a0a",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease, opacity 0.25s",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "14px",
  },
  viewBtn: {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#e8002a",
  },
  info: {
    padding: "12px 14px",
    transition: "border-color 0.2s, background 0.2s",
  },
  title: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#c8c8c0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "4px",
    letterSpacing: "0.3px",
    fontFamily: "inherit",
  },
  source: {
    fontSize: "11px",
    color: "#333330",
    letterSpacing: "1px",
    textTransform: "uppercase",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}

export default Preview