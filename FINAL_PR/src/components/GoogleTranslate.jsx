import React, { useEffect, useState } from "react";

const GoogleTranslatePage = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 }); // Initial position

  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.querySelector(
      "script[src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']"
    );
    if (!existingScript) {
      // Add the Google Translate script to the document
      const addScript = document.createElement("script");
      addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr,ta,te,kn,gu,bn,pa", // Add more languages as needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Mouse event handlers for drag-and-drop functionality
  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX - position.left;
    const startY = e.clientY - position.top;

    const handleMouseMove = (e) => {
      setPosition({
        top: e.clientY - startY,
        left: e.clientX - startX,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="fixed z-40 bg-green-400 p-2 rounded-md shadow-lg cursor-move"
      style={{ top: position.top, left: position.left }}
      onMouseDown={handleMouseDown}
    >
      <div id="google_translate_element" className="text-white text-sm"></div>
    </div>
  );
};

export default GoogleTranslatePage;
