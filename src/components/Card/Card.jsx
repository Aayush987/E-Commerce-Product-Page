import "./Card.css";
const Card = ({title , description, price, setAddtoCart, setTotalPrice}) => {
  return (
    <div className="card">
        <h2 id = "title">{title}</h2>
        <p id = "desc">{description}</p>
        <p id = "price">Price: ${price}</p>
        <button className="btn" onClick={() => {
          setAddtoCart((prev) => prev + 1);
          setTotalPrice((prev) => prev + price);
        }}>Add to Cart</button>
    </div>
  )
}

export default Card