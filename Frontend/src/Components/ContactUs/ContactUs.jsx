import React from "react";
import "./ContactUs.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69nsgf6",
        "template_vgzture",
        form.current,
        "Js3faX5up03Zu1rh5"
      )
      .then((result) => {
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error("Oops, got some error");
      });
  };
  return (
    <>
      <div className={`contactPage py-3 rounded `}>
        <section id="contact ">
          <div className="padding text-center text-white m-auto ">
            <h1 className="fw-bold">Get in Touch with us</h1>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
          </div>
          <div className="text-white mt-4">
            <div className="container">
              <form ref={form} onSubmit={sendEmail}>
                <div className="col-md-6 form-line m-auto">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername">Your name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id
                      placeholder=" Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder=" Enter Email id"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telephone">Mobile No.</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      placeholder=" Enter 10-digit mobile no."
                    />
                  </div>
                </div>
                <div className="col-md-6 m-auto">
                  <div className="form-group">
                    <label htmlFor="description"> Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Enter Your Message"
                    />
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      className=" border btn btn-default submit"
                    />
                    {/* <i className="fa fa-paper-plane" aria-hidden="true" /> Send
                    Message */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
