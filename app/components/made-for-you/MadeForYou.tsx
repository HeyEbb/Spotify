import SingleMadeForYou from "./SingleMadeForYou";

export default function MadeForYou() {
  const madeForYou = [
    {
      title: "Daily Mix 1",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-red-500",
    },
    {
      title: "Daily Mix 2",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-green-500",
    },
    {
      title: "Daily Mix 3",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-blue-500",
    },
    {
      title: "Daily Mix 4",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Daily Mix 5",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Daily Mix 3",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-blue-500",
    },
    {
      title: "Daily Mix 4",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Daily Mix 5",
      description: "Your heavy rotation",
      color: "rgba(97, 97, 97, 0.25)",
      bgColor: "bg-indigo-500",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {madeForYou.map((card, index) => (
          <SingleMadeForYou
            key={index}
            title={card.title}
            description={card.description}
            color={card.color}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </>
  );
}
