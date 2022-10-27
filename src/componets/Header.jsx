export default function App() {
  return (
    <header className="bg-gray-50 h-[15%] flex justify-between">
      <div className="basis-1/3"></div>

      <div className="flex justify-center items-center w-full basis-1/3">
        <h1 className="text-black font-bold text-4xl">The Better Smartphone</h1>
      </div>

      <li className="flex justify-center items-center mx-10 basis-1/3">
        <ul className="px-4 py-2 mx-2 bg-gray-50 outline outline-gray-400 outline-1 text-black rounded-lg hover:scale-105 transition-transform cursor-pointer">
          Github
        </ul>
        <ul className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform cursor-pointer">
          LinkenIn  
        </ul>
      </li>
    </header>
  )
}