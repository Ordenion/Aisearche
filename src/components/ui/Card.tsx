const Card = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <div className={`p-4 rounded shadow-card bg-surface border border-border ${className}`}>{children}</div>;
};

export default Card;
