import React from "react";

const GallerySection = ({
  items = [],
  selectedTitle,
  onTitleChange,
  isLoading = false,
  fallbackImage = "/fallback-image.png",
}) => {
  const showVerticalNav = items.length > 5;

  const selectedImages = items.find((item) => item.title === selectedTitle)?.images || [];

  if (items.length === 0) {
    return <p>No data available...</p>;
  }

  if (showVerticalNav) {
    return (
      <div className="gallery-container">
        <ul className="gallery-nav">
          {items.map((item) => (
            <li
              key={item.title}
              className={selectedTitle === item.title ? "active" : ""}
            >
              <button onClick={() => onTitleChange(item.title)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="gallery-content">
          {isLoading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                {selectedTitle}
              </h3>
              {selectedImages.length > 0 ? (
                <div className="image-grid">
                  {selectedImages.map((image, idx) => (
                    <div key={`${image.src}-${idx}`} className="grid-item w-full">
                      <div className="gallery-image center w-full">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="img-fluid"
                          style={{
                            maxHeight: "270px",
                            width: "100%",
                            objectFit: "cover",
                            height: "100%",
                          }}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = fallbackImage;
                          }}
                        />
                        <p>{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No images available.</p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // Show all images if 5 or fewer items
  return (
    <div className="gallery-content">
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="image-grid">
          {items.flatMap((item) =>
            item.images.map((image, idx) => (
              <div key={`${item.title}-${image.src}-${idx}`} className="grid-item w-full">
                <div className="gallery-image center w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                    style={{
                      maxHeight: "170px",
                      width: "100%",
                      objectFit: "cover",
                      height: "100%",
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                  <p>{image.caption}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GallerySection;