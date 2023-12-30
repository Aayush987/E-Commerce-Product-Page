import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";

const Navbar = ({addtoCart, Totalprice, handleSearch, handleFilter}) => {
  return (
    <div className="nav">
        <h1 className="logo">E-Commerce Page</h1>
        <div className="search">
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <IoSearch className="search-icon" />
        </div>
        <div className="cart">
            <MdOutlineShoppingCart className="cart-icon" />
            <p className="count">{addtoCart.length}</p>
            <p>${Totalprice}</p>
        </div>
        <div className="filter">
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="10 & above">10 & above</option>
                <option value="100 & above">100 & above</option>
                <option value="500 & above">500 & above</option>
                <option value="1000 & above">1000 & above</option>
                <option value="1500 & above">1500 & above</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar