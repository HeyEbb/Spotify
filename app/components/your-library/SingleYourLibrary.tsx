interface SingleYourLibraryProps {
    title: string;
    type: string;
    color: string;
    NoSongs: number;
}

export default function SingleYourLibrary(props: SingleYourLibraryProps) {
  return (
    <div className="flex items-center hover:bg-neutral-800 p-2 rounded-md">
      <div className="mr-4 h-12 w-12 rounded-sm bg-indigo-700"></div>
      <div className="flex flex-col">
        <span className="font-semibold">{props.title}</span>
        <span className="text-neutral-500">Playlist - 54 Songs</span>
      </div>
    </div>
  );
}
