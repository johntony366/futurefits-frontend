import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

type dnsAlertType = {
  _id: string;
  domainName: string;
  suspicion: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function DNSAlert() {
  const [data, setData] = useState<Array<dnsAlertType>>([]);

  useEffect(() => {
    axios
      .get(
        "http://backend-env.eba-gt2wrdmr.ap-south-1.elasticbeanstalk.com/dnsalerts"
      )
      .then(function (response) {
        // handle success
        let temp = response.data.data;
        setData(temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 rounded-md border-gray-200 dark:border-gray-700">
          <div className="flex flex-col rounded-md p-4 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-start mb-2">
              <h1 className="font-bold text-xl flex justify-start">
                DNS Alerts
              </h1>
            </div>
            <div className="flex justify-center">
              <table className="border it border-solid dark:rounded-md w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Domain
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Suspicious Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((i) => (
                    <tr
                      key={i?._id}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <td className="px-6 py-2 text-center">
                        {i.createdAt.toString()}
                      </td>
                      <td className="px-6 py-2 text-center">{i.domainName}</td>
                      <td className="px-6 py-2 text-center">
                        {i.suspicion * 100}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
