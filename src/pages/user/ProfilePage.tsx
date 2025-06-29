import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/userCredentialSlice";
import { useAppSelector } from "../../redux/hooks";

const ProfilePage = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Breadcrumb */}
          <nav
            className="bg-gray-100 py-3 px-5 rounded mb-4"
            aria-label="breadcrumb"
          >
            <ol className="flex space-x-4">
              <li className="breadcrumb-item">
                <a href="index.html" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" className="text-gray-500">
                  User
                </a>
              </li>
              <li className="breadcrumb-item text-gray-700 font-medium">
                User Profile
              </li>
            </ol>
          </nav>
          {/* /Breadcrumb */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="mb-3">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-full w-36 h-36"
                  />
                  <div className="mt-3">
                    <h4 className="text-lg font-semibold">
                      {user?.user?.name}
                    </h4>
                    <p className="text-sm text-gray-500">{user?.userRole}</p>
                    <p className="text-xs text-gray-400">
                      {user?.user?.address}
                    </p>
                    <div className="mt-3">
                      <button className="bg-blue-600 text-white py-1 px-4 rounded-md mr-2">
                        Follow
                      </button>
                      <button className="border border-blue-600 text-blue-600 py-1 px-4 rounded-md">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-3">
                <ul className="bg-white shadow-lg rounded-lg p-4 space-y-3">
                  {[
                    {
                      name: "Website",
                      icon: "globe",
                      link: "https://bootdey.com",
                    },
                    { name: "Github", icon: "github", link: "bootdey" },
                    { name: "Twitter", icon: "twitter", link: "@bootdey" },
                    { name: "Instagram", icon: "instagram", link: "bootdey" },
                    { name: "Facebook", icon: "facebook", link: "bootdey" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-gray-600"
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 mr-2`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          {/* Replace with appropriate SVG paths for each icon */}
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        {item.name}
                      </span>
                      <span className="text-sm">{item.link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2">
              {/* Profile Details */}
              <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                {[
                  {
                    label: "Full Name",
                    value: user?.user?.name || "My Name",
                  },
                  { label: "Email", value: user?.email || "fip@jukmuh.al" },
                  {
                    label: "Phone",
                    value: user?.user?.phone || "(239) 816-9029",
                  },
                  {
                    label: "Mobile",
                    value: user?.user?.phone || "(320) 380-4539",
                  },
                  {
                    label: "Address",
                    value: user?.user?.address || "My Address",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-4"
                  >
                    <span className="font-medium text-gray-600">
                      {item.label}
                    </span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-end">
                  <Link
                    to={`/${user?.userRole}-dashboard/profile/${user?.user?._id}`}
                    target="__blank"
                    className="text-blue-600 hover:underline"
                    rel="noopener noreferrer"
                  >
                    Edit
                  </Link>
                </div>
              </div>

              {/* Project Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Bookings",
                    progress: 80,
                  },
                  {
                    title: "Payments",
                    progress: 72,
                  },
                  {
                    title: "Rejected",
                    progress: 89,
                  },
                  {
                    title: "Available Cars",
                    progress: 55,
                  },
                  {
                    title: "Usage",
                    progress: 66,
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6"
                  >
                    <h6 className="flex items-center text-gray-700 mb-3">
                      <span className="material-icons text-blue-600 mr-2">
                        Total
                      </span>
                      {project.title}
                    </h6>
                    <div className="h-2 bg-gray-200 rounded-full mb-2">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <small className="text-gray-500">{project.title}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
