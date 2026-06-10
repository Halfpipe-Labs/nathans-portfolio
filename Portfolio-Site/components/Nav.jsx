// Nav.jsx — Fixed navigation

const Nav = ({ activeSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = window.innerWidth <= 768;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer when switching to desktop
  React.useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const handleNavClick = () => setMenuOpen(false);

  const links = [
    { href: '#pillars', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#writing', label: 'Writing' },
    { href: '#featured', label: 'Press' },
    { href: '#links', label: 'Links' },
  ];

  const isActivated = scrolled || menuOpen;

  return (
    <>
      <nav style={{
        ...navStyles.nav,
        padding: isMobile ? '0 20px' : '0 64px',
        background: isActivated ? 'rgba(10,10,10,0.96)' : 'transparent',
        borderBottom: isActivated ? '1px solid #1E1E1E' : '1px solid transparent',
        backdropFilter: isActivated ? 'blur(16px)' : 'none',
      }}>
        <a href="#hero" style={navStyles.nameLockup} onClick={handleNavClick}>
          <span style={navStyles.nathan}>NATHAN</span>
          <span style={navStyles.pearson}>PEARSON</span>
          {!isMobile && (
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
          )}
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={navStyles.hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span style={{
              ...navStyles.bar,
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              transition: 'transform 220ms ease',
            }} />
            <span style={{
              ...navStyles.bar,
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 150ms ease',
            }} />
            <span style={{
              ...navStyles.bar,
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              transition: 'transform 220ms ease',
            }} />
          </button>
        ) : (
          <ul style={navStyles.links}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" style={{
                  ...navStyles.link,
                  color: activeSection === l.href.replace('#', '') ? '#F5F0E8' : '#9A9590',
                }}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="mailto:nathan@nathanknowsnothing.co.uk" className="contact-btn" style={navStyles.contactBtn}>
                Get in touch
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 60,
          left: 0,
          right: 0,
          zIndex: 199,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #1E1E1E',
          padding: '8px 20px 28px',
          display: 'flex',
          flexDirection: 'column',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 260ms ease, opacity 200ms ease',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: activeSection === l.href.replace('#', '') ? '#F5F0E8' : '#9A9590',
                padding: '18px 0',
                borderBottom: i < links.length - 1 ? '1px solid #1E1E1E' : 'none',
                display: 'block',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:nathan@nathanknowsnothing.co.uk"
            onClick={handleNavClick}
            className="contact-btn"
            style={{
              ...navStyles.contactBtn,
              marginTop: 24,
              display: 'inline-block',
              alignSelf: 'flex-start',
            }}
          >
            Get in touch
          </a>
        </div>
      )}
    </>
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
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 4px',
  },
  bar: {
    display: 'block',
    width: 22,
    height: 2,
    background: '#F5F0E8',
    transformOrigin: 'center',
  },
};

Object.assign(window, { Nav });
