import { useEffect, useState } from "react"
import Item from "./Item";

interface ImageResult {
  title: string;
  original: string;
  source: string;
  thumbnail: string;
  link: string;
}

interface SerpApiResponse {
  images_results: ImageResult[];
}

function Preview() {
  const [data, setData] = useState<SerpApiResponse | null>(null)

  const params = {
    engine: "google_images",
    q: "bmw, ducati, kawasaki sport bike motorcycle",
    hl: "en",
  }

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

  if (!data) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{
      backgroundColor: "#dca960",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
      fontFamily: "Poppins, sans-serif",
    }}>

      {/* Header */}
      <div style={{
        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "32px",
        borderBottom: "2px solid #1933b3",
        marginBottom: "24px",
      }}>
        <h1 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          letterSpacing: "6px",
          textTransform: "uppercase",
          margin: "0 0 8px 0",
        }}>
          Sport Bikes
        </h1>
        <p style={{
          color: "#80b7ea",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          margin: "0",
        }}>
          Created By Rachel Kusuma 11A
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap" as const,
        gap: "16px",
        padding: "0 24px 80px",
        maxWidth: "1280px",
        margin: "0 auto",
        justifyContent: "center",
      }}>
        {data.images_results.map((img, index) => (
          <Item key={index} img={img} />
        ))}
      </div>

      <p style={{
        textAlign: "center",
        color: "#80b7ea",
        fontSize: "11px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        paddingBottom: "40px",
      }}>
        {data.images_results.length} bikes loaded
      </p>
    </div>
  )
}

export default Preview