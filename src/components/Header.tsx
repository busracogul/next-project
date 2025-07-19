import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-blue-400 text-white flex justify-between px-10 p-6 text-2xl">
      <div>Logo</div>
      <div className=" flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact </Link>
      </div>
    </div>
  );
}

export default Header;
