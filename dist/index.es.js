import { jsx as S } from "react/jsx-runtime";
import * as c from "react";
import U from "react";
import "react-dom";
function Ee(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ge(...e) {
  return (t) => {
    let o = !1;
    const r = e.map((n) => {
      const s = Ee(n, t);
      return !o && typeof s == "function" && (o = !0), s;
    });
    if (o)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const s = r[n];
          typeof s == "function" ? s() : Ee(e[n], null);
        }
      };
  };
}
function le(...e) {
  return c.useCallback(Ge(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = /* @__PURE__ */ wt(e), o = c.forwardRef((r, n) => {
    const { children: s, ...a } = r, l = c.Children.toArray(s), i = l.find(kt);
    if (i) {
      const u = i.props.children, d = l.map((p) => p === i ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ S(t, { ...a, ref: n, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ S(t, { ...a, ref: n, children: s });
  });
  return o.displayName = `${e}.Slot`, o;
}
var yt = /* @__PURE__ */ ce("Slot");
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = c.forwardRef((o, r) => {
    const { children: n, ...s } = o;
    if (c.isValidElement(n)) {
      const a = St(n), l = Ct(s, n.props);
      return n.type !== c.Fragment && (l.ref = r ? Ge(r, a) : a), c.cloneElement(n, l);
    }
    return c.Children.count(n) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xt = Symbol("radix.slottable");
function kt(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xt;
}
function Ct(e, t) {
  const o = { ...t };
  for (const r in t) {
    const n = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? n && s ? o[r] = (...l) => {
      const i = s(...l);
      return n(...l), i;
    } : n && (o[r] = n) : r === "style" ? o[r] = { ...n, ...s } : r === "className" && (o[r] = [n, s].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function St(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
function Le(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = Le(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function Ve() {
  for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = Le(e)) && (r && (r += " "), r += t);
  return r;
}
const Me = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Pe = Ve, Rt = (e, t) => (o) => {
  var r;
  if (t?.variants == null) return Pe(e, o?.class, o?.className);
  const { variants: n, defaultVariants: s } = t, a = Object.keys(n).map((u) => {
    const d = o?.[u], p = s?.[u];
    if (d === null) return null;
    const y = Me(d) || Me(p);
    return n[u][y];
  }), l = o && Object.entries(o).reduce((u, d) => {
    let [p, y] = d;
    return y === void 0 || (u[p] = y), u;
  }, {}), i = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: p, className: y, ...k } = d;
    return Object.entries(k).every((x) => {
      let [w, h] = x;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...l
      }[w]) : {
        ...s,
        ...l
      }[w] === h;
    }) ? [
      ...u,
      p,
      y
    ] : u;
  }, []);
  return Pe(e, a, i, o?.class, o?.className);
}, ke = "-", It = (e) => {
  const t = At(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(ke);
      return l[0] === "" && l.length !== 1 && l.shift(), De(l, t) || Tt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const i = o[a] || [];
      return l && r[a] ? [...i, ...r[a]] : i;
    }
  };
}, De = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), n = r ? De(e.slice(1), r) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(ke);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}, _e = /^\[(.+)\]$/, Tt = (e) => {
  if (_e.test(e)) {
    const t = _e.exec(e)[1], o = t?.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, At = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    ve(o[n], r, n, t);
  return r;
}, ve = (e, t, o, r) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : ze(t, n);
      s.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (Nt(n)) {
        ve(n(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([s, a]) => {
      ve(a, ze(t, s), o, r);
    });
  });
}, ze = (e, t) => {
  let o = e;
  return t.split(ke).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, Nt = (e) => e.isThemeGetter, Et = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (s, a) => {
    o.set(s, a), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = o.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return n(s, a), a;
    },
    set(s, a) {
      o.has(s) ? o.set(s, a) : n(s, a);
    }
  };
}, ye = "!", we = ":", Mt = we.length, Pt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (n) => {
    const s = [];
    let a = 0, l = 0, i = 0, u;
    for (let x = 0; x < n.length; x++) {
      let w = n[x];
      if (a === 0 && l === 0) {
        if (w === we) {
          s.push(n.slice(i, x)), i = x + Mt;
          continue;
        }
        if (w === "/") {
          u = x;
          continue;
        }
      }
      w === "[" ? a++ : w === "]" ? a-- : w === "(" ? l++ : w === ")" && l--;
    }
    const d = s.length === 0 ? n : n.substring(i), p = _t(d), y = p !== d, k = u && u > i ? u - i : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: p,
      maybePostfixModifierPosition: k
    };
  };
  if (t) {
    const n = t + we, s = r;
    r = (a) => a.startsWith(n) ? s(a.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const n = r;
    r = (s) => o({
      className: s,
      parseClassName: n
    });
  }
  return r;
}, _t = (e) => e.endsWith(ye) ? e.substring(0, e.length - 1) : e.startsWith(ye) ? e.substring(1) : e, zt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let s = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (n.push(...s.sort(), a), s = []) : s.push(a);
    }), n.push(...s.sort()), n;
  };
}, Ft = (e) => ({
  cache: Et(e.cacheSize),
  parseClassName: Pt(e),
  sortModifiers: zt(e),
  ...It(e)
}), Ot = /\s+/, Gt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(Ot);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: p,
      modifiers: y,
      hasImportantModifier: k,
      baseClassName: x,
      maybePostfixModifierPosition: w
    } = o(d);
    if (p) {
      i = d + (i.length > 0 ? " " + i : i);
      continue;
    }
    let h = !!w, R = r(h ? x.substring(0, w) : x);
    if (!R) {
      if (!h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (R = r(x), !R) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const N = s(y).join(":"), C = k ? N + ye : N, I = C + R;
    if (a.includes(I))
      continue;
    a.push(I);
    const _ = n(R, h);
    for (let P = 0; P < _.length; ++P) {
      const O = _[P];
      a.push(C + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Lt() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = $e(t)) && (r && (r += " "), r += o);
  return r;
}
const $e = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = $e(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Vt(e, ...t) {
  let o, r, n, s = a;
  function a(i) {
    const u = t.reduce((d, p) => p(d), e());
    return o = Ft(u), r = o.cache.get, n = o.cache.set, s = l, l(i);
  }
  function l(i) {
    const u = r(i);
    if (u)
      return u;
    const d = Gt(i, o);
    return n(i, d), d;
  }
  return function() {
    return s(Lt.apply(null, arguments));
  };
}
const T = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Ue = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, je = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Dt = /^\d+\/\d+$/, $t = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ut = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Bt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, K = (e) => Dt.test(e), v = (e) => !!e && !Number.isNaN(Number(e)), D = (e) => !!e && Number.isInteger(Number(e)), ge = (e) => e.endsWith("%") && v(e.slice(0, -1)), G = (e) => $t.test(e), Kt = () => !0, Ht = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ut.test(e) && !jt.test(e)
), Be = () => !1, qt = (e) => Bt.test(e), Yt = (e) => Wt.test(e), Jt = (e) => !f(e) && !m(e), Xt = (e) => H(e, He, Be), f = (e) => Ue.test(e), j = (e) => H(e, qe, Ht), be = (e) => H(e, oo, v), Fe = (e) => H(e, We, Be), Zt = (e) => H(e, Ke, Yt), se = (e) => H(e, Ye, qt), m = (e) => je.test(e), X = (e) => q(e, qe), Qt = (e) => q(e, ro), Oe = (e) => q(e, We), eo = (e) => q(e, He), to = (e) => q(e, Ke), ae = (e) => q(e, Ye, !0), H = (e, t, o) => {
  const r = Ue.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, q = (e, t, o = !1) => {
  const r = je.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, We = (e) => e === "position" || e === "percentage", Ke = (e) => e === "image" || e === "url", He = (e) => e === "length" || e === "size" || e === "bg-size", qe = (e) => e === "length", oo = (e) => e === "number", ro = (e) => e === "family-name", Ye = (e) => e === "shadow", no = () => {
  const e = T("color"), t = T("font"), o = T("text"), r = T("font-weight"), n = T("tracking"), s = T("leading"), a = T("breakpoint"), l = T("container"), i = T("spacing"), u = T("radius"), d = T("shadow"), p = T("inset-shadow"), y = T("text-shadow"), k = T("drop-shadow"), x = T("blur"), w = T("perspective"), h = T("aspect"), R = T("ease"), N = T("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], _ = () => [...I(), m, f], P = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], g = () => [m, f, i], F = () => [K, "full", "auto", ...g()], J = () => [D, "none", "subgrid", m, f], B = () => ["auto", {
    span: ["full", D, m, f]
  }, D, m, f], W = () => [D, "auto", m, f], Q = () => ["auto", "min", "max", "fr", m, f], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...g()], $ = () => [K, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], b = () => [e, m, f], Re = () => [...I(), Oe, Fe, {
    position: [m, f]
  }], Ie = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Te = () => ["auto", "cover", "contain", eo, Xt, {
    size: [m, f]
  }], me = () => [ge, X, j], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    m,
    f
  ], z = () => ["", v, X, j], te = () => ["solid", "dashed", "dotted", "double"], Ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [v, ge, Oe, Fe], Ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    m,
    f
  ], oe = () => ["none", v, m, f], re = () => ["none", v, m, f], pe = () => [v, m, f], ne = () => [K, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [G],
      breakpoint: [G],
      color: [Kt],
      container: [G],
      "drop-shadow": [G],
      ease: ["in", "out", "in-out"],
      font: [Jt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [G],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [G],
      shadow: [G],
      spacing: ["px", v],
      text: [G],
      "text-shadow": [G],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", K, f, m, h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [v, f, m, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: _()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [D, "auto", m, f]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [K, "full", "auto", l, ...g()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [v, K, "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", v, m, f]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", v, m, f]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [D, "first", "last", "none", m, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": J()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": J()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ee(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ee()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ee()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: E()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: E()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: E()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: E()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: E()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: E()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: E()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: E()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: E()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": g()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: $()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...$()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...$()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, X, j]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, m, be]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ge, f]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qt, f, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, m, f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [v, "none", m, be]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...g()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m, f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", m, f]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: b()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: b()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [v, "from-font", "auto", m, j]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: b()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [v, "auto", m, f]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m, f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", m, f]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Re()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ie()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Te()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, D, m, f],
          radial: ["", m, f],
          conic: [D, m, f]
        }, to, Zt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: b()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: me()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: me()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: me()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: b()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...te(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...te(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: b()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": b()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": b()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": b()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": b()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": b()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": b()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": b()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": b()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: b()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [v, m, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", v, X, j]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: b()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          ae,
          se
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: b()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, ae, se]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": b()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: b()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [v, j]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": b()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": b()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, ae, se]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": b()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v, m, f]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ae()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [v]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": A()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": b()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": b()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": A()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": b()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": b()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": A()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": b()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": b()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": A()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": b()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": b()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": A()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": b()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": b()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": A()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": b()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": b()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": A()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": b()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": b()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, f]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": A()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": b()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": b()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [v]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": A()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": b()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": b()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Re()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ie()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Te()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", m, f]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          m,
          f
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [v, m, f]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [v, m, f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          k,
          ae,
          se
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": b()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", v, m, f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v, m, f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", v, m, f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v, m, f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", v, m, f]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          m,
          f
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [v, m, f]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [v, m, f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", v, m, f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v, m, f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", v, m, f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v, m, f]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v, m, f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", v, m, f]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", m, f]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [v, "initial", m, f]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, m, f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [v, m, f]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, m, f]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [w, m, f]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [m, f, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ne()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ne()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ne()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ne()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: b()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: b()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m, f]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", m, f]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...b()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [v, X, j, be]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...b()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, so = /* @__PURE__ */ Vt(no);
function ue(...e) {
  return so(Ve(e));
}
const ao = Rt(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), io = c.forwardRef(
  ({ className: e, variant: t, size: o, asChild: r = !1, ...n }, s) => /* @__PURE__ */ S(
    r ? yt : "button",
    {
      className: ue(ao({ variant: t, size: o, className: e })),
      ref: s,
      ...n
    }
  )
);
io.displayName = "Button";
function L(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(n) {
    if (e?.(n), o === !1 || !n.defaultPrevented)
      return t?.(n);
  };
}
function Ce(e, t = []) {
  let o = [];
  function r(s, a) {
    const l = c.createContext(a), i = o.length;
    o = [...o, a];
    const u = (p) => {
      const { scope: y, children: k, ...x } = p, w = y?.[e]?.[i] || l, h = c.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ S(w.Provider, { value: h, children: k });
    };
    u.displayName = s + "Provider";
    function d(p, y) {
      const k = y?.[e]?.[i] || l, x = c.useContext(k);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const n = () => {
    const s = o.map((a) => c.createContext(a));
    return function(l) {
      const i = l?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: i } }),
        [l, i]
      );
    };
  };
  return n.scopeName = e, [r, lo(n, ...t)];
}
function lo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const r = e.map((n) => ({
      useScope: n(),
      scopeName: n.scopeName
    }));
    return function(s) {
      const a = r.reduce((l, { useScope: i, scopeName: u }) => {
        const p = i(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
function co(e) {
  const t = e + "CollectionProvider", [o, r] = Ce(t), [n, s] = o(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (w) => {
    const { scope: h, children: R } = w, N = U.useRef(null), C = U.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S(n, { scope: h, itemMap: C, collectionRef: N, children: R });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", i = /* @__PURE__ */ ce(l), u = U.forwardRef(
    (w, h) => {
      const { scope: R, children: N } = w, C = s(l, R), I = le(h, C.collectionRef);
      return /* @__PURE__ */ S(i, { ref: I, children: N });
    }
  );
  u.displayName = l;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", y = /* @__PURE__ */ ce(d), k = U.forwardRef(
    (w, h) => {
      const { scope: R, children: N, ...C } = w, I = U.useRef(null), _ = le(h, I), P = s(d, R);
      return U.useEffect(() => (P.itemMap.set(I, { ref: I, ...C }), () => void P.itemMap.delete(I))), /* @__PURE__ */ S(y, { [p]: "", ref: _, children: N });
    }
  );
  k.displayName = d;
  function x(w) {
    const h = s(e + "CollectionConsumer", w);
    return U.useCallback(() => {
      const N = h.collectionRef.current;
      if (!N) return [];
      const C = Array.from(N.querySelectorAll(`[${p}]`));
      return Array.from(h.itemMap.values()).sort(
        (P, O) => C.indexOf(P.ref.current) - C.indexOf(O.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: k },
    x,
    r
  ];
}
var de = globalThis?.document ? c.useLayoutEffect : () => {
}, uo = c[" useId ".trim().toString()] || (() => {
}), fo = 0;
function Je(e) {
  const [t, o] = c.useState(uo());
  return de(() => {
    o((r) => r ?? String(fo++));
  }, [e]), t ? `radix-${t}` : "";
}
var mo = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Y = mo.reduce((e, t) => {
  const o = /* @__PURE__ */ ce(`Primitive.${t}`), r = c.forwardRef((n, s) => {
    const { asChild: a, ...l } = n, i = a ? o : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S(i, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function po(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...o) => t.current?.(...o), []);
}
var go = c[" useInsertionEffect ".trim().toString()] || de;
function Xe({
  prop: e,
  defaultProp: t,
  onChange: o = () => {
  },
  caller: r
}) {
  const [n, s, a] = bo({
    defaultProp: t,
    onChange: o
  }), l = e !== void 0, i = l ? e : n;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const p = d.current;
      p !== l && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = l;
    }, [l, r]);
  }
  const u = c.useCallback(
    (d) => {
      if (l) {
        const p = ho(d) ? d(e) : d;
        p !== e && a.current?.(p);
      } else
        s(d);
    },
    [l, e, s, a]
  );
  return [i, u];
}
function bo({
  defaultProp: e,
  onChange: t
}) {
  const [o, r] = c.useState(e), n = c.useRef(o), s = c.useRef(t);
  return go(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    n.current !== o && (s.current?.(o), n.current = o);
  }, [o, n]), [o, r, s];
}
function ho(e) {
  return typeof e == "function";
}
var vo = c.createContext(void 0);
function Ze(e) {
  const t = c.useContext(vo);
  return e || t || "ltr";
}
var he = "rovingFocusGroup.onEntryFocus", yo = { bubbles: !1, cancelable: !0 }, Z = "RovingFocusGroup", [xe, Qe, wo] = co(Z), [xo, et] = Ce(
  Z,
  [wo]
), [ko, Co] = xo(Z), tt = c.forwardRef(
  (e, t) => /* @__PURE__ */ S(xe.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ S(xe.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ S(So, { ...e, ref: t }) }) })
);
tt.displayName = Z;
var So = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: n = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: i,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = e, y = c.useRef(null), k = le(t, y), x = Ze(s), [w, h] = Xe({
    prop: a,
    defaultProp: l ?? null,
    onChange: i,
    caller: Z
  }), [R, N] = c.useState(!1), C = po(u), I = Qe(o), _ = c.useRef(!1), [P, O] = c.useState(0);
  return c.useEffect(() => {
    const g = y.current;
    if (g)
      return g.addEventListener(he, C), () => g.removeEventListener(he, C);
  }, [C]), /* @__PURE__ */ S(
    ko,
    {
      scope: o,
      orientation: r,
      dir: x,
      loop: n,
      currentTabStopId: w,
      onItemFocus: c.useCallback(
        (g) => h(g),
        [h]
      ),
      onItemShiftTab: c.useCallback(() => N(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => O((g) => g + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => O((g) => g - 1),
        []
      ),
      children: /* @__PURE__ */ S(
        Y.div,
        {
          tabIndex: R || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: k,
          style: { outline: "none", ...e.style },
          onMouseDown: L(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: L(e.onFocus, (g) => {
            const F = !_.current;
            if (g.target === g.currentTarget && F && !R) {
              const J = new CustomEvent(he, yo);
              if (g.currentTarget.dispatchEvent(J), !J.defaultPrevented) {
                const B = I().filter((E) => E.focusable), W = B.find((E) => E.active), Q = B.find((E) => E.id === w), V = [W, Q, ...B].filter(
                  Boolean
                ).map((E) => E.ref.current);
                nt(V, d);
              }
            }
            _.current = !1;
          }),
          onBlur: L(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), ot = "RovingFocusGroupItem", rt = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: n = !1,
      tabStopId: s,
      children: a,
      ...l
    } = e, i = Je(), u = s || i, d = Co(ot, o), p = d.currentTabStopId === u, y = Qe(o), { onFocusableItemAdd: k, onFocusableItemRemove: x, currentTabStopId: w } = d;
    return c.useEffect(() => {
      if (r)
        return k(), () => x();
    }, [r, k, x]), /* @__PURE__ */ S(
      xe.ItemSlot,
      {
        scope: o,
        id: u,
        focusable: r,
        active: n,
        children: /* @__PURE__ */ S(
          Y.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: t,
            onMouseDown: L(e.onMouseDown, (h) => {
              r ? d.onItemFocus(u) : h.preventDefault();
            }),
            onFocus: L(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: L(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const R = To(h, d.orientation, d.dir);
              if (R !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let C = y().filter((I) => I.focusable).map((I) => I.ref.current);
                if (R === "last") C.reverse();
                else if (R === "prev" || R === "next") {
                  R === "prev" && C.reverse();
                  const I = C.indexOf(h.currentTarget);
                  C = d.loop ? Ao(C, I + 1) : C.slice(I + 1);
                }
                setTimeout(() => nt(C));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: w != null }) : a
          }
        )
      }
    );
  }
);
rt.displayName = ot;
var Ro = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Io(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function To(e, t, o) {
  const r = Io(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Ro[r];
}
function nt(e, t = !1) {
  const o = document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o)) return;
}
function Ao(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var No = tt, Eo = rt;
function Mo(e, t) {
  return c.useReducer((o, r) => t[o][r] ?? o, e);
}
var st = (e) => {
  const { present: t, children: o } = e, r = Po(t), n = typeof o == "function" ? o({ present: r.isPresent }) : c.Children.only(o), s = le(r.ref, _o(n));
  return typeof o == "function" || r.isPresent ? c.cloneElement(n, { ref: s }) : null;
};
st.displayName = "Presence";
function Po(e) {
  const [t, o] = c.useState(), r = c.useRef(null), n = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [l, i] = Mo(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = ie(r.current);
    s.current = l === "mounted" ? u : "none";
  }, [l]), de(() => {
    const u = r.current, d = n.current;
    if (d !== e) {
      const y = s.current, k = ie(u);
      e ? i("MOUNT") : k === "none" || u?.display === "none" ? i("UNMOUNT") : i(d && y !== k ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e;
    }
  }, [e, i]), de(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, p = (k) => {
        const w = ie(r.current).includes(CSS.escape(k.animationName));
        if (k.target === t && w && (i("ANIMATION_END"), !n.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, y = (k) => {
        k.target === t && (s.current = ie(r.current));
      };
      return t.addEventListener("animationstart", y), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", y), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      i("ANIMATION_END");
  }, [t, i]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, o(u);
    }, [])
  };
}
function ie(e) {
  return e?.animationName || "none";
}
function _o(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var fe = "Tabs", [zo, jo] = Ce(fe, [
  et
]), at = et(), [Fo, Se] = zo(fe), it = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: n,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: l,
      activationMode: i = "automatic",
      ...u
    } = e, d = Ze(l), [p, y] = Xe({
      prop: r,
      onChange: n,
      defaultProp: s ?? "",
      caller: fe
    });
    return /* @__PURE__ */ S(
      Fo,
      {
        scope: o,
        baseId: Je(),
        value: p,
        onValueChange: y,
        orientation: a,
        dir: d,
        activationMode: i,
        children: /* @__PURE__ */ S(
          Y.div,
          {
            dir: d,
            "data-orientation": a,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
it.displayName = fe;
var lt = "TabsList", ct = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, loop: r = !0, ...n } = e, s = Se(lt, o), a = at(o);
    return /* @__PURE__ */ S(
      No,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ S(
          Y.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...n,
            ref: t
          }
        )
      }
    );
  }
);
ct.displayName = lt;
var dt = "TabsTrigger", ut = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, disabled: n = !1, ...s } = e, a = Se(dt, o), l = at(o), i = pt(a.baseId, r), u = gt(a.baseId, r), d = r === a.value;
    return /* @__PURE__ */ S(
      Eo,
      {
        asChild: !0,
        ...l,
        focusable: !n,
        active: d,
        children: /* @__PURE__ */ S(
          Y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            id: i,
            ...s,
            ref: t,
            onMouseDown: L(e.onMouseDown, (p) => {
              !n && p.button === 0 && p.ctrlKey === !1 ? a.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: L(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && a.onValueChange(r);
            }),
            onFocus: L(e.onFocus, () => {
              const p = a.activationMode !== "manual";
              !d && !n && p && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
ut.displayName = dt;
var ft = "TabsContent", mt = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: o, value: r, forceMount: n, children: s, ...a } = e, l = Se(ft, o), i = pt(l.baseId, r), u = gt(l.baseId, r), d = r === l.value, p = c.useRef(d);
    return c.useEffect(() => {
      const y = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(y);
    }, []), /* @__PURE__ */ S(st, { present: n || d, children: ({ present: y }) => /* @__PURE__ */ S(
      Y.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": i,
        hidden: !y,
        id: u,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: y && s
      }
    ) });
  }
);
mt.displayName = ft;
function pt(e, t) {
  return `${e}-trigger-${t}`;
}
function gt(e, t) {
  return `${e}-content-${t}`;
}
var Oo = it, bt = ct, ht = ut, vt = mt;
const Bo = Oo, Go = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ S(
  bt,
  {
    ref: o,
    className: ue(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Go.displayName = bt.displayName;
const Lo = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ S(
  ht,
  {
    ref: o,
    className: ue(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Lo.displayName = ht.displayName;
const Vo = c.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ S(
  vt,
  {
    ref: o,
    className: ue(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Vo.displayName = vt.displayName;
export {
  io as Button,
  Bo as Tabs,
  Vo as TabsContent,
  Go as TabsList,
  Lo as TabsTrigger,
  ue as cn
};
