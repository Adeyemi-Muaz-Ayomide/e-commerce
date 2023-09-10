import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../ui/Button";
const Header = () => {
  return (
    <header className="bg-primary sticky top-0">
      <div className="flex h-16  items-center justify-between bg-white">
        <h1 className="ml-20 text-2xl uppercase">Radiate</h1>
        <span className="mr-20">
          <ShoppingCartIcon />
          <MenuIcon className="ml-10" />
        </span>
      </div>
      <section className="flex flex-col gap-y-6 p-20">
        <h1 className=" w-full max-w-lg text-[30px] font-normal leading-4 tracking-tight md:text-[52px] lg:text-[72px]">
          A new age of skincare
        </h1>

        <div className="w-full max-w-lg">
          <p className="mb-7 text-[18px] font-normal leading-6 tracking-[-0.02em] text-[#455366]">
            Welcome to the skincare revolution. The new age of beauty is here.
            Create a personalized routine with the best products. Helping you to
            achieve a youthful glow like never before.
          </p>
          <>
            <Button className="bg-[#6b5c4c] text-white md:relative">
              Shop collection
            </Button>
            <Button className="hover: bg-white text-black">Our story</Button>
          </>
        </div>
      </section>
    </header>
  );
};

export default Header;
