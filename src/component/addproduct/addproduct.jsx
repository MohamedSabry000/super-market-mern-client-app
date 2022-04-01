import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import "./addproduct.css";

function AddProduct() {
  return (
    <>
      <Navbar />
      <MainSection />
      <div className="form-container">
        <form className="add-form">
          <h3 className="title">Add Product</h3>
          <div class="mb-3">
            <label for="name" class="form-label">
              Product name
            </label>
            <input type="email" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">
              Price
            </label>
            <input type="text" class="form-control" id="price" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea
              type="text"
              class="form-control"
              id="descriptionn"
            ></textarea>
          </div>
          <div class="customize-file">
            <span>Choose</span>
            <input type="file" />
          </div>

          <button class="btn add-btn ms-auto d-block ">Add</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;
