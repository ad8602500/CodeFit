import React from "react";
const Footer = () => (
  <footer className="w-full py-4 bg-gray-50 text-center text-gray-500 text-sm mt-12 border-t">
    Built with <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Shadcn/UI</span>, <span className="font-semibold">Framer Motion</span>, <span className="font-semibold">Heroicons</span>, <span className="font-semibold">Google Fonts</span>.<br/>
    &copy; {new Date().getFullYear()} CodeFit
  </footer>
);

export default Footer;
