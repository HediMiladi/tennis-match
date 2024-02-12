import { ReactNode } from "react";
import { Link } from "react-router-dom";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <header className="bg-black  text-center">
        <Link to="/">
          <h1 className="text-xl py-2 text-white">EuroStat</h1>
        </Link>
      </header>
      {props.children}
    </div>
  );
};
