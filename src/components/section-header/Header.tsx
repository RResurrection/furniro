import IconsList from "../shared/IconsList";
import Links from "../shared/Links";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between py-[28px]">
      <Logo />

      <Links />

      <IconsList />
    </header>
  );
};

export default Header;
