'use client';

import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { postContactUs } from "@/services/api/contact-api";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({});




  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  }

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  }
  const messageHandler = (e) => {
    setMessage(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    postContactUs(name, email, phone, subject, message).then((data) => {
      setStatus(data);
    });
  };

  // console.log(status?.status);



  return (
    <>
      <HeaderTwo />

      <Breadcrumbs title="Contact Us" menuText="Contact Us" />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.156899344697!2d85.33185079259792!3d27.681306094801602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bf8a7e89f7%3A0x436c0b9d8bb3e6b9!2sApple%20International%20Pharmaceuticals%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1712576701620!5m2!1sen!2snp" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please fell free to contact with
                    us.
                  </p>

                  <form className="form" onSubmit={submitHandler} >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            onChange={nameHandler}
                            value={name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            style={{ textTransform: "none" }}
                            onChange={emailHandler}
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                            onChange={phoneHandler}
                            value={phone}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            onChange={subjectHandler}
                            value={subject}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            onChange={messageHandler}
                            value={message}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                </div>
                {
                  status.status === true && <Alert color="#17457c" variant="success">Your message has been sent successfully</Alert>
                    
                }
                {
                  status.status === false && <Alert variant="danger">Something went wrong. Please try again later</Alert>
                }
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              <p className="contact-text"> Head Office</p>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <a href="tel:+97715242817"><h3>+977 15242817 </h3></a>
                    <a href="mailto:apple.intpharma@gmail.com"><p>apple.intpharma@gmail.com</p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3> Sankhamul</h3>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>10am - 5:30pm</h3>
                    <p>Saturday Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="contact-text">Factory Site</p>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <a href="tel: +97771563170"><h3>+977 71563170</h3></a>
                    <a href="mailto:apple.intpharma@gmail.com"><p>apple.intpharma@gmail.com</p></a>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Tilottama-6 </h3>
                    <p>Rupandehi, Nepal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>8am - 4pm</h3>
                    <p>Saturday Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
