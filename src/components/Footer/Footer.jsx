import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Footer Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="body2" align="center" mt={2}>
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
