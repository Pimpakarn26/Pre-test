import { useState } from "react";
import Categories from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  const [menuItem, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  //console.log(allCategories);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuItems(data);
    } else {
      const newItem = data.filter((item) => item.category === category);
      setMenuItems(newItem);
    }
  };

  return (
    <div>
      <main>
        <section className="menu section">
          <div class="search-container">
            <input type="text" id="searchInput" class="search-input" placeholder="Keyword..." />
            <button id="searchButton" class="search-button">Search</button>
          </div>
          <div className="title">
            <h2>Grab Restaurant</h2>
            <div className="underline"></div>
            <Categories allCategories={allCategories} filterItem={filterItem} />
            <Menu items={menuItem} />
          </div>
        </section>
      </main>
    </div>
  );

  
}
export default App;
