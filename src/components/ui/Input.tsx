type Props = any;

const Input = ({ className = '', ...props }: Props) => {
  return (
    <input
      className={`px-3 py-2 rounded-md bg-background text-foreground border-2 border-border placeholder:text-[hsl(var(--ink-secondary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--glow-green))] ${className}`}
      {...props}
    />
  );
};

export default Input;
