import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [viewMode, setViewMode] = useState("desktop");
  const [primaryColor, setPrimaryColor] = useState("#3498db");
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedColor = localStorage.getItem("primaryColor");
      if (savedColor) {
        setPrimaryColor(savedColor);
      }

      const savedCoverImage = localStorage.getItem("coverImage");
      if (savedCoverImage) {
        setCoverImage(savedCoverImage);
      }
    }
  }, []);

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  const handleColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setCoverImage(imageUrl);
  };

  const handleSaveChanges = () => {
    localStorage.setItem("primaryColor", primaryColor);
    if(coverImage){
      localStorage.setItem("coverImage", coverImage);
    }
    toast.success("تم حفظ التغييرات بنجاح");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        viewMode={viewMode}
        primaryColor={primaryColor}
        handleViewChange={handleViewChange}
        handleColorChange={handleColorChange}
        handleCoverImageChange={handleCoverImageChange}
        handleSaveChanges={handleSaveChanges}
      />
      <Menu viewMode={viewMode} primaryColor={primaryColor} coverImage={coverImage} />
      <ToastContainer />
    </div>
  );
}

export default App;