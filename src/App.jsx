import data from "./components/data";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Gender from "./components/Gender";
import Search from "./components/Search";
import Cart from "./components/Cart";

import { useState } from "react";

function App() {
  const getLocalStorage = JSON.parse(localStorage.getItem("shoes"));
  const initialTodos = Array.isArray(getLocalStorage) ? getLocalStorage : [];

  const [shoesInfo, setShoesInfo] = useState(data);
  const [cart, setCart] = useState(false);
  const [sold, setSold] = useState(initialTodos);
  console.log(sold);
  const updateLocalStorage = (newShoes) => {
    localStorage.setItem("shoes", JSON.stringify(newShoes));
  };
  function addToCart(id) {
    const newData = JSON.parse(JSON.stringify(data));
    const filteredById = newData.find((el) => el.id === id);
    // if (filteredById.count) {
    //   filteredById.count++;
    // } else {
    //   filteredById.count = 1;
    // }
    updateLocalStorage(sold);
    setSold([...sold, filteredById]);
  }

  function setByBrand(event) {
    const newData = JSON.parse(JSON.stringify(data));
    if (event.target.innerText.toLowerCase() === "all") {
      setShoesInfo(newData);
      setCart(false);
    } else if (event.target.innerText.toLowerCase() === "cart") {
      setCart(true);
    } else {
      const filteredByBrand = newData.filter(
        (el) => el.brand === event.target.innerText.toLowerCase()
      );
      setShoesInfo(filteredByBrand);
      setCart(false);
    }
  }
  function setByGender(event) {
    const newData = JSON.parse(JSON.stringify(data));

    const filteredByGender = newData.filter(
      (el) => el.gender === event.target.innerText.toLowerCase()
    );
    setCart(false);
    setShoesInfo(filteredByGender);
  }
  function setBySearch(event) {
    const newData = JSON.parse(JSON.stringify(data));
    const filteredBySearch = newData.filter((el) =>
      el.name.toLowerCase().includes(event.target.value.trim())
    );
    setShoesInfo(filteredBySearch);
  }

  function removeFromCart(id) {
    const newData = JSON.parse(JSON.stringify(sold));
    const remove = newData.filter((el) => el.id !== id);

    setSold(remove);
    updateLocalStorage(remove);
  }
  return (
    <>
      <Gender setByGender={setByGender} />
      <Search setBySearch={setBySearch} />
      <Categories setByBrand={setByBrand} />
      {cart ? (
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
          }}
        >
          {sold.map((el) => {
            return (
              <Cart
                removeFromCart={removeFromCart}
                key={el.id}
                soldShoes={el}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              flexWrap: "wrap",
            }}
          >
            {shoesInfo.map((el) => {
              return <Card addToCart={addToCart} key={el.id} shoes={el} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
