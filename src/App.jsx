import { useState } from "react";
import data from "./assets/data";
import Categories from "./components/Categories";
import Gender from "./components/Gender";
import Search from "./components/Search";
import DisplayShopCart from "./components/DisplayShopCart";
import DisplayCard from "./components/DisplayCard";

function App() {
  const cartShoesLocalStorage = JSON.parse(localStorage.getItem("cartShoes"));
  const initialCartShoes = cartShoesLocalStorage || [];

  const [shoes, setShoes] = useState(data);
  const [cart, setCart] = useState(false);
  const [cartShoes, setCartShoes] = useState(initialCartShoes);

  const updateLocalStorage = (newShoes) => {
    localStorage.setItem("shoes", JSON.stringify(newShoes));
  };

  function addToCart(id) {
    const newCartShoes = JSON.parse(JSON.stringify(cartShoes));
    const shoe = newCartShoes.find((s) => s.id === id);
    const newShoe = data.find((s) => s.id === id);

    if (shoe) {
      shoe.qty++;
    } else {
      newShoe.qty = 1;
      newCartShoes.push(newShoe);
    }

    updateLocalStorage(newCartShoes);
    setCartShoes(newCartShoes);
  }

  function setByBrand(event) {
    const newData = JSON.parse(JSON.stringify(data));
    if (event.target.innerText.toLowerCase() === "all") {
      setShoes(newData);
      setCart(false);
    } else if (event.target.innerText.toLowerCase() === "cart") {
      setCart(true);
    } else {
      const filteredByBrand = newData.filter(
        (el) => el.brand === event.target.innerText.toLowerCase()
      );
      setShoes(filteredByBrand);
      setCart(false);
    }
  }

  function setByGender(event) {
    const newData = JSON.parse(JSON.stringify(data));

    const filteredByGender = newData.filter(
      (el) => el.gender === event.target.innerText.toLowerCase()
    );
    setCart(false);
    setShoes(filteredByGender);
  }

  function setBySearch(event) {
    const newData = JSON.parse(JSON.stringify(data));
    const filteredBySearch = newData.filter((el) =>
      el.name.toLowerCase().includes(event.target.value.trim())
    );
    setShoes(filteredBySearch);
  }

  function removeFromCart(id) {
    const newData = JSON.parse(JSON.stringify(cartShoes));
    const shoe = newData.find((s) => s.id === id);
    let filteredData;

    if (shoe.qty > 1) {
      shoe.qty--;
      filteredData = newData;
    } else {
      filteredData = newData.filter((shoe) => shoe.id !== id);
    }

    setCartShoes(filteredData);
    updateLocalStorage(filteredData);
  }

  return (
    <>
      <Gender setByGender={setByGender} />
      <Search setBySearch={setBySearch} />
      <Categories setByBrand={setByBrand} />
      {cart ? (
        <DisplayShopCart
          cartShoes={cartShoes}
          removeFromCart={removeFromCart}
        />
      ) : (
        <DisplayCard shoes={shoes} addToCart={addToCart} />
      )}
    </>
  );
}

export default App;
