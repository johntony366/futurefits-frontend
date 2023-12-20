import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Admin() {
  const domains = ["ggogle.com", "ldskldf.in", "lksnlaksf.en", "slkdhoa.com"];
  const sus = [99, 80, 70, 85];

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64"></div>
    </div>
  );
}
