import SingleYourLibrary from "./SingleYourLibrary"

const library = [
    {
        title: 'Your Library',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Playlist 1',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Playlist 2',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Playlist 3',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Your Library',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Your Library',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
    {
        title: 'Your Library',
        type: 'Playlist',
        color: 'bg-neutral-900',
        NoSongs: 54
    },
]

export default function YourLibrary() {
  return (
    <div className="mt-5">
        {library.map((item, index) => (
            <SingleYourLibrary key={index} title={item.title} type={item.type} color={item.color} NoSongs={item.NoSongs} />
        ))} 
    </div>
  )
}