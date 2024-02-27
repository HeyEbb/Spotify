interface SingleMiniCardProps {
  title: string;
  color: string;
  bgColor: string;
}

export default function SingleMiniCard({
  title,
  color,
  bgColor,
}: SingleMiniCardProps) {
  return (
    <div
      className="flex items-center rounded-sm"
      style={{ backgroundColor: "rgba(97, 97, 97, 0.25)" }}
    >
      <div className="me-3 h-12 w-12 rounded-sm bg-red-500"></div>
      <div className="text-sm font-medium">Liked songs</div>
    </div>
  );
}
