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
    <div className="relative w-[300px] h-[600px] overflow-hidden border rounded-lg shadow-md hidden sm:block">
      <div className="absolute inset-0 flex flex-col space-y-4 animate-slideUp">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
