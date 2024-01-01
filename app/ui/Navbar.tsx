import { redRose } from "@/lib/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-6 pl-4 sticky top-0 z-10 border-b border-black font-[#121212]">
      <div className="text-5xl md:text-8xl font-thin">
        <Link href="/" className={`${redRose.className} no-underline`}>
          Anurag&nbsp;Angal
        </Link>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
