export const Navbar = () => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="block lg:hidden h-8 w-auto"
              src="/path/to/logo.png"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-8 w-auto "
              src="/path/to/logo.png"
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-700"
              >
                Menu 1
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-700"
              >
                Menu 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
