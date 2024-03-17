import Link from "next/link";
import React from "react";

interface NavigateButtonProps {
  buttonText: string;
  href: string;
}

const NavigateButton = ({ buttonText, href }: NavigateButtonProps) => (
  <Link
    href={href}
    className="text-white m-5 bg-blue-600 p-2 rounded-md hover:bg-blue-950 font-bold shadow-md"
  >
    {buttonText}
  </Link>
);

export default NavigateButton;
