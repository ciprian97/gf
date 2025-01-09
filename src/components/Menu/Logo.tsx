import { Logo } from "../../assets/logo";
import "./index.scss";

export const TopLogo = () => {
  return (
    <div className="logo-container">
      <Logo />
      <div className="text-container">
        <h4 className="logo-title">VENUS</h4>
        <p className="logo-subTitle">DASHBOARD</p>
      </div>
    </div>
  );
};
