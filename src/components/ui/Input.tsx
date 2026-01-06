type Props = any;

const Input = ({ className = '', ...props }: Props) => {
  return <input className={`px-3 py-2 rounded bg-card text-text border border-gray-700 ${className}`} {...props} />;
};

export default Input;
