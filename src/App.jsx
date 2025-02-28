import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TreeView from "./pages/TreeView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree/:userId" element={<TreeView />} />
      </Routes>
    </Router>
  );
};

export default App;
