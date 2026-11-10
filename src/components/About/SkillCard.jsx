function SkillCard({ icon, name }) {
  return (
    <div className="skillCard flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border border-purple-500 rounded-full hover:bg-purple-600 transition duration-300 cursor-pointer">
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
export default SkillCard;
