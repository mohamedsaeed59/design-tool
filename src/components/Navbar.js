
function Navbar({viewMode, primaryColor, handleViewChange, handleColorChange, handleCoverImageChange, handleSaveChanges}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-200 space-y-4 md:space-y-0">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 ml-2 ${viewMode === "desktop" ? "bg-blue-600 text-white" : "bg-white text-black"} border rounded shadow`}
            onClick={() => handleViewChange("desktop")}
          >
            وضع سطح المكتب
          </button>
          <button
            className={`px-4 py-2 ${viewMode === "mobile" ? "bg-blue-600 text-white" : "bg-white text-black"} border rounded shadow`}
            onClick={() => handleViewChange("mobile")}
          >
            وضع الموبايل
          </button>
        </div>

        <div className="flex flex-wrap md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <input
            type="color"
            value={primaryColor}
            onChange={handleColorChange}
            className="border rounded w-12 h-10 cursor-pointer ml-2"
          />
          <div className="relative">
            <label
              htmlFor="file-upload"
              className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition"
            >
              تحميل صورة الغلاف
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition text-white rounded w-full md:w-auto shadow"
            onClick={handleSaveChanges}
          >
            حفظ التغييرات
          </button>
        </div>
      </div>
  );
}

export default Navbar;