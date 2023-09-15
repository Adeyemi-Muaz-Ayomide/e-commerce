import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#6b5c4c",
  ...theme.typography.body2,
  padding: theme.spacing(7),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  height: "80vh", // Default height for xs screens
  [theme.breakpoints.up("md")]: {
    height: "95vh", // Height for md screens and larger
    padding: theme.spacing(10), // Padding for md screens and larger
  },
}));
const ThanksSection = () => {
  return (
    <Item
      variant="outlined"
      square
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        // marginTop: '50px'
      }}
    >
      <div>
        <img
          className="rounded-xl w-[100%] h-full min-[991px]:w-[80%]"
          src="https://source.unsplash.com/random?wallpapers"
          alt="unsplash"
        />
      </div>
      <div className="text-[#f2ede9] min-[991px]:my-24 min-[991px]:ml-10">
        <h1 className="my-6 font-iSerif text-4xl font-normal leading-[0.95em] tracking-[-0.03em] min-[560px]:text-[52px] min-[768px]:text-[92px]">
          Your feet will thank you
        </h1>
        <p className="max-w-xl text-sm min-[768px]:text-[16px] leading-6 tracking-[.01em] min-[991px]:mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          ea odit illo voluptatibus commodi quam repudiandae totam, quas
          molestias iusto placeat ipsam optio corporis reiciendis! Quos ex eos
          nulla.
        </p>
      </div>
    </Item>
  );
};

export default ThanksSection;
