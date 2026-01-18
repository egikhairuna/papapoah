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
      <div className="text-center w-full mx-auto mb-16">
        <p className="text-lg text-black">
          We bring together the best and brightest in stills and motion shoots; pioneering creative, talent, location, and casting specialists.
          We are a Content Creation Studios where your imagination meets expertise and creativity knows no bounds. We work with brands and agencies to create meaningful work with a team of like-minded individuals.

Our constant pursuit involves discovering new approaches to bring ideas to life, address challenges, and craft compelling narratives. Ultimately, our goal is to challenge conventional norms and surprise the audience with fresh perspectives, and having fun while doing so.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
