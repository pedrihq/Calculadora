import Calculadora from "./Calculadora";

export default function Icon({src, alt, onClick}: { src: string, alt?:string, onClick: () => void}) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img className="w-10 rounded-xl transition duration-300 active:scale-95 transform hover:scale-105" src={src} alt={alt} />
    </div>
  );
}
