"use client";
import Icon from "./components/Icon";
import Calculadora from "./components/Calculadora";
import { useState } from "react";



export default function Home() {
  const [app, setApp] = useState(false);
  function mostraApp (){
    if (app == false){
      setApp(true)
    }else{
      setApp(false)
    }
  }
  return (
    <div
      className="bg-cell w-[25em] bg-no-repeat bg-cover bg-center flex items-center justify-center 
      h-screen relative bg-local px-[35px] py-[40px]"
    >
      <div className="w-full text-center bottom-[30px] h-full bg-white rounded-[30px] p-10">
      <Icon
        src="https://cdn.jim-nielsen.com/ios/512/calculator-2017-10-10.png?rf=1024"
        alt="Icon calculadora"
        onClick={mostraApp}
        />
        <div className="flex-col justify-around flex">
         {
          app == true && (
            <Calculadora/>
          )
         }
        </div>
      </div>
    </div>
  );
}
