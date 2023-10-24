import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import ChatPageId from "./pages/ChatPageId";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const [ok, setOk] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="md:flex md:flex-col">
          <NavBar ok={ok} />
          <main className="md:flex md:justify-center mb-[5rem] md:mb-0">
            <div className="md:max-w-5xl md:w-full">
              <Routes>
                <Route path="/" element={<Home setOk={setOk} />} />
                <Route path="/chatpage" element={<ChatPage />} />
                <Route path="/chatpage/1" element={<ChatPageId />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
          <BottomNav />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
