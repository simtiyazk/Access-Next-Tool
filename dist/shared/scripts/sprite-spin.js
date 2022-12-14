"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  "use strict";
  function t(e, t, n) {
    for (e = String(e); e.length < t;) {
      e = String(n) + e;
    }return e;
  }function n(e, t, n) {
    return e > n ? n : t > e ? t : e;
  }function r(e, t, n, r) {
    for (; e > n;) {
      e -= r;
    }for (; t > e;) {
      e += r;
    }return e;
  }function o(e) {
    return e.preventDefault(), !1;
  }function i() {
    window.console && window.console.log && window.console.log.apply(window.console, arguments);
  }function a(e, t, n) {
    n && e.bind(t + "." + l, n);
  }function s(e) {
    e.unbind("." + l);
  }function d(t) {
    var n,
        r,
        o = "string" == typeof t.source ? [t.source] : t.source,
        i = 0,
        a = [],
        s = t.preloadCount || o.length,
        d = !1,
        u = !1,
        c = function c() {
      i += 1, "function" == typeof t.progress && t.progress({ index: e.inArray(this, a), loaded: i, total: o.length, percent: Math.round(i / o.length * 100) }), u = u || this === a[0], !d && i >= s && u && "function" == typeof t.complete && (d = !0, t.complete(a));
    };for (n = 0; n < o.length; n += 1) {
      r = new Image(), a.push(r), r.onload = r.onabort = r.onerror = c, r.src = o[n];
    }"function" == typeof t.initiated && t.initiated(a);
  }function u(e, t) {
    var n = (t || e).width,
        r = (t || e).height;if (1048576 >= n * r) return !1;var o;if (o = document.createElement("canvas"), !o || !o.getContext) return !1;var a = o.getContext("2d");if (!a) return !1;o.width = o.height = 1, a.fillStyle = "#FF00FF", a.fillRect(0, 0, 1, 1), a.drawImage(e, -n + 1, 0);try {
      var s = a.getImageData(0, 0, 1, 1).data;return 255 === s[0] && 0 === s[1] && 255 === s[2];
    } catch (d) {
      return i(d.message, d.stack), !1;
    }
  }function c(e) {
    if (null != e.naturalWidth) return { width: e.naturalWidth, height: e.naturalHeight };var t = new Image();return t.src = e.src, { width: t.width, height: t.height };
  }var l = "spritespin",
      m = ["mousedown", "mousemove", "mouseup", "mouseenter", "mouseover", "mouseleave", "dblclick", "touchstart", "touchmove", "touchend", "touchcancel", "selectstart", "gesturestart", "gesturechange", "gestureend"],
      h = ["dragstart"],
      g = {};window.SpriteSpin = g, g.namespace = l, g.mods = {}, g.defaults = { source: void 0, width: void 0, height: void 0, frames: void 0, framesX: void 0, lanes: 1, sizeMode: void 0, module: "360", behavior: "drag", renderer: "canvas", lane: 0, frame: 0, frameTime: 40, animate: !0, reverse: !1, loop: !0, stopFrame: 0, wrap: !0, wrapLane: !1, sense: 1, senseLane: void 0, orientation: "horizontal", detectSubsampling: !0, scrollThreshold: 50, preloadCount: void 0, onInit: void 0, onProgress: void 0, onLoad: void 0, onFrame: void 0, onDraw: void 0 }, g.clamp = n, g.wrap = r, g.sourceArray = function (e, n) {
    var r = 0,
        o = 0,
        i = 0,
        a = 0,
        s = n.digits || 2;n.frame && (r = n.frame[0], o = n.frame[1]), n.lane && (i = n.lane[0], a = n.lane[1]);var d,
        u,
        c,
        l = [];for (d = i; a >= d; d += 1) {
      for (u = r; o >= u; u += 1) {
        c = e.replace("{lane}", t(d, s, 0)), c = c.replace("{frame}", t(u, s, 0)), l.push(c);
      }
    }return l;
  }, g.measureSource = function (e) {
    var t = e.images[0],
        n = c(t);if (1 === e.images.length) {
      if (e.sourceWidth = n.width, e.sourceHeight = n.height, e.detectSubsampling && u(t, n) && (e.sourceWidth /= 2, e.sourceHeight /= 2), e.framesX = e.framesX || e.frames, !e.frameWidth || !e.frameHeight) if (e.framesX) {
        e.frameWidth = Math.floor(e.sourceWidth / e.framesX);var r = Math.ceil(e.frames * e.lanes / e.framesX);e.frameHeight = Math.floor(e.sourceHeight / r);
      } else e.frameWidth = n.width, e.frameHeight = n.height;
    } else e.sourceWidth = e.frameWidth = n.width, e.sourceHeight = e.frameHeight = n.height, u(t, n) && (e.sourceWidth = e.frameWidth = n.width / 2, e.sourceHeight = e.frameHeight = n.height / 2), e.frames = e.frames || e.images.length;
  }, g.resetInput = function (e) {
    e.startX = e.startY = void 0, e.currentX = e.currentY = void 0, e.oldX = e.oldY = void 0, e.dX = e.dY = e.dW = 0, e.ddX = e.ddY = e.ddW = 0;
  }, g.updateInput = function (e, t) {
    void 0 === e.touches && void 0 !== e.originalEvent && (e.touches = e.originalEvent.touches), t.oldX = t.currentX, t.oldY = t.currentY, void 0 !== e.touches && e.touches.length > 0 ? (t.currentX = e.touches[0].clientX || 0, t.currentY = e.touches[0].clientY || 0) : (t.currentX = e.clientX || 0, t.currentY = e.clientY || 0), (void 0 === t.oldX || void 0 === t.oldY) && (t.oldX = t.currentX, t.oldY = t.currentY), (void 0 === t.startX || void 0 === t.startY) && (t.startX = t.currentX, t.startY = t.currentY, t.clickframe = t.frame, t.clicklane = t.lane), t.dX = t.currentX - t.startX, t.dY = t.currentY - t.startY, t.ddX = t.currentX - t.oldX, t.ddY = t.currentY - t.oldY, t.ndX = t.dX / t.width, t.ndY = t.dY / t.height, t.nddX = t.ddX / t.width, t.nddY = t.ddY / t.height;
  }, g.updateFrame = function (e, t, o) {
    void 0 !== t ? e.frame = Number(t) : e.animation && (e.frame += e.reverse ? -1 : 1), e.animation ? (e.frame = r(e.frame, 0, e.frames - 1, e.frames), e.loop || e.frame !== e.stopFrame || g.stopAnimation(e)) : e.frame = e.wrap ? r(e.frame, 0, e.frames - 1, e.frames) : n(e.frame, 0, e.frames - 1), void 0 !== o && (e.lane = o, e.lane = e.wrapLane ? r(e.lane, 0, e.lanes - 1, e.lanes) : n(e.lane, 0, e.lanes - 1)), e.target.trigger("onFrame", e), e.target.trigger("onDraw", e);
  }, g.stopAnimation = function (e) {
    e.animate = !1, e.animation && (window.clearInterval(e.animation), e.animation = null);
  }, g.setAnimation = function (e) {
    e.animate ? g.requestFrame(e) : g.stopAnimation(e);
  }, g.requestFrame = function (e) {
    e.animation || (void 0 === e.frameFunction && (e.frameFunction = function () {
      try {
        g.updateFrame(e);
      } catch (t) {}
    }), e.animation = window.setInterval(e.frameFunction, e.frameTime));
  }, g.setModules = function (t) {
    var n, r, o;for (n = 0; n < t.mods.length; n += 1) {
      r = t.mods[n], "string" == typeof r && (o = g.mods[r], o ? t.mods[n] = o : e.error("No module found with name " + r));
    }
  }, g.calculateInnerLayout = function (e) {
    var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
        n = Math.floor(e.height || e.frameHeight || e.target.innerHeight()),
        r = t / n,
        o = e.frameWidth || t,
        i = e.frameHeight || n,
        a = o / i,
        s = { width: "100%", height: "100%", top: 0, left: 0, bottom: 0, right: 0, position: "absolute", overflow: "hidden" },
        d = e.sizeMode;return d && "scale" != d ? ("original" == d ? (s.width = o, s.height = i) : "fit" == d ? a >= r ? (s.width = t, s.height = t / a) : (s.height = n, s.width = n * a) : "fill" == d && (a >= r ? (s.height = n, s.width = n * a) : (s.width = t, s.height = t / a)), s.width = 0 | s.width, s.height = 0 | s.height, s.top = (n - s.height) / 2 | 0, s.left = (t - s.width) / 2 | 0, s.right = s.left, s.bottom = s.top, s) : s;
  }, g.setLayout = function (e) {
    e.target.attr("unselectable", "on").css({ "-ms-user-select": "none", "-moz-user-select": "none", "-khtml-user-select": "none", "-webkit-user-select": "none", "user-select": "none" });var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
        n = Math.floor(e.height || e.frameHeight || e.target.innerHeight());e.target.css({ width: t, height: n, position: "relative", overflow: "hidden" });var r = g.calculateInnerLayout(e);e.stage.css(r).hide(), e.canvas && (e.canvas[0].width = t, e.canvas[0].height = n, e.canvas.css(r).hide());
  }, g.setEvents = function (e) {
    var t,
        n,
        r,
        i = e.target;for (s(i), n = 0; n < h.length; n += 1) {
      a(i, h[n], o);
    }for (t = 0; t < e.mods.length; t += 1) {
      for (r = e.mods[t], n = 0; n < m.length; n += 1) {
        a(i, m[n], r[m[n]]);
      }a(i, "onInit", r.onInit), a(i, "onProgress", r.onProgress), a(i, "onLoad", r.onLoad), a(i, "onFrame", r.onFrame), a(i, "onDraw", r.onDraw);
    }a(i, "onLoad", function (e, t) {
      g.setAnimation(t);
    }), a(i, "onInit", e.onInit), a(i, "onProgress", e.onProgress), a(i, "onLoad", e.onLoad), a(i, "onFrame", e.onFrame), a(i, "onDraw", e.onDraw);
  }, g.boot = function (e) {
    g.setModules(e), g.setLayout(e), g.setEvents(e), e.target.addClass("loading").trigger("onInit", e), e.loading = !0, d({ source: e.source, preloadCount: e.preloadCount, progress: function progress(t) {
        e.target.trigger("onProgress", [t, e]);
      }, complete: function complete(t) {
        e.images = t, e.loading = !1, g.measureSource(e), e.stage.show(), e.target.removeClass("loading").trigger("onLoad", e).trigger("onFrame", e).trigger("onDraw", e);
      } });
  }, g.create = function (t) {
    var n = t.target,
        r = n.data(l);if (r) e.extend(r, t);else {
      if (r = e.extend({}, g.defaults, t), r.source = r.source || [], n.find("img").each(function () {
        r.source.push(e(this).attr("src"));
      }), n.empty().addClass("spritespin-instance").append("<div class='spritespin-stage'></div>"), "canvas" === r.renderer) {
        var o = e("<canvas class='spritespin-canvas'></canvas>")[0];o.getContext && o.getContext("2d") ? (r.canvas = e(o), r.context = o.getContext("2d"), n.append(r.canvas), n.addClass("with-canvas")) : r.renderer = "image";
      }r.target = n, r.stage = n.find(".spritespin-stage"), n.data(l, r);
    }"string" == typeof r.source && (r.source = [r.source]), r.mods && (delete r.behavior, delete r.module), (r.behavior || r.module) && (r.mods = [], r.behavior && r.mods.push(r.behavior), r.module && r.mods.push(r.module), delete r.behavior, delete r.module), g.boot(r);
  }, g.destroy = function (e) {
    e && (g.stopAnimation(e), s(e.target), e.target.removeData(l));
  }, g.registerModule = function (t, n) {
    return g.mods[t] && e.error("Module name is already taken: " + t), n = n || {}, g.mods[t] = n, n;
  }, g.Api = function (e) {
    this.data = e;
  }, g.extendApi = function (t) {
    var n,
        r = g.Api.prototype;for (n in t) {
      t.hasOwnProperty(n) && (r[n] ? e.error("API method is already defined: " + n) : r[n] = t[n]);
    }return r;
  }, e.fn.spritespin = function (t, n) {
    if ("data" === t) return this.data(l);if ("api" === t) {
      var r = this.data(l);return r.api = r.api || new g.Api(r), r.api;
    }if ("destroy" === t) return e(this).each(function () {
      g.destroy(e(this).data(l));
    });if (2 === arguments.length && "string" == typeof t) {
      var o = {};o[t] = n, t = o;
    }return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? (t.target = t.target || e(this), g.create(t), t.target) : e.error("Invalid call to spritespin");
  };
}(window.jQuery || window.Zepto || window.$), function () {
  "use strict";
  var e = window.SpriteSpin;e.extendApi({ isPlaying: function isPlaying() {
      return null !== this.data.animation;
    }, isLooping: function isLooping() {
      return this.data.loop;
    }, toggleAnimation: function toggleAnimation() {
      this.data.animate = !this.data.animate, e.setAnimation(this.data);
    }, stopAnimation: function stopAnimation() {
      this.data.animate = !1, e.setAnimation(this.data);
    }, startAnimation: function startAnimation() {
      this.data.animate = !0, e.setAnimation(this.data);
    }, loop: function loop(t) {
      return this.data.loop = t, e.setAnimation(this.data), this;
    }, currentFrame: function currentFrame() {
      return this.data.frame;
    }, updateFrame: function updateFrame(t) {
      return e.updateFrame(this.data, t), this;
    }, skipFrames: function skipFrames(t) {
      var n = this.data;return e.updateFrame(n, n.frame + (n.reverse ? -t : +t)), this;
    }, nextFrame: function nextFrame() {
      return this.skipFrames(1);
    }, prevFrame: function prevFrame() {
      return this.skipFrames(-1);
    }, playTo: function playTo(t, n) {
      var r = this.data;if (n = n || {}, n.force || r.frame !== t) {
        if (n.nearest) {
          var o = t - r.frame,
              i = t > r.frame ? o - r.frames : o + r.frames,
              a = Math.abs(o) < Math.abs(i) ? o : i;r.reverse = 0 > a;
        }return r.animate = !0, r.loop = !1, r.stopFrame = t, e.setAnimation(r), this;
      }
    } });
}(window.jQuery || window.Zepto || window.$), function (e) {
  "use strict";
  function t(e) {
    e = e || document.documentElement, e[d.requestFullscreen]();
  }function n() {
    return document[d.exitFullscreen]();
  }function r() {
    return document[d.fullscreenEnabled];
  }function o() {
    return document[d.fullscreenElement];
  }function i() {
    return !!o();
  }function a() {
    e(document).unbind(c);
  }function s(t) {
    a(), e(document).bind(c, t);
  }var d = function () {
    for (var e, t, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, o = n.length, i = {}; o > r; r++) {
      if (e = n[r], e && e[1] in document) {
        for (r = 0, t = e.length; t > r; r++) {
          i[n[0][r]] = e[r];
        }return i;
      }
    }return !1;
  }(),
      u = window.SpriteSpin,
      c = d.fullscreenchange + "." + u.namespace;u.extendApi({ fullscreenEnabled: r, fullscreenElement: o, exitFullscreen: n, toggleFullscreen: function toggleFullscreen(e) {
      i() ? this.requestFullscreen(e) : this.exitFullscreen();
    }, requestFullscreen: function requestFullscreen(e) {
      e = e || {};var n = this,
          r = n.data,
          o = r.width,
          d = r.height,
          c = r.source;s(function () {
        i() ? (r.width = window.screen.width, r.height = window.screen.height, r.source = e.source || c, u.boot(r)) : (a(), r.width = o, r.height = d, r.source = c, u.boot(r));
      }), t(r.target[0]);
    } });
}(window.jQuery || window.Zepto || window.$), function (e, t) {
  "use strict";
  function n(n) {
    var r = e(this),
        o = r.data("spritespin");t.updateInput(n, o);var i, a;"horizontal" === o.orientation ? (i = o.target.innerWidth() / 2, a = o.currentX - o.target.offset().left) : (i = o.target.innerHeight() / 2, a = o.currentY - o.target.offset().top), r.spritespin(a > i ? "next" : "prev");
  }t.registerModule("click", { mouseup: n, touchend: n });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e, t) {
  "use strict";
  function n(n) {
    var r = e(this).spritespin("data");r.loading || r.dragging || !r.stage.is(":visible") || (r.dragFrame = r.frame || 0, r.dragLane = r.lane || 0, t.updateInput(n, r), r.dragging = !0);
  }function r() {
    var n = e(this),
        r = n.spritespin("data");r.dragging = !1, r.stage.is(":visible") && t.resetInput(r);
  }function o(n) {
    var r,
        o,
        i = e(this),
        a = i.spritespin("data");if (a.dragging) {
      if (t.updateInput(n, a), Math.abs(a.ddX) + Math.abs(a.ddY) > a.scrollThreshold) return a.dragging = !1, void t.resetInput(a);n.preventDefault();var s = 0;s = "number" == typeof a.orientation ? (Number(a.orientation) || 0) * Math.PI / 180 : "horizontal" === a.orientation ? 0 : Math.PI / 2;var d = Math.sin(s),
          u = Math.cos(s),
          c = (a.nddX * u - a.nddY * d) * a.sense || 0,
          l = (a.nddX * d + a.nddY * u) * (a.senseLane || a.sense) || 0;a.dragFrame += a.frames * c, a.dragLane += a.lanes * l, a.wrap || (a.dragFrame = Math.min(a.dragFrame, a.frames), a.dragFrame = Math.max(a.dragFrame, 0)), a.wrapLane || (a.dragLane = Math.min(a.dragLane, a.lanes), a.dragLane = Math.max(a.dragLane, 0)), o = Math.floor(a.dragFrame), r = Math.floor(a.dragLane), t.updateFrame(a, o, r), t.stopAnimation(a);
    }
  }t.registerModule("drag", { mousedown: n, mousemove: o, mouseup: r, mouseleave: r, touchstart: n, touchmove: o, touchend: r, touchcancel: r }), t.registerModule("move", { mousemove: function mousemove(e) {
      n.call(this, e), o.call(this, e);
    }, mouseleave: r, touchstart: n, touchmove: o, touchend: r, touchcancel: r });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e, t) {
  "use strict";
  function n(n) {
    var r = e(this),
        o = r.spritespin("data");o.loading || (t.updateInput(n, o), o.dragging = !0, r.spritespin("api").startAnimation());
  }function r() {
    var n = e(this),
        r = n.spritespin("data");t.resetInput(r), r.dragging = !1, n.spritespin("api").stopAnimation();
  }function o(n) {
    var r = e(this),
        o = r.spritespin("data");if (o.dragging) {
      t.updateInput(n, o);var i, a;"horizontal" === o.orientation ? (i = o.target.innerWidth() / 2, a = (o.currentX - o.target.offset().left - i) / i) : (i = o.height / 2, a = (o.currentY - o.target.offset().top - i) / i), o.reverse = 0 > a, a = 0 > a ? -a : a, o.frameTime = 80 * (1 - a) + 20, ("horizontal" === o.orientation && o.dX < o.dY || "vertical" === o.orientation && o.dX < o.dY) && n.preventDefault();
    }
  }t.registerModule("hold", { mousedown: n, mousemove: o, mouseup: r, mouseleave: r, touchstart: n, touchmove: o, touchend: r, touchcancel: r, onFrame: function onFrame() {
      e(this).spritespin("api").startAnimation();
    } });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e, t) {
  "use strict";
  function n(n) {
    var r = e(this).spritespin("data");r.loading || (t.updateInput(n, r), r.dragging = !0);
  }function r() {
    var n = e(this).spritespin("data");n.dragging = !1, t.resetInput(n);
  }function o(n) {
    var r = e(this),
        o = r.spritespin("data");if (o.dragging) {
      t.updateInput(n, o);var i,
          a,
          s = o.frame,
          d = o.snap || .25;"horizontal" === o.orientation ? (i = o.dX, a = o.target.innerWidth() * d) : (i = o.dY, a = o.target.innerHeight() * d), i > a ? (s = o.frame - 1, o.dragging = !1) : -a > i && (s = o.frame + 1, o.dragging = !1), r.spritespin("update", s), r.spritespin("animate", !1), ("horizontal" === o.orientation && o.dX < o.dY || "vertical" === o.orientation && o.dX < o.dY) && n.preventDefault();
    }
  }t.registerModule("swipe", { mousedown: n, mousemove: o, mouseup: r, mouseleave: r, touchstart: n, touchmove: o, touchend: r, touchcancel: r });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e, t) {
  "use strict";
  function n(t) {
    var n = t.lane * t.frames + t.frame,
        r = t.frameWidth * (n % t.framesX),
        i = t.frameHeight * o(n / t.framesX);return "canvas" === t.renderer ? (t.context.clearRect(0, 0, t.width, t.height), void t.context.drawImage(t.images[0], r, i, t.frameWidth, t.frameHeight, 0, 0, t.width, t.height)) : (r = -o(r * t.scaleWidth), i = -o(i * t.scaleHeight), void ("background" === t.renderer ? t.stage.css({ "background-image": ["url('", t.source[0], "')"].join(""), "background-position": [r, "px ", i, "px"].join("") }) : e(t.images).css({ top: i, left: r })));
  }function r(t) {
    var n = t.lane * t.frames + t.frame,
        r = t.images[n];"canvas" === t.renderer ? r && r.complete !== !1 && (t.context.clearRect(0, 0, t.width, t.height), t.context.drawImage(r, 0, 0, t.width, t.height)) : "background" === t.renderer ? t.stage.css({ "background-image": ["url('", t.source[n], "')"].join(""), "background-position": [0, "px ", 0, "px"].join("") }) : (e(t.images).hide(), e(t.images[n]).show());
  }var o = Math.floor;t.registerModule("360", { onLoad: function onLoad(t, n) {
      var r, i;if (n.scaleWidth = n.width / n.frameWidth, n.scaleHeight = n.height / n.frameHeight, n.sourceIsSprite = 1 === n.images.length, n.stage.empty().css({ "background-image": "none" }).show(), "canvas" === n.renderer) n.context.clearRect(0, 0, n.width, n.height), n.canvas.show();else if ("background" === n.renderer) {
        n.sourceIsSprite ? (r = o(n.sourceWidth * n.scaleWidth), i = o(n.sourceHeight * n.scaleHeight)) : (r = o(n.frameWidth * n.scaleWidth), i = o(n.frameHeight * n.scaleHeight));var a = [r, "px ", i, "px"].join("");n.stage.css({ "background-repeat": "no-repeat", "-webkit-background-size": a, "-moz-background-size": a, "-o-background-size": a, "background-size": a });
      } else "image" === n.renderer && (n.sourceIsSprite ? (r = o(n.sourceWidth * n.scaleWidth), i = o(n.sourceHeight * n.scaleHeight)) : r = i = "100%", e(n.images).appendTo(n.stage).css({ width: r, height: i, position: "absolute" }));
    }, onDraw: function onDraw(e, t) {
      t.sourceIsSprite ? n(t) : r(t);
    } });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e) {
  "use strict";
  var t = window.SpriteSpin.mods.gallery = {};t.onLoad = function (t, n) {
    n.images = [], n.offsets = [], n.stage.empty(), n.speed = 500, n.opacity = .25, n.oldFrame = 0;var r,
        o = 0;for (r = 0; r < n.source.length; r += 1) {
      var i = e("<img src='" + n.source[r] + "'/>");n.stage.append(i), n.images.push(i), n.offsets.push(-o + (n.width - i[0].width) / 2), o += i[0].width, i.css({ opacity: .25 });
    }n.stage.css({ width: o }), n.images[n.oldFrame].animate({ opacity: 1 }, n.speed);
  }, t.onDraw = function (e, t) {
    t.oldFrame !== t.frame && t.offsets ? (t.stage.stop(!0, !1), t.stage.animate({ left: t.offsets[t.frame] }, t.speed), t.images[t.oldFrame].animate({ opacity: t.opacity }, t.speed), t.oldFrame = t.frame, t.images[t.oldFrame].animate({ opacity: 1 }, t.speed)) : t.stage.css({ left: t.offsets[t.frame] + t.dX });
  }, t.resetInput = function (e, t) {
    t.onDrag || t.stage.animate({ left: t.offsets[t.frame] });
  };
}(window.jQuery || window.Zepto || window.$), function (e, t) {
  "use strict";
  var n = Math.floor;t.registerModule("panorama", { onLoad: function onLoad(e, t) {
      t.stage.empty().show(), t.frames = t.sourceWidth, "horizontal" === t.orientation ? (t.scale = t.height / t.sourceHeight, t.frames = t.sourceWidth) : (t.scale = t.width / t.sourceWidth, t.frames = t.sourceHeight);var r = n(t.sourceWidth * t.scale),
          o = n(t.sourceHeight * t.scale),
          i = [r, "px ", o, "px"].join("");t.stage.css({ "background-image": ["url('", t.source[0], "')"].join(""), "background-repeat": "repeat-both", "-webkit-background-size": i, "-moz-background-size": i, "-o-background-size": i, "background-size": i });
    }, onDraw: function onDraw(e, t) {
      var r = 0,
          o = 0;"horizontal" === t.orientation ? r = -n(t.frame % t.frames * t.scale) : o = -n(t.frame % t.frames * t.scale), t.stage.css({ "background-position": [r, "px ", o, "px"].join("") });
    } });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin), function (e, t) {
  "use strict";
  function n(e, n) {
    e.preventDefault(), n.dragging = !1, !e.touches && e.originalEvent && (e.touches = e.originalEvent.touches);var r, o, i, a;e.touches && e.touches.length ? (r = e.touches[0].clientX || 0, o = e.touches[0].clientY || 0) : (r = e.clientX || 0, o = e.clientY || 0), r /= n.width, o /= n.height, null == n.zoomPX && (n.zoomPX = r, n.zoomPY = o), null == n.zoomX && (n.zoomX = r, n.zoomY = o), i = r - n.zoomPX, a = o - n.zoomPY, n.zoomPX = r, n.zoomPY = o, e.type.match(/touch/) && (i = -i, a = -a), n.zoomX = t.clamp(n.zoomX + i, 0, 1), n.zoomY = t.clamp(n.zoomY + a, 0, 1), t.updateFrame(n);
  }function r(t) {
    t.preventDefault();var r = e(this).spritespin("data"),
        o = new Date().getTime();if (delete r.zoomPX, delete r.zoomPY, !r.zoomClickTime) return void (r.zoomClickTime = o);var i = o - r.zoomClickTime;return i > 500 ? void (r.zoomClickTime = o) : (r.zoomClickTime = 0, void (e(this).spritespin("api").toggleZoom() && n(t, r)));
  }function o(t) {
    var r = e(this).spritespin("data");r.zoomStage.is(":visible") && n(t, r);
  }t.registerModule("zoom", { mousedown: r, touchstart: r, mousemove: o, touchmove: o, onInit: function onInit(t, n) {
      n.zoomStage || (n.zoomStage = e("<div class='spritezoom-stage'></div>").css({ width: "100%", height: "100%", top: 0, left: 0, bottom: 0, right: 0, position: "absolute" }).appendTo(n.target).hide());
    }, onDraw: function onDraw(e, t) {
      var n = t.lane * t.frames + t.frame,
          r = t.source[n];if (t.zoomSource && (r = t.zoomSource[n]), r) {
        var o = t.zoomX,
            i = t.zoomY;(null == o || null == i) && (o = t.zoomX = .5, i = t.zoomY = .5), t.zoomStage.css({ "background-repeat": "no-repeat", "background-image": ["url('", r, "')"].join(""), "background-position": [100 * o | 0, "% ", 100 * i | 0, "%"].join("") });
      }
    } }), t.extendApi({ toggleZoom: function toggleZoom() {
      var t = this.data;return t.zoomStage ? t.zoomStage.is(":visible") ? (t.zoomStage.fadeOut(), t.stage.fadeIn(), !1) : (t.zoomStage.fadeIn(), t.stage.fadeOut(), !0) : (e.error("zoom module is not initialized or is not available."), !1);
    } });
}(window.jQuery || window.Zepto || window.$, window.SpriteSpin);
//# sourceMappingURL=sprite-spin.js.map
