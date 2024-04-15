import SingleMadeForYou from "./SingleMadeForYou";

export default function MadeForYou() {
  const madeForYou = [
    {
      title: "Daily Mix 1",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-red-500",
      image: "/images/daily-mix/dm-1.jpg",
    },
    {
      title: "Daily Mix 2",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-green-500",
      image: "/images/daily-mix/dm-2.jpg",
    },
    {
      title: "Daily Mix 3",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-blue-500",
      image: "/images/daily-mix/dm-3.jpg",
    },
    {
      title: "Daily Mix 4",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-yellow-500",
      image: "/images/daily-mix/dm-4.jpg",
    },
    {
      title: "Daily Mix 5",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-indigo-500",
      image: "/images/daily-mix/dm-5.jpg",
    },
    {
      title: "Daily Mix 6",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-indigo-500",
      image: "/images/daily-mix/dm-6.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {madeForYou.map((card, index) => (
          <SingleMadeForYou
            key={index}
            title={card.title}
            description={card.description}
            color={card.color}
            bgColor={card.bgColor}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}
