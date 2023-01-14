import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "10px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <AppBar position={"sticky"}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SINISA
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={openMenu}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={openMenu}
          />
          <Typography variant="p">Remy Sharp</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={<Avatar />}
        open={open}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={closeMenu}>My account</MenuItem>
        <MenuItem onClick={closeMenu}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
