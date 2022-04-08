import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./home.css";
import "./search.css";
// import productImg from "../../assests/img/product-2-1.jpg";
import { useState, useEffect, useCallback } from "react";
import useToken from "../../utils/hooks/useToken";
import { getAllProductsData, getUserProductsByCategory, getUserProductsReq, removeOneProduct, getProductDataReq, getAllProductsByCategory } from "../../api/product";

import { NavLink } from "react-router-dom";
// import { BoxLoading } from "react-loadingg";
// import AddProduct from "../addproduct/addproduct";
import { useNavigate } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [stopFiltered, setStopFiltered] = useState(false);
  const [loading, setLoading] = useState(false)
  const [pageNimber, setPageNumber] = useState(false)

  const {token} = useToken();
  let navigate = useNavigate(); 

  // const loadMore = useCallback( async() => {
  //   setLoading(true)
  //   return setTimeout(() => {
  //     await getUserProductsReq(token, pageNimber).then((res) => {
  //       setProducts(prev => [...prev, ...res.data.data])
  //       setPageNumber(prev => prev + 1)
  //       setLoading(false)
  //     })
  //   }, 1000)
  // }, [pageNimber])

  //     setUsers((users) => [...users, ...generateUsers(100, users.length)])
  //     setLoading(() => false)
  //   }, 500)
  // }, [setUsers, setLoading])

  // useEffect(() => {
  //   const timeout = loadMore()
  //   return () => clearTimeout(timeout)
  // }, [pageNimber])

  const getProductData = async (page=1) => {
    await getUserProductsReq(token, page)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProducts = async (page=1) => {
    await getAllProductsData(page)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    token ? getProductData() : getAllProducts();
  }, [stopFiltered]);

  useEffect(() => {
    const getProductData = async () => {
      await getUserProductsByCategory(token, filtered)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const getAllFilteredProductData = async () => {
      await getAllProductsByCategory(filtered)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    filtered !== ""? (token? getProductData() : getAllFilteredProductData()): setStopFiltered(!stopFiltered);
  }, [filtered])

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
  }

  const updateProduct = (prod) => {
    console.log(prod);
    navigate('/addproduct/' + prod._id);
  }

  return (
    <>
      <Navbar />
      <MainSection />
      <section className="products">
        <div className="container-fluid">
          <div>
          <label htmlFor="search">Search</label>
            <input id="search" type="search" pattern=".*\S.*" onChange={e => setFiltered(e.target.value)} />
            <span className="caret"></span>
          </div>
          <h1 className="title text-center">Product</h1>
          <div className="row">
            {/* show products */}
            {!products.length ? (
              <div></div>
            ) : (
              <div className="col-12 col-lg-12">
                <div className="content">
                  <div className="row">
                    {products.map((product, key) => (
                      <div className="col-12 col-md-6 col-lg-4 mb-3 text-center" key={key}>
                        <>
                        <Card style={{margin: "0 auto" }}>
                          <Card.Img variant="top" src={product.avatar} alt={product.title} style={{paddingTop: "12px"}} />
                          <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                              {product.description.length>50?product.description.substring(0,50)+'...':product.description}
                            </Card.Text>
                          </Card.Body>
                          <ListGroup variant="flush">
                            <ListGroup.Item><i className="fa fa-usd"></i>{" "}{product.price}</ListGroup.Item>
                            <ListGroup.Item><i className="fa  fa-thumb-tack"></i>{" "}{product.tag}</ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                          {token && (
                              <>
                                <NavLink className="button btn-view" to={`/product/${product._id}`}>
                                  <i className="fa fa-eye"></i> View
                                </NavLink>

                                <Button className="button btn-edit" onClick={() => updateProduct(product)}>
                                  <i className="fa fa-edit"></i> Edit
                                </Button>

                                <Button className="button btn-delete" onClick={() => deleteProduct(product._id)}>
                                  <i className="fa fa-close"></i> Delete
                                </Button>
                              </>
                            )}
                          </Card.Body>
                        </Card>
                        </>
                        {/* <div className="card pb-5 ">
                          <img
                            className="card-img-top"
                            src={product.avatar}
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text description">
                             - {product.description.length>50?product.description.substring(0,50)+'...':product.description}
                            </p>
                            <p className="price">
                              <i className="fa fa-usd"></i>
                              {product.price}
                            </p>
                            <p className="address">
                              <i className="fa  fa-thumb-tack"></i>{" "}
                              {product.tag}
                            </p>
                            {token && (
                              <>
                                <NavLink className="button btn-view" to={`/product/${product._id}`}>
                                  <i className="fa fa-eye"></i> View
                                </NavLink>

                                <button className="button btn-edit" onClick={() => updateProduct(product)}>
                                  <i className="fa fa-edit"></i> Edit
                                </button>

                                <button className="button btn-delete" onClick={() => deleteProduct(product._id)}>
                                  <i className="fa fa-close"></i> Delete
                                </button>
                              </>
                            )}
                          </div>
                        </div> */}
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
