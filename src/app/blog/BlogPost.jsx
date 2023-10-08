import React, { useState } from "react";

const BlogPost = ({ images, description, createdBy, createdTime }) => {
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
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="relative">
        {images && images.length > 0 ? (
          <>
            <img
              src={images[currentImageIndex]}
              alt="Blog Post"
              className="w-full h-auto rounded-md"
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
      </div>
      <h2 className="text-xl font-semibold mt-2 text-black">{description}</h2>
      <p className="text-gray-600 text-sm">
        Created by {createdBy} on {createdTime}
      </p>
    </div>
  );
};

export default BlogPost;
