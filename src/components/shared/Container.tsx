import { ReactNode } from "react";

type TChildrenProps = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenProps) => {
  return <div className="min-w-[2000px] max-auto mx-10">{children}</div>;
};

export default Container;
