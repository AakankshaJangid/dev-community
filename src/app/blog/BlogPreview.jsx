import Link from "next/link";
import React, { useState } from "react";

const BlogPreview = ({
  images,
  title,
  description,
  createdBy,
  createdTime,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const previousImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-y-auto flex gap-6">
      {images && images.length > 0 ? (
        <>
          <img
            src={images[currentImageIndex]}
            alt="Blog Post"
            className="h-1/2 rounded-md w-1/2"
          />
          {images.length > 1 && (
            <div className="absolute top-0 right-0 left-0 flex justify-between p-2">
              <button
                onClick={previousImage}
                className="text-white hover:text-gray-300"
              >
                &#8249;
              </button>
              <button
                onClick={nextImage}
                className="text-white hover:text-gray-300"
              >
                &#8250;
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No images available</p>
      )}
      <div className="flex flex-col">
      <h2 className="text-xl font-semibold mt-2 text-[#F96D00]">{title}</h2>
      <p className="text-base mt-2 text-black">{description}</p>
      <p className="text-gray-600 text-sm">
        Created by {createdBy} on {createdTime}
      </p>
      </div>
    </div>
  );
};

export default BlogPreview;
