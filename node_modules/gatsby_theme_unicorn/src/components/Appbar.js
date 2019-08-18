import React from "react";
import { useColorMode } from "theme-ui";
import Bio from "./bio";
export default function Appbar() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      style={{
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "50px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Bio />

      <button
        style={{
          padding: "10px",
          border: "2px solid",
          borderRadius: "5px",
          backgroundColor: "transparent",
          color: "var(--primary)"
        }}
        onClick={e => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
