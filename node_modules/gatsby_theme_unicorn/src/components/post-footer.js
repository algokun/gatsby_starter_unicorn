import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const Footer = ({ previous, next }) => (
  <footer
    style={{
      marginTop: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    }}
  >
    <Styled.hr />
    {(previous || next) && (
      <div
        style={{
          display : "flex",
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <div>
              Previous
              <br />
              <Styled.a as={Link} to={previous.slug} rel="previous">
                {previous.title}
              </Styled.a>
            </div>
          )}
        </li>
        <li>
          {next && (
            <div style = {{
              textAlign : "right"
            }}>
              Next
              <br />
              <Styled.a as={Link} to={next.slug} rel="next">
                {next.title}
              </Styled.a>
            </div>
          )}
        </li>
      </div>
    )}
  </footer>
);

export default Footer;
