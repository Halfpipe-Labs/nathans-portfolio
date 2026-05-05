// hooks.jsx — shared responsive utilities

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(
    () => window.matchMedia('(max-width: 768px)').matches
  );

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
};

Object.assign(window, { useIsMobile });
