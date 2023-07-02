import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const NavbarRight = () => {
  return (
    <div className="d-flex align-items-center gap-3">
      <div className="d-flex align-items-center p-3 border">
        <input type="text" placeholder="Search"></input>
        <BiSearch size={28}></BiSearch>
      </div>
      <AiOutlineHeart size={28}></AiOutlineHeart>
      <div className="position-relative">
        <div
          className="position-absolute bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "1.25rem",
            height: "1.25rem",
            marginTop: "-0.75rem",
            marginLeft: "1rem",
          }}
        >
          3
        </div>
        <SlBasket size={28}></SlBasket>
      </div>
    </div>
  );
};

export default NavbarRight;
