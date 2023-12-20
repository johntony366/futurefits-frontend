import { Inter } from "next/font/google";

import { IconMapPins } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconNetwork } from "@tabler/icons-react";
import { IconDeviceDesktopExclamation } from "@tabler/icons-react";
import { IconBook2 } from "@tabler/icons-react";
import { IconHelp } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="mb-2 pb-3  border-b border-gray-200 dark:border-gray-700">
            <span className=" font-extrabold text-2xl ">ComproAlert</span>
          </div>
          <div className="mb-2">
            <span className="ms-1 pro font-bold text-lg">Dashboard</span>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/networkflow"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IconNetwork />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Network Flow Analysis
                </span>
              </a>
            </li>
            <li>
              <a
                href="/systemcalls"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IconDeviceDesktopExclamation />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  System call monitoring
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dnsalert"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IconMapPins />
                <span className="ms-3 font-semibold">DNS Status</span>
              </a>
            </li>
            <li>
              <a
                href="/ipgeolocation"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IconWorld />
                <span className="ms-3">IP Geolocation Data</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/docs"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <IconBook2 />
                <span className="ms-3">Documentation</span>
              </a>
            </li>

            <li>
              <a
                href="/help"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <IconHelp />
                <span className="ms-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
