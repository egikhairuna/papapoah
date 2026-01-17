import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="w-full px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Papapoah</h3>
                    <p className="text-gray-500 text-sm">A Collective Agency</p>
                </div>
                <div className="flex gap-8">
                    <Link href="https://www.instagram.com/papapoah_/?hl=en" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Instagram</Link>
                </div>
            </div>
            
            <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Papapoah. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-gray-600">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-600">Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
