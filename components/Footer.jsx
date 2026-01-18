import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 md:p-4 text-center fixed bottom-0 w-full text-sm md:text-base">
      © 2024 Quantyx. All rights reserved. Made with ❤️ by <Link href="https://in.linkedin.com/in/sachin-yadav-05a105374" target="_blank" className="cursor-pointer hover:text-gray-300">SachinApr20</Link>
    </footer>
  );
};

export default Footer;
