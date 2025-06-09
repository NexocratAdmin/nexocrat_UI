const HeroImage = ({ imageSrc, children, className = "", imgclass = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {imageSrc && (
        <img
          className={`dark:hidden w-full h-full ${imgclass}`}
          src={imageSrc}
          alt="image"
        />
      )}
      {children}
    </div>
  );
};

export default HeroImage;
