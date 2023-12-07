import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="mb-8 sm:mb-16">
      <ul className="flex list-none items-center justify-center sm:mr-[350px] md:mr-[350px] lg:mr-[750px] xl:mr-[850px] 2xl:mr-[970px]">
        <li className="cursor-pointer font-poppins">
          <a
            onClick={handleHomeClick}
            className="text-lg text-white sm:text-xl"
          >
            Track<em className="text-green-gradient font-bold">Tide</em>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
