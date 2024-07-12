import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer h-fit  text-center pt-10  pb-3 text-[12px] sm:text-[14px]">
      <p>Acceptable Use | Privacy Policy | Terms & Conditions</p>
      <div className="py-6">
        <p className="text-wrap">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of
        </p>
        <p>FACEBOOK, Inc.</p>
      </div>

      <p>©2024 fitanddrink.com All Rights Reserved.</p>

      <p>
        made by:
        <a href="umar10022004@gmail.com"  className="underline font-bold">
          {" "}
          umar10022004@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
