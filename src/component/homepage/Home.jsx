import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./home.css";
import productImg from "../../assests/img/product-2-1.jpg";
import { useState, useEffect } from "react";
import useToken from "../../utils/hooks/useToken";
import {
  getAllProductsData,
  getUserProductsReq,
  removeOneProduct,
} from "../../api/product";
import { NavLink } from "react-router-dom";
// import { BoxLoading } from "react-loadingg";
import AddProduct from "../addproduct/addproduct";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const { token } = useToken();
  let navigate = useNavigate();

  useEffect(() => {
    const getProductData = async () => {
      await getUserProductsReq(token)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getAllProducts = async () => {
      await getAllProductsData()
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    token ? getProductData() : getAllProducts();
  }, []);

  const deleteProduct = (id) => {
    const removeProduct = async (id) => {
      await removeOneProduct(id)
        .then((res) => {
          setProducts(products.filter((product) => product._id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    removeProduct(id);
  };

  const updateProduct = (prod) => {
    console.log(prod);
    navigate("/addproduct/" + prod._id);
  };

  return (
    <>
      <Navbar />
      <MainSection />
      <section className="products">
        <div className="container-fluid">
          <h1 className="title text-center">Product</h1>
          <div className="row">
            {/* show products */}
            {!products.length ? (
              <div></div>
            ) : (
              // <BoxLoading />
              <div className="col-12 col-lg-12">
                <div className="content">
                  <div className="row">
                    {products.map((product, key) => (
                      <div className="col-4 mb-3" key={key}>
                        <div className="card pb-5 ">
                          <img
                            className="card-img-top"
                            src={product.avatar}
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text description">
                              {product.description}
                            </p>
                            <p className="price">
                              <i className="fa fa-usd"></i>
                              {product.price}
                            </p>
                            {token && (
                              <>
                                <NavLink
                                  className="button btn-view"
                                  to={`/product/${product._id}`}
                                >
                                  <i className="fa fa-eye"></i> View
                                </NavLink>

                                <button
                                  className="button btn-edit"
                                  onClick={() => updateProduct(product)}
                                >
                                  <i className="fa fa-edit"></i> Edit
                                </button>

                                <button
                                  className="button btn-delete"
                                  onClick={() => deleteProduct(product._id)}
                                >
                                  <i className="fa fa-close"></i> Delete
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="btn btn-load">Load More</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;
