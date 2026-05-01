// About.jsx — About section with portrait + bio

const About = () => {
  const stats = [
    { val: '10+', label: 'Years in digital marketing' },
    { val: '9', label: 'Active projects' },
    { val: '∞', label: 'Projects started, never finished' },
  ];

  return (
    <section style={aboutStyles.section} id="about" data-screen-label="About">
      <div style={aboutStyles.inner}>
        <div style={aboutStyles.grid}>
          {/* Portrait */}
          <div style={aboutStyles.portraitCol}>
            <div style={aboutStyles.portraitFrame}>
              <img
                src="assets/portrait2.jpg"
                alt="Nathan Pearson"
                style={aboutStyles.portrait}
              />
            </div>
            <div style={aboutStyles.portraitCaption}>North Norfolk, UK</div>
          </div>

          {/* Text */}
          <div style={aboutStyles.textCol}>
            <div style={aboutStyles.eyebrow}>About</div>
            <h2 style={aboutStyles.heading}>
              I DO A LOT.<br />
              <span style={{ color: '#FFE234' }}>ALL</span><br />
              OF IT.
            </h2>
            <div style={aboutStyles.bodyText}>
              <p>
                I'm Nathan. I'm a full-spectrum digital marketer, indie app builder, Substack writer,
                and community advocate — usually all in the same week, sometimes all in the same hour.
              </p>
              <p>
                I was diagnosed with ADHD as a child. It explains a lot. I've turned that
                chaos into a career as a full-spectrum digital marketer, indie app
                developer, and honest long-form writer. None of it is polished. Most of it works.
              </p>
              <p>
                Based in the wilds of North Norfolk. Husband. Father. Cat owner. Plant grower. Tattoo collector. Vans wearer. KL&WN Pride digital lead.
              </p>
            </div>

            <div style={aboutStyles.statRow}>
              {stats.map(s => (
                <div key={s.label} style={aboutStyles.stat}>
                  <div style={aboutStyles.statVal}>{s.val}</div>
                  <div style={aboutStyles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={aboutStyles.contactRow}>
              <a href="mailto:nathan@nathanknowsnothing.co.uk" style={aboutStyles.contactBtn}>
                Get in touch ↗
              </a>
              <div style={aboutStyles.socialRow}>
                {[
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nathan-pearson/' },
                  { label: 'Instagram', url: 'https://www.instagram.com/nathandoesmarketing/' },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={aboutStyles.socialLink}>
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutStyles = {
  section: {
    background: '#0A0A0A',
    borderBottom: '1px solid #2A2A2A',
    padding: '96px 0',
  },
  inner: {
    padding: '0 64px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '360px 1fr',
    gap: 96,
    alignItems: 'start',
  },
  portraitCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    position: 'sticky',
    top: 80,
  },
  portraitFrame: {
    border: '1px solid #2A2A2A',
    overflow: 'hidden',
    aspectRatio: '3/4',
  },
  portrait: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    filter: 'contrast(1.06)',
    display: 'block',
  },
  portraitCaption: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    color: '#4A4742',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  textCol: {
    paddingTop: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#9A9590',
  },
  heading: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 72,
    lineHeight: 0.92,
    color: '#F5F0E8',
  },
  bodyText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  statRow: {
    display: 'flex',
    gap: 40,
    paddingTop: 28,
    borderTop: '1px solid #2A2A2A',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statVal: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 44,
    color: '#FFE234',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: '#9A9590',
    lineHeight: 1.4,
    maxWidth: 110,
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    paddingTop: 4,
  },
  contactBtn: {
    display: 'inline-block',
    padding: '12px 28px',
    background: '#FFE234',
    color: '#0A0A0A',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  socialRow: {
    display: 'flex',
    gap: 20,
  },
  socialLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: '#9A9590',
    textDecoration: 'none',
    transition: 'color 150ms ease',
  },
};

Object.assign(window, { About });
