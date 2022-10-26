import Image from "next/image"

function Header() {
  return (
    <header>
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div></div>

      {/* right */}
      <div></div>
    </header>
  );
}

export default Header