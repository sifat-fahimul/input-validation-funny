import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [valid, setValid] = useState(false);
  const [move, setMove] = useState(false);

  const patrn = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

  const handlechange = (e) => {
    let value = e.target.value;
    if (value.match(patrn)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleMouse = () => {
    if (!valid) {
      console.log("g");
      setMove(true);
    } else {
      setMove(false);
    }
  };

  const handleMove = () => {
    if (!valid) {
      console.log("h");
      setMove(false);
    }
  };

  return (
    <div>
      <h1>Something funny!</h1>
      <p>Start exploring to see some magic happen :)</p>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">
          <input
            className={!valid ? "border-color" : "border"}
            onChange={handlechange}
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />

        <div className="div">
          <input
            className={move ? "animation" : "notAnimation"}
            onMouseOver={handleMouse}
            onMouseOut={handleMove}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
