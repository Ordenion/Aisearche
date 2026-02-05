const Badge = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <span className={`inline-block px-2.5 py-1 text-xs rounded-md bg-glaze-mint text-foreground ${className}`}>{children}</span>;
};

export default Badge;
