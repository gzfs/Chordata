export default function VanavilButton() {
  return (
    <div className="relative w-fit font-DMSans mx-4">
      <button className="bg-[#0E0E10] px-5 py-3 absolute text-lg w-[173px] z-[4] text-white">
        Learn More
      </button>
      <div className="bg-[#FFC809] top-[6px] left-[-4px] z-[3] h-[50px] w-[173px] px-10 py-3 text-lg text-white absolute"></div>
      <div className="bg-[#E9302B] z-[2] top-[10px] left-[-8px] h-[50px] w-[173px] px-10 py-3 text-lg text-white absolute"></div>
      <div className="bg-[#00AB9B] top-[14px] left-[-12px] z-[1] h-[50px] w-[173px] px-10 py-3 text-lg text-white absolute"></div>
    </div>
  );
}
