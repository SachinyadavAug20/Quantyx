import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <div className="">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.svg" alt="" width={32} />
                        <span className="text-2xl font-bold">Quantyx</span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/SachinyadavAug20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition duration-200"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
