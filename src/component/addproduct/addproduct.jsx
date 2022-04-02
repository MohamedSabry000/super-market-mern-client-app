import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./addproduct.css";
import useToken from "../../utils/hooks/useToken";
import { createProductReq, getProductDataReq, updateProductAvatar, updateProductReq } from "../../api/product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateProfileAvatar } from "../../api";

function AddProduct() {

  const { id } = useParams();

  const { token } = useToken();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getProductDataReq(id).then((res) => {
        setName(res.data.data.title);
        setPrice(res.data.data.price);
        setTag(res.data.data.tag);
        setDescription(res.data.data.description);
        // setAvatar(res.data.data.avatar);
      });
    }
    if (id) {
      fetchData();
    }
  }, []);

  const uploadAvatar = (id, localToken) => {
    console.log("upadate product avatar");
    if(avatar){
      const formData = new FormData();
      formData.append("avatar", avatar);

      console.log(formData);
      const updateAvatarReq = async () => {
        await updateProductAvatar(id, localToken, formData)
          .then((res) => {
            console.log(res.data);

            setAvatar(res.data.data.avatar)

          })
          .catch((err) => {
            console.log(err);
          });
      }
      updateAvatarReq();
    }
  }

  let validateForm = () => {
    if (name || price || tag || description) return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      if(!id) {
        await createProductReq({
          title: name,
          price,
          description,
          tag,
        }, token).then((res) => {
          console.log(res);
          if (res.data.data) {

            if(avatar)
              uploadAvatar(res.data.data._id, token);

            console.log("123");
            window.location.href = `/product/${res.data.data._id}`;
          }
        });
      } else {
        await updateProductReq(id, token, {
          title: name,
          price,
          description,
          tag,
        }).then((res) => {
          console.log(res);
          if (res.data.data) {

            if(avatar)
              uploadAvatar(res.data.data._id, token);

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
              value={name}
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
              value={price}
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
              value={tag}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="customize-file">
            <span>Choose</span>
            <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
          </div>

          <button className="btn add-btn ms-auto d-block ">
            {
              id? "Update" : "Add"
            } 
            </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;
