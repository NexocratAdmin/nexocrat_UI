const HeroImage = ({
  imageSrc,
  lightImageSrc,
  children,
  className = "",
  imgclass = "",
}) => {
  return (
    <div className={`flex align-center w-full ${className}`}>
      {lightImageSrc && (
        <img
          className={`hidden dark:inline-block w-full ${imgclass}`}
          src={lightImageSrc}
          alt="light image"
        />
      )}
      {imageSrc && (
        <img
          className={`dark:hidden w-full ${imgclass}`}
          src={imageSrc}
          alt="image"
        />
      )}
      {children}
    </div>
  );
};

export default HeroImage;
