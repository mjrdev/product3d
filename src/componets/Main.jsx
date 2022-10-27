export default function() {
  return (
    <div className="w-full h-[85%] ">
      <main className="flex items-center flex-nowrap w-max-[1700px]">
        <article className="h-full basis-1/2 w-max-[1200px] flex mx-20 justify-center flex-col gap-y-5">
          
          <h1 className="font-bold text-transparent text-6xl 2xl:text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
            The future on in hands</h1>
          <h1 className="font-bold text-transparent text-6xl 2xl:text-8xl bg-clip-text bg-gradient-to-l from-blue-400 to-pink-600">
            Build the future</h1>

          <h2 className="font-semibold text-2xl text-left">Example Iphone page product with 3D schema build by ThreeJs and ReactJs</h2>
          <button className="w-[15rem] h-[3rem] rounded-md bg-black text-white">Buy now</button>
        </article>

        <aside className="basis-1/2 flex justify-start items-center">
          <img className="w-[85%] select-none" src="../public/images/device.png" alt="imagem phone"/>
        </aside>
      </main>
    </div>
  )
}