import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


const Footer = () => {
  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography variant="body2" align="center" mt={2}>
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
