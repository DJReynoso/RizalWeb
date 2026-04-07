import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Life from "./components/Life/Life";
import Works from "./components/Works/Works";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import smokeVideo from "./assets/smokeTransitionAnimation.mp4";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(20px)",
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

function App() {
  const location = useLocation();
  const [showSmoke, setShowSmoke] = useState(false);
  const videoRef = React.useRef(null);

  const handlePageChange = () => {
    setShowSmoke(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setShowSmoke(false);
  };

  return (
    <>
      <div className="navigation-bar-container">
        <NavigationBar onNavigate={handlePageChange} />
      </div>
      {showSmoke && (
        <video
          ref={videoRef}
          src={smokeVideo}
          className="smoke-video"
          muted
          autoPlay
          onEnded={handleVideoEnd}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
