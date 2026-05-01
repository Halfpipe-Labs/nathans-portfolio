// Footer.jsx — Site footer

const Footer = () => (
  <footer style={footerStyles.footer} data-screen-label="Footer">
    <div style={footerStyles.inner}>
      <div style={footerStyles.top}>
        <div style={footerStyles.nameLockup}>
          <span style={footerStyles.nathan}>NATHAN</span>
          <span style={footerStyles.pearson}>PEARSON</span>
          <span style={footerStyles.postnominals}>MCIM · MRI</span>
        </div>
        <div style={footerStyles.tagline}>
          Marketer. Builder. Writer. Advocate.<br />North Norfolk's finest export.
        </div>
      </div>

      <div style={footerStyles.divider}></div>

      <div style={footerStyles.mid}>
        <div style={footerStyles.linkGroup}>
          <div style={footerStyles.linkGroupLabel}>Projects</div>
          {[
            { label: 'Lumos Digital', url: 'https://lumosdigital.co.uk', color: '#FFE234' },
            { label: 'PocketSERP', url: 'https://pocketserp.com', color: '#FFE234' },
            { label: 'FocusUnlocker', url: 'https://focusunlocker.co.uk', color: '#85B7EB' },
            { label: 'ADHD UK Ambassador', url: 'https://adhduk.co.uk/2026/03/24/nathan-pearson/', color: '#FF6B6B' },
            { label: 'KL&WN Pride', url: 'https://klwnpride.org', color: '#C084FC' },
            { label: 'Half Pipe Labs', url: 'https://halfpipelabs.co.uk', color: '#85B7EB' },
            { label: 'Barely Thriving Plant Care', url: 'https://barelythriving.halfpipelabs.co.uk', color: '#85B7EB' },
          ].map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ ...footerStyles.footerLink, color: link.color }}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={footerStyles.linkGroup}>
          <div style={footerStyles.linkGroupLabel}>Writing</div>
          {[
            { label: 'Nathan Knows Nothing', url: 'https://nathanknowsnothing.substack.com', color: '#5DCAA5' },
          ].map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ ...footerStyles.footerLink, color: link.color }}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={footerStyles.linkGroup}>
          <div style={footerStyles.linkGroupLabel}>Socials</div>
          {[
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nathan-pearson/', color: '#9A9590' },
            { label: 'Instagram', url: 'https://www.instagram.com/nathandoesmarketing/', color: '#9A9590' },
          ].map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ ...footerStyles.footerLink, color: link.color }}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={footerStyles.contactBlock}>
          <div style={footerStyles.linkGroupLabel}>Get in touch</div>
          <a href="mailto:nathan@nathanknowsnothing.co.uk" style={footerStyles.emailLink}>
            nathan@nathanknowsnothing.co.uk
          </a>
        </div>
      </div>

      <div style={footerStyles.divider}></div>

      <div style={footerStyles.bottom}>
        <div style={footerStyles.copyright}>
          © {new Date().getFullYear()} Nathan Pearson. North Norfolk, UK.
        </div>
        <div style={footerStyles.builtWith}>
          Made with caffeine and ADHD.
        </div>
      </div>
    </div>
  </footer>
);

const footerStyles = {
  footer: {
    background: '#0A0A0A',
    padding: '80px 0 48px',
    borderTop: '1px solid #1E1E1E',
  },
  inner: {
    padding: '0 64px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 48,
  },
  nameLockup: {
    display: 'flex',
    flexDirection: 'column',
  },
  nathan: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 56,
    lineHeight: 0.88,
    color: '#F5F0E8',
    letterSpacing: '0.01em',
  },
  pearson: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 56,
    lineHeight: 0.88,
    color: '#FFE234',
    letterSpacing: '0.01em',
    marginLeft: 28,
  },
  postnominals: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    color: '#9A9590',
    textTransform: 'uppercase',
    marginLeft: 28,
    marginTop: 8,
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: '#4A4742',
    lineHeight: 1.65,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    background: '#1E1E1E',
    marginBottom: 40,
  },
  mid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 32,
    marginBottom: 40,
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  linkGroupLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#4A4742',
    marginBottom: 4,
  },
  footerLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    textDecoration: 'none',
    opacity: 0.8,
    transition: 'opacity 150ms ease',
  },
  contactBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  emailLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: '#FFE234',
    textDecoration: 'none',
    fontWeight: 500,
    opacity: 0.85,
    transition: 'opacity 150ms ease',
    wordBreak: 'break-all',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: '#4A4742',
    letterSpacing: '0.06em',
  },
  builtWith: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: '#4A4742',
    letterSpacing: '0.04em',
  },
};

Object.assign(window, { Footer });
