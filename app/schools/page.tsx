export const metadata = {
  title: "Wing Tsun Wałbrzych",
  description: "Wing Tsun Wałbrzych",
};
import Walbrzych from "@/components/Schools/Walbrzych";
import Swidnica from "@/components/Schools/Swidnica"; 
  
  import Link from "next/link";
  
  export default function Schools() {
    return (
     
     <>
     <Walbrzych/>
     <Swidnica/>
     </>
    );
  }
  