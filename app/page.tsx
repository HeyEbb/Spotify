import Image from "next/image";
import {
  VscHome,
  VscChevronLeft,
  VscChevronRight,
  VscSearch,
} from "react-icons/vsc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="m-2 flex w-4/12 flex-col gap-2">
        <section className=" flex flex-col gap-6 rounded-xl bg-neutral-900 p-6">
          <span className="flex items-center gap-5 text-lg font-semibold text-neutral-400">
            <VscHome size={35} />
            Home
          </span>
          <span className="flex items-center gap-5 text-lg font-semibold text-neutral-400">
            <VscSearch size={35} />
            Search
          </span>
        </section>

        <section className=" rounded-xl bg-neutral-900 p-6 h-full">
          <span className="text-lg font-semibold text-neutral-400">Your library</span>
        </section>
      </div>

      <div className="me-3 mt-2 w-8/12">
        <section className="rounded-xl bg-neutral-900 px-8 pt-3 h-full">
          <div className="mb-8 flex w-full justify-between">
            <div className="flex">
              <div className="flex items-center gap-2 pe-5">
                <div className="rounded-full bg-black p-2">
                  <VscChevronLeft size={25} />
                </div>
                <div className="rounded-full bg-black p-2">
                  <VscChevronRight size={25} />
                </div>
              </div>
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="h-full rounded-full bg-neutral-800 p-5"
              />
            </div>

            <div>install app notifications profile</div>
          </div>
          <h2>Browse all</h2>
        </section>
      </div>
    </main>
  );
}
