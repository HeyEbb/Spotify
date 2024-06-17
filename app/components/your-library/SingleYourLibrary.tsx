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
        <h3 className="">{props.title}</h3>
        <span className="text-neutral-500">Playlist - 54 Songs</span>
      </div>
    </div>
  );
}
