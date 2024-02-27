import SingleMiniCard from "./SingleMiniCard"

export default function MiniCard() {

    const miniCards = [
        {
            title: "Liked Songs",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-red-500",
        },
        {
            title: "Albums",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-green-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
        {
            title: "Playlists",
            color: "rgba(97, 97, 97, 0.25)",
            bgColor: "bg-blue-500",
        },
    ]

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {miniCards.map((card, index) => (
            <SingleMiniCard key={index} title={card.title} color={card.color} bgColor={card.bgColor} />
        ))}
    </div>
  )
}
