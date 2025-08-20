import { jsxs as o, jsx as i } from "react/jsx-runtime";
import u, { useEffect as y } from "react";
function d(...n) {
  const l = [];
  for (const e of n)
    if (e) {
      if (typeof e == "string" || typeof e == "number")
        l.push(String(e));
      else if (typeof e == "object")
        for (const [s, c] of Object.entries(e))
          c && l.push(s);
    }
  return l.join(" ");
}
const h = u.forwardRef(
  ({
    className: n,
    variant: l = "primary",
    size: e = "md",
    loading: s = !1,
    leftIcon: c,
    rightIcon: t,
    children: r,
    disabled: p,
    ...f
  }, a) => {
    const m = p || s;
    return /* @__PURE__ */ o(
      "button",
      {
        className: d(
          "scimplify-button",
          `scimplify-button--${l}`,
          `scimplify-button--${e}`,
          {
            "scimplify-button--loading": s,
            "scimplify-button--disabled": m
          },
          n
        ),
        disabled: m,
        ref: a,
        ...f,
        children: [
          s && /* @__PURE__ */ i("span", { className: "scimplify-button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ o("svg", { className: "scimplify-button__spinner-icon", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none", opacity: "0.25" }),
            /* @__PURE__ */ i(
              "path",
              {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }
            )
          ] }) }),
          !s && c && /* @__PURE__ */ i("span", { className: "scimplify-button__icon scimplify-button__icon--left", "aria-hidden": "true", children: c }),
          /* @__PURE__ */ i("span", { className: "scimplify-button__content", children: r }),
          !s && t && /* @__PURE__ */ i("span", { className: "scimplify-button__icon scimplify-button__icon--right", "aria-hidden": "true", children: t })
        ]
      }
    );
  }
);
h.displayName = "Button";
const _ = u.forwardRef(
  ({ className: n, variant: l = "default", padding: e = "md", hoverable: s = !1, children: c, ...t }, r) => /* @__PURE__ */ i(
    "div",
    {
      className: d(
        "scimplify-card",
        `scimplify-card--${l}`,
        `scimplify-card--padding-${e}`,
        {
          "scimplify-card--hoverable": s
        },
        n
      ),
      ref: r,
      ...t,
      children: c
    }
  )
);
_.displayName = "Card";
const b = u.forwardRef(
  ({
    className: n,
    size: l = "md",
    state: e = "default",
    label: s,
    helperText: c,
    leftIcon: t,
    rightIcon: r,
    id: p,
    ...f
  }, a) => {
    const m = p || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ o("div", { className: "scimplify-input-group", children: [
      s && /* @__PURE__ */ i("label", { htmlFor: m, className: "scimplify-input__label", children: s }),
      /* @__PURE__ */ o("div", { className: "scimplify-input__wrapper", children: [
        t && /* @__PURE__ */ i("span", { className: "scimplify-input__icon scimplify-input__icon--left", children: t }),
        /* @__PURE__ */ i(
          "input",
          {
            id: m,
            className: d(
              "scimplify-input",
              `scimplify-input--${l}`,
              `scimplify-input--${e}`,
              {
                "scimplify-input--with-left-icon": !!t,
                "scimplify-input--with-right-icon": !!r
              },
              n
            ),
            ref: a,
            ...f
          }
        ),
        r && /* @__PURE__ */ i("span", { className: "scimplify-input__icon scimplify-input__icon--right", children: r })
      ] }),
      c && /* @__PURE__ */ i("span", { className: d(
        "scimplify-input__helper-text",
        `scimplify-input__helper-text--${e}`
      ), children: c })
    ] });
  }
);
b.displayName = "Input";
const L = ({
  open: n,
  onClose: l,
  title: e,
  children: s,
  size: c = "md",
  closeOnOverlayClick: t = !0,
  closeOnEscape: r = !0,
  className: p
}) => (y(() => {
  if (!r || !n) return;
  const a = (m) => {
    m.key === "Escape" && l();
  };
  return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
}, [r, n, l]), y(() => (n ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
  document.body.style.overflow = "unset";
}), [n]), n ? /* @__PURE__ */ i("div", { className: "scimplify-modal-overlay", onClick: (a) => {
  t && a.target === a.currentTarget && l();
}, children: /* @__PURE__ */ o(
  "div",
  {
    className: d(
      "scimplify-modal",
      `scimplify-modal--${c}`,
      p
    ),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": e ? "modal-title" : void 0,
    children: [
      e && /* @__PURE__ */ o("div", { className: "scimplify-modal__header", children: [
        /* @__PURE__ */ i("h2", { id: "modal-title", className: "scimplify-modal__title", children: e }),
        /* @__PURE__ */ i(
          "button",
          {
            className: "scimplify-modal__close",
            onClick: l,
            "aria-label": "Close modal",
            children: /* @__PURE__ */ i("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ i("path", { d: "M18.3 5.71L12 12.01L5.7 5.71L4.29 7.12L10.59 13.42L4.29 19.72L5.7 21.13L12 14.83L18.3 21.13L19.71 19.72L13.41 13.42L19.71 7.12L18.3 5.71Z" }) })
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "scimplify-modal__content", children: s })
    ]
  }
) }) : null), N = u.forwardRef(
  ({ className: n, size: l = "md", variant: e = "primary", label: s, ...c }, t) => /* @__PURE__ */ o(
    "div",
    {
      className: d(
        "scimplify-spinner-container",
        {
          "scimplify-spinner-container--with-label": !!s
        },
        n
      ),
      ref: t,
      ...c,
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: d(
              "scimplify-spinner",
              `scimplify-spinner--${l}`,
              `scimplify-spinner--${e}`
            ),
            role: "status",
            "aria-label": s || "Loading",
            children: /* @__PURE__ */ i("svg", { className: "scimplify-spinner__svg", viewBox: "0 0 50 50", children: /* @__PURE__ */ i(
              "circle",
              {
                className: "scimplify-spinner__circle",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "4"
              }
            ) })
          }
        ),
        s && /* @__PURE__ */ i("span", { className: "scimplify-spinner__label", children: s })
      ]
    }
  )
);
N.displayName = "Spinner";
export {
  h as Button,
  _ as Card,
  b as Input,
  L as Modal,
  N as Spinner,
  d as cn
};
