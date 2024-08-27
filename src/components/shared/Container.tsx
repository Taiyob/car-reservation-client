import { ReactNode } from "react";

type TChildrenProps = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenProps) => {
  return <div className="mx-10 max-auto">{children}</div>;
};

export default Container;
