import { twMerge } from 'tailwind-merge'
export default function ButtonCalculadora({num, className, pegaNum}: {num: string, className?: string, pegaNum:(numero : string )=>void} ) {
  function trataClick (){
    pegaNum(num)
  }
    return (
      <div>
        <button onClick={trataClick} className={twMerge("w-[3.5em] h-[3.5em] text-[1.07em] border-none rounded-[2em] bg-gray-200 transition duration-150 ease-in-out transform active:scale-90 hover:bg-gray-900/10", className)}>
          {num}
        </button>
      </div>
    );
  }