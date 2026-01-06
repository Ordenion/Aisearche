type Props = any & { variant?: 'primary' | 'ghost' };

const Button = ({ variant = 'primary', className = '', ...props }: Props) => {
  const base = 'px-4 py-2 rounded';
  const variants: Record<string, string> = {
    primary: 'bg-accent text-white hover:opacity-90',
    ghost: 'bg-transparent text-text border border-gray-700'
  };
  return <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
};

export default Button;
