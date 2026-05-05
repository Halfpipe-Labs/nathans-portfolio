// HeroC.jsx — Typographic maximalism: staggered oversized letters, marquee, bold editorial

const HeroC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const letters = ['N','A','T','H','A','N'];
  const letters2 = ['P','E','A','R','S','O','N'];

  const nameFontSize = isMobile ? 'clamp(52px, 13vw, 172px)' : 'clamp(80px, 13vw, 172px)';

  return (
    <section style={heroCStyles.section} data-screen-label="Hero">
      {/* Marquee ticker */}
      <div style={heroCStyles.ticker}>
        <div style={{
          ...heroCStyles.tickerInner,
          transform: `translateX(-${(scrollY * 0.15) % 400}px)`,
        }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={heroCStyles.tickerItem}>
              MARKETER · ADHD ADVOCATE · WRITER · BUILDER · NORTH NORFOLK ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div style={{
        ...heroCStyles.inner,
        padding: isMobile ? '0 20px 48px' : '0 64px 64px',
      }}>
        {/* Giant staggered name */}
        <div style={heroCStyles.nameMega}>
          {/* NATHAN row */}
          <div style={heroCStyles.nameRow1}>
            {letters.map((l, i) => (
              <span
                key={i}
                style={{
                  ...heroCStyles.nameLetter,
                  fontSize: nameFontSize,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'none' : `translateY(${30 + i * 8}px)`,
                  transition: `opacity 500ms ease ${i * 60}ms, transform 600ms ease ${i * 60}ms`,
                }}
              >
                {l}
              </span>
            ))}
          </div>
          {/* PEARSON row — offset right, yellow */}
          <div style={heroCStyles.nameRow2}>
            {letters2.map((l, i) => (
              <span
                key={i}
                style={{
                  ...heroCStyles.nameLetter2,
                  fontSize: nameFontSize,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'none' : `translateY(${30 + i * 8}px)`,
                  transition: `opacity 500ms ease ${300 + i * 55}ms, transform 600ms ease ${300 + i * 55}ms`,
                }}
              >
                {l}
              </span>
            ))}
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: '#9A9590',
            textTransform: 'uppercase',
            marginTop: 12,
            marginLeft: 'clamp(28px, 5vw, 80px)',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 600ms ease 700ms',
          }}>MCIM · MRI</div>
        </div>

        {/* Horizontal rule with metadata */}
        <div style={{
          ...heroCStyles.metaBar,
          opacity: mounted ? 1 : 0,
          transition: 'opacity 600ms ease 900ms',
        }}>
          <div style={heroCStyles.metaBarLine}></div>
          <div style={heroCStyles.metaItems}>
            {isMobile ? (
              <span style={heroCStyles.metaItem}>North Norfolk · Est. 1991</span>
            ) : (
              <>
                <span style={heroCStyles.metaItem}>North Norfolk, UK</span>
                <span style={heroCStyles.metaDot}>·</span>
                <span style={heroCStyles.metaItem}>Est. 1991</span>
                <span style={heroCStyles.metaDot}>·</span>
                <span style={heroCStyles.metaItem}>9 active projects</span>
              </>
            )}
          </div>
          <div style={heroCStyles.metaBarLine}></div>
        </div>

        {/* Bottom content: bio + pills + CTAs */}
        <div style={{
          ...heroCStyles.bottom,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: isMobile ? 32 : 40,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(20px)',
          transition: 'opacity 600ms ease 1000ms, transform 600ms ease 1000ms',
        }}>
          <div style={heroCStyles.bottomLeft}>
            <p style={heroCStyles.tagline}>
              Digital marketer. ADHD advocate.<br />Writer. Builder. Father. Plant Owner.<br /><br />Voted "most handsome man of the year"<br />by my wife 10 years in a row.
            </p>
            <div style={heroCStyles.ctaRow}>
              <a href="#pillars" style={heroCStyles.ctaPrimary}>Explore my work</a>
              <a href="mailto:nathan@nathanknowsnothing.co.uk" className="cta-outline" style={heroCStyles.ctaOutline}>Get in touch</a>
            </div>
          </div>
          <div style={{
            ...heroCStyles.bottomRight,
            alignItems: isMobile ? 'flex-start' : 'flex-end',
          }}>
            {/* Marketer — bracketed box */}
            <div style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 22,
              letterSpacing: '0.12em',
              color: '#FFE234',
              border: '2px solid #FFE234',
              padding: '6px 20px 4px',
            }}>
              <span style={{ position: 'absolute', left: -10, top: '50%', transform: 'translateY(-50%)', color: '#FFE234', opacity: 0.35, fontSize: 28, fontWeight: 300 }}>[</span>
              Marketer
              <span style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)', color: '#FFE234', opacity: 0.35, fontSize: 28, fontWeight: 300 }}>]</span>
            </div>

            {/* ADHD Advocate — dashed, tilted */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 18,
              letterSpacing: '0.12em',
              color: '#FF6B6B',
              border: '2px dashed #FF6B6B',
              padding: '8px 18px 6px',
              transform: 'rotate(-1.2deg)',
            }}>
              ADHD Advocate
            </div>

            {/* Writer — underline with sub-label */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: 2 }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#5DCAA5',
                opacity: 0.6,
                textTransform: 'uppercase',
              }}>Substack</span>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 20,
                letterSpacing: '0.12em',
                color: '#5DCAA5',
                borderBottom: '3px solid #5DCAA5',
                padding: '4px 4px 6px',
              }}>Writer</div>
            </div>

            {/* Builder — filled stamp, skewed */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 20,
              letterSpacing: '0.12em',
              color: '#0A0A0A',
              background: '#85B7EB',
              padding: '7px 16px 5px',
              border: '2px solid #85B7EB',
              transform: 'skewX(-3deg)',
            }}>
              Builder
            </div>
          </div>
        </div>
      </div>

      {/* Portrait — editorial positioned — desktop only */}
      {!isMobile && (
        <div style={{
          ...heroCStyles.portraitSlot,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'scale(0.97)',
          transition: 'opacity 800ms ease 400ms, transform 800ms ease 400ms',
        }}>
          <img src="assets/portrait.jpg" alt="Nathan Pearson" style={heroCStyles.portrait} />
          <div style={heroCStyles.portraitOverlay}></div>
        </div>
      )}
    </section>
  );
};

