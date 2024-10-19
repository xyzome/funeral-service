import logo from '../images/logo.png';

function Header() {
    return (
        <>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    {/* Logo Section */}
                    <a href="/index.html" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <img src={logo} alt="Logo" className="w-auto h-auto object-cover rounded-full" />
                    </a>

                    {/* Navigation Section */}
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 font-medium transition-transform transform hover:scale-110 hover:text-orange-500 duration-300 ease-in-out text-gray-800 active:underline" href="/index.html">Home</a>
                        <a className="mr-5 font-medium transition-transform transform hover:scale-110 hover:text-orange-500 duration-300 ease-in-out text-gray-800  active:underline" href="/about.html">About</a>
                        <a className="mr-5 font-medium transition-transform transform hover:scale-110 hover:text-orange-500 duration-300 ease-in-out text-gray-800  active:underline" href="/services.html">Services</a>
                        <a className="mr-5 font-medium transition-transform transform hover:scale-110 hover:text-orange-500 duration-300 ease-in-out text-gray-800  active:underline" href="/blog.html">Blog</a>
                    </nav>
                </div>
            </header>


        </>
    );
}

export default Header;
