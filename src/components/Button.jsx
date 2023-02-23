import React from "react";
import { Box } from "@mui/system";
import "../Styles.css";

function Button(props) {
  return (
    <div className="button">
      <button type="button">
        <Box sx={{ display: "flex", gap: 3 }}>
          <img src={props.image} alt="miau" height="25" width="25" />
          {props.text}
        </Box>
      </button>
    </div>
  );
}

export default Button;
