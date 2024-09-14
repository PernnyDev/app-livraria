import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEditoras from "./components/Editora/ListEditora";
import AddEditora from "./components/Editora/AddEditora";
import ReadEditora from "./components/Editora/ReadEditora";
import UpdateEditora from "./components/Editora/UpdateEditora";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/editora" element={<ListEditoras />} />
            <Route path="/addEditora" element={<AddEditora />} />
            <Route path="/readEditora/:id" element={<ReadEditora />} />
            <Route path="/updateEditora/:id" element={<UpdateEditora />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;