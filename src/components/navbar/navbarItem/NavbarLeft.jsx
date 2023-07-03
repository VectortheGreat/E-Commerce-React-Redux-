import React from "react";
import { GiRaven } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="addPointerCursor p-2">
      <GiRaven size={20} className="mx-2"></GiRaven>
      <span>Vector Shop</span>
    </div>
  );
};

export default NavbarLeft;
