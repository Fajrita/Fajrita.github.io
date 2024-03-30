/* eslint-disable react/prop-types */
import "../css/modal.css";

const Modal = ({ isOpen, onClose, images, currentIndex }) => {
  const currentImage = images[currentIndex];

  if (!currentImage) {
    // Handle the case where the current image is undefined
    return null;
  }

  const isVideo = currentImage.src.endsWith(".mp4");

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video controls className="modal-video" onClick={onClose}>
            <source src={currentImage.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="modal-img"
            src={currentImage.src}
            alt={`modal-image`}
            onClick={onClose}
          />
        )}
        {/* Additional logic to navigate to other images if needed */}
      </div>
    </div>
  );
};

export default Modal;
