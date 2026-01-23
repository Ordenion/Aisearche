const Badge = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <span className={`inline-block px-2 py-1 text-xs rounded bg-primary-soft/20 text-primary ${className}`}>{children}</span>;
};

export default Badge;
