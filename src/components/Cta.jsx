import "./Cta.scss";

function Cta({
  variant = "green",
  title = "Подзаголовок CTA",
  text = "Текст описания CTA",
  buttonText = "Кнопка",
  buttonLink = "#",
  downloadText = 'Документ',
  isDownload = false,
}) {
  return (
    <section className={`cta cta--${variant}`}>
      <div className="container">
        <div className="cta__inner">
          <div className="cta__content">
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
          </div>

          <div className="cta__action">
            {isDownload ? (
              <a href={buttonLink} download={downloadText} className="btn btn--outline-white">
                {buttonText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25em', height: '1.25em' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            ) : (
              <a href={buttonLink} className="btn btn--outline-white" target="_blank" rel="noopener noreferrer">
                {buttonText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25em', height: '1.25em' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;