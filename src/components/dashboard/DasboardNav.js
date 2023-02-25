import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgHome from "../../img/icons/home";
import ImgCursos from "../../img/icons/cursos";
import ImgFolder from "../../img/icons/folder";

const Button = ({ path, name, icon, now, click }) => {
  return (
    <Link to={path}>
      <div
        onClick={click}
        className={`${now && "dashboard__nav__btn--open"} dashboard__nav__btn`}>
        <div>{icon}</div>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default function DashboardNav() {
  const [path, setPath] = useState("");

  const touchBtn = () => {
    setTimeout(() => {
      setPath(window.location.pathname);
    }, 100);
  };

  useEffect(() => {
    touchBtn();
  }, []);

  return (
    <div>
      <Button
        click={touchBtn}
        path="/dashboard"
        now={path === "/dashboard"}
        name="Inicio"
        icon={<ImgHome fill={path === "/dashboard" ? "#4E99FD" : "#7C899B"} />}
      />
      <Button
        click={touchBtn}
        path="subject"
        now={path === "/dashboard/subject"}
        name="Cursos"
        icon={
          <ImgCursos
            fill={path === "/dashboard/subject" ? "#4E99FD" : "#7C899B"}
          />
        }
      />
      <Button
        click={touchBtn}
        path="subject"
        now={path === "/dashboard/subjectt"}
        name="Pendientes"
        icon={
          <ImgFolder
            fill={path === "/dashboard/subjectt" ? "#4E99FD" : "#7C899B"}
          />
        }
      />
    </div>
  );
}
