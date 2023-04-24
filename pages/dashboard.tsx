import Image from "next/image";

import { useState } from "react";
// import "./Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://picsum.photos/400/200",
    "https://picsum.photos/401/200",
    "https://picsum.photos/402/200",
    "https://picsum.photos/403/200",
    "https://picsum.photos/404/200"
  ];

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider-images" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, i) => (
          <Image width={50} height={50} key={i} src={image} alt={`Slide ${i + 1}`} />
        ))}
      </div>
      <button className="slider-button prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="slider-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
