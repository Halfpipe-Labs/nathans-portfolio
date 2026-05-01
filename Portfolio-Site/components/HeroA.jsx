// HeroA.jsx — Editorial Split: giant name left, portrait bleeds right, animated word cycle

const HeroA = () => {
  const words = ['Marketer.', 'Advocate.', 'Writer.', 'Builder.'];
  const [wordIdx, setWordIdx] = React.useState(0);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % words.length);
        setFading(false);
      }, 300);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const wordColors = ['#FFE234', '#FF6B6B', '#5DCAA5', '#85B7EB'];

  return (
    <section style={heroAStyles.section} data-screen-label="Hero">
      {/* Left: text content */}
      <div style={heroAStyles.left}>
        <div style={heroAStyles.eyebrow}>North Norfolk, UK · Est. 1991</div>
        <div style={heroAStyles.lockup}>
          <span style={heroAStyles.nathan}>NATHAN</span>
          <span style={heroAStyles.pearson}>PEARSON</span>
          <span style={heroAStyles.postnominals}>MCIM · MRI</span>
        </div>
        <div style={heroAStyles.cycleRow}>
          <span style={heroAStyles.cycleStatic}>I'm a </span>
          <span style={{
            ...heroAStyles.cycleWord,
            color: wordColors[wordIdx],
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(8px)' : 'translateY(0)',
          }}>
            {words[wordIdx]}
          </span>
        </div>
        <p style={heroAStyles.tagline}>
          Digital marketer. ADHD advocate. Writer. Builder.<br />
          Based in North Norfolk. Father. Plant owner. Cat dad.
        </p>
        <div style={heroAStyles.pillRow}>
          {[
            { label: 'Marketer', color: '#FFE234' },
            { label: 'ADHD Advocate', color: '#FF6B6B' },
            { label: 'Writer', color: '#5DCAA5' },
            { label: 'Builder', color: '#85B7EB' },
          ].map(p => (
            <span key={p.label} style={{ ...heroAStyles.pill, border: `1px solid ${p.color}`, color: p.color }}>
              <span style={{ ...heroAStyles.dot, background: p.color }}></span>
              {p.label}
            </span>
          ))}
        </div>
        <div style={heroAStyles.ctaRow}>
          <a href="#pillars" style={heroAStyles.ctaPrimary}>Explore my work</a>
          <a href="mailto:nathan@nathanknowsnothing.co.uk" style={heroAStyles.ctaOutline}>Get in touch</a>
        </div>
      </div>

      {/* Right: portrait */}
      <div style={heroAStyles.right}>
        <div style={heroAStyles.portraitWrap}>
          <img src="assets/portrait.jpg" alt="Nathan Pearson" style={heroAStyles.portrait} />
          <div style={heroAStyles.portraitOverlay}></div>
        </div>
        <div style={heroAStyles.yearStamp}>EST.<br />1991</div>
      </div>

      {/* Scroll indicator */}
      <div style={heroAStyles.scrollIndicator}>
        <div style={heroAStyles.scrollLine}></div>
        <span style={heroAStyles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
};

const heroAStyles = {
  section: {
    background: '#0A0A0A',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    position: 'relative',
    borderBottom: '1px solid #2A2A2A',
    overflow: 'hidden',
  },
  left: {
    padding: '120px 64px 80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 24,
    maxWidth: 800,
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#4A4742',
  },
  lockup: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.88,
    gap: 0,
  },
  postnominals: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#9A9590',
    textTransform: 'uppercase',
    marginTop: 10,
    marginLeft: 4,
  },
  nathan: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(80px, 11vw, 148px)',
    color: '#F5F0E8',
    letterSpacing: '0.01em',
    lineHeight: 0.9,
  },
  pearson: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(80px, 11vw, 148px)',
    color: '#FFE234',
    letterSpacing: '0.01em',
    lineHeight: 0.9,
    marginLeft: 'clamp(20px, 4vw, 64px)',
  },
  cycleRow: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(28px, 3.5vw, 48px)',
    color: '#9A9590',
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    marginTop: 8,
  },
  cycleStatic: {
    color: '#9A9590',
  },
  cycleWord: {
    transition: 'opacity 300ms ease, transform 300ms ease',
    display: 'inline-block',
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
    color: '#9A9590',
    lineHeight: 1.65,
    maxWidth: 480,
  },
  pillRow: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '5px 14px',
    borderRadius: 999,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    flexShrink: 0,
  },
  ctaRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 8,
  },
  ctaPrimary: {
    display: 'inline-block',
    padding: '13px 32px',
    background: '#FFE234',
    color: '#0A0A0A',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  ctaOutline: {
    display: 'inline-block',
    padding: '13px 32px',
    background: 'transparent',
    color: '#F5F0E8',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: '1px solid #404040',
  },
  right: {
    position: 'relative',
    overflow: 'hidden',
  },
  portraitWrap: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  },
  portrait: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    filter: 'contrast(1.08) grayscale(0.15)',
    display: 'block',
  },
  portraitOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, #0A0A0A 0%, transparent 25%)',
  },
  yearStamp: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 12,
    letterSpacing: '0.2em',
    color: 'rgba(245,240,232,0.18)',
    textAlign: 'center',
    lineHeight: 1.3,
    zIndex: 2,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 40,
    left: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  scrollLine: {
    width: 1,
    height: 40,
    background: 'linear-gradient(to bottom, transparent, #4A4742)',
  },
  scrollLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#4A4742',
  },
};

Object.assign(window, { HeroA });
