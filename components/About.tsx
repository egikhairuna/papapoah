import SectionWrapper from "./SectionWrapper";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out group">
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-500">
          We bring together the best and brightest in stills and motion shoots; pioneering creative, talent, location, and casting specialists.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
