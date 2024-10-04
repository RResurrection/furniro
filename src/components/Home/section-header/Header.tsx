import IconsList from "@/components/shared/IconsList";
import Links from "@/components/shared/Links";
import Logo from "@/components/shared/Logo";
import Favorite from "../favorite-product/favorite";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between py-[28px] px-3">
      <Logo />

      <Links />
      <Favorite />
    </header>
  );
};

export default Header;
