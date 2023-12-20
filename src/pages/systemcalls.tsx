import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

type systemAlertsType = {
  _id: string;
  open_pid: number;
  read_pid: number;
  write_pid: number;
  unlink_pid: number;
  rename_pid: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function DNSAlert() {
  const [data, setData] = useState<Array<systemAlertsType>>([]);

  useEffect(() => {
    axios
      .get(
        "http://backend-env.eba-gt2wrdmr.ap-south-1.elasticbeanstalk.com/systemAlerts"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setData(response.data.data);
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
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="flex flex-col rounded-md p-4 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-start mb-2">
              <h1 className="font-bold text-xl flex justify-start">
                System Calls Alert
              </h1>
            </div>
            <div className="flex justify-center">
              <table className="border it border-solid dark:rounded-md w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th>Timestamp</th>
                    <th scope="col" className="px-6 py-3 text-center">
                      open_pid
                    </th>

                    <th>read_pid</th>
                    <th>write_pid</th>
                    <th>unlink_pid</th>
                    <th> rename_pid</th>
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
                      <td className="px-6 py-2 text-center">{i.open_pid}</td>
                      <td className="px-6 py-2 text-center">{i.read_pid}</td>
                      <td className="px-6 py-2 text-center">{i.write_pid}</td>
                      <td className="px-6 py-2 text-center">{i.unlink_pid}</td>
                      <td className="px-6 py-2 text-center">{i.rename_pid}</td>
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
