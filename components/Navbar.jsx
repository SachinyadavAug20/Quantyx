import Link from "next/link";
const Navbar = () => {
    return (
    <nav className="bg-gray-800 text-white p-2 md:p-4 shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-4xl mx-auto">
                <div className="">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.svg" alt="" width={32} />
                        <span className="text-xl md:text-2xl font-bold">Quantyx</span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/SachinyadavAug20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition duration-200 flex items-center gap-2"
                        title="GitHub"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        SachinyadavAug20
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
