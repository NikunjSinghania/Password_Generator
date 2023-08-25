import "./styles.css";
import { useState } from "react";
export default function App() {
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(4);
  const [uc, setUc] = useState(true);
  const [lc, setLc] = useState(true);
  const [n, setN] = useState(true);
  const [sy, setSy] = useState(true);
  const [len, setLen] = useState(12);

  const changeLc = () => {
    if (lc) {
      setLc(false);
      setCount(count - 1);
    } else {
      setLc(true);
      setCount(count + 1);
    }
  };
  const changeUc = () => {
    if (uc) {
      setUc(false);
      setCount(count - 1);
    } else {
      setUc(true);
      setCount(count + 1);
    }
  };
  const changeN = () => {
    if (n) {
      setN(false);
      setCount(count - 1);
    } else {
      setN(true);
      setCount(count + 1);
    }
  };
  const changeSy = () => {
    if (sy) {
      setSy(false);
      setCount(count - 1);
    } else {
      setSy(true);
      setCount(count + 1);
    }
  };

  const gen = () => {
    console.log(len);

    let arr = [];
    if (lc) {
      for (let i = 1; i <= len / count; i++) {
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
      }
    }

    if (uc) {
      for (let i = 1; i <= len / count; i++) {
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
      }
    }

    if (n) {
      for (let i = 1; i <= len / count; i++) {
        arr.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
      }
    }

    let syd = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/".split("");

    if (sy) {
      for (let i = 1; i <= len / count; i++) {
        arr.push(syd[Math.floor(Math.random() * syd.length)]);
      }
    }

    arr.sort(() => Math.floor(Math.random()) - 0.5);

    for (let i = 0; i < len - 1; i++) {
      const ran = Math.floor(Math.random() * (len - i - 1)) + (i + 1);
      [arr[i], arr[ran]] = [arr[ran], arr[i]];
    }

    setPassword(arr.join(""));
  };

  return (
    <div className="App">
      <div>
        <span>
          <p>
            Lowercase
            <input type="checkbox" checked={lc} onChange={changeLc} />
          </p>
        </span>

        <span>
          <p>UpperCase</p>
          <input type="checkbox" checked={uc} onChange={changeUc} />
        </span>

        <span>
          <p>Numbers</p>
          <input type="checkbox" checked={n} onChange={changeN} />
        </span>

        <span>
          <p>Special Symbols</p>
          <input type="checkbox" checked={sy} onChange={changeSy} />
        </span>

        <span>
          <p>Length</p>
          <input
            value={len}
            type="number"
            onChange={(e) => setLen(e.target.value)}
          />
        </span>
      </div>
      <button onClick={gen}>Generate Password</button>
      <span>{password}</span>
    </div>
  );
}
