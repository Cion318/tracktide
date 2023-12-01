import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar flex w-full items-center justify-between">
      <ul className="flex-1 list-none items-center justify-start sm:flex">
        <li className="font-poppins">
          <li className="cursor-pointer">
            <a onClick={handleHomeClick}>
              Track<em className="text-gradient">Tide</em>
            </a>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
