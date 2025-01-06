export default function Card(
  {
    title,
  }:
  {
    title: string
  }
) {
  return (
    <div className="m-[32px] w-[192px] h-[256px] floater">
      <span>{title}</span>
    </div>
  )
}