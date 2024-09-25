import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-[5px]">
      <Image src="/Logo-img.svg" alt="logo" width={34} height={21} />
      <h1 className="text-[32px] font-bold">Furniro</h1>
    </div>
  );
};

export default Logo;
