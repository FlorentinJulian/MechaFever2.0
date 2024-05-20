import HeaderIMG from "./assets/HeaderIMG.png";

const Header = () => {
  return (
    <div className="flex justify-center hover:scale-110 transition-all duration-200">
      <a
        href="https://en.wikipedia.org/wiki/Mecha#:~:text=In%20science%20fiction%2C%20mecha%20(Japanese,and%20as%20humanoid%20walking%20vehicles."
        target="blank"
      >
        <img className="max-[320px]:h-[50px] " src={HeaderIMG} />
      </a>
    </div>
  );
};

export default Header;
