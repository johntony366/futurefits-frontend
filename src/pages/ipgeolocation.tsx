import React, { useEffect, useState } from "react";
import axios from "axios";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

type geoalertsType = {
  _id: string;
  ip: string;
  country: string;
  city: string;
  lat: number;
  lon: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function IPGeolocation() {
  const [data, setData] = useState<Array<geoalertsType>>([]);

  useEffect(() => {
    axios
      .get(
        "http://backend-env.eba-gt2wrdmr.ap-south-1.elasticbeanstalk.com/geoalerts"
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
          <div className="flex flex-col rounded-md p-4 mb-4 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-start mb-2">
              <h1 className="font-bold text-xl flex justify-start">
                IP Geolocation Alerts
              </h1>
            </div>
            <div className="flex justify-center border rounded-md">
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
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Lattitude
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Longitude
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
                      <td className="px-6 py-2 text-center">{i.ip}</td>
                      <td className="px-6 py-2 text-center">{i.country}</td>
                      <td className="px-6 py-2 text-center">{i.city}</td>
                      <td className="px-6 py-2 text-center">{i.lat}</td>
                      <td className="px-6 py-2 text-center">{i.lon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-24 h-full">
        <div id="map-layer"></div>
      </div>
    </div>
  );
}
