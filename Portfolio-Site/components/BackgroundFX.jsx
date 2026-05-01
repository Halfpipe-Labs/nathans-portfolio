// BackgroundFX.jsx — Background effects: cursor trail, section colour wash, film grain

// ── Cursor Trail ─────────────────────────────────────────────────────────────
const CursorTrail = () => {
  const canvasRef = React.useRef(null);
  const trailRef = React.useRef([]);
  const colourRef = React.useRef(0);
  const lastColourChange = React.useRef(0);
  const animRef = React.useRef(null);
  const colours = ['#FFE234', '#FF6B6B', '#5DCAA5', '#85B7EB', '#C084FC'];

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const now = Date.now();
      if (now - lastColourChange.current > 1200) {
        colourRef.current = (colourRef.current + 1) % colours.length;
        lastColourChange.current = now;
      }
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        r: 7,
        alpha: 0.75,
        colour: colours[colourRef.current],
      });
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trailRef.current = trailRef.current
        .map(p => ({ ...p, r: p.r * 0.92, alpha: p.alpha * 0.87 }))
        .filter(p => p.alpha > 0.01);
      trailRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.colour + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 999,
      mixBlendMode: 'screen', opacity: 0.7,
    }} />
  );
};

// ── Section Colour Wash ───────────────────────────────────────────────────────
const sectionColours = {
  hero:    null,
  pillars: '#FFE234',
  about:   '#85B7EB',
  writing: '#5DCAA5',
  links:   '#FF6B6B',
};

const ColourWash = () => {
  const [activeColour, setActiveColour] = React.useState(null);
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const sections = Object.keys(sectionColours);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const col = sectionColours[e.target.id];
          setActiveColour(col);
          setOpacity(col ? 1 : 0);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  if (!activeColour) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0,
      background: activeColour,
      opacity: opacity * 0.04,
      transition: 'opacity 800ms ease, background 800ms ease',
    }} />
  );
};

// ── Cursor Trail + Colour Wash combo ─────────────────────────────────────────
const CursorAndWash = () => (
  <>
    <ColourWash />
    <CursorTrail />
  </>
);

// ── Film Grain ────────────────────────────────────────────────────────────────
const FilmGrain = () => {
  const canvasRef = React.useRef(null);
  const animRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 256, H = 256;
    canvas.width = W;
    canvas.height = H;

    const drawGrain = () => {
      const img = ctx.createImageData(W, H);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = d[i+1] = d[i+2] = v;
        d[i+3] = Math.random() * 28;
      }
      ctx.putImageData(img, 0, 0);
      animRef.current = requestAnimationFrame(drawGrain);
    };
    drawGrain();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 999,
      mixBlendMode: 'overlay',
      opacity: 0.55,
      imageRendering: 'pixelated',
    }} />
  );
};

Object.assign(window, { CursorTrail, ColourWash, CursorAndWash, FilmGrain });
