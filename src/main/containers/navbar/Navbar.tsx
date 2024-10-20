import menuIcon from '/assets/icons/menu.svg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[150px] py-0 px-[15%]">
      <h1 className="text-3xl font-extrabold font-plans text-white">A72</h1>
      <div className="border border-[#FFFFFF50] border-solid p-1 bg-blur">
        <img src={menuIcon} alt="menu" className="w-[20px] h-[20px] " />
      </div>
    </nav>
  );
};

export default Navbar;
