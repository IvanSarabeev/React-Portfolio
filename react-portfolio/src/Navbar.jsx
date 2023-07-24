import { Navbar } from "flowbite-react";
import data from "./data/data";
import { Link, useLocation } from "react-router-dom";

export default function NavbarWithCTAButton() {
  const locationPath = useLocation();

  return (
    <Navbar fluid rounded className="h-min bg-transparent md:hidden">
      <div className="order-first mx-auto flex">
        <Navbar.Toggle className="text-[#00e2ac]/90" />
      </div>
      <Navbar.Collapse className="text-center">
        {data.headerLinks.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                locationPath.pathname === item.href
                  ? "bg-gradient-to-t from-sky-500 to-sky-800 "
                  : "bg-gradient-to-t from-slate-200 to-slate-600"
              } rounded-md`}
            >
              <Link
                to={item.href}
                className={`${
                  locationPath.pathname === item.href
                    ? "bg-[#0699e9] text-[#00f594]/100"
                    : "bg-[red] text-slate-800 opacity-80 transition-all hover:bg-gradient-to-r hover:text-slate-900 hover:opacity-100"
                }
                 mx-auto cursor-pointer rounded-[10px] font-heading text-[14px] font-extralight transition-all duration-300 hover:text-[#DD2476] md:text-[16px]`}
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
