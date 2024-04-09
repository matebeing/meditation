import { MdOutlineReplay10, MdOutlinePlayCircleFilled, MdForward10 } from "react-icons/md";

export default function Home() {
  return (
    <main className="text-white" style={{ background: "linear-gradient(55deg, #929428 34.08%, #535659 99.74%)" }}>
      <div className="grid grid-rows-[100px_auto_100px] h-screen">
        <div className="flex justify-center items-center font-light">
          Meditation Title
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          <span>00:00</span>
          <h1 className="font-bold text-4xl bg-gradient-to-r from-white via-gray-100 to-gray-300 inline-block text-transparent bg-clip-text">Até a parte 3!</h1>
          <div className="flex gap-3 text-3xl">
            <MdOutlineReplay10 />
            <MdOutlinePlayCircleFilled />
            <MdForward10 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-sm">
          <span className="font-bold">Voice</span>
          <span className="font-light">Matheus Oliveira</span>
        </div>
      </div>
    </main>
  );
}
/*  */