import React from "react";

function HeaderList() {
  const navList = [
    "Home",
    "Services",
    "Skills",
    "Education",
    "Experience",
    "Contact",
  ];
  return (
    <div>
    <a href="#" className="logo">
        Boss
      </a>
      <nav>
        <ul>
          {navList.map((list, index) => (
            <li>
              <a href="#" key={index}>
                {list}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderList;
