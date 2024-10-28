"use client";
import { useState } from "react";
import ButtonCalculadora from "./Button-calculadora";

export default function Calculadora() {
  const [display, setDisplay] = useState<string>("");
  function atualizaDisplay(numero: string) {
    if (numero == "AC") {
      setDisplay("");
      return;
    }
    if (numero == "=") {
      setDisplay(
        eval(display.replace("X", "*").replace("%", "/100").replace("÷", "/"))
      );
      return;
    }
    if (numero == "+/-") {
      setDisplay(eval(display + "* -1"));
      return;
    }
    setDisplay((estadoAtual) => estadoAtual + numero);
  }
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-[5em] min-h-48 w-full max-w-[3.5em] overflow-x-auto  whitespace-nowrap text-right">
          {display}
        </h1>
        <div className="flex justify-around">
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="AC"
            className="bg-gray-300"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="+/-"
            className="bg-gray-300"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="%"
            className="bg-gray-300"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="÷"
            className="bg-corLaranja"
          />
        </div>

        <div className="flex justify-around">
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="7"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="8"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="9"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="X"
            className="bg-corLaranja"
          />
        </div>

        <div className="flex justify-around">
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="4"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="5"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="6"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="-"
            className="bg-corLaranja"
          />
        </div>

        <div className="flex justify-around">
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="1"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="2"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="3"
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="+"
            className="bg-corLaranja"
          />
        </div>

        <div className="flex justify-around">
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="0"
            className="w-[7em] justify-start flex items-center px-5 bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num=","
            className="bg-corCinza"
          />
          <ButtonCalculadora
            pegaNum={atualizaDisplay}
            num="="
            className="bg-corLaranja"
          />
        </div>
      </div>
    </div>
  );
}
