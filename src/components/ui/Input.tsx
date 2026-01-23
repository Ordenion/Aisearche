type Props = any;

const Input = ({ className = '', ...props }: Props) => {
  return <input className={`px-3 py-2 rounded bg-surface text-text border border-border placeholder:text-text-faint focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${className}`} {...props} />;
};

export default Input;
