import Link from "next/link";


const Navbar = () => {
  return (
    <>

      


      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Mobile Menu Button */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Brand Logo */}
          <Link href="/" className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 lg:mb-0 lg:mt-0">
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: "15px" }}
              alt="TE Logo"
              loading="lazy"
            />
          </Link>

          {/* Navbar Links */}
          <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link href="/dashboard" className="text-black/60 transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2">
                Home
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a href="#jobs" className="text-black/60 transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2">
                Jobs
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link href="/projects" className="text-black/60 transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2">
                Internships
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link href="/mentorship" className="text-black/60 transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2">
                Mentorship & Counseling
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="relative flex items-center space-x-4"> 
            {/* Cart Icon */}
            <Link href="/cart" className="me-4 text-neutral-600 dark:text-white">
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </Link>
            <div className="relative flex items-center">
            <Link href="/signin" className="px-4 py-2 bg-blue-600 text-white rounded-md transition hover:bg-blue-700">
              Sign In / Register 
            </Link>
          </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center">
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt="Profile"
                  loading="lazy"
                />
              </button>
              {/* Dropdown content */}
              <ul className="absolute hidden min-w-max list-none bg-white shadow-lg dark:bg-surface-dark">
                <li>
                  <Link href="/profile" className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/logout" className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
 
        </div>
     
          
        
 
  
  
</nav>
 
 
    </>
  );
};

export default Navbar;
