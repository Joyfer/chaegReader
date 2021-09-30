import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuList from "@mui/material/MenuList";


import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";

const IconButtonMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FormatSizeRoundedIcon style={{color: "white"}} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        onClick={handleClose}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList>{props.children}</MenuList>
      </Menu>
    </div>
  );
};

export default IconButtonMenu;
