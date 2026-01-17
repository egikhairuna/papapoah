import SectionWrapper from "./SectionWrapper";

const Services = () => {
    const services = [
        {
            title: "Website Development",
            description: "We turn designs into pixel-perfect, interactive code using the latest web standards.",
            items: ["React & Next.js", "Responsive Layouts", "Animations"]
        },
        {
            title: "Visual and Campaign Designing",
            description: "Creating intuitive and beautiful campaign for brands that audience love to interact with.",
            items: ["creative direction", "Prototyping", "User Research"]
        },
        {
            title: "Photo and Video Still",
            description: "Making your Photo and Videos for your brands.",
            items: ["videography", "photography", "filming"]
        }
    ];

  return (
    <SectionWrapper id="services">
      <div className="mb-16">
        <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">what we do</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Services & Solutions</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
            <div key={idx} className="group p-8 border-b border-gray-100 hover:border-transparent hover:bg-white hover:shadow-xl hover:rounded-3xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="space-y-2">
                    {service.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
