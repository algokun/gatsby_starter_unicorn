import React from "react";
import { Styled } from "theme-ui";
import Appbar from "./Appbar";

export default ({ title, children }) => (
  <Styled.root>
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "678px"
      }}
    >
      <Appbar title={title} />
      <main
        style={{
          marginLeft: "15px",
          marginRight: "15px"
        }}
      >
        {children}
      </main>
    </div>
  </Styled.root>
);
