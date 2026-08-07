import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Savings from "./components/Savings";
import Catalog from "./components/Catalog";
import Production from "./components/Production";
import Contacts from "./components/Contacts";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <Savings />
        <Catalog />
        <Cta
          variant="green"
          title="Нужна подробная техническая информация?"
          text="Скачайте нашу полную презентацию. Внутри: схемы работы скрубберов очистки дыма, точные расчеты КПД и сравнение эффективности с электрическими и газовыми котлами."
          buttonText="Открыть презентацию (PDF)"
          buttonLink="/presentation.pdf"
          downloadText="Презентация_ЭКО-МЕШ.pdf"
          isDownload={false}
        />
        <Production />
        <Certificates />
        <Contacts />
        <Cta
          variant="orange"
          title="Остались вопросы по окупаемости?"
          text="В нашей полной брошюре есть подробные таблицы расчета окупаемости котлов ЭКО-МЕШ для разных типов бизнеса (клиник, заводов, ЖК)."
          buttonText="Открыть брошюру (PDF)"
          buttonLink="/brochure.pdf"
          downloadText="Брошюра_ЭКО-МЕШ.pdf"
          isDownload={false}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
