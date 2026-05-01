// Writing.jsx — Latest writing / Substack posts section

const writingPosts = [
  {
    date: 'Mar 11, 2026',
    title: 'The Churchill Problem',
    excerpt: 'The Patron Saint of War.',
    readTime: 'Read on Substack',
    url: 'https://nathanknowsnothing.substack.com',
  },
  {
    date: 'Mar 7, 2026',
    title: 'Something Is Wrong With Us.',
    excerpt: 'What Local Facebook Groups Reveal About the State of Our Communities.',
    readTime: 'Read on Substack',
    url: 'https://nathanknowsnothing.substack.com',
  },
  {
    date: 'Jan 2026',
    title: 'What Happens When Your Brain Stops Trusting Itself?',
    excerpt: 'On false memories, deepfakes, and why your brain\'s best guess might be all you\'ve got.',
    readTime: 'Read on Substack',
    url: 'https://nathanknowsnothing.substack.com',
  },
];

const PostRow = ({ post, isLast }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...writingStyles.postRow,
        borderBottom: isLast ? 'none' : '1px solid #1E1E1E',
        background: hovered ? '#0F0F0F' : 'transparent',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={writingStyles.postMeta}>
        <span style={writingStyles.date}>{post.date}</span>
        <span style={writingStyles.readTime}>{post.readTime}</span>
      </div>
      <div style={writingStyles.postContent}>
        <div style={{
          ...writingStyles.postTitle,
          color: hovered ? '#5DCAA5' : '#F5F0E8',
          transition: 'color 150ms ease',
        }}>{post.title}</div>
        <div style={writingStyles.postExcerpt}>{post.excerpt}</div>
      </div>
      <div style={{
        ...writingStyles.arrow,
        color: hovered ? '#5DCAA5' : '#4A4742',
        transform: hovered ? 'translate(2px, -2px)' : 'none',
        transition: 'color 150ms ease, transform 150ms ease',
      }}>↗</div>
    </a>
  );
};

const Writing = () => (
  <section style={writingStyles.section} id="writing" data-screen-label="Writing">
    <div style={writingStyles.inner}>
      <div style={writingStyles.header}>
        <div>
          <div style={writingStyles.eyebrow}>Writing</div>
          <h2 style={writingStyles.heading}>
            NATHAN<br />
            <span style={{ color: '#5DCAA5' }}>KNOWS NOTHING</span>
          </h2>
        </div>
        <a href="https://nathanknowsnothing.substack.com" target="_blank" rel="noopener noreferrer" style={writingStyles.subscribeBtn}>
          Subscribe on Substack ↗
        </a>
      </div>
      <div style={writingStyles.postList}>
        {writingPosts.map((post, i) => (
          <PostRow key={post.title} post={post} isLast={i === writingPosts.length - 1} />
        ))}
      </div>
      <div style={writingStyles.footer}>
        <a href="https://nathanknowsnothing.substack.com" target="_blank" rel="noopener noreferrer" style={writingStyles.allPostsLink}>
          All posts →
        </a>
      </div>
    </div>
  </section>
);

const writingStyles = {
  section: {
    background: '#111111',
    borderBottom: '1px solid #2A2A2A',
    padding: '96px 0',
  },
  inner: {
    padding: '0 64px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40,
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
    lineHeight: 0.92,
    color: '#F5F0E8',
  },
  subscribeBtn: {
    display: 'inline-block',
    padding: '11px 22px',
    border: '1px solid #5DCAA5',
    color: '#5DCAA5',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'background 150ms ease, color 150ms ease',
    flexShrink: 0,
  },
  postList: {
    borderTop: '1px solid #2A2A2A',
  },
  postRow: {
    display: 'grid',
    gridTemplateColumns: '160px 1fr 32px',
    gap: 24,
    padding: '28px 0',
    alignItems: 'start',
    transition: 'background 150ms ease',
  },
  postMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingTop: 3,
  },
  date: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: '#9A9590',
  },
  readTime: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    color: '#4A4742',
    letterSpacing: '0.06em',
  },
  postContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  postTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  postExcerpt: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: '#9A9590',
    lineHeight: 1.65,
  },
  arrow: {
    fontSize: 20,
    paddingTop: 2,
  },
  footer: {
    paddingTop: 24,
    borderTop: '1px solid #1E1E1E',
  },
  allPostsLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    color: '#9A9590',
    textDecoration: 'none',
    letterSpacing: '0.06em',
    transition: 'color 150ms ease',
  },
};

Object.assign(window, { Writing, PostRow });
