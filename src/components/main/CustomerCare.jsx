import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f2ede9",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  height: "50vh",
}));

const CustomerCare = () => {
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
      <div className="min-[991px]:m-10">
        <h1 className="min-[768px]:text6xl mb-2 text-2xl font-bold min-[560px]:text-5xl">
          Your feet will thank you
        </h1>
        <p className="max-w-xl text-sm min-[768px]:text-xl min-[991px]:mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          ea odit illo voluptatibus commodi quam repudiandae totam, quas
          molestias iusto placeat ipsam optio corporis reiciendis! Quos ex eos
          nulla.
        </p>
      </div>
      <div>
        <img
          className="my-6 h-auto w-full rounded-xl min-[760px]:h-60 min-[991px]:h-80 min-[991px]:w-96"
          src="https://source.unsplash.com/random?wallpapers"
          alt="unsplash"
        />
      </div>
    </Item>
  );
};

export default CustomerCare;
