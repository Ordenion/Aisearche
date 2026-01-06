const Card = ({ children, className = '' }: { children?: any; className?: string }) => {
  return <div className={`p-4 rounded shadow-sm bg-card ${className}`}>{children}</div>;
};

export default Card;
