const BorderTop = ({ className = "" }) => {
  return (
    <div
      className={`hidden md:block border-t border-gray-300 dark:border-gray-700 w-full max-w-7xl mx-auto ${className}`}
    ></div>
  );
};

export default BorderTop;
