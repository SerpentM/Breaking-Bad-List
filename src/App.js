import "./styles.css";
import image from "./image/BreakBad.jpg";
import Header from "./Component/Header";
import Card from "./Component/Card";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  function handelSearch(evt) {
    setValue(evt);
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minWidth: "70vh",
        width: "100%",
        minHeight: "100vh",
        backgroundAttachment: "fixed"
      }}
    >
      <Header onSearch={handelSearch} />
      <Card searchValue={value} />
    </div>
  );
}
