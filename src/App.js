import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container-grid">
        <div id="input">
          <lable className="operator-place">+</lable>
          <label>10</label>
        </div>
        <button type="button" id="AC">
          AC
        </button>
        <button type="button" style={{ padding: 0, fontSize: "22px" }}>
          DEL
        </button>
        <button type="button">/</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">+</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">-</button>
        <button type="button">.</button>
        <button type="button">0</button>
        <div id="enter">
          <label>=</label>
        </div>
      </div>
    </div>
  );
}
