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
import richText from "./richText";
import banner from "./banner";
import bannerDoble from "./bannerDoble";
import home from "./home";
import youtube from "./youtube";
import dualSymmetric from "./dualSymmetric";
import dualAsymmetric from "./dualAsymmetric";
import iconTextObject from "./iconTextObject";
import colorList from "./colorList";
import vigentes from "./vigentes";
import articleReference from "./articleReference";
import cardsVigentes from "./cardsVigentes";
import cardReference from "./cardReference";
import articleCard from "./articleCard";
import moduloResidentes from "./moduloResidentes";
import producto from "./producto";
import quoteCard from "./quoteCard";
import quotes from "./quotes";
import residentes from "./residentes";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    article,
    articleCard,
    cardsVigentes,
    cardReference,
    footer,
    header,
    socialMedia,
    subMenu,
    menu,
    menuObject,
    subMenuObject,
    buttonObject,
    hero,
    richText,
    banner,
    bannerDoble,
    youtube,
    iconTextObject,
    colorList,
    home,
    dualSymmetric,
    dualAsymmetric,
    vigentes,
    articleReference,
    moduloResidentes,
    producto,
    quoteCard,
    quotes,
    residentes,
  ]),
});
