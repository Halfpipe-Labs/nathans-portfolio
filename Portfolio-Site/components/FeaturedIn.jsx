// FeaturedIn.jsx — Press / "Featured in" articles section

const featuredArticles = [
  {
    date: '7th April 2026',
    title: 'Businesses Scramble to Get Noticed by AI Search',
    publication: 'BBC News (Technology)',
    url: 'https://www.bbc.co.uk/news/articles/c70n2rjgxeyo',
    logo: 'assets/logos/BBC_News_2022_(Alt).svg.png', // drop in /assets/logos/...svg
  },
  {
    date: '8th December 2025',
    title: 'Email Personalization Misakes: Lessons Learned From the Experts',
    publication: 'Grit Daily',
    url: 'https://gritdaily.com/email-personalization-mistakes-lessons-learned/',
    logo: 'assets/logos/Screenshot_2025-10-21_at_2.23.29_AM-removebg-preview.png',
  },
  {
    date: '21st November 2025',
    title: 'Social Media Algorithms and Mental Health: Exploring the Impact',
    publication: 'Grit Daily',
    url: 'https://gritdaily.com/social-media-algorithms-and-mental-health-exploring-the-impact/',
    logo: 'assets/logos/Screenshot_2025-10-21_at_2.23.29_AM-removebg-preview.png',
  },
  {
    date: '20th November 2025',
    title: 'How to Create a Strong Brand Identity That Resonates With Audiences',
    publication: 'DevX',
    url: 'https://www.devx.com/uncategorized/how-to-create-a-strong-brand-identity-that-resonates-with-audiences/',
    logo: 'assets/logos/DevX-1-300x135.png.webp',
  },
];

const FeaturedCard = ({ article, isMobile }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...featuredStyles.card,
        background: hovered ? '#141414' : '#0F0F0F',
        borderColor: hovered ? '#3A3A3A' : '#1E1E1E',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={featuredStyles.logoBox}>
        {article.logo
          ? <img src={article.logo} alt={article.publication} style={featuredStyles.logoImg} />
          : <span style={featuredStyles.logoPlaceholder}>LOGO</span>}
      </div>
      <div style={featuredStyles.cardBody}>
        <div style={featuredStyles.cardMeta}>
          <span style={featuredStyles.date}>{article.date}</span>
          <span style={featuredStyles.publication}>{article.publication}</span>
        </div>
        <div style={{
          ...featuredStyles.title,
          color: hovered ? '#FFE234' : '#F5F0E8',
          transition: 'color 150ms ease',
        }}>
          {article.title}
        </div>
      </div>
      <span style={{
        ...featuredStyles.arrow,
        color: hovered ? '#FFE234' : '#4A4742',
        transform: hovered ? 'translate(2px, -2px)' : 'none',
        transition: 'color 150ms ease, transform 150ms ease',
      }}>↗</span>
    </a>
  );
};

const FeaturedIn = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={featuredStyles.section} id="featured" data-screen-label="Featured In">
      <div style={{
        ...featuredStyles.inner,
        padding: isMobile ? '0 20px' : '0 64px',
      }}>
        <div style={featuredStyles.eyebrow}>In the press</div>
        <h2 style={featuredStyles.heading}>FEATURED IN</h2>
        <div style={{
          ...featuredStyles.grid,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        }}>
          {featuredArticles.map((article, i) => (
            <FeaturedCard key={i} article={article} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

const featuredStyles = {
  section: {
    background: '#111111',
    borderBottom: '1px solid #2A2A2A',
    padding: '96px 0',
  },
  inner: {
    maxWidth: 1200,
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
  grid: {
    display: 'grid',
    gap: 20,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    padding: '28px',
    border: '1px solid #1E1E1E',
    borderRadius: 4,
    transition: 'background 150ms ease, border-color 150ms ease',
  },
  logoBox: {
    flexShrink: 0,
    width: 88,
    height: 88,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    border: '1px solid #2A2A2A',
    borderRadius: 4,
    background: '#FFFFFF',
  },
  logoImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  logoPlaceholder: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.16em',
    color: '#4A4742',
  },
  cardBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minWidth: 0,
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  date: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: '#9A9590',
  },
  publication: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#FFE234',
  },
  title: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  arrow: {
    flexShrink: 0,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
};

Object.assign(window, { FeaturedIn, FeaturedCard });
