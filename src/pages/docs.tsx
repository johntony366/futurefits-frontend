import React from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function DNSAlert() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 rounded-md border-gray-200 dark:border-gray-700">
          <div className="flex flex-col rounded-md p-4 bg-gray-50 dark:bg-gray-800">
            <a href="/docs.pdf" download>
              <h1 className="text-2xl font-bold mb-2 text-center">
                {" "}
                Download{" "}
              </h1>
            </a>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
