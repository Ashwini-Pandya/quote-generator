import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://api.quotable.io/random/");
    const data = await response.json();
    setQuotes({
      content: data.content,
      author: data.author,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title"> Random Quote-Generator </h1>
      <div className="quote-box">
        <h2 className="quote-txt"> "{quotes.content}" </h2>
        <div className="author">
          {" "}
          <h2 className="quote-author"> ~ {quotes.author}</h2>
        </div>
      </div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "read another"}
      </button>
    </div>
  );
}

export default App;
