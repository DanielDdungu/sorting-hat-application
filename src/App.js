import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
