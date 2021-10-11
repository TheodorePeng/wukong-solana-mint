import { containerFluid } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const photographStyle = {
  section: {
    padding: "70px 0",
  },
  container: {
    ...containerFluid,
    display: "flex",
  },
  ...imagesStyles,
};

export default photographStyle;
