import "./App.css";
import Hello from './components/Hello';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>클래쓰</div>
    </div>
  );
}

export default App;
