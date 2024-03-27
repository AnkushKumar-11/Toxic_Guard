import "../assets/CSS/landing/landing.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";
import aryan from "../assets/images/aryan.jpeg";
import ankush from "../assets/images/Ankush.jpg";
import visharad from "../assets/images/visharad.jpeg";
import { motion } from "framer-motion";
export default function Landing() {
  const navigate = useNavigate();
  // Calling the function when the promise is resolve
  const handleLogin = async (response) => {
    const postData = { accessToken: response.data.accessToken };
    await axios
      .post("http://127.0.0.1/login", postData)
      .then((res) => {
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("name", res.data.name);
        navigate("/posts");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="landingContent">
        <div className="bgImg"></div>
        <div className="navv">
          <Navbar />
        </div>
        <motion.div
          className="intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1>ToxicGuard</h1>
          <p>
            ToxicGuard is an advanced web application designed to tackle the
            pervasive issue of cyberbullying by detecting and mitigating toxic
            comments on users' posts across various social media platforms. This
            innovative tool employs cutting-edge natural language processing
            (NLP) and machine learning algorithms to analyze and identify
            potentially harmful or offensive content in real-time.
          </p>
        </motion.div>
      </div>
      <div className="getStarted" id="getStarted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="quoteAndBtn"
        >
          <div>
            <motion.h1>
              "Safeguarding Your Social Spaces Against Cyberbullying!"
            </motion.h1>
          </div>
          <div className="fbbtn">
            {
              <LoginSocialFacebook
                appId="342731435436198"
                onResolve={handleLogin}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
            }
          </div>
        </motion.div>
      </div>
      <div className="aboutUs" id="aboutUs">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <h1>About Us</h1>
          <div className="cards">
            <div className="card">
              <img src={ankush} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title" style={{ color: "white" }}>
                  Ankush Kumar
                </h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="bttn">
                  contact
                </a>
              </div>
            </div>
            <div className="card">
              <img src={visharad} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title" style={{ color: "white" }}>
                  Visharad Sandal
                </h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="bttn">
                  contact
                </a>
              </div>
            </div>
            <div className="card">
              <img src={aryan} className="card-img-top" alt="..." />
              <div className="card-image-overlay">
                <h2 className="card-title" style={{ color: "white" }}>
                  Aryan Gupta
                </h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="bttn">
                  contact
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
