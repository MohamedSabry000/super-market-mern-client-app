import Footer from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "../aboutsection/AboutSection";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import nehal from "../../assests/img/nehal.jpg";

function AboutUss(props) {
  return (
    <>
      <Navbar />
      <AboutSection />
      <section className="about-us">
        <div className="container">
          <div class="row">
            <div className="col-6">
              <div className="section-img"></div>
            </div>

            <div className="col-6">
              <div className="aboutus-description">
                <h2 class="title">We are the best in your city</h2>
                <p class="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="team">Meet The Team</p>
      <p className="prof"> Professional People</p>

      <div className="wrapper">
        <Card
          img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Mohamed "
          description="Full Stack Developer"
        />
        <Card
          img={nehal}
          title="Nehal "
          description="Full-Stack-Developer"
          github="https://github.com/nehalmohsen22"
          linkedin="https://www.linkedin.com/in/nehal-m-27a011198/"
          google="nehalmoh27@gmail.com"
        />
        <Card
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Mostafa "
          description="Full-Stack-Developer"
        />
        <Card
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Samar "
          description="Full-Stack-Developer"
        />
        <Card
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Mohamed "
          description="Full-Stack-Developer"
        />
        <Card
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title=" Pola "
          description="Full-Stack-Developer"
        />
      </div>
      <Footer />
    </>
  );
}

function Card(props) {
  return (
    <div>
      {" "}
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <img src={props.img} class="card_image" />
          </div>
        </div>
        <div className="lower-container card_body">
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </div>
        <div className="icons">
          <a href={props.google}>
            {" "}
            <FaGoogle className="icon" />
          </a>
          <a href={props.github}>
            <FaGithub className="icon" />
          </a>
          <a href={props.linkedin}>
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div
          style={{ backgroundColor: "#5a9b68", width: "100%", height: "8px" }}
        ></div>
      </div>
    </div>
  );
}

export default AboutUss;
