import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between absolute inset-x-0 top-0 h-16 ...">
                <Header />
                <main className="container mx-auto">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="questions" element={<Questions />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
