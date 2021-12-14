import React from "react";

import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
} from "@mui/icons-material";

import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const MenuBooks = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ContentCut fontSize="small" />
        </ListItemIcon>
        <ListItemText>Cut</ListItemText>
        <Typography variant="body2" color="text.secondary">
          ⌘X
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ContentCopy fontSize="small" />
        </ListItemIcon>
        <ListItemText>Copy</ListItemText>
        <Typography variant="body2" color="text.secondary">
          ⌘C
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ContentPaste fontSize="small" />
        </ListItemIcon>
        <ListItemText>Paste</ListItemText>
        <Typography variant="body2" color="text.secondary">
          ⌘V
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Cloud fontSize="small" />
        </ListItemIcon>
        <ListItemText>Web Clipboard</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default MenuBooks;
