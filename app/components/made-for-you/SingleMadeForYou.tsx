interface MadeForYouProps {
    title: string;
    description: string;
    color: string;
    bgColor: string;
  }

export default function MadeForYou(props: MadeForYouProps) {
  return (
    <div className="bg-yellow-500 p-2">
        <div className="bg-black w-full">
            Image here
        </div>
        <div className="text-sm font-medium">{props.title}</div>
        <div className="text-xs">{props.description}</div>
    </div>
  )
}
