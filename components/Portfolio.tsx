import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface VideoItem {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
}

const videoItems: VideoItem[] = [
  { id: 1, title: "Maternal Disaster x James Boogie", category: "Campaign", videoUrl: "https://mychaircuts.id/wp-content/uploads/2026/01/James-Boogie-Maternal-Disaster.mp4" },
  { id: 2, title: "Moxie Teaser", category: "Campaign", videoUrl: "https://mychaircuts.id/wp-content/uploads/2026/01/James-Boogie-Moxie.mp4" },
  { id: 3, title: "Rhaya Flicks", category: "3d Motion", videoUrl: "https://mychaircuts.id/wp-content/uploads/2026/01/Bumper-Rhaya-10-Silver-Version.mp4" },
  { id: 4, title: "Moxie Teaser", category: "Campaign", videoUrl: "https://mychaircuts.id/wp-content/uploads/2026/01/James-Boogie-Moxie.mp4" },
];

const websiteItems: PortfolioItem[] = [
  { id: 1, title: "Indonesia Fit Festival", category: "Web Development", image: "https://mychaircuts.id/wp-content/uploads/2026/01/Screenshot-2026-01-18-133022.png" },
  { id: 2, title: "Quattordici", category: "Web Development", image: "/portofolio/Artwork-1-2.jpg" },
  { id: 3, title: "James Boogie", category: "Web Development", image: "/portofolio/Blithe_JacketGreen2-1.jpg" },
];

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Viteko", category: "Photography", image: "/portofolio/1.jpg" },
  { id: 2, title: "Filling Street Official", category: "Art Direction", image: "/portofolio/Artwork-1-2.jpg" },
  { id: 3, title: "James Boogie", category: "Photography", image: "/portofolio/Blithe_JacketGreen2-1.jpg" },
  { id: 4, title: "Paisley Collection", category: "Campaign", image: "/portofolio/Blithe_Paisley1_Slide1.jpg" },
  { id: 5, title: "Paisley Detail", category: "Campaign", image: "/portofolio/Blithe_Paisley3_Slide2.jpg" },
  { id: 6, title: "James Boogie", category: "Editorial", image: "/portofolio/Blithe_Story-4.jpg" },
  { id: 7, title: "Viteko", category: "Campaign", image: "/portofolio/Porto (1 of 1).jpg" },
  { id: 8, title: "Laurels", category: "Campaign", image: "/portofolio/Porto (1 of 3).jpg" },
  { id: 9, title: "Motion Preview", category: "Video Stills", image: "/portofolio/Vid-1.jpg" },
];

const Portfolio = () => {
  return (
    <SectionWrapper id="works">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-500 text-lg">A collection of our latest productions.</p>
        </div>
        <Link href="#" className="hidden md:inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            View All Projects &rarr;
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {videoItems.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden bg-gray-100">
               <video 
                  src={item.videoUrl} 
                  controls 
                  className="w-full h-full object-cover"
               >
                 Your browser does not support the video tag.
               </video>
            </div>
            <div className="p-6">
                <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {websiteItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-2 block">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-2 block">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <Link href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            View All Projects &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
