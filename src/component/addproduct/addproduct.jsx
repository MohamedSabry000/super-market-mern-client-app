import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./addproduct.css";
import useToken from "../../utils/hooks/useToken";
import { createProductReq, updateProductReq } from "../../api/product";
import { useState, useEffect } from "react";

function AddProduct(prod) {
  const { token } = useToken();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  let validateForm = () => {
    if (name || price || tag || description) return false;

    return true;
  };

  useEffect(() => {

    const updateCase = () => {
      setName(prod.name); 
      setPrice(prod.price); 
      setTag(prod.tag); 
      setDescription(prod.description); 
      // setName(prod.name); 
    } 

    updateCase();
    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      if(!prod){
        await createProductReq({
          title: name,
          price,
          description,
          tag,
        }, token).then((res) => {
          console.log(res);
          if (res.data.data) {
            console.log("123");
            window.location.href = `/product/${res.data.data._id}`;
          }
        });
      } else {
        await updateProductReq(prod._id, token, {
          title: name,
          price,
          description,
          tag,
        }).then((res) => {
          console.log(res);
          if (res.data.data) {
            console.log("123");
            window.location.href = `/product/${res.data.data._id}`;
          }
        });
      }
    }
  };
  

  return (
    <>
      <Navbar />
      <MainSection />
      <div className="form-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <h3 className="title">Add Product</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Tag
            </label>
            <input
              type="string"
              className="form-control"
              id="tag"
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="customize-file">
            <span>Choose</span>
            <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
          </div>

          <button className="btn add-btn ms-auto d-block ">
            {
              prod? "Update" : "Add"
            } 
            </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;
