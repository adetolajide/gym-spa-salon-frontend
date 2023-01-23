import Link, { LinkProps } from "next/link";

import React from "react";
import { useRouter } from "next/router";

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement;
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link href={href} {...props}>
      {router.pathname === href
        ? React.cloneElement(children, {
            className:
              "flex items-center cursor-pointer hover:bg-neutral_900 px-4 py-2 gap-10 font-medium bg-neutral_900 rounded text-primary_800 whitespace-nowrap",
          })
        : children}
    </Link>
  );
}
