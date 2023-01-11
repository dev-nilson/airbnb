import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="relative flex items-center cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          width={125}
          height={50}
          alt="logo"
        />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
