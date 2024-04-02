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
        <div className="bg-orange-500 w-full relative rounded mb-2" style={{ paddingTop: '100%' }}>
            <Image src={props.image} alt="daily mix" className="rounded" />
        </div>
        <div className="text-md font-light">{props.title}</div>
        <div className="text-xs text-neutral-400">{props.description}</div>
    </div>
  )
}