// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Title$default(Props) {
  var title = Props.title;
  var des = Props.des;
  return React.createElement("div", {
              className: "flex flex-col flex-nowrap pb-5 w-full"
            }, React.createElement("span", {
                  className: "text-[50px] font-extrabold text-slate-900 dark:text-slate-50"
                }, title), React.createElement("span", {
                  className: "text-lg font-light color-[var(--tx-sub-dark)] break-all mt-2.5"
                }, des));
}

var $$default = Title$default;

export {
  $$default ,
  $$default as default,
}
/* react Not a pure module */
