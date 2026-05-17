import { useState, FormEvent, useEffect } from "react";
import "./OrderModal.scss";

const BOT_TOKEN = "8903633291:AAHxXoPI16hDUIXKawUrQayuUbc1JbTDrO8";
const CHAT_ID = "-1003960650383";

function OrderModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [power, setPower] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("is-lock");
    } else {
      document.documentElement.classList.remove("is-lock");
    }

    return () => {
      document.documentElement.classList.remove("is-lock");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, "");

    if (!rawValue) {
      setPhone("");
      return;
    }
    if (rawValue.startsWith("996")) {
      rawValue = rawValue.slice(3);
    }
    let formatted = "+996 ";
    
    if (rawValue.length > 0) {
      formatted += "(" + rawValue.substring(0, 3);
    }
    if (rawValue.length >= 4) {
      formatted += ") " + rawValue.substring(3, 5);
    }
    if (rawValue.length >= 6) {
      formatted += "-" + rawValue.substring(5, 7);
    }
    if (rawValue.length >= 8) {
      formatted += "-" + rawValue.substring(7, 9);
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const message = `
- Новая заявка на расчет!
- Имя: ${name}
- Телефон: ${phone}
- Мощность: ${power}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        },
      );

      if (response.ok) {
        alert(
          "Заявка успешно отправлена! Завод свяжется с вами в ближайшее время.",
        );
        setName("");
        setPhone("");
        setPower("");
        onClose();
      } else {
        alert(
          "Что-то пошло не так на стороне сервера. Пожалуйста, позвоните нам.",
        );
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__content">
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          &times;
        </button>

        <h2 className="modal__title">Оставить заявку на расчет</h2>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label htmlFor="user-name">Имя:</label>
            <input
              type="text"
              required
              id="user-name"
              className="modal__input"
              placeholder="Сулайман Исмаилов"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="modal__field">
            <label htmlFor="user-number">Телефон:</label>
            <input
              type="tel"
              required
              id="user-number"
              className="modal__input"
              placeholder="+996 555 123 456"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={19}
            />
          </div>

          <div className="modal__field">
            <label htmlFor="boiler-power">Интересующая мощность:</label>
            <input
              type="text"
              required
              id="boiler-power"
              className="modal__input"
              placeholder="Например: 2.0 МВт"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </div>

          <button type="submit" className="modal__submit" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderModal;
