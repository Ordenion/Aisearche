const Card = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <div className={`p-6 rounded-xl shadow-card bg-card border-2 border-border ${className}`}>{children}</div>;
};

export default Card;
