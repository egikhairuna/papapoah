import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, name: "Maternal Disaster", logo: "https://www.maternaldisaster.com/wp-content/uploads/2018/06/logo-type.svg" },
  { id: 2, name: "James Boogie", logo: "https://jamesboogie.com/file/2023/08/Logo-James-ori-1.png.webp" },
  { id: 3, name: "Globe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Danamon.svg" },
  { id: 4, name: "File", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Logo_of_the_Democratic_Party_%28Indonesia%29.svg/1280px-Logo_of_the_Democratic_Party_%28Indonesia%29.svg.png" },
  { id: 5, name: "Window", logo: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/a617ad7142a0627691d84bfc71e8f80d.png" },
  { id: 6, name: "Vercel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fYxhWEX1iXpmlK0Bh0mbGOybL0WzWADsIQ&s" },
  { id: 7, name: "Next.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKtcJYGDLVN3fqdDdtdXz7X5YFbIkBiYpzg&s" },
  { id: 8, name: "Globe", logo: "https://down-id.img.susercontent.com/file/565e05666944810577cd9f8db6ff860e" },
];

const Clients = () => {
  return (
    <SectionWrapper id="clients" className="bg-white py-12 md:py-20">
      <div className="mb-12 text-center">
         <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Clients</h3>
         <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {clients.map((client) => (
          <div key={client.id} className="flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300">
            <div className="relative w-24 h-12 md:w-32 md:h-16">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Clients;
