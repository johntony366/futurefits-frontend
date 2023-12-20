import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

interface GeoAlert {
  ip?: string;
  country?: string;
  regionName?: string;
  city?: string;
  lat?: number;
  lon?: number;
  isp?: string;
  org?: string;
  as?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PortAggregationAlert {
  portNumber?: number;
  totalBytes?: number;
  averagePayloadSize?: number;
  numberOfPackets?: number;
  maximumPayloadSize?: number;
  minimumPayloadSize?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CorrelationAlert {
  _id: string;
  geoAlert: GeoAlert;
  portAggregationAlert: PortAggregationAlert;
  timeDifference: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default function DNSAlert() {
  const [data, setData] = useState<Array<CorrelationAlert>>([]);

  useEffect(() => {
    axios
      .get(
        "http://backend-env.eba-gt2wrdmr.ap-south-1.elasticbeanstalk.com/correlationAlerts"
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
                Correlated Anomalies
              </h1>
            </div>
            <div className="flex justify-center">
              <table className=" text-center border-solid rounded-md w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="rounded-md">
                    <th scope="col" className="px-6 py-3 text-center">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      IP Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Port Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Lattitude
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Longitude
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Time Difference
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
                        {i?.createdAt?.toString()}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.geoAlert.ip}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.portAggregationAlert.portNumber}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.geoAlert.country}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.geoAlert.lat}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.geoAlert.lon}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {i?.timeDifference}
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
