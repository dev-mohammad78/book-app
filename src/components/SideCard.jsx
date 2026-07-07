function SideCard({ book: { image, title } }) {
  return (
    <div className="flex items-center px-2 py-2 mt-4 rounded-sm bg-[var(--primary-hover)]">
      <img src={image} alt={title} className="w-[35px] mr-4" />
      <p >{title}</p>
    </div>
  );
}

export default SideCard;
