import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.png";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="p-10 bg-[#a2d2ff] ">
      <footer className="footer text-base-content">
        <div>
          <img className="w-24 h-24" src={logo} alt="LOGO" />
          <p className="text-lg font-semibold">PBD Helper</p>
        </div>
        <div>
          <span className="footer-title">Services</span>

          <Link to="*" className="link link-hover">
            Post Problem
          </Link>
          <Link to="*" className="link link-hover">
            Complain
          </Link>
          <Link to="*" className="link link-hover">
            Solution
          </Link>
        </div>
        <div>
          <span className="footer-title">Category</span>
          <Link to="*" className="link link-hover">
            Most Important
          </Link>
          <Link to="*" className="link link-hover">
            More Important
          </Link>
          <Link to="*" className="link link-hover">
            Less Important
          </Link>
          <Link to="*" className="link link-hover">
            Emergency
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="*" className="link link-hover">
            Terms of use
          </Link>
          <Link to="*" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="*" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <div className="text-center mt-5">
        <p>
          Copyright © {date} - All right reserved by{" "}
          <strong className="hover:underline">PBD Helper</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
