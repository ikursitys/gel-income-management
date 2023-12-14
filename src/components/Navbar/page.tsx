import Button from "../UI/Button/page";

const Navbar = () => {
  return (
    <header>
      <nav className="h-20 border-b-2 border-nav-border flex flex-row justify-between items-center ">
        <div className="text-4xl h-auto w-auto content-center ml-56">
          Income Management
        </div>
        <div className="h-auto w-1/2 flex pl-32 justify-evenly content-center">
          <Button>🇬🇪 Georgia</Button>
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
