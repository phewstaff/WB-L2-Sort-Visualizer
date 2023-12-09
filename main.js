import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite!</h1>

    <button>button</button>
  </div>
`;

setupCounter(document.querySelector("#counter"));
