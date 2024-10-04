import Logo from "@/components/shared/Logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-[315px] bg-bg-favorite bg-no-repeat bg-cover mb-[100px]">
        <div className="flex flex-col justify-center items-center h-full">
          <Image src="/Logo-img.svg" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium">Favorites</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-bold text-[16px]" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Favorites</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {children}
    </>
  );
};

export default Layout;
