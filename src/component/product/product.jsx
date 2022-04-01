import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";
import fruit from "../../assests/img/product-2-1.jpg";
import "./product.css";
function Product() {
  return (
    <>
      <Navbar />
      <MainSection />
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={fruit}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">Type: Fruits</h5>
                  <p className="text-muted mb-1">Seller : Mohamed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Banana</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0"> Price</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">5$</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Amount</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">1 kilo</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0"> Discription </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        Banana - yellow - 1 kilo - 5${" "}
                      </p>
                    </div>
                  </div>
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

export default Product;
