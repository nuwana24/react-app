import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import ContactPage from "./contact-component/ContactPage";
import ContactForm from "./contact-component/ContactForm";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactPage />}></Route>
        <Route path="/contactForm" element={<ContactForm />}></Route>
      </Routes>
    </>
  );
};
export default Layout;
