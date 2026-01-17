import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="pb-32">
      <div className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] px-8 py-20 text-center relative overflow-hidden w-full">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-indigo-400">Levitate?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Let's build something extraordinary together. Whether you have a specific project or just a vague idea, we are here to help you lift it off the ground.
          </p>
          <a
            href="mailto:alghifarik@gmail.com"
            className="inline-block px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/20"
          >
            Start a Project
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
