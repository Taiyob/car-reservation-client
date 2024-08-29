import { Link, Outlet } from "react-router-dom";

const AdminLayouts = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col h-screen p-3 text-gray-100 bg-purple-500 w-60 dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2>ADMIN Dashboard</h2>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                {/* Search icon */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 text-gray-400 dark:text-gray-600"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm text-gray-100 bg-gray-800 rounded-md dark:border- focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:bg-gray-900 focus:dark:bg-gray-50"
            />
          </div>
          <nav className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  rel="noopener noreferrer"
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 text-gray-400 fill-current dark:text-gray-600"
                  >
                    <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  rel="noopener noreferrer"
                  to="/admin-dashboard/create-car"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 text-gray-400 fill-current dark:text-gray-600"
                  >
                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                    <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.265,105.98,48,168,48S288,96.265,288,156.857c0,15.733-7.448,31.313-22.832,46.36a139.312,139.312,0,0,0-13.658,14.657c-23.316,29.511-37.489,64.735-40.368,102.757a24,24,0,0,0-2.92,6.037c-2.045,7.222-5.19,14.239-9.05,20.947L32,466V464H48V390.451C48.644,382.053,49.139,373.498,50.368,365.005C54.518,338.493,60.185,317.476,60.185,317.476ZM320,208a72,72,0,1,1-72,72A72,72,0,0,1,320,208Z"></path>
                  </svg>
                  <span>Create Car</span>
                </Link>
              </li>
              {/* Add other links here */}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayouts;
