const SponsorSection = () => {
  return (
    <div className="border-y-2 border-[rgba(15,23,42,.08)] p-4">
      <h3 className="font-iSerif p-4 text-[30px] font-normal leading-5 tracking-[.1em] min-[676px]:text-[40px]">
        As seen on
      </h3>
      <ul className="flex items-center justify-evenly max-[600px]:ml-4">
        <li className=" text-center ">
          <img
            src="/images/adidas.png"
            alt="adidas logo"
            height="100px"
            width="100px"
          />
        </li>
        <li className="md:w">
          <img
            src="/images/nike.png"
            alt="nike logo"
            height="100px"
            width="100px"
          />
        </li>
        <li className=" md:w">
          <img
            src="/images/puma.png"
            alt="puma logo"
            height="100px"
            width="100px"
          />
        </li>
      </ul>
    </div>
  );
};

export default SponsorSection;


// const SponsorSection = () => {
//   return (
//     <div className="border-y-2 border-[rgba(15,23,42,.08)] p-4">
//       <h3 className="font-iSerif p-4 text-[30px] font-normal leading-5 tracking-[.1em] min-[676px]:text-[40px]">
//         As seen on
//       </h3>
//       <ul className="flex flex-wrap justify-center items-center">
//         <li className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
//           <img
//             src="../../../public/adidas.png"
//             alt="adidas logo"
//             height="100px"
//             width="100px"
//           />
//         </li>
//         <li className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
//           <img
//             src="../../../public/nike.png"
//             alt="nike logo"
//             height="100px"
//             width="100px"
//           />
//         </li>
//         <li className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
//           <img
//             src="../../../public/puma.png"
//             alt="puma logo"
//             height="100px"
//             width="100px"
//           />
//         </li>
//         <li className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
//           <img
//             src="../../../public/accentLogo.png"
//             alt="accent logo"
//             height="100px"
//             width="100px"
//           />
//         </li>
//         <li className="w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
//           <img
//             src="../../../public/compose.png"
//             alt="compose logo"
//             height="100px"
//             width="100px"
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SponsorSection;
