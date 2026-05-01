// Nav.jsx — Fixed navigation

const Nav = ({ activeSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#pillars', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#writing', label: 'Writing' },
    { href: '#links', label: 'Links' },
  ];

  return (
    <nav style={{
      ...navStyles.nav,
      background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <a href="#hero" style={navStyles.nameLockup}>
        <span style={navStyles.nathan}>NATHAN</span>
        <span style={navStyles.pearson}>PEARSON</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: '#9A9590',
          alignSelf: 'flex-end',
          paddingBottom: 2,
          textTransform: 'uppercase',
        }}>MCIM · MRI</span>
      </a>
      <ul style={navStyles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              ...navStyles.link,
              color: activeSection === l.href.replace('#','') ? '#F5F0E8' : '#9A9590',
            }}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="mailto:nathan@nathanknowsnothing.co.uk" style={navStyles.contactBtn}>
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

const navStyles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 64px',
    height: 60,
    transition: 'background 200ms ease, border-color 200ms ease, backdrop-filter 200ms ease',
  },
  nameLockup: {
    display: 'flex',
    gap: 6,
    textDecoration: 'none',
    alignItems: 'baseline',
  },
  nathan: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 20,
    color: '#F5F0E8',
    letterSpacing: '0.04em',
  },
  pearson: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 20,
    color: '#FFE234',
    letterSpacing: '0.04em',
  },
  links: {
    display: 'flex',
    gap: 32,
    listStyle: 'none',
    alignItems: 'center',
  },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 150ms ease',
  },
  contactBtn: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '8px 18px',
    border: '1px solid #FFE234',
    color: '#FFE234',
    transition: 'background 150ms ease, color 150ms ease',
  },
};

Object.assign(window, { Nav });
