import { QuickLinks } from './QuickLinks';
import { Branding } from './Branding';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  return (
    <footer className=" w-full bg-white shadow-inner text-pink-800">
      <div className=" max-w-6xl mx-auto px-4 flex flex-col justify-center  sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-12">
        <Branding />
        <QuickLinks />
        <ContactInfo />
      </div>
      <div className="text-center text-sm text-pink-500 border-t border-pink-200 py-4">
        © {new Date().getFullYear()} Pet Supply. All rights reserved.
      </div>
    </footer>
  );
};
