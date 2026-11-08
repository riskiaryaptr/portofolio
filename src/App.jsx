import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "@/Frontend/Pages/Index";
import About from "@/Frontend/Pages/About";
import Contact from "@/Frontend/Pages/Contact";
import Achievements from "@/Frontend/Pages/Achievements";
import Projects from "@/Frontend/Pages/Projects";

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/index" element={<Navigate to="/" replace />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
