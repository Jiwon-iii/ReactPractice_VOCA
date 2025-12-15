import Day from "./components/Day"
import DayList from "./components/DayList";
import Header from "./components/Header";
import EmptyPage from "./components/EmptyPage";
import CreateDay from "./components/CreateDay";
import CreateWord from "./components/CreateWord";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          {/* 메인 페이지: / */}
          <Route path="/" element={<DayList />} />

          {/* Day 상세 페이지: /day/1, /day/2 ... */}
          <Route path="/day/:day" element={<Day />} />

          <Route path="/create_word" element={<CreateWord />} />

          <Route path="/create_day" element={<CreateDay />} />

          {/* 나머지 모든 주소 → 404 페이지 */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
