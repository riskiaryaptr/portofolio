import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "@/Frontend/Pages/Index";
import About from "@/Frontend/Pages/About";
import Chat from "@/Frontend/Pages/Chat";
import Contact from "@/Frontend/Pages/Contact";
import Achievements from "@/Frontend/Pages/Achievements";
import Projects from "@/Frontend/Pages/Projects";
import ChatWidget from "@/Frontend/Components/ChatWidget";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <ChatWidget />
      </Router>
    </LanguageProvider>
  );
}

export default App;