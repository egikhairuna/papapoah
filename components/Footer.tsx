import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="w-full px-6 md:px-12 lg:px-24">            
            <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="https://www.instagram.com/papapoah_/?hl=en" className="hover:text-gray-600">Instagram</Link>
                </div>
                <p>&copy; {new Date().getFullYear()} Papapoah. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
