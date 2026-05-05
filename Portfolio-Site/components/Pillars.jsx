// Pillars.jsx — Bento grid layout for four identity pillars

const pillarsData = [
  {
    id: 'marketer',
    color: '#FFE234',
    label: 'Marketer',
    title: 'Lumos Digital',
    subtitle: 'Fractional CMOs at a Fraction of the Cost',
    body: 'Turning chaos into clarity for scale-ready brands both B2C and B2B. Full-spectrum digital marketing for businesses that want real results.\n\nBroad Marketing for Norfolk small businesses, and PocketSERP — project-based work for small businesses nationally.',
    links: [
      { label: 'Lumos Digital', url: 'https://lumosdigital.co.uk' },
      { label: 'Broad Marketing', url: 'https://broadmarketing.co.uk' },
      { label: 'PocketSERP', url: 'https://pocketserp.com' },
    ],
    span: 'wide',
  },
  {
    id: 'builder',
    color: '#85B7EB',
    label: 'Builder',
    title: 'Half Pipe Labs',
    subtitle: 'Indie App Development Studio',
    body: 'Indie products built by two best friends slowly and shipped honestly. Including but not limited to Barely Thriving Plant Care and FocusUnlocker. Click the links below to find out more.',
    links: [
      { label: 'Half Pipe Labs', url: 'https://halfpipelabs.co.uk' },
      { label: 'Barely Thriving Plant Care', url: 'https://barelythriving.halfpipelabs.co.uk' },
      { label: 'FocusUnlocker', url: 'https://focusunlocker.co.uk' },
    ],
    span: 'wide',
  },
  {
    id: 'adhd',
    color: '#FF6B6B',
    label: 'ADHD Advocate',
    title: 'ADHD UK Ambassador',
    subtitle: 'Advocacy & Community',
    body: 'ADHD UK Ambassador. Campaigning for change, spreading awareness, helping others and raising money for ADHD UK.',
    links: [
      { label: 'ADHD UK Profile', url: 'https://adhduk.co.uk/2026/03/24/nathan-pearson/' },
    ],
    span: 'normal',
  },
  {
    id: 'pride',
    color: '#C084FC',
    label: 'Community',
    title: "King's Lynn & West Norfolk Pride",
    subtitle: 'Digital Lead',
    body: 'Digital lead for KL&WN Pride — helping amplify queer voices and build community in West Norfolk.',
    links: [
      { label: 'KL&WN Pride', url: 'https://klwnpride.org' },
    ],
    span: 'normal',
  },
  {
    id: 'writer',
    color: '#5DCAA5',
    label: 'Writer',
    title: 'Nathan Knows Nothing',
    subtitle: 'Essays on the Messiness of Being Human',
    body: 'Essays on philosophy, psychology, history and society. Exploring what it means to be human.',
    links: [
      { label: 'Read on Substack', url: 'https://nathanknowsnothing.substack.com' },
    ],
    span: 'normal',
  },
];

const PillarCard = ({ pillar }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...pillarsStyles.card,
        border: `1px solid ${hovered ? pillar.color : '#2A2A2A'}`,
        background: hovered ? '#131313' : '#111111',
        transition: 'border-color 150ms ease, background 150ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div style={pillarsStyles.cardTop}>
        <div style={{ ...pillarsStyles.cardLabel, color: pillar.color }}>
          <span style={{ ...pillarsStyles.labelDot, background: pillar.color }}></span>
          {pillar.label}
        </div>
        <div style={{
          ...pillarsStyles.cardArrow,
          color: hovered ? pillar.color : '#4A4742',
          transition: 'color 150ms ease, transform 150ms ease',
          transform: hovered ? 'translate(2px, -2px)' : 'none',
        }}>↗</div>
      </div>

      {/* Title */}
      <div style={{
        ...pillarsStyles.cardTitle,
        color: hovered ? pillar.color : '#F5F0E8',
        transition: 'color 150ms ease',
      }}>
        {pillar.title}
      </div>
      <div style={pillarsStyles.cardSubtitle}>{pillar.subtitle}</div>
      <div style={pillarsStyles.cardBody}>{pillar.body}</div>

      {/* Links */}
      <div style={pillarsStyles.linkRow}>
        {pillar.links.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...pillarsStyles.link, color: pillar.color }}
            onClick={e => e.stopPropagation()}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

const Pillars = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={pillarsStyles.section} id="pillars" data-screen-label="Pillars">
      <div style={{
        ...pillarsStyles.inner,
        padding: isMobile ? '0 20px' : '0 64px',
      }}>
        <div style={{
          ...pillarsStyles.sectionHeader,
          gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
          marginBottom: isMobile ? 40 : 56,
        }}>
          <div style={pillarsStyles.eyebrow}>What I do</div>
          <h2 style={{
            ...pillarsStyles.sectionTitle,
            gridColumn: isMobile ? '1' : '1 / 2',
            gridRow: isMobile ? 'auto' : '2',
          }}>MANY THINGS.<br />ALL REAL.</h2>
          <p style={{
            ...pillarsStyles.sectionDesc,
            gridColumn: isMobile ? '1' : '3 / 4',
            gridRow: isMobile ? 'auto' : '2',
            maxWidth: isMobile ? '100%' : 320,
          }}>
            I don't have a niche. I have many. Here's where my time goes.
          </p>
        </div>
        <div style={{
          ...pillarsStyles.gridTop,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        }}>
          {pillarsData.slice(0, 2).map(p => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
        <div style={{
          ...pillarsStyles.gridBottom,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
        }}>
          {pillarsData.slice(2).map(p => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const pillarsStyles = {
  section: {
    background: '#111111',
    borderBottom: '1px solid #2A2A2A',
    padding: '96px 0',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'grid',
    alignItems: 'end',
    gap: 32,
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#9A9590',
    gridColumn: '1 / -1',
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 72,
    lineHeight: 0.92,
    color: '#F5F0E8',
  },
  sectionDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: '#9A9590',
    lineHeight: 1.6,
    alignSelf: 'end',
  },
  gridTop: {
    display: 'grid',
    gap: 1,
    background: '#2A2A2A',
    marginBottom: 1,
  },
  gridBottom: {
    display: 'grid',
    gap: 1,
    background: '#2A2A2A',
  },
  card: {
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    cursor: 'default',
    minHeight: 260,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  labelDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    flexShrink: 0,
  },
  cardArrow: {
    fontSize: 18,
  },
  cardTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 30,
    lineHeight: 1,
  },
  cardSubtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#4A4742',
  },
  cardBody: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: '#9A9590',
    lineHeight: 1.65,
    flex: 1,
    whiteSpace: 'pre-line',
  },
  linkRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textDecoration: 'none',
    transition: 'opacity 150ms ease',
  },
};

Object.assign(window, { Pillars, PillarCard });
