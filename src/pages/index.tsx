import Preview from "./Preview"

export default function Home() {
  return (
    <div style={styles.root}>

      {/* Speed line */}
      <div style={styles.speedLine} />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoGroup}>
          <div style={styles.logoIcon}>⚡</div>
          <div>
            <div style={styles.logoText}>MOTO/GRID</div>
            <div style={styles.logoSub}>Sport Bike Gallery</div>
          </div>
        </div>
        <span style={styles.poweredBy}>Powered by SerpAPI</span>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroGrid} />
        <div style={styles.heroInner}>
          <div style={styles.badge}>
            <span style={styles.dot} />
            <span style={styles.badgeText}>Live Data · Google Images</span>
          </div>
          <h1 style={styles.headline}>
            FIND YOUR<br />
            <span style={styles.headlineOutline}>MACHINE.</span>
          </h1>
          <p style={styles.sub}>
            Browsing the latest sport bike images — automatically
            fetched from Google Images via SerpAPI.
          </p>
          <div style={styles.stats}>
            {[
              { label: "Engine", value: "Google Images" },
              { label: "Query", value: "Sport Bike" },
              { label: "Language", value: "Indonesian" },
              { label: "Results", value: "Up to 20" },
            ].map((s) => (
              <div key={s.label}>
                <div style={styles.statVal}>{s.value}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}>
        <div style={styles.dividerLine} />
        <span style={styles.dividerText}>// Gallery</span>
        <div style={styles.dividerLineRight} />
      </div>

      {/* Images from SerpAPI */}
      <main style={styles.main}>
        <Preview />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>MOTO/GRID</span>
        <span style={styles.footerNote}>
          Built with Next.js + TypeScript · Images via SerpAPI
        </span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #f0ede8; font-family: 'Barlow', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #a0001e; border-radius: 2px; }
        ::selection { background: #e8002a; color: #fff; }
      `}</style>
    </div>
  )
}

// ── Page Styles ────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#080808",
  },
  speedLine: {
    height: "3px",
    background: "linear-gradient(90deg, #e8002a, #ff5c00, transparent)",
    width: "100%",
  },
  header: {
    padding: "20px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(8,8,8,0.95)",
    backdropFilter: "blur(16px)",
  },
  logoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  logoIcon: {
    width: "40px",
    height: "40px",
    background: "#e8002a",
    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },
  logoText: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "26px",
    letterSpacing: "3px",
    lineHeight: "1",
    color: "#f0ede8",
  },
  logoSub: {
    fontSize: "10px",
    letterSpacing: "3px",
    color: "#e8002a",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  poweredBy: {
    fontSize: "12px",
    color: "#444440",
    letterSpacing: "1px",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "100px 40px 80px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  heroBg: {
    position: "absolute",
    top: "-60px",
    right: "-80px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(232,0,42,0.12) 0%, transparent 70%)",
    zIndex: 0,
  },
  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(232,0,42,0.04) 1px, transparent 1px)," +
      "linear-gradient(90deg, rgba(232,0,42,0.04) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    zIndex: 0,
  },
  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    border: "1px solid rgba(232,0,42,0.4)",
    background: "rgba(232,0,42,0.08)",
    marginBottom: "28px",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#e8002a",
    display: "inline-block",
    animation: "pulse 1.5s ease-in-out infinite",
  },
  badgeText: {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#e8002a",
    fontWeight: 600,
  },
  headline: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(64px, 10vw, 120px)",
    letterSpacing: "4px",
    lineHeight: 0.92,
    marginBottom: "24px",
    color: "#f0ede8",
  },
  headlineOutline: {
    WebkitTextStroke: "2px #e8002a",
    color: "transparent",
  } as React.CSSProperties,
  sub: {
    fontSize: "18px",
    color: "#666660",
    fontWeight: 300,
    maxWidth: "480px",
    lineHeight: 1.7,
    marginBottom: "48px",
    fontStyle: "italic",
  },
  stats: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
  },
  statVal: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "24px",
    letterSpacing: "2px",
    color: "#e8002a",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#444440",
    marginTop: "4px",
    fontWeight: 600,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "32px 24px 20px",
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "linear-gradient(90deg, #e8002a, transparent)",
  },
  dividerText: {
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#444440",
    textTransform: "uppercase",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  dividerLineRight: {
    flex: 1,
    height: "1px",
    background: "linear-gradient(270deg, #e8002a, transparent)",
  },
  main: {
    flex: 1,
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.05)",
    padding: "24px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
  },
  footerLogo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "18px",
    letterSpacing: "3px",
    color: "#242424",
  },
  footerNote: {
    fontSize: "12px",
    color: "#333330",
    letterSpacing: "0.5px",
  },
}