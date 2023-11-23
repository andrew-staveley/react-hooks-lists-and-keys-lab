import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksJSX = links.map((element) => {
    return <a href={ `#${element}` } key={ element }>{ element }</a>
  })
  return <nav>{ linksJSX }</nav>;
}

export default NavBar;
