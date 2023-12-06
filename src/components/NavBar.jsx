import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar flex w-full items-center justify-between pb-6 sm:mx-6 sm:mt-4 xl:mx-10 xl:px-6 2xl:mx-40">
      <ul className="flex-1 list-none items-center justify-start sm:flex">
        <li className="cursor-pointer font-poppins">
          <a onClick={handleHomeClick} className="text-xl text-white">
            Track<em className="text-green-gradient font-bold">Tide</em>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
