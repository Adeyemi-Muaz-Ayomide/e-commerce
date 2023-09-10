const Button = ({ children, className }) => {
  return (
    <button
      className={`{ mr-5 rounded-[12px] px-6 py-4 text-center text-[16px] font-medium leading-6 hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
