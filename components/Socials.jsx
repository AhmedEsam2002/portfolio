import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const socialLinks = [
  { href: "https://github.com/yourusername", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
];
export default function Socials({ ContainerStyles, iconStyles }) {
  return (
    <div className={ContainerStyles}>
      {socialLinks.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
