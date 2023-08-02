import React, {useState} from "react";

const Slider = ()=>{
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1038/400/300",
    "https://picsum.photos/id/1042/400/300"
  ];

  const nextSlide = ()=>{
    if(currentSlide === images.length - 1){
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = ()=>{
    if(currentSlide === 0){
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div>
      <h2>Slider</h2>
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentSlide]} alt="slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Slider;