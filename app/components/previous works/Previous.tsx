"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const images = [
  {
    src: "/assets/1.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/2.png",
    description: "Wilderness awaits you.",
  },
  {
    src: "/assets/3.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/4.png",
    description: "Wilderness awaits you.",
  },
  {
    src: "/assets/5.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/6.png",
    description: "Wilderness awaits you.",
  },
  {
    src: "/assets/7.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/8.png",
    description: "Wilderness awaits you.",
  },
  {
    src: "/assets/9.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/10.png",
    description: "Wilderness awaits you.",
  },
  {
    src: "/assets/11.png",
    description: "Explore the beauty of nature.",
  },
  {
    src: "/assets/12.png",
    description: "Wilderness awaits you.",
  },
  // Add more images here if necessary
];

const PreviousWorks: React.FC = () => {
  const hoverRefs = useRef<HTMLDivElement[]>([]);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    gsap.to(`#overlay-text-${index}`, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(`#image-${index}`, {
      filter: "blur(8px)",
      scale: 1.08,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      duration: 0.2,
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(`#overlay-text-${index}`, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.in",
    });

    gsap.to(`#image-${index}`, {
      filter: "blur(0px)",
      scale: 1,
      boxShadow: "none",
      duration: 0.5,
    });
  };

  // Animation for Circle on Scroll
  useEffect(() => {
    const rotateCircle = () => {
      const scrollY = window.scrollY;
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: scrollY / 5,
          duration: 0.5,
        });
      }
    };
    window.addEventListener("scroll", rotateCircle);
    return () => {
      window.removeEventListener("scroll", rotateCircle);
    };
  }, []);

  // Open Modal
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate Images
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4 mb-4 bg-black text-white">
      <div className="relative flex items-center justify-center ">
        {/* Title */}
        <h2 className="text-4xl font-bold relative inline-block sm:mb-10">
          <span className="block max-md:text-2xl max-md:mt-14 max-md:mb-10">PREVIOUS WORKS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => openModal(index)} 
          >
            <img
              id={`image-${index}`}
              src={img.src}
              alt={`Previous work ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg transition-transform"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />

            <div
              ref={(el) => {
                if (el) hoverRefs.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 transition duration-500 ease-in-out transform translate-y-4"
              id={`overlay-text-${index}`}
            >
              <h3 className="text-lg font-semibold">{img.description}</h3>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="relative max-w-full max-h-full overflow-hidden">
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
              onClick={goToPreviousImage}
            >
              &lt;
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={`Current work ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
              onClick={goToNextImage}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviousWorks;
