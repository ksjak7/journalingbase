function Card(
  {
    title,
  }:
  {
    title: string
  }
) {
  return (
    <div className="w-[192px] h-[256px] outline outline-gray-400 outline-1 drop-shadow-md rounded-2xl bg-white p-2">
      <span>{title}</span>
    </div>
  )
}

export default Card