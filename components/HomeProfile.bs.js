// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Metadata from "../data/Metadata.bs.js";
import Link from "next/link";

function HomeProfile$default(Props) {
  return React.createElement("section", {
              className: "flex flex-col flex-nowrap w-full h-[300px] rounded-2xl p-6 bg-no-repeat bg-cover dark:bg-center bg-[url('/home/light.gif')] dark:bg-[url('/home/dark.gif')]"
            }, React.createElement("span", {
                  className: "font-bold  text-4xl md:text-3xl"
                }, Metadata.home.name), React.createElement("span", {
                  className: " font-light mt-2.5 break-all text-lg md:text-base"
                }, Metadata.home.description), React.createElement(Link, {
                  children: React.createElement("a", {
                        className: "font-semibold text-[var(--bg-a5)] text-sm mt-3"
                      }, "Sobre mim"),
                  href: "https://profile-enieber.vercel.app/",
                  passHref: true
                }));
}

var $$default = HomeProfile$default;

export {
  $$default ,
  $$default as default,
}
/* react Not a pure module */
