import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1670513725769-a048102828ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1729957385579-528ce50ffd94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1730065983253-5d453442719e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((currentIndex) => {
        return (currentIndex + 1) % images.length;
      });
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const navigatePrevious = () => {
    setIndex(currentIndex => {
      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    })
  };

  const navigateNext = () => {
    setIndex(currentIndex => {
      return (currentIndex + 1) % images.length;
    })
  };
  

  return (
    <>
      <div className="carousel-container">
        <img src={images[index]} className="carousel-image" alt="carousel" />
        <div className="carousel-buttons">
          <button onClick={navigatePrevious}>⬅️</button>
          <button onClick={navigateNext}>➡️</button>
        </div>
      </div>
    </>
  );
}
