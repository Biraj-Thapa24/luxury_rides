import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-[1264px] h-[84px] bg-black text-white flex items-center justify-between px-8 mx-auto">
      {/* Left Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/Logo - LR 2.png" // path relative to public/
            alt="Luxury Rides"
            width={74} // adjust as needed
            height={60} // adjust as needed
            priority // optional, ensures logo loads fast
          />
        </Link>
      </div>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center justify-between w-[678px] h-[21px]">
        <Link
          href="/"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          Home
        </Link>
        <Link
          href="/rides"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          Browse Rides
        </Link>
        <Link
          href="/investors"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          Be an Investor
        </Link>
        <Link
          href="/about"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          About Us
        </Link>
        <Link
          href="/news"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          News
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="hover:text-yellow-500 transition-colors text-[14px]"
        >
          Services
        </Link>
      </div>

      {/* Right Button */}
      <div>
        <Button className="flex w-[100px] h-[40px] py-3 px-5 justify-center items-center gap-2.5 flex-shrink-0 rounded bg-gradient-to-r from-[#D3A242] to-[#6D5422] text-black font-semibold shadow-md hover:opacity-90">
          Book Now
        </Button>
        <div className="flex w-[24px] h-[24px] p-[3px] justify-center items-center flex-shrink-0 aspect-square">
          <Image src="/icons/login.png" alt="Login" width={18} height={18} />
        </div>
      </div>
    </nav>
  );
}
