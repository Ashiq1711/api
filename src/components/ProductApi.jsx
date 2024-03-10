import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { CiSearch } from "react-icons/ci";
function ProductApi() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getApi() {
      let data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    }
    console.log(products);
    getApi();
  }, []);
  return (
    <Container >
        <div className="mx-auto mt-4 relative w-[500px]">

        <input type="Search items" className="px-4 shadow-sm w-[500px] border-[#000] border-[2px] rounded-xl h-12"  placeholder="search items"/>
        <CiSearch className=" absolute top-3 right-5 text-2xl" />
        </div>
      <div className="d-flex flex-wrap content-evenly">
        {products.map((item) => (
          <Card  style={{ width: "16rem", margin: "20px" }}>
            <Card.Img variant="top" style={{height:'250px', padding:'20px'}} src={item.image} />
            <Card.Body>
              <Card.Title>{(item.title.length>40)?
              `${item.title.substring(0,40)}`
              :
              item.title} <span className="text-[14px]">......read more</span></Card.Title>
           {console.log(item)}
              <Card.Title>${item.price}</Card.Title>
              <Button className="btn btn-outline-dark" >Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default ProductApi;
