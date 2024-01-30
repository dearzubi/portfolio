const SkillLevel = ({ level }) => {
  return (
    <div className="flex justify-center w-full items-center gap-x-3 mt-8">
      <span className="w-full h-[0.01rem] bg-white mx-auto my-0"></span>
      <span className="text-lg">{level}</span>
      <span className="w-full h-[0.01rem] bg-white mx-auto my-0"></span>
    </div>
  );
};

export default SkillLevel;