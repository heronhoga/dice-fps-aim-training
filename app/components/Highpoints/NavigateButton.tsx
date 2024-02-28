import Link from "next/link";
import React from "react";

interface NavigateButtonProps {
  buttonText: string;
  href: string;
}

const NavigateButton = ({ buttonText, href }: NavigateButtonProps) => (
  <Link href={href}>{buttonText}</Link>
  
);

export default NavigateButton;
