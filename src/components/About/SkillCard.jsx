function SkillCard({ icon, name }) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 border border-purple-500 rounded-full 
    hover:bg-purple-600 transition duration-300 cursor-pointer">
      
      <span className="text-xl">{icon}</span>
      <span>{name}</span>

    </div>
  );
}
export default SkillCard;
