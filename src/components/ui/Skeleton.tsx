const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-card rounded ${className}`} />
);

export default Skeleton;
