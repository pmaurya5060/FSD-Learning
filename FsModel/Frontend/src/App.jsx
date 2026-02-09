import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleWrite = async () => {
    try {
      await axios.post("http://localhost:5000/write", { text });
      alert("File Written Successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const handleRead = async () => {
    try {
      const res = await axios.get("http://localhost:5000/read");
      setFileContent(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_placeholder.png"
          alt="ABES Logo"
          style={{ height: "40px" }}
        />
      </nav>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>FS Model For Node</h1>

        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={inputStyle}
        />

        <div>
          <button onClick={handleWrite} style={btnStyle}>
            FS Create/Write
          </button>

          <button onClick={handleRead} style={btnStyle}>
            FS Read
          </button>
        </div>

        <p>{fileContent}</p>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  background: "#1e3a8a",
};

const inputStyle = {
  padding: "10px",
  width: "300px",
  margin: "10px",
};

const btnStyle = {
  padding: "10px 20px",
  margin: "10px",
  cursor: "pointer",
};

export default App;
