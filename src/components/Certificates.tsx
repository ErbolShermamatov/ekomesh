import './Certificates.scss';
import { certificatesData } from '../data/certificates.data';

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        
        <div className="certificates__header">
          <h2 className="certificates__title">Документы и сертификаты</h2>
          <p className="certificates__subtitle">Надежность, подтвержденная государственными стандартами</p>
        </div>

        <div className="certificates__grid">
          {certificatesData.map((item) => (
            <div className="certificate-card" key={item.id}>
              <div className="certificate-card__icon">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25em', height: '1.25em' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Certificates;