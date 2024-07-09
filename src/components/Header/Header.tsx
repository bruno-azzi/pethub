export const HEADER_HEIGHT = 48;

const Header = ({ title }) => {
  return (
    <header className="flex justify-between items-center p-2 bg-blue-400">
      <div className="flex items-center">
        <button className="flex mr-3">
          <span className="i-mdi-menu w-8 h-8"></span>
        </button>

        <h1 className="font-medium">{title}</h1>
      </div>

      <button>
        <span className="i-mdi-account w-6 h-6"></span>
      </button>
    </header>
  );
};

export default Header;
