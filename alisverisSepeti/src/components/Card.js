import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { artir, azalt, cikar } from "../store/book/bookActions";
const Card = () => {
  const { bookState, dispatchBook } = useStore();
  const { cart } = bookState;
  const toplSayi = cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  const toplFiyat = cart.reduce(
    (total, book) => (total = total + book.price * book.count),
    0
  );
  return (
    <div>
      <h2>
        {" "}
        <Link to="/products">Kitap Listesi</Link>
        <span>Sepetim({toplSayi})</span>
      </h2>
      <h3>Toplam Sepet Tutari:{toplFiyat}</h3>
      {cart.map(({ id, name, price, author, image, count }) => (
        <div className="book" key={id}>
          <img src={image} alt={name} />
          <div>
            <p>Yazar:{author}</p>
            <p>Fiyat:{price}</p>
            <p>Sepetinizde bu kitaptan toplam {count} adet var.</p>
            <button onClick={dispatchBook(azalt(id))}>-</button>
            <button onClick={dispatchBook(cikar(id))}>Sepetten Cikar</button>
            <button onClick={dispatchBook(artir(id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;