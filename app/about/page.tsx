
export const metadata = {
  title: "Wing Tsun Wałbrzych",
  description: "Wing Tsun Wałbrzych",
};

import Yipman from "@/components/About/YipMan";
import Sijo from "@/components/About/LeungTing";
import SiKung from "@/components/About/NorbertMaday";  

  export default function About() {
    return (
      <>
          <Yipman/>
          <Sijo/>
          <SiKung/>
      </> 
    );
  }
  