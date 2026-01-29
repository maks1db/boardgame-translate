import { RouteLink } from '../../shared/app-router';

export const Navbar = () => (
  <nav className="bg-gray-800 print:hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline">
              <RouteLink
                to="lotr"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-700"
              >
                LOTR
              </RouteLink>
              <RouteLink
                to="insideJob"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 hover:bg-gray-700"
              >
                Inside job
              </RouteLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
