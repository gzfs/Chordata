import Navbar from "@/components/Navbar";
import VanavilButton from "@/components/VanavilButton";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[70vh] grid grid-cols-2">
        <div className="place-self-center space-y-10 px-24">
          <p className="font-DMSans text-5xl text-[#0E0E10] tracking-tight font-semibold">
            Accurate Fish Catchment Data at your Fingertips.
          </p>
          <VanavilButton />
        </div>
        <div className="place-self-center">
          <Image src="/Hero.png" alt="Hero" width={507} height={487} />
        </div>
      </div>
      <div className="m-28">
        <Image
          src="/Globe.png"
          alt="Globe"
          width={1000}
          height={1080}
          className="h-auto w-auto"
        />
      </div>
    </main>
  );
}
