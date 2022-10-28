import React from "react";

function Footer() {
  const date = new Date();
  const time = date.getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {time}</p>
    </footer>
  );
}

export default Footer;
