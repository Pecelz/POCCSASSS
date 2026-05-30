import { useEffect, useState } from 'react';

interface SportBikes {
  thumbnail: string;
  title: string;
  original: string;
  source: string;
}

interface SerpApiResponse {
  images_results: SportBikes[];
}

function Preview() {
  const [data, setData] = useState<SerpApiResponse | null>(null);

  useEffect(() => {
    const params = {
      engine: "google_images",
      q: "bmw s1000RR",
      hl: "en",
    };

    const queryString = new URLSearchParams(params).toString();
    fetch(`/api/search?${queryString}`)
      .then((res) => res.json())
      .then((result: SerpApiResponse) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.error("Error:", err));
  }, []); 

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#237d98",
          fontWeight: "bold",
          color: "#e2c487",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        BMW S1000RR
      </h2>
      <img
        src={data.images_results[1].original}
        alt={data.images_results[1].title}
      />
      <p>Source: {data.images_results[1].source}</p>
    </div>
  );
}

export default Preview;