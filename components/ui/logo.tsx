import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import logo2 from "@/public/images/logo2.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={256} height={256} />
      
    </Link>

    
  );
}
