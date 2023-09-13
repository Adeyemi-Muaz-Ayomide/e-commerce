import * as React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const pages = ["Shop all", "BestSellers", "Journal", "Our story", "Contact"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // variant="outlined"
        square
        sx={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onMouseEnter={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".2rem",
            }}
          >
            Radiate
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "unset",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block", textAlign: "center" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              color: "#000",
              // justifyContent: "center", // Center items on small screens
              // "& .MuiMenuItem-root": {
              //   justifyContent: "space-between", // Add space between items on larger screens
              //   width: "100%",
              // }, // Ensure full width on larger screens
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Button from "@mui/material/Button";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// const Header = () => {
//   return (
//     <AppBar
//       position="static"
//       color="default"
//       elevation={0}
//       sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
//     >
//       <Toolbar sx={{ flexWrap: "wrap" }}>
//         <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//           Company name
//         </Typography>
//         <nav>
//           <Link
//             variant="button"
//             color="text.primary"
//             href="#"
//             sx={{ my: 1, mx: 1.5 }}
//           >
//             Features
//           </Link>
//           <Link
//             variant="button"
//             color="text.primary"
//             href="#"
//             sx={{ my: 1, mx: 1.5 }}
//           >
//             Enterprise
//           </Link>
//           <Link
//             variant="button"
//             color="text.primary"
//             href="#"
//             sx={{ my: 1, mx: 1.5 }}
//           >
//             Support
//           </Link>
//         </nav>
//         <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
//           <ShoppingCartIcon />
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
