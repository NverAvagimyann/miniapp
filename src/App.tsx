import { useEffect, useState } from "react";

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

const tg = window.Telegram.WebApp;
function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    category: "",
    services: "",
    date: "",
    time: "",
    address: "",
    comment: ""
  });

  useEffect(() => {
    tg.expand(); // разворачивает WebApp на весь экран
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    tg.sendData(JSON.stringify(form)); // отправка данных обратно в бот
    tg.close(); // закрыть форму (по желанию)
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Заказ клининга</h2>
      {Object.entries(form).map(([key, _]) => (
        key !== "comment" ? (
          <input
            key={key}
            name={key}
            placeholder={key}
            onChange={handleChange}
            style={{ margin: "4px", width: "100%" }}
          />
        ) : (
          <textarea
            key={key}
            name={key}
            placeholder="Комментарий"
            onChange={handleChange}
            style={{ margin: "4px", width: "100%" }}
          />
        )
      ))}
      <button onClick={handleSubmit} style={{ marginTop: "1rem", padding: "8px 16px" }}>
        Отправить
      </button>
    </div>
  );
}

export default App;