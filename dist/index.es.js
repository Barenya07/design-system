import j, { useEffect as I } from "react";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function se() {
  if (U) return R;
  U = 1;
  var a = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function n(s, i, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      o = {};
      for (var m in i)
        m !== "key" && (o[m] = i[m]);
    } else o = i;
    return i = o.ref, {
      $$typeof: a,
      type: s,
      key: u,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return R.Fragment = c, R.jsx = n, R.jsxs = n, R;
}
var x = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case B:
          return "Profiler";
        case q:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case L:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function n(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), c(e);
      }
    }
    function s(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function l() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function v() {
      var e = a(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, r, l, f, b, y, O, S) {
      return l = y.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: y,
        _owner: b
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, l, f, b, y, O, S) {
      var d = r.children;
      if (d !== void 0)
        if (f)
          if (te(d)) {
            for (f = 0; f < d.length; f++)
              P(d[f]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(d);
      if ($.call(r, "key")) {
        d = a(e);
        var E = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        f = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", W[d + f] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          d,
          E,
          d
        ), W[d + f] = !0);
      }
      if (d = null, l !== void 0 && (n(l), d = "" + l), u(r) && (n(r.key), d = "" + r.key), "key" in r) {
        l = {};
        for (var A in r)
          A !== "key" && (l[A] = r[A]);
      } else l = r;
      return d && m(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        d,
        y,
        b,
        i(),
        l,
        O,
        S
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var N = j, C = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), w = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, te = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, F = {}, M = N.react_stack_bottom_frame.bind(
      N,
      o
    )(), D = g(s(o)), W = {};
    x.Fragment = k, x.jsx = function(e, r, l, f, b) {
      var y = 1e4 > w.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !1,
        f,
        b,
        y ? Error("react-stack-top-frame") : M,
        y ? g(s(e)) : D
      );
    }, x.jsxs = function(e, r, l, f, b) {
      var y = 1e4 > w.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !0,
        f,
        b,
        y ? Error("react-stack-top-frame") : M,
        y ? g(s(e)) : D
      );
    };
  })()), x;
}
var J;
function ae() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = ie()), T.exports;
}
var t = ae();
function h(...a) {
  const c = [];
  for (const n of a)
    if (n) {
      if (typeof n == "string" || typeof n == "number")
        c.push(String(n));
      else if (typeof n == "object")
        for (const [s, i] of Object.entries(n))
          i && c.push(s);
    }
  return c.join(" ");
}
const oe = j.forwardRef(
  ({
    className: a,
    variant: c = "primary",
    size: n = "md",
    loading: s = !1,
    leftIcon: i,
    rightIcon: o,
    children: u,
    disabled: m,
    ...v
  }, p) => {
    const _ = m || s;
    return /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: h(
          "scimplify-button",
          `scimplify-button--${c}`,
          `scimplify-button--${n}`,
          {
            "scimplify-button--loading": s,
            "scimplify-button--disabled": _
          },
          a
        ),
        disabled: _,
        ref: p,
        ...v,
        children: [
          s && /* @__PURE__ */ t.jsx("span", { className: "scimplify-button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ t.jsxs("svg", { className: "scimplify-button__spinner-icon", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ t.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none", opacity: "0.25" }),
            /* @__PURE__ */ t.jsx(
              "path",
              {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }
            )
          ] }) }),
          !s && i && /* @__PURE__ */ t.jsx("span", { className: "scimplify-button__icon scimplify-button__icon--left", "aria-hidden": "true", children: i }),
          /* @__PURE__ */ t.jsx("span", { className: "scimplify-button__content", children: u }),
          !s && o && /* @__PURE__ */ t.jsx("span", { className: "scimplify-button__icon scimplify-button__icon--right", "aria-hidden": "true", children: o })
        ]
      }
    );
  }
);
oe.displayName = "Button";
const le = j.forwardRef(
  ({ className: a, variant: c = "default", padding: n = "md", hoverable: s = !1, children: i, ...o }, u) => /* @__PURE__ */ t.jsx(
    "div",
    {
      className: h(
        "scimplify-card",
        `scimplify-card--${c}`,
        `scimplify-card--padding-${n}`,
        {
          "scimplify-card--hoverable": s
        },
        a
      ),
      ref: u,
      ...o,
      children: i
    }
  )
);
le.displayName = "Card";
const ce = j.forwardRef(
  ({
    className: a,
    size: c = "md",
    state: n = "default",
    label: s,
    helperText: i,
    leftIcon: o,
    rightIcon: u,
    id: m,
    ...v
  }, p) => {
    const _ = m || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ t.jsxs("div", { className: "scimplify-input-group", children: [
      s && /* @__PURE__ */ t.jsx("label", { htmlFor: _, className: "scimplify-input__label", children: s }),
      /* @__PURE__ */ t.jsxs("div", { className: "scimplify-input__wrapper", children: [
        o && /* @__PURE__ */ t.jsx("span", { className: "scimplify-input__icon scimplify-input__icon--left", children: o }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            id: _,
            className: h(
              "scimplify-input",
              `scimplify-input--${c}`,
              `scimplify-input--${n}`,
              {
                "scimplify-input--with-left-icon": !!o,
                "scimplify-input--with-right-icon": !!u
              },
              a
            ),
            ref: p,
            ...v
          }
        ),
        u && /* @__PURE__ */ t.jsx("span", { className: "scimplify-input__icon scimplify-input__icon--right", children: u })
      ] }),
      i && /* @__PURE__ */ t.jsx("span", { className: h(
        "scimplify-input__helper-text",
        `scimplify-input__helper-text--${n}`
      ), children: i })
    ] });
  }
);
ce.displayName = "Input";
const de = ({
  open: a,
  onClose: c,
  title: n,
  children: s,
  size: i = "md",
  closeOnOverlayClick: o = !0,
  closeOnEscape: u = !0,
  className: m
}) => {
  if (I(() => {
    if (!u || !a) return;
    const p = (_) => {
      _.key === "Escape" && c();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u, a, c]), I(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [a]), !a) return null;
  const v = (p) => {
    o && p.target === p.currentTarget && c();
  };
  return /* @__PURE__ */ t.jsx("div", { className: "scimplify-modal-overlay", onClick: v, children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: h(
        "scimplify-modal",
        `scimplify-modal--${i}`,
        m
      ),
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "modal-title" : void 0,
      children: [
        n && /* @__PURE__ */ t.jsxs("div", { className: "scimplify-modal__header", children: [
          /* @__PURE__ */ t.jsx("h2", { id: "modal-title", className: "scimplify-modal__title", children: n }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              className: "scimplify-modal__close",
              onClick: c,
              "aria-label": "Close modal",
              children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ t.jsx("path", { d: "M18.3 5.71L12 12.01L5.7 5.71L4.29 7.12L10.59 13.42L4.29 19.72L5.7 21.13L12 14.83L18.3 21.13L19.71 19.72L13.41 13.42L19.71 7.12L18.3 5.71Z" }) })
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "scimplify-modal__content", children: s })
      ]
    }
  ) });
}, ue = j.forwardRef(
  ({ className: a, size: c = "md", variant: n = "primary", label: s, ...i }, o) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: h(
        "scimplify-spinner-container",
        {
          "scimplify-spinner-container--with-label": !!s
        },
        a
      ),
      ref: o,
      ...i,
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: h(
              "scimplify-spinner",
              `scimplify-spinner--${c}`,
              `scimplify-spinner--${n}`
            ),
            role: "status",
            "aria-label": s || "Loading",
            children: /* @__PURE__ */ t.jsx("svg", { className: "scimplify-spinner__svg", viewBox: "0 0 50 50", children: /* @__PURE__ */ t.jsx(
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
        s && /* @__PURE__ */ t.jsx("span", { className: "scimplify-spinner__label", children: s })
      ]
    }
  )
);
ue.displayName = "Spinner";
export {
  oe as Button,
  le as Card,
  ce as Input,
  de as Modal,
  ue as Spinner,
  h as cn
};
