import { Navbar } from "flowbite-react";
import data from "./data/data";
import { Link, useLocation } from "react-router-dom";

export default function NavbarWithCTAButton() {
  const locationPath = useLocation();

  return (
    <Navbar fluid rounded className="bg-slate-200 p-1 sm:p-2 md:hidden">
      <div className="order-first mx-auto flex">
        <Navbar.Toggle className="text-[#00e2ac]/90" />
      </div>
      <Navbar.Collapse className="bg-transparent text-center">
        {data.headerLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                className={`${
                  locationPath.pathname === item.href
                    ? "bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-white"
                    : "bg-[#f7f7f7] from-[#FA5252] to-[#1f2251] text-slate-800 transition-all hover:bg-gradient-to-r hover:text-white"
                }
                 mx-auto cursor-pointer rounded-[10px] bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-[14px] font-extralight 
                  opacity-100 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3358f4] hover:to-[#1d8cf8]`}
              >
                <h4 className="mt-1 font-title text-[16px] font-medium">
                  {item.title}
                </h4>
              </Link>
            </li>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

/**<Navbar fluid rounded className="bg-slate-200 p-1 sm:p-2 md:hidden">
      <div className="order-first mx-auto flex">
        <Navbar.Toggle className="text-[#00e2ac]/90" />
      </div>
      <Navbar.Collapse className="bg-transparent text-center">
        {data.headerLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                className={`${
                  locationPath.pathname === item.href
                    ? "bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-white"
                    : "bg-[#f7f7f7] from-[#FA5252] to-[#1f2251] text-slate-800 transition-all hover:bg-gradient-to-r hover:text-white"
                }
                 mx-auto cursor-pointer rounded-[10px] bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-[14px] font-extralight 
                  opacity-100 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3358f4] hover:to-[#1d8cf8]`}
              >
                <h4 className="mt-1 font-title text-[16px] font-medium">
                  {item.title}
                </h4>
              </Link>
            </li>
          );
        })}
      </Navbar.Collapse>
    </Navbar> */
