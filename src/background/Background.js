import React from "react";
import logo from "./logo.png";

export function Background() {
  return (
    <div className="fixed flex flex-col top-[68px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="fixed transform -translate-x-[70%] w-[680px] h-[680px] -left-1/2 bg-green-400 rounded-full"></div>
      <div class="fixed transform   translate-y-[70vh] w-[400px] h-[400px] left-1/2 bg-green-400 rounded-full"></div>
      <img className="relative"
        src={logo} 
        alt="Logo" />


    </div>
    

  )

}


