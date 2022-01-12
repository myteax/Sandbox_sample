import Dogs from "./Components/Dog";
import "./styles.css";

export default function App() {
  const data = ["Charlie", "Pugsy", "Danny", "Follie"];
  return (
    <div className="App">
      <Dogs dogName={data} />
    </div>
  );
}
