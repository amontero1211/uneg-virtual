import * as React from "react";

const ImgFolder = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.774 4.471h4.766c5.728 0 8.522 3.058 8.507 9.33v7.56c0 5.991-3.695 9.686-9.703 9.686H9.688C3.71 31.047 0 27.352 0 21.345V9.687C0 3.26 2.856 0 8.491 0h2.453a4.6 4.6 0 0 1 3.679 1.785l1.366 1.817c.435.543 1.087.869 1.785.869Zm-9.438 16.16h14.375a1.16 1.16 0 0 0 1.148-1.165 1.15 1.15 0 0 0-1.148-1.164H8.336c-.652 0-1.164.512-1.164 1.164 0 .637.512 1.165 1.164 1.165Z"
      fill={props.fill ? props.fill : "#4E99FD"}
    />
  </svg>
);

export default ImgFolder;
