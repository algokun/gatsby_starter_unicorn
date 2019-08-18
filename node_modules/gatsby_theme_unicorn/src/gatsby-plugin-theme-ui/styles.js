export default {
  root: {
    fontFamily: `body`
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`
  },
  hr: {
    borderColor: `muted`
  },
  p: {
    code: {
      fontSize: `inherit`
    }
  },
  li: {
    code: {
      fontSize: `inherit`
    }
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`
    }
  },
  div: {
    color: `card_color`,
    cursor: "pointer",
    paddingX: ["1rem", "5rem"],
    paddingY: "1em",
    borderRadius: "5px",
    marginY: "20px",
    backgroundColor: `card`,
    fontFamily: `heading`,
    boxShadow:
      "0px 1px 2px rgba(46,41,51,0.08), 0px 2px 4px rgba(71,63,79,0.08)",
    "&:hover": {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px"
    }
  },
};
