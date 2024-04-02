interface MadeForYouProps {
    title: string;
    description: string;
    color: string;
    bgColor: string;
  }

export default function MadeForYou(props: MadeForYouProps) {
  return (
    <div className="">
        <div className="bg-orange-500 w-full relative rounded mb-2" style={{ paddingTop: '100%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
            </div>
        </div>
        <div className="text-md font-light">{props.title}</div>
        <div className="text-xs text-neutral-400">{props.description}</div>
    </div>
  )
}