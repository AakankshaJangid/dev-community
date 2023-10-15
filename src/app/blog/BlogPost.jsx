import React, { useState } from "react";
import BlogPreview from "./BlogPreview";

const BlogPost = ({ images,title, description, createdBy, createdTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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


  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };


  const descriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3, // Number of lines to display
    WebkitBoxOrient: "vertical",
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
              onClick={openPreview}
            />
            {images.length > 1 && (
              <div className="absolute top-0 right-0 left-0 flex justify-between p-2">
                <button
                  onClick={previousImage}
                  className="text-white text-base bg-[#F96D00] bg-opacity-70 hover:text-gray-300 py-2 px-4 rounded-full"
                >
                  &#8249;
                </button>
                <button
                  onClick={nextImage}
                  className="text-white text-base bg-[#F96D00] bg-opacity-70 hover:text-gray-300 py-2 px-4 rounded-full"
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
      {isPreviewOpen && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-[#393E46] z-50 overflow-y-scroll p-6">
          <div className="">
            <BlogPreview
              images={images}
              title={title}
              description={description}
              createdBy={createdBy}
              createdTime={createdTime}
            />
            <button onClick={closePreview} className="text-white bg-[#F96D00] p-2 my-2 rounded-sm font-semibold">Close Preview</button>
          </div>
        </div>
      )}
      <h2 className="text-xl font-semibold mt-2 text-[#F96D00]">{title}</h2>
      <p className="text-base mt-2 text-black" style={descriptionStyle}>{description}</p>
      <p className="text-gray-600 text-sm">
        Created by {createdBy} on {createdTime}
      </p>
    </div>
  );
};

export default BlogPost;
