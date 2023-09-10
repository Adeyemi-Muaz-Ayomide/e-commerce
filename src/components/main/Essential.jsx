import Button from "../../ui/Button";

const Essential = () => {
  return (
    <section className="border-b-red mt-11">
      <div className="relative z-0 mx-auto block max-w-[1440px] px-16 md:w-full lg:py-24">
        <div className="flex items-center justify-between text-center">
          <h2 className="my-0 text-2xl font-normal tracking-[-0.02em] md:text-4xl">
            Bestselling essentials
          </h2>
          <Button className="hover:border-[#f4f4f5]-400 border-2 border-solid border-[#f4f4f5] bg-transparent px-[20px] py-[9px] text-[#0f172a] ">
            Shop all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Essential;
