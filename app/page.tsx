import {
  VscHome,
  VscChevronLeft,
  VscChevronRight,
  VscSearch,
  VscPlay,
} from "react-icons/vsc";

import MiniCard from "./components/mini-cards/MiniCard";
import MadeForYou from "./components/made-for-you/MadeForYou";
import YourLibrary from "./components/your-library/YourLibrary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="m-2 flex w-4/12 min-w-[300px] flex-col gap-2 xl:w-[500px]">
        <section className=" flex flex-col gap-6 rounded-xl bg-neutral-900 p-6">
          <span className="text-md flex items-center gap-5 font-semibold text-white">
            <VscHome size={25} />
            Home
          </span>
          <span className="text-md flex items-center gap-5 font-semibold text-neutral-400">
            <VscSearch size={25} />
            Search
          </span>
        </section>

        <section className="h-full rounded-xl bg-neutral-900 p-6">
          <span className="text-md font-semibold text-neutral-400">
            Your library
          </span>
          <div className="flex flex-col">
            <div className="mt-4 flex gap-2">
              <button className="rounded-full bg-neutral-700 px-4 py-2 text-xs">
                Playlists
              </button>
              <button className="rounded-full bg-neutral-700 px-4 py-2 text-xs">
                Albums
              </button>
            </div>
            <YourLibrary />
          </div>
        </section>
      </div>

      <div className="me-3 mt-2 w-8/12 xl:w-full">
        <section className="h-full rounded-xl bg-gradient-to-b from-[#242424] to-[#000] px-4 pt-3">
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
              {/* <input
                type="text"
                placeholder="What do you want to listen to?"
                className="h-full w-80 rounded-full bg-neutral-800 p-5"
              /> */}
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
        <div className="w-3/12 bg-red-500">1</div>
        <div className="mb-2 mt-2 flex w-6/12 flex-col bg-orange-500">
          <div className="flex h-2/3 justify-center bg-green-500">
            <div className="flex w-96 justify-center bg-pink-500">
              <div className="w-14 bg-red-500">shuffle</div>
              <div className="w-14 bg-orange-500">back</div>
              <div className="flex w-14 justify-center bg-yellow-500">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
                  <VscPlay />
                </div>
              </div>
              <div className="w-14 bg-green-500">for</div>
              <div className="w-14 bg-blue-500">loop</div>
            </div>
          </div>
          <div className="h-1/3 bg-purple-500">2</div>
        </div>
        <div className="w-3/12 bg-yellow-500">3</div>
      </div>
    </main>
  );
}
