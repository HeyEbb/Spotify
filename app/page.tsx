import {
  VscHome,
  VscChevronLeft,
  VscChevronRight,
  VscSearch,
  VscAdd,
  VscArrowRight,
} from "react-icons/vsc";

import { IoPauseCircle } from "react-icons/io5";

import MiniCard from "./components/mini-cards/MiniCard";
import MadeForYou from "./components/made-for-you/MadeForYou";
import YourLibrary from "./components/your-library/YourLibrary";
import { FaFastBackward, FaFastForward } from "react-icons/fa";
import { FaRepeat, FaShuffle } from "react-icons/fa6";
import { GoHomeFill, GoSearch } from "react-icons/go";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="m-2 flex w-4/12 min-w-[300px] flex-col gap-2 xl:w-[500px]">
        <section className="bg-sidebar flex flex-col gap-6 p-6">
          <span className="flex items-center gap-5 text-white">
            <GoHomeFill size={30} />
            <h3 className="font-semibold">Home</h3>
          </span>
          <span className="flex items-center gap-5">
            <GoSearch size={30} />
            <h3 className="font-semibold text-neutral-400">Search</h3>
          </span>
        </section>

        <section className="bg-sidebar h-full rounded-xl p-6">
          <div className="flex w-full justify-between">
            <h3 className="font-semibold text-neutral-400">Your Library</h3>
            <span className="flex w-2/12 items-center justify-between text-neutral-400">
              <VscAdd
                size={24}
                className="transition duration-300 ease-in-out hover:text-neutral-100"
              />
              <VscArrowRight
                size={24}
                className="transition duration-300 ease-in-out hover:text-neutral-100"
              />
            </span>
          </div>
          <div className="flex flex-col">
            <div className="mt-4 flex gap-2">
              <button className="bg-side_badge rounded-full px-4 py-2 ">
                Playlists
              </button>
              <button className="bg-side_badge rounded-full px-4 py-2">
                Albums
              </button>
            </div>
            <YourLibrary />
          </div>
        </section>
      </div>

      <div className="me-3 mt-2 w-8/12 xl:w-full">
        <section className="h-full rounded-xl bg-gradient-to-b from-[#0b1b36] to-[#000] px-4 pt-3">
          <div className="flex w-full items-center justify-between">
            <div className="flex">
              <div className="flex items-center gap-2 pe-5">
                <div className="rounded-full bg-black p-1">
                  <VscChevronLeft size={25} />
                </div>
                <div className="rounded-full bg-black p-1 opacity-80">
                  <VscChevronRight size={25} />
                </div>
              </div>
            </div>

            <div className="flex h-10 gap-3">
              <button className="h-8 rounded-full bg-white px-4 text-sm font-semibold text-black">
                Explore Premium
              </button>
              <button className="h-8 rounded-full bg-black px-4 text-sm font-semibold text-white">
                Install app
              </button>
              <span>notifications profile</span>
            </div>
          </div>
          <h3 className="mb-4 mt-8">Good morning</h3>
          <MiniCard />
          <h3 className="mb-4 mt-8">Made for you</h3>
          <MadeForYou />
          <h3 className="mb-4 mt-8">Popular Radio</h3>
          <MadeForYou />
        </section>
      </div>
      <div className="fixed bottom-0 flex h-20 w-full bg-black">
        <div className="w-4/12"></div>
        <div className="mb-2 mt-2 flex w-5/12 flex-col ">
          <div className="flex h-2/3 justify-center ">
            <div className="flex w-64 justify-center text-neutral-600">
              <div className="flex w-10 items-center justify-center">
                <FaShuffle />
              </div>
              <div className="flex w-10 items-center justify-center">
                <FaFastBackward />
              </div>
              <div className="flex w-10 items-center justify-center">
                <div className="flex w-10 items-center justify-center rounded-full text-7xl ">
                  <IoPauseCircle />
                </div>
              </div>
              <div className="flex w-10 items-center justify-center">
                <FaFastForward />
              </div>
              <div className="flex w-10 items-center justify-center">
                <FaRepeat />
              </div>
            </div>
          </div>
          <div className="flex  h-1/3 items-center text-neutral-400">
            <div className="mx-1 flex w-10 justify-center text-xs">-:--</div>
            <div className="h-1 w-full rounded bg-neutral-600"></div>
            <div className="mx-1 flex w-10 justify-center text-xs">-:--</div>
          </div>
        </div>
        <div className="w-4/12 ">3</div>
      </div>
    </main>
  );
}
