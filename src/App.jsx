
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PerformanceReport = lazy(() => import("./pages/PerformanceReport"));

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Suspense
          fallback={
            <div className="loading-message" role="status">
              Loading page...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/performance" element={<PerformanceReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        © 2026 Nupur Jadhav | Personal Blog
      </footer>
    </>
  );
}

export default App;
