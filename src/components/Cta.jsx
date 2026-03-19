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
              </a>
            ) : (
              <a href={buttonLink} className="btn btn--primary">
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
