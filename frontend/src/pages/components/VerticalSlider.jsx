const VerticalSlider = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
  ];
  return (
    <div className="overflow-hidden h-full w-60 relative flex flex-col animate-scroll-tray pointer-events-none">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagine ${index + 1}`}
          className="block w-full h-auto"
        />
      ))}
    </div>
  );
};

export default VerticalSlider;
