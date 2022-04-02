import "./mainsection.css";
import "./MainSection.jsx";
import React from "react";
import { NavLink } from "react-router-dom";
function MainSection() {
  return (
    <>
      <section className="main-section">
        <div className="container">
          <div className="intro">
            <h1 className="title">Nature Food</h1>

            <NavLink className="btn btn-product" to="/addproduct">
                Add Product
            </NavLink>
            {/* <button className="btn btn-product" >add product</button> */}
          </div>
        </div>
      </section>
    </>
  );
}
// import firstImg from "../../assests/img/gallery-1-3.jpg";
// import secondImg from "../../assests/img/gallery-1-5.jpg";
// import thirdImg from "../../assests/img/footer-bg-1-2.png";
// function MainSection() {
//   return (
//     <>
//       <section className="main-section">
//         <div class="intro text-center">
//           <h1 class="title">This is heading</h1>
//           <p className="description">
//             Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when{" "}
//           </p>
//           <button className="btn btn-product">buy now</button>
//         </div>
//         <div
//           id="carouselExampleFade"
//           class="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img src={firstImg} class="d-block w-100" alt="..." />
//             </div>
//             <div class="carousel-item">
//               <img src={secondImg} class="d-block w-100" alt="..." />
//             </div>
//             <div class="carousel-item">
//               <img src={thirdImg} class="d-block w-100" alt="..." />
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//         <div class="arrow"></div>
//       </section>
//     </>
//   );
// }

export default MainSection;
