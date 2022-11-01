import {AiFillApple} from 'react-icons/ai';

export default function App() {
  return (
    <header className="bg-gray-50 h-[15%] flex justify-between items-center">
      <div className="flex justify-center items-center w-full basis-1/3">
        <AiFillApple size="40px"/>
        <h1 className="text-black font-bold text-4xl"></h1>
      </div>

      <div className="basis-1/3 flex justify-center items-center ml-[10rem]">
        <h1 className="font-mont font-bold">mjrdev</h1>
      </div>

      <li className="flex justify-end items-center mr-[10rem] basis-1/3">
        <ul className="px-4 py-2 mx-2 bg-gray-50 outline outline-gray-400 outline-1 text-black rounded-lg hover:scale-105 transition-transform cursor-pointer">
          Github
        </ul>
        <ul className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform cursor-pointer">
          LinkedIn  
        </ul>
      </li>
    </header>
  )
}