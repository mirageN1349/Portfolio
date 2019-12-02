var OFGA_V = "u.1.0.0";
var OFGA_CE = 86400;
var OFGA_OFFER = "47";
var OFGA_SOURCE = "18994";
var OFGA_LAND = "354";
var OFGA_DOMAIN = "profitarius.com";
var OFGA_SUB_1 = "";
var OFGA_SUB_2 = "";
var OFGA_SUB_3 = "";
var OFGA_SUB_4 = "";
var OFGA_SUB_5 = "";
var OFGA_SUB_6 = "";
var OFGA_SUB_7 = "";
var OFGA_OL = "1";
var OFGA_WM = "ext";
var OFGA_RE = new RegExp("");
var ofgaLink = {
  prevAG: false,
  isFile: function(type) {
    var t = [
      "7z",
      "bz2",
      "cab",
      "deb",
      "jar",
      "rar",
      "rpm",
      "tar",
      "zip",
      "exe",
      "wmi",
      "msi",
      "3gp",
      "aaf",
      "asf",
      "flv",
      "mkv",
      "mov",
      "mpeg",
      "qt",
      "wmv",
      "hdv",
      "mpeg4",
      "mp4",
      "dvd",
      "mxf",
      "avi",
      "aac",
      "asf",
      "cda",
      "fla",
      "mp3",
      "ogg",
      "wav",
      "wma",
      "cd",
      "ac3",
      "dts",
      "flac",
      "midi",
      "mod",
      "aud",
      "bmp",
      "cpt",
      "gif",
      "jpeg",
      "jpg",
      "jp2",
      "pcx",
      "png",
      "psd",
      "tga",
      "tpic",
      "tiff",
      "tif",
      "wdp",
      "hdp",
      "cdr",
      "svg",
      "ico",
      "ani",
      "cur",
      "xcf",
      "torrent",
      "apk",
      "ps",
      "eps",
      "djvu",
      "opf",
      "chm",
      "sgml",
      "xml",
      "fb2",
      "fb3",
      "tex",
      "lit",
      "exebook",
      "prc",
      "epub",
      "img",
      "iso",
      "nrg",
      "mdf",
      "uif",
      "bin",
      "cue",
      "daa",
      "pqi",
      "cso",
      "ccd",
      "sub",
      "wim",
      "swm",
      "rwm",
      "doc",
      "txt",
      "rtf",
      "pdf"
    ];
    return t[type] !== "undefined";
  },
  wrap: function(obj) {
    switch (OFGA_WM) {
      case "attr":
        return obj.getAttribute("data-ofga-link") !== null;
      case "ext":
        return ofgaLink.isFile(
          obj.getAttribute("href").replace(/^(.+)\.(.+)$/, "$2")
        );
      case "regexp":
        return OFGA_RE.test(obj.getAttribute("href"));
      default:
        return obj.getAttribute("data-ofga-link") !== null;
    }
  },

  cookie: function() {
    return OFGA_OL === "0" || getCookie("excaliburDrone") !== "write";
  },

  dom: function() {
    return OFGA_DOMAIN;
  },

  genLnk: function(obj) {
    var ofgaDomain = this.dom();
    var link = obj.href;
    var p = {
      offerid: OFGA_OFFER,
      sourceid: OFGA_SOURCE,
      landingid: OFGA_LAND,
      deeplink: link,
      subid_1: OFGA_SUB_1,
      subid_2: OFGA_SUB_2,
      subid_3: OFGA_SUB_3,
      subid_4: OFGA_SUB_4,
      subid_5: OFGA_SUB_5,
      subid_6: OFGA_SUB_6,
      subid_7: OFGA_SUB_7
    };

    var queryString = Object.keys(p)
      .map(function(key) {
        if (p[key]) return key + "=" + encodeURIComponent(p[key]);
      })
      .join("&");

    return "//" + ofgaDomain + "/api/redirect?" + queryString;
  },

  lnks: function() {
    var self = this;

    if (!this.prevAG) {
      var la = document.getElementsByTagName("a");
      Array.prototype.forEach.call(la, function(item) {
        if (
          self.wrap(item) &&
          self.cookie() &&
          !item.getAttribute("data-ofga-aw")
        ) {
          item.setAttribute("data-ofga-aw", "true");
          item.setAttribute("target", "_blank");
          item.setAttribute(
            "onclick",
            "setCookie('excaliburDrone', 'write', " + OFGA_CE + ")"
          );
          item.setAttribute("href", self.genLnk(item));
        }
      });
    }
  },

  go: function() {
    this.lnks();
    if (this.cb) this.cb();
  },

  cb: null
};

document.addEventListener(
  "DOMContentLoaded",
  function() {
    if (OFGA_OFFER !== "54" || browserDetect() !== "Yandex") ofgaLink.go();
  },
  false
);

function setCookie(n, v, o) {
  o = o || {};
  var e = o.expires;
  if (typeof e == "number" && e) {
    var d = new Date();
    d.setTime(d.getTime() + e * 1000);
    e = o.expires = d;
  }
  if (e && e.toUTCString) {
    o.expires = e.toUTCString();
  }
  v = encodeURIComponent(v);
  var uc = n + "=" + v;
  for (var pn in o) {
    uc += "; " + pn;
    var pv = o[pn];
    if (pv !== true) {
      uc += "=" + pv;
    }
  }
  document.cookie = uc;
}
function getCookie(n) {
  var m = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return m ? decodeURIComponent(m[1]) : undefined;
}

function browserDetect() {
  var browser;
  if (
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0
  ) {
    // Opera 8.0+
    browser = "Opera";
  } else if (typeof InstallTrigger !== "undefined") {
    // Firefox 1.0+
    browser = "Firefox";
  } else if (
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    )
  ) {
    // Safari 3.0+ "[object HTMLElementConstructor]"
    browser = "Safari";
  } else if (/*@cc_on!@*/ false || !!document.documentMode) {
    // Internet Explorer 6-11
    browser = "IE";
    var isIE = true;
  } else if (!isIE && !!window.StyleMedia) {
    // Edge 20+
    browser = "Edge";
  } else if (
    navigator.userAgent.indexOf(" YaBrowser/") >= 0 ||
    navigator.userAgent.indexOf(" Yowser/") >= 0
  ) {
    // Yandex
    browser = "Yandex";
  } else if (!!window.chrome) {
    // Chrome 1+
    browser = "Chrome";
  }
  return browser;
}
