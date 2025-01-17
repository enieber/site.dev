// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Metadata from "../data/Metadata.bs.js";
import Link from "next/link";
import $$Image from "next/image";

function Footer$default(Props) {
  return React.createElement("footer", {
              className: "flex flex-col flex-nowrap items-center mt-[100px] p-8 border-t border-solid border-t-[var(--bg-sub)] w-[calc(100% - calc((100% - 700px)))] md:calc(100% - 40px)"
            }, React.createElement("div", {
                  className: "flex flex-wrap items-center"
                }, React.createElement("a", {
                      className: "mx-1.5",
                      href: Metadata.social.github,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "github",
                          objectFit: "contain",
                          src: "/social/github.svg",
                          width: 18.0,
                          height: 18.0
                        })), React.createElement("a", {
                      className: "mx-1.5",
                      href: Metadata.social.linkedin,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "linkedin",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/linkedin.svg",
                          width: 18.0,
                          height: 18.0
                        })), React.createElement("a", {
                      className: "mx-1.5",
                      href: Metadata.social.rss,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "facebook",
                          objectFit: "contain",
                          src: "/social/rss.svg",
                          width: 18.0,
                          height: 18.0
                        }))), React.createElement("span", {
                  className: "text-sm text-[var(--tx-sub)] mt-3"
                }, "Copyleft © 2023 " + Metadata.author + ""), React.createElement(Link, {
                  children: React.createElement("a", {
                        className: "text-xs text-[var(--tx-sub-dark)] no-underline mt-2.5 hover:underline"
                      }, "Enieber Cunha"),
                  href: Metadata.repo,
                  passHref: true
                }));
}

var $$default = Footer$default;

export {
  $$default ,
  $$default as default,
}
/* react Not a pure module */
