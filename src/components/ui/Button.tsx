type Props = any & { variant?: 'primary' | 'ghost' };

const Button = ({ variant = 'primary', className = '', ...props }: Props) => {
  const base = 'px-4 py-2 rounded';
  const variants: Record<string, string> = {
    primary: 'bg-primary text-text-on-primary hover:bg-primary-hover',
    ghost: 'bg-transparent text-text border border-border hover:bg-surface-alt'
  };
  return <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
};

export default Button;
