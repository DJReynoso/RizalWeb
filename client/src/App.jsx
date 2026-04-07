import React, { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Life from "./components/Life/Life";
import Works from "./components/Works/Works";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import smokeVideo from "./assets/smokeTransitionAnimation.mp4";

const SMOKE_FADE_MS = 900;

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
  const [isSmokeFading, setIsSmokeFading] = useState(false);
  const videoRef = React.useRef(null);
  const hideSmokeTimeoutRef = React.useRef(null);

  const beginSmokeFadeOut = () => {
    if (isSmokeFading) {
      return;
    }

    setIsSmokeFading(true);
    hideSmokeTimeoutRef.current = setTimeout(() => {
      setShowSmoke(false);
      setIsSmokeFading(false);
      hideSmokeTimeoutRef.current = null;
    }, SMOKE_FADE_MS);
  };

  const handlePageChange = () => {
    if (hideSmokeTimeoutRef.current) {
      clearTimeout(hideSmokeTimeoutRef.current);
      hideSmokeTimeoutRef.current = null;
    }

    setShowSmoke(true);
    setIsSmokeFading(false);

    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((err) => console.error("Video play error:", err));
      }
    });
  };

  useEffect(() => {
    return () => {
      if (hideSmokeTimeoutRef.current) {
        clearTimeout(hideSmokeTimeoutRef.current);
      }
    };
  }, []);

  const handleSmokeTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isSmokeFading || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const remainingMs = (video.duration - video.currentTime) * 1000;
    if (remainingMs <= SMOKE_FADE_MS) {
      beginSmokeFadeOut();
    }
  };

  const handleSmokeEnded = () => {
    if (!isSmokeFading) {
      beginSmokeFadeOut();
    }
  };

  useEffect(() => {
    setIsSmokeFading(false);
  }, [location.pathname]);

  return (
    <>
      <div className="navigation-bar-container">
        <NavigationBar onNavigate={handlePageChange} />
      </div>
      {showSmoke && (
        <div
          className={`smoke-video-container ${isSmokeFading ? "smoke-fade-out" : ""}`}
        >
          <video
            ref={videoRef}
            src={smokeVideo}
            className="smoke-video"
            muted
            autoPlay
            onTimeUpdate={handleSmokeTimeUpdate}
            onEnded={handleSmokeEnded}
          />
        </div>
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
