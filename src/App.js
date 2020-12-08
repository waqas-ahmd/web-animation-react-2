import { useState } from "react";
import "./App.css";
import Fox from "./Animals/Fox";
import Bear from "./Animals/Bear";
import Deer from "./Animals/Deer";

function App() {
  const animalArray = {
    animal1: Fox,
    animal2: Bear,
    animal3: Deer,
    animal4: Fox,
    animal5: Bear,
    animal6: Deer,
  };

  const animalNameArray = [
    "Arctic Fox",
    "Brown Bear",
    "Mountain Deer",
    "Arctic Fox",
    "Brown Bear",
    "Mountain Deer",
  ];

  const [index0, setIndex0] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);
  const [pos1, setPos1] = useState("1");
  const [pos2, setPos2] = useState("0");

  const Animal1 = animalArray["animal" + index1.toString()];
  const Animal2 = animalArray["animal" + index2.toString()];

  const changeAnimal = () => {
    if (pos1 === "1") {
      setPos1("0");
      setTimeout(() => setPos2("1"), 700);
      if (index1 === 5) {
        setTimeout(() => setIndex1(1), 1000);
      } else setTimeout(() => setIndex1(index1 + 2), 1000);
    } else if (pos2 === "1") {
      setPos2("0");
      setTimeout(() => setPos1("1"), 700);
      if (index2 === 6) {
        setTimeout(() => setIndex2(2), 1000);
      } else setTimeout(() => setIndex2(index2 + 2), 1000);
    }
    if (index0 < animalNameArray.length - 1) {
      setTimeout(() => setIndex0(index0 + 1), 1000);
    } else setTimeout(() => setIndex0(0), 1000);
  };
  return (
    <div className="App">
      <div className="AppTitle">NORTHERN WILDLIFE</div>
      <div className="AnimalDiv">
        <Animal1 pos={pos1} />
      </div>
      <div className="AnimalDiv">
        <Animal2 pos={pos2} />
      </div>
      <div className="AnimalName">{animalNameArray[index0]}</div>
      <div className="NextButton">
        <button onClick={changeAnimal}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
