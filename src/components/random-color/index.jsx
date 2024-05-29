import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  // const randomHexColor = `#${Math.floor(Math.random() * 16777215)

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    }
  }
  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeofColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeofColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "color",
      }}
    >
      <button onClick={() => setTypeofColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeofColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeofColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          color: "white",
          marginTop: "50px",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
