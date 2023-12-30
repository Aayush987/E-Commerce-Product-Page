import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    const Navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [addtoCart, setAddtoCart] = useState([]);
    const [Totalprice, setTotalPrice] = useState(0);
    const [filterProduct, setFilterProduct] = useState([]);
      
    useEffect(() => {
        const LoggedIn = localStorage.getItem('token');
        if(!LoggedIn){
            Navigate('/');
        }

        fetchProducts();
    },[])

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        // console.log(data);
        setProducts(data.products);
        setFilterProduct(data.products);
    }

    const handleSearch = async (e) => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
      const data = await response.json();
        setFilterProduct(data.products);
    }

    const handleFilter = async (e) => {
        let minValue = 0,
        target = e.target.value;
      if (target === "10 & above") minValue = 10;
      else if (target === "100 & above") minValue = 100;
      else if (target === "500 & above") minValue = 500;
      else if (target === "1000 & above") minValue = 1000;
      else if (target === "1500 & above") minValue = 1500;
  
      const filteredData = products.filter(
        (product) => product.price >= minValue
      );
      setFilterProduct(filteredData);
    }


  return (
    <div>
       <Navbar
        addtoCart = {addtoCart}
        Totalprice = {Totalprice}
        handleSearch = {handleSearch}
        handleFilter = {handleFilter}
        />
    <button className="clr" onClick= {() => {setAddtoCart([]); setTotalPrice(0);}}>Clear Cart</button>
    <div className="container">
     {filterProduct.map((product, id) => {
        return (
            <Card
                key = {id}
                title = {product.title}
                description = {product.description}
                price = {product.price}
                setAddtoCart = {setAddtoCart}
                setTotalPrice = {setTotalPrice}
             />
        )
     })}
     </div>
    </div>
  )
}

export default Home