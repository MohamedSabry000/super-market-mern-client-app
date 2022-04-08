import Footer from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "../mainsection/MainSection";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

function AboutUss(props) {
  return (
    <>
      <Navbar />
      <MainSection />
      <p className="team">Meet The Team</p>

      <div className="wrapper">
        <Card
          img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Mohamed "
          description="Full Stack Developer"
        />
        <Card
          img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Nehal "
          description="Full-Stack-Developer"
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
          <FaGoogle className="icon" />
          <FaGithub className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
    </div>
  );
}

export default AboutUss;
