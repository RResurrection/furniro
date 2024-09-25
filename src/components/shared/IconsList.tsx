import { icons } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const IconsList = () => {
  return (
    <div className="flex items-center gap-[45px]">
      {icons.map((icon) => (
        <Link href="#" key={icon.url}>
          <Image
            src={icon.url}
            alt={icon.alt}
            width={24}
            height={24}
            key={icon.url}
          />
        </Link>
      ))}
    </div>
  );
};

export default IconsList;
