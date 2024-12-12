import React from 'react';

function Menu({ viewMode, primaryColor, coverImage }) {
  return (
    <div className="flex flex-1">
        <nav
          className={`flex flex-col justify-between bg-gray-800 text-white p-4 w-1/5 h-auto`}
        >
          <ul className="flex flex-col">
            {["الرئيسية", "حسابي", "الفروع", "نبذة عنا", "أرسل لصديق", "English"].map((item) => (
              <li
                key={item}
                className="hover:text-gray-300 cursor-pointer  py-2 border-b border-gray-400"
                style={{ color: primaryColor }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`flex-1 m-auto bg-gray-100 h-[100vh] p-4 relative ${viewMode === "mobile" ? "max-w-xs" : "w-1/3"}`}
          style={{ backgroundColor: primaryColor }}
        >
          {coverImage && (
            <img src={coverImage} alt="Cover" className="w-full h-[100vh] object-cover" />
          )}
        </div>
      </div>
  );
}

export default Menu;