import Header from "../Header/Header";
import Navigation, { NAVIGATION_HEIGHT } from "../Navigation/Navigation";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      <main
        style={{
          paddingBottom: `${NAVIGATION_HEIGHT}px`,
        }}
        className="p-4"
      >
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
