import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

type portAggregationAlertType = {
  _id: string;
  portNumber: number;
  totalBytes: number;
  averagePayloadSize: number;
  numberOfPackets: number;
  maximumPayloadSize: number;
  minimumPayloadSize: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function NetworkFlow() {
  const [data, setData] = useState<Array<portAggregationAlertType>>([]);

  useEffect(() => {
    axios
      .get(
        "http://backend-env.eba-gt2wrdmr.ap-south-1.elasticbeanstalk.com/portAggregationAlerts"
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
        <div className=" p-4 border-2 border-gray-200 rounded-lg  dark:border-gray-700">
          <div className="items-center rounded-md  p-4 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-start mb-2">
              <h1 className="font-bold text-xl flex justify-start">
                Network Flow Alerts
              </h1>
            </div>
            <div className="border rounded-md border-solid">
              <table className=" rounded-md text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Port number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Bytes sent
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Avg payload size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      min payload size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      max payload size
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
                      <td className="px-6 py-2 text-center">{i.portNumber}</td>
                      <td className="px-6 py-2 text-center">{i.totalBytes}</td>
                      <td className="px-6 py-2 text-center">
                        {i.averagePayloadSize}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i.maximumPayloadSize}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i.maximumPayloadSize}
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
