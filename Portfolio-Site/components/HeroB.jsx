// HeroB.jsx — Full-bleed portrait bg, name overlaid massive, staggered entrance animation

const HeroB = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const pills = [
    { label: 'Marketer', color: '#FFE234' },
    { label: 'ADHD Advocate', color: '#FF6B6B' },
    { label: 'Writer', color: '#5DCAA5' },
    { label: 'Builder', color: '#85B7EB' },
  ];

  return (
    <section style={heroBStyles.section} data-screen-label="Hero">
      {/* Full-bleed portrait */}
      <div style={heroBStyles.portraitBg}>
        <img src="assets/portrait.jpg" alt="" style={heroBStyles.portraitImg} />
        <div style={heroBStyles.bgOverlay}></div>
        <div style={heroBStyles.bgOverlayBottom}></div>
      </div>

      {/* Content */}
      <div style={heroBStyles.content}>
        {/* Eyebrow */}
        <div style={{
          ...heroBStyles.eyebrow,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(12px)',
          transition: 'opacity 600ms ease 100ms, transform 600ms ease 100ms',
        }}>
          North Norfolk, UK
        </div>

        {/* Name lockup — huge */}
        <div style={heroBStyles.lockup}>
          <div style={{
            ...heroBStyles.nathanLine,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateX(-30px)',
            transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
          }}>
            NATHAN
          </div>
          <div style={{
            ...heroBStyles.pearsonLine,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateX(30px)',
            transition: 'opacity 700ms ease 350ms, transform 700ms ease 350ms',
          }}>
            PEARSON
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: '#9A9590',
            textTransform: 'uppercase',
            marginTop: 12,
            marginLeft: 4,
            opacity: mounted ? 1 : 0,
            transition: 'opacity 600ms ease 500ms',
          }}>MCIM · MRI</div>
        </div>

        {/* Divider line */}
        <div style={{
          ...heroBStyles.divider,
          width: mounted ? '100%' : '0%',
          transition: 'width 800ms ease 500ms',
        }}></div>

        {/* Bottom row: tagline + pills */}
        <div style={{
          ...heroBStyles.bottomRow,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(16px)',
          transition: 'opacity 600ms ease 700ms, transform 600ms ease 700ms',
        }}>
          <p style={heroBStyles.tagline}>
            Digital marketer. ADHD advocate.<br />
            Writer. Builder. Father. Plant owner.
          </p>
          <div style={heroBStyles.rightCol}>
            <div style={heroBStyles.pillRow}>
              {pills.map(p => (
                <span key={p.label} style={{ ...heroBStyles.pill, border: `1px solid ${p.color}`, color: p.color }}>
                  {p.label}
                </span>
              ))}
            </div>
            <div style={heroBStyles.ctaRow}>
              <a href="#pillars" style={heroBStyles.ctaPrimary}>See my work</a>
              <a href="mailto:nathan@nathanknowsnothing.co.uk" style={heroBStyles.ctaOutline}>Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroBStyles = {
  section: {
    background: '#0A0A0A',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderBottom: '1px solid #2A2A2A',
    overflow: 'hidden',
  },
  portraitBg: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  },
  portraitImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '65% top',
    filter: 'contrast(1.1) grayscale(0.3) brightness(0.7)',
    display: 'block',
  },
  bgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.2) 60%, rgba(10,10,10,0.1) 100%)',
  },
  bgOverlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',
    background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.85) 50%, transparent 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '0 64px 64px',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#9A9590',
    marginBottom: 16,
  },
  lockup: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.85,
    marginBottom: 24,
  },
  nathanLine: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(100px, 15vw, 200px)',
    color: '#F5F0E8',
    letterSpacing: '0.01em',
    lineHeight: 0.87,
  },
  pearsonLine: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(100px, 15vw, 200px)',
    color: '#FFE234',
    letterSpacing: '0.01em',
    lineHeight: 0.87,
    marginLeft: 'clamp(32px, 6vw, 100px)',
  },
  divider: {
    height: 1,
    background: 'rgba(245,240,232,0.15)',
    marginBottom: 28,
    overflow: 'hidden',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 40,
    flexWrap: 'wrap',
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
    color: '#9A9590',
    lineHeight: 1.65,
    maxWidth: 340,
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-end',
  },
  pillRow: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
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
  ctaRow: {
    display: 'flex',
    gap: 12,
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
    border: '1px solid rgba(245,240,232,0.3)',
  },
};

Object.assign(window, { HeroB });
