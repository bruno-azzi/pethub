import Link from "next/link";

export const NAVIGATION_HEIGHT = 60;

const Navigation = () => {
  const nav = [
    {
      label: "Home",
      href: "/",
      icon: "i-mdi-home",
    },
    {
      label: "Loja",
      href: "/shop",
      icon: "i-mdi-shopping",
    },
    {
      label: "Adoção",
      href: "/adoption",
      icon: "i-mdi-dog-side",
    },
    {
      label: "Blog",
      href: "/blog",
      icon: "i-mdi-account-group",
    },
  ];

  return (
    <div className="bg-blue-400 py-2 px-4 fixed bottom-0 left-0 w-full z-10">
      <ul className="flex justify-between items-center">
        {nav.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="flex flex-col items-center">
              <span className={`${item.icon} w-6 h-6`}></span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
