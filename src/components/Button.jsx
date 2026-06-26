const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  ...props
}) => {
  const baseStyle = 'font-manrope-bold py-4.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md';
  const variants = {
    primary: 'font-manrope font-bold bg-[#FFD620] text-black hover:bg-[#F0C810]',
    secondary: 'font-manrope bg-gray-200 hover:bg-gray-300 text-gray-700',
    ghost: 'bg-transparent hover:underline text-[#A6891F]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  );
};

export default Button;