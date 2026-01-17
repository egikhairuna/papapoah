import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <SectionWrapper id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image 
                src="/hero.jpg" 
                alt="Hero Background" 
                fill 
                className="object-cover"
                priority
            />
            {/* Overlay for text readability - keep it light for the light theme */}
            <div className="absolute inset-0 bg-white/40"></div>
        </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            A Collective <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Agency
            </span>{" "}
            <br />
          </h1>
          <p className="text-xl text-gray-800 max-w-lg leading-relaxed font-medium">
            A collective of production, artist representation + creative direction. Creating motion & stills content for fashion,
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#works"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              View Works
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/80 backdrop-blur text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Decorative Floating Element - keeping it but transparent or minimal, or maybe removing? 
            User asked for background change. Often having both background AND a big 3D element is too much.
            I will remove the abstract shapes but keep the structure or maybe show a smaller floating image?
            Actually, let's keep the layout balanced. If the BG is the hero, maybe we don't need the right side element.
            BUT, the text is left-aligned. 
            Let's keep the right side empty or used for spacing to let the background image show through if it has a focal point on the right.
            Since I don't know the image content, a safe bet is to have the text on left and open space on right.
        */}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
