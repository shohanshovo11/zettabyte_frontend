import Link from "next/link";
import { NavigationItem } from "../layout";

export default function Sidebar({
  navigation,
  pathname,
}: {
  navigation: NavigationItem[];
  pathname: string;
}) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 py-4 shadow-lg">
      <div className="flex h-16 shrink-0 items-center">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">Z</span>
        </div>
        <span className="ml-3 text-xl font-bold text-gray-900">Zettabyte</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-r-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={`${
                          isActive
                            ? "text-blue-600"
                            : "text-gray-400 group-hover:text-blue-600"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="mt-auto">
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Need help?
                  </p>
                  <p className="text-xs text-gray-600">Check our docs</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
