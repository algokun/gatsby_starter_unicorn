const grey90 = `#232129`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const lightGray = `hsla(0, 0%, 0%, 0.2)`;

// My Colors
const darkBG = `#12181B`;
const lightBG = `#F1F3F4`;
const purpleDarker = `#616CAA`;
const purpleLighter = `#9FA8DA`;
const white = `#FFF`;

export default {
  text: grey90,
  background: lightBG,
  primary: purpleDarker,
  secondary: "#242424",
  card: "#FFF",
  card_color: grey90,
  muted: lightGray,
  highlight: purpleLighter,
  heading: grey90,
  prism: {
    background: `#282C34`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`
  },
  modes: {
    dark: {
      text: "#b2becd",
      background: darkBG,
      primary: purpleDarker,
      card: `#2A2E35`,
      card_color: "#b2becd",
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purpleLighter,
      heading: white
    }
  }
};