const heroCStyles = {
  section: {
    background: '#0A0A0A',
    minHeight: '100vh',
    position: 'relative',
    borderBottom: '1px solid #2A2A2A',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ticker: {
    borderBottom: '1px solid #1E1E1E',
    borderTop: '1px solid #1E1E1E',
    overflow: 'hidden',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    background: '#111111',
    flexShrink: 0,
  },
  tickerInner: {
    display: 'flex',
    whiteSpace: 'nowrap',
    willChange: 'transform',
  },
  tickerItem: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.18em',
    color: '#4A4742',
    paddingRight: 0,
  },
  inner: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    zIndex: 2,
  },
  nameMega: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.82,
    marginBottom: 32,
    gap: 0,
  },
  nameRow1: {
    display: 'flex',
    gap: 0,
  },
  nameRow2: {
    display: 'flex',
    gap: 0,
    marginLeft: 'clamp(28px, 5vw, 80px)',
  },
  nameLetter: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#F5F0E8',
    letterSpacing: '-0.01em',
    display: 'inline-block',
    lineHeight: 0.85,
  },
  nameLetter2: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#FFE234',
    letterSpacing: '-0.01em',
    display: 'inline-block',
    lineHeight: 0.85,
  },
  metaBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginBottom: 32,
  },
  metaBarLine: {
    flex: 1,
    height: 1,
    background: '#2A2A2A',
  },
  metaItems: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexShrink: 0,
  },
  metaItem: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#9A9590',
  },
  metaDot: {
    color: '#4A4742',
    fontSize: 10,
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bottomLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
    color: '#9A9590',
    lineHeight: 1.65,
    maxWidth: 360,
  },
  ctaRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
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
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  portraitSlot: {
    position: 'absolute',
    top: 36,
    right: 0,
    width: '32%',
    bottom: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  portrait: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    filter: 'grayscale(0.4) contrast(1.05) brightness(0.65)',
    display: 'block',
  },
  portraitOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.3) 40%, transparent 100%)',
  },
};

Object.assign(window, { HeroC });
