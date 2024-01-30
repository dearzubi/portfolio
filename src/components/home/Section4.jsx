import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import SkillItem from "./components/SkillItem";
import skills from "@/data/skills";
import SkillLevel from "./components/SkillLevel";

const HomeSection4 = ({ id }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[100vh] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-8">
        <h2 className="text-center mx-auto">
          Skills
        </h2>

        {Object.keys(skills).map((skillLevel, index) => {
          return (
            <>
              <SkillLevel ey={`skill-level-${index}`} level={skillLevel} />
              <WrappedBox classes="justify-items-center grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-8">
                {skills[skillLevel].map((skill, index) => {
                  return <SkillItem key={`skill-${index}`} item={skill} />;
                })}
              </WrappedBox>
            </>
          )
        })}
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
