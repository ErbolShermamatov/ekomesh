import { useState, useEffect } from "react";
import "./Certificates.scss";
import { certificatesData } from "../data/certificates.data";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    if (selectedImage) {
      document.documentElement.classList.add("is-lock");
    } else {
      document.documentElement.classList.remove("is-lock");
    }

    return () => {
      document.documentElement.classList.remove("is-lock");
    };
  }, [selectedImage]);
  const closeGallery = () => setSelectedImage(null);

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="certificates__header">
          <h2 className="certificates__title">Документы и сертификаты</h2>
          <p className="certificates__subtitle">
            Надежность, подтвержденная государственными стандартами
          </p>
        </div>

        <div className="certificates__grid">
          {certificatesData.map((item) => (
            <div className="certificate-card" key={item.id}>
              <div
                className="certificate-card__image-wrapper"
                onClick={() => setSelectedImage(item.imageUrl)}
                title="Нажмите, чтобы увеличить"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="certificate-card__img"
                />
              </div>

              <h3 className="certificate-card__title">{item.title}</h3>
              <p className="certificate-card__text">{item.text}</p>

              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-primary certificate-card__btn"
              >
                Открыть PDF
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.25em", height: "1.25em" }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`gallery-modal ${selectedImage ? "is-active" : ""}`}
        onClick={closeGallery}
      >
        <button
          className="gallery-modal__close"
          onClick={closeGallery}
          aria-label="Закрыть"
        >
          &times;
        </button>

        <div
          className="gallery-modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Увеличенный документ"
              className="gallery-modal__img"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
