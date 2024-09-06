import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-3 bg-white w-full">
      <Image
        src="/Logo.svg"
        alt="ChorData"
        width={200}
        height={300}
        quality={100}
        unoptimized
      />
    </nav>
  );
}
