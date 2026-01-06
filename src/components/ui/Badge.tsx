const Badge = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <span className={`inline-block px-2 py-1 text-xs rounded bg-accent text-black ${className}`}>{children}</span>;
};

export default Badge;
