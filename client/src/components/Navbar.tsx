import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Determine whether to show the "Build" or "Home" button based on the current route
  const isBuildClicked = location.pathname === "/build";

  return (
    <nav className="p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">OptiLog</div>
        <TooltipProvider>
          <Tooltip>
            <Link to={isBuildClicked ? "/" : "/build"}>
              <TooltipTrigger
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {isBuildClicked ? "Home" : "Build"}
              </TooltipTrigger>
            </Link>

            <TooltipContent>
              <p>Multi Modal Logistics Parks</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Navbar;
