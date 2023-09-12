const Footer = () => {
  return (
    <footer className=" absolute z-0 block max-w-[1440px] px-16 max-[991px]:py-24 md:w-full">
      <div className=" md: grid w-full grid-flow-row grid-cols-3 items-start gap-x-16 gap-y-16">
        <ul className=" flex-col col-start-3 row-start-1 row-end-1  flex gap-x-4 gap-y-4 self-start md:col-end-3">
            <li>Shop all</li>
            <li>Bestsellers</li>
            <li>Body</li>
            <li>Hair</li>
            <li>Scent</li>
            <li>Skin</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
