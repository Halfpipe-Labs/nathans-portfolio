// Links.jsx — All projects and external links

const linksData = [
  { label: 'Lumos Digital', desc: 'Fractional CMOs at a fraction of the cost', url: 'https://lumosdigital.co.uk', color: '#FFE234', pillar: 'Marketer' },
  { label: 'Broad Marketing', desc: 'Specialist digital marketing for Norfolk\'s small businesses', url: 'https://broadmarketing.co.uk', color: '#FFE234', pillar: 'Marketer' },
  { label: 'PocketSERP', desc: 'Digital marketing projects for our nation\'s small businesses', url: 'https://pocketserp.com', color: '#FFE234', pillar: 'Marketer' },
  { label: 'ADHD UK Ambassador', desc: 'ADHD UK advocacy profile', url: 'https://adhduk.co.uk/2026/03/24/nathan-pearson/', color: '#FF6B6B', pillar: 'ADHD Advocate' },
  { label: 'Nathan Knows Nothing', desc: 'Essays on the messiness of being human', url: 'https://nathanknowsnothing.substack.com', color: '#5DCAA5', pillar: 'Writer' },
  { label: 'Half Pipe Labs', desc: 'Indie app development studio', url: 'https://halfpipelabs.co.uk', color: '#85B7EB', pillar: 'Builder' },
  { label: 'Barely Thriving Plant Care', desc: 'The last plant care app you\'ll ever need', url: 'https://barelythriving.halfpipelabs.co.uk', color: '#85B7EB', pillar: 'Builder' },
  { label: 'FocusUnlocker', desc: 'Task manager for people with ADHD', url: 'https://focusunlocker.co.uk', color: '#85B7EB', pillar: 'Builder' },
  { label: 'LinkedIn', desc: 'Professional profile', url: 'https://www.linkedin.com/in/nathan-pearson/', color: '#9A9590', pillar: 'Socials' },
  { label: 'Instagram', desc: '@nathandoesmarketing', url: 'https://www.instagram.com/nathandoesmarketing/', color: '#9A9590', pillar: 'Socials' },
];

const LinkRow = ({ item, isLast, isMobile }) => {
  const [hovered, setHovered] = React.useState(false);

  if (isMobile) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...linksStyles.rowMobile,
          borderBottom: isLast ? 'none' : '1px solid #1E1E1E',
          background: hovered ? '#0D0D0D' : 'transparent',
          textDecoration: 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            ...linksStyles.pill,
            border: `1px solid ${item.color === '#9A9590' ? '#2A2A2A' : item.color}`,
            color: item.color,
          }}>
            {item.pillar}
          </span>
          <span style={{
            ...linksStyles.arrow,
            color: hovered ? item.color : '#4A4742',
            transform: hovered ? 'translate(2px, -2px)' : 'none',
            transition: 'color 150ms ease, transform 150ms ease',
          }}>↗</span>
        </div>
        <span style={{
          ...linksStyles.label,
          color: hovered ? item.color : '#F5F0E8',
          transition: 'color 150ms ease',
        }}>
          {item.label}
        </span>
      </a>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...linksStyles.row,
        borderBottom: isLast ? 'none' : '1px solid #1E1E1E',
        background: hovered ? '#0D0D0D' : 'transparent',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        ...linksStyles.pill,
        border: `1px solid ${item.color === '#9A9590' ? '#2A2A2A' : item.color}`,
        color: item.color,
      }}>
        {item.pillar}
      </span>
      <span style={{
        ...linksStyles.label,
        color: hovered ? item.color : '#F5F0E8',
        transition: 'color 150ms ease',
      }}>
        {item.label}
      </span>
      <span style={linksStyles.desc}>{item.desc}</span>
      <span style={{
        ...linksStyles.arrow,
        color: hovered ? item.color : '#4A4742',
        transform: hovered ? 'translate(2px, -2px)' : 'none',
        transition: 'color 150ms ease, transform 150ms ease',
      }}>↗</span>
    </a>
  );
};

const Links = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={linksStyles.section} id="links" data-screen-label="Links">
      <div style={{
        ...linksStyles.inner,
        padding: isMobile ? '0 20px' : '0 64px',
      }}>
        <div style={linksStyles.eyebrow}>Everywhere I am</div>
        <h2 style={linksStyles.heading}>ALL THE LINKS</h2>
        <div style={linksStyles.list}>
          {linksData.map((item, i) => (
            <LinkRow
              key={item.label}
              item={item}
              isLast={i === linksData.length - 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const linksStyles = {
  section: {
    background: '#0A0A0A',
    borderBottom: '1px solid #2A2A2A',
    padding: '96px 0',
  },
  inner: {
    maxWidth: 960,
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#9A9590',
    marginBottom: 10,
  },
  heading: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 72,
    color: '#F5F0E8',
    lineHeight: 0.92,
    marginBottom: 48,
  },
  list: {
    borderTop: '1px solid #2A2A2A',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '160px 220px 1fr 32px',
    gap: 24,
    padding: '20px 0',
    alignItems: 'center',
    transition: 'background 150ms ease',
  },
  rowMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: '16px 0',
    transition: 'background 150ms ease',
  },
  pill: {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: 999,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    fontWeight: 600,
  },
  desc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: '#9A9590',
  },
  arrow: {
    fontSize: 18,
    textAlign: 'right',
  },
};

Object.assign(window, { Links, LinkRow });
