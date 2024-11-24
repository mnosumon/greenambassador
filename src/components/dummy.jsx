// import React from "react";
// import SpecialtyCoffee from "../../assets/image/challangeCard/specialty-coffee.png";
// import PrimaryBTN from "../utilities/PrimaryBTN";
// import { Link } from "react-router-dom";
// import Heading from "../utilities/Heading";
// import Peragrap from "../utilities/Peragrap";

// const ChallagneBanner = () => {
//   return (
//     <section className="pb-20 pt-36 bg-gray-50">
//       <div className="container mx-auto flex justify-between items-center relative">
//         {/* Text Section */}
//         <div className="w-1/2 z-10">
//           <div className="w-4/5">
//             <Heading
//               className="!text-heading"
//               title="Exploring the Hidden Sustainable Benefits of Specialty Coffee"
//             />
//             <Peragrap
//               className="text-textColor mb-8"
//               title="This challenge explores the sustainable and social benefits of specialty coffee, from micro-lot farming to community initiatives, highlighting its impact on the environment and livelihoods."
//             />
//             <PrimaryBTN
//               className="bg-primary text-white hover:bg-hoverColor !px-6 !py-3 rounded-md"
//               title="Start Challenge and Earn 12 B3TR"
//             />
//           </div>
//         </div>

//         {/* Image Section with Curved Divider */}
//         <div className="w-1/2 relative">
//           {/* Curved Mask Divider */}
//           <div className="absolute top-0 left-[-5%] h-full w-[10%] bg-white mask-divider hidden lg:block"></div>

//           {/* Image */}
//           <Link className="block w-full relative group overflow-hidden rounded-md shadow-md">
//             <img
//               className="w-full h-full object-cover"
//               src={SpecialtyCoffee}
//               alt="Challenge Image"
//             />
//             {/* Hover Overlay */}
//             <div className="absolute top-0 left-0 w-full h-full bg-[#7c717134] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
//             {/* Badge */}
//             <PrimaryBTN
//               className="absolute right-5 bottom-5 !px-3 !py-1 rounded-md !text-sm z-10"
//               title="Available"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChallagneBanner;

// @layer utilities {
//     .mask-divider {
//       -webkit-mask-image: url("data:image/svg+xml;utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3e%3cpath d='M0,0 C20,50 80,50 100,0 L100,100 L0,100 Z' fill='%23fff'/%3e%3c/svg%3e");
//       mask-image: url("data:image/svg+xml;utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3e%3cpath d='M0,0 C20,50 80,50 100,0 L100,100 L0,100 Z' fill='%23fff'/%3e%3c/svg%3e");
//       -webkit-mask-size: cover;
//       mask-size: cover;
//       pointer-events: none;
//     }
//   }
