import React from "react";
import { Styled } from "theme-ui";
import { Link } from "gatsby";

function postItem({ title, excerpt, slug }) {
  return (
    <Link
      to={slug}
      style={{
        textDecoration: "none"
      }}
    >
      <Styled.div>
        <h2>{title}</h2>
        <p>
          {excerpt}&nbsp;<Styled.a>Readmore</Styled.a>
        </p>
      </Styled.div>
    </Link>
  );
}

export default postItem;
