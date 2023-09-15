import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

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

const CustomerCare = () => {
  const theme = useTheme();

  return (
    <Item
      variant="outlined"
      square
      sx={{
        display: "flex",
        flexDirection: "column-reverse", // Stack on top of each other by default
        [theme.breakpoints.up("md")]: {
          flexDirection: "row", // Side by side on md screens and larger
          alignItems: "center", // Center items horizontally on md screens and larger
        },
      }}
    >
      <div className="my-6 text-[#f2ede9] min-[560px]:my-24 min-[768px]:ml-20">
        <h1 className="text-4xl font-normal leading-[0.95em] tracking-[-0.03em] min-[560px]:text-[52px] min-[768px]:text-[92px]">
          Your feet will thank you
        </h1>
        <p className="max-w-xl text-sm leading-6 tracking-[.01em] min-[768px]:text-[16px] min-[991px]:mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          ea odit illo voluptatibus commodi quam repudiandae totam, quas
          molestias iusto placeat ipsam optio corporis reiciendis! Quos ex eos
          nulla.
        </p>
      </div>
      <div className="h-full w-full min-[991px]:h-[100%] min-[991px]:w-[50%]">
        <img
          className="h-full w-full rounded-xl"
          src="https://source.unsplash.com/random?wallpapers"
          alt="unsplash"
        />
      </div>
    </Item>
  );
};

export default CustomerCare;
