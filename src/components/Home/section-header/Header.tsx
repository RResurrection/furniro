import IconsList from "@/components/shared/IconsList";
import Links from "@/components/shared/Links";
import Logo from "@/components/shared/Logo";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between py-[28px] px-3">
      <Logo />

      <Links />

      <IconsList />
    </header>
  );
};

export default Header;
