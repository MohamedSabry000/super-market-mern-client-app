import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./home.css";
import productImg from "../../assests/img/product-2-1.jpg";
import { useState } from "react";

function Home() {
  const [products, setProduct] = useState([
    { name: "car", price: 2000, category: "electronic" },
    { name: "laptop", price: 1200, category: "electronic" },
    { name: "mobile", price: 50, category: "electronic" },
    { name: "coffee", price: 90, category: "drinks" },
    { name: "icream", price: 30, category: "foods" },
  ]);
  const productCat = [...new Set(products.map((val) => val.category))];
  return (
    <>
      <Navbar />
      <MainSection />
      <section className="products">
        <div className="container-fluid">
          <h1 className="title text-center">Product</h1>
          <div className="row">
            {/* show products */}
            <div className="col-12 col-lg-12">
              <div className="content">
                <div className="row">
                  {products.map((product, key) => {
                    return (
                      <div className="col-4 mb-3" key={key}>
                        <div className="card pb-5 ">
                          <img className="card-img-top" src={productImg} />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text description">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="price">
                              <i className="fa fa-usd"></i>
                              {product.price}
                            </p>
                            <a href="#" className="button btn-view">
                              <i className="fa fa-eye"></i> View
                            </a>
                            <a href="#" className="button btn-edit">
                              <i className="fa fa-edit"></i> Edit
                            </a>
                            <a href="#" className="button btn-delete">
                              <i className="fa fa-close"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
