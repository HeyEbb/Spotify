import Image from "next/image";

interface MadeForYouProps {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  image: string;
}

export default function MadeForYou(props: MadeForYouProps) {
  return (
    <div className="">
      <div
        className="relative mb-2 w-full rounded "
        style={{ paddingTop: "100%", backgroundImage: `url(${props.image})`}}
      >
      </div>
      <div className="text-md font-light">{props.title}</div>
      <div className="text-xs text-neutral-400">{props.description}</div>
    </div>
  );
}
