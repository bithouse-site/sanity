// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import article from "./article";
import header from "./header";
import footer from "./footer";
import socialMedia from "./socialMedia";
import subMenu from "./subMenu";
import menu from "./menu";
import menuObject from "./menuObject";
import subMenuObject from "./subMenuObject";
import buttonObject from "./buttonObject";
import hero from "./hero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    article,
    footer,
    header,
    socialMedia,
    subMenu,
    menu,
    menuObject,
    subMenuObject,
    buttonObject,
    hero,
  ]),
});
