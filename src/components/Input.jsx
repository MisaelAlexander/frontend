const Input = ({ 
  placeholder, 
  value, 
  onChange,  // <- Cambiamos 'change' por 'onChange'
  name, 
  type = 'text', 
  ...rest 
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}  // <- Aquí usamos onChange
      className="w-full pl-4 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 focus:border-transparent transition-all"
      {...rest}
    />
  );
};

export default Input;