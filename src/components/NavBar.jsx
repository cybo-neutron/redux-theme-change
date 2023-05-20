import React from "react";
import Button from "./buttons/Button";
import ThemeButton from "./buttons/ThemeButton";

function NavBar() {
  return (
    <div className="flex justify-between px-5 py-2">
      <div className="font-bold uppercase ">Logo</div>

      <div className="flex gap-x-6">
        {/* <Link href="/" className={`border-b-2 border-primary-700 `}>
          Home
        </Link> */}
      </div>
      <div className="flex gap-x-2">
        <ThemeButton />
        <Button>Login</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default NavBar;
