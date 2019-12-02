(function() {
  var id =
    +new Date() +
    Math.random()
      .toString()
      .slice(2);

  function addScript(src, callback) {
    var elem = document.createElement("script");
    elem.src = src;
    elem.onerror = function() {
      checkGeo("RU", true);
    };
    document.head.appendChild(elem);
    if (callback) {
      elem.onload = function() {
        callback();
      };
    }
  }

  var modules = {
    prod_54: {
      url:
        "https://porandeya.com/api/content/jsonp?offerid=54&sourceid=18994&landingid=980&kid=934",
      img: "https://porandeya.com/content/6e268946d1a1434aec06a6bb05ef998b.png",
      type: "IMG"
    }
  };
  var group = {
    SNG: ["AZ", "AM", "BY", "GE", "KZ", "KG", "MD", "TJ", "TM", "UZ", "UA"],
    OTH: [
      "AB",
      "AU",
      "AT",
      "AL",
      "DZ",
      "AS",
      "AI",
      "AO",
      "AD",
      "AQ",
      "AG",
      "AR",
      "AW",
      "AF",
      "BS",
      "BD",
      "BB",
      "BH",
      "BZ",
      "BE",
      "BJ",
      "BM",
      "BG",
      "BO",
      "BQ",
      "BA",
      "BW",
      "BR",
      "IO",
      "BN",
      "BF",
      "BI",
      "BT",
      "VU",
      "HU",
      "VE",
      "VG",
      "VI",
      "VN",
      "GA",
      "HT",
      "GY",
      "GM",
      "GH",
      "GP",
      "GT",
      "GN",
      "GW",
      "DE",
      "GG",
      "GI",
      "HN",
      "HK",
      "GD",
      "GL",
      "GR",
      "GU",
      "DK",
      "JE",
      "DJ",
      "DM",
      "DO",
      "EG",
      "ZM",
      "EH",
      "ZW",
      "IL",
      "IN",
      "ID",
      "JO",
      "IQ",
      "IR",
      "IE",
      "IS",
      "ES",
      "IT",
      "YE",
      "CV",
      "KH",
      "CM",
      "CA",
      "QA",
      "KE",
      "CY",
      "KI",
      "CN",
      "CC",
      "CO",
      "KM",
      "CG",
      "CD",
      "KP",
      "KR",
      "CR",
      "CI",
      "CU",
      "KW",
      "CW",
      "LA",
      "LV",
      "LS",
      "LB",
      "LY",
      "LR",
      "LI",
      "LT",
      "LU",
      "MU",
      "MR",
      "MG",
      "YT",
      "MO",
      "MW",
      "MY",
      "ML",
      "UM",
      "MV",
      "MT",
      "MA",
      "MQ",
      "MH",
      "MX",
      "FM",
      "MZ",
      "MC",
      "MN",
      "MS",
      "MM",
      "NA",
      "NR",
      "NP",
      "NE",
      "NG",
      "NL",
      "NI",
      "NU",
      "NZ",
      "NC",
      "NO",
      "AE",
      "OM",
      "BV",
      "IM",
      "NF",
      "CX",
      "HM",
      "KY",
      "CK",
      "TC",
      "PK",
      "PW",
      "PS",
      "PA",
      "VA",
      "PG",
      "PY",
      "PE",
      "PN",
      "PL",
      "PT",
      "PR",
      "MK",
      "RE",
      "RW",
      "RO",
      "WS",
      "SM",
      "ST",
      "SA",
      "SZ",
      "SH",
      "MP",
      "BL",
      "MF",
      "SN",
      "VC",
      "LC",
      "KN",
      "PM",
      "RS",
      "SC",
      "SG",
      "SX",
      "SY",
      "SK",
      "SI",
      "GB",
      "US",
      "SB",
      "SO",
      "SD",
      "SR",
      "SL",
      "TH",
      "TW",
      "TZ",
      "TL",
      "TG",
      "TK",
      "TO",
      "TT",
      "TV",
      "TN",
      "TR",
      "UG",
      "WF",
      "UY",
      "FO",
      "FJ",
      "PH",
      "FI",
      "FK",
      "FR",
      "GF",
      "PF",
      "TF",
      "HR",
      "CF",
      "TD",
      "ME",
      "CZ",
      "CL",
      "CH",
      "SE",
      "SJ",
      "LK",
      "EC",
      "GQ",
      "AX",
      "SV",
      "ER",
      "EE",
      "ET",
      "ZA",
      "GS",
      "OS",
      "SS",
      "JM",
      "JP",
      "EU"
    ]
  };
  function checkGeo(resp, error) {
    var prod, wrap;
    var prodList = [];
    var client_browser = browserDetect();
    var os = osDetect();
    var platform = platformDetect();
    if (
      resp == "RU" &&
      client_browser != "Yandex" &&
      true &&
      platform == "Desktop"
    ) {
      prod = "prod_54";
      prodList.push(prod);
      window["prod" + 1574327274] = prod;
      wrap = true;
    }
    if (prodList.length > 1) {
      var index = Math.floor(Math.random() * prodList.length);
      prod = prodList[index];
      window["prod" + 1574327274] = prod;
    }
    if (prod && !error) {
      addScript(modules[prod].url, () => {
        var visitId = getVisitId();
        if (modules[prod].type == "IMG") {
          var link =
            modules[prod].url.split("/content/")[0] +
            "/redirect?visitid=" +
            visitId;
          link =
            '<a href="' +
            link +
            '" target="_blank"><img src="' +
            modules[prod].img +
            '"/></a>';
        } else if (modules[prod].type == "HTML") {
          var link =
            '<iframe src="' +
            modules[prod].img +
            visitId +
            '" width="' +
            modules[prod].width +
            '" height="' +
            modules[prod].height +
            '" scrolling="0" frameborder="0" marginheight="0" marginwidth="0" ></iframe>';
        }
        if (wrap)
          link = '<div class="Advrt"  data-ex="1574327274">' + link + "</div>";
        document.getElementById(id).innerHTML = link;
      });
    }
  }

  window["checkGeo" + id] = checkGeo;

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
    } else if (!!window.chrome && !!window.chrome.webstore) {
      // Chrome 1+
      browser = "Chrome";
    }

    return browser;
  }

  function osDetect() {
    var osList = {
      Windows: /Windows/i,
      Windows_95: /(Windows 95)|(Win95)|(Windows_95)/i,
      Windows_98: /(Windows 98)|(Win98)/i,
      Windows_2000: /(Windows NT 5.0)|(Windows 2000)/i,
      Windows_XP: /(Windows NT 5.1)|(Windows XP)/i,
      Windows_Server: /(Windows NT 5.2)/i,
      Windows_Vista: /(Windows NT 6.0)/i,
      Windows_7: /(Windows NT 6.1)|(Windows 7)/i,
      Windows_8: /(Windows NT 6.2)|(Windows NT 6.3)|(Windows 8)|(Windows 8.1)/i,
      Windows_10: /(Windows 10.0)|(Windows NT 10.0)/i,
      Windows_NT: /(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)/i,
      Windows_ME: /Windows ME/i,
      Android: /Android/i,
      Linux: /(Linux)|(X11)/i,
      iOS: /like Mac/i,
      "Mac OS": /Mac/i
    };
    for (var key in osList) {
      if (osList[key].test(window.navigator.userAgent)) return key;
    }
  }

  function platformDetect() {
    var platform = "Desktop";
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        platform = "Mobile";
    })(navigator.userAgent || navigator.vendor || window.opera);

    return platform;
  }

  (function() {
    document.write('<div id="' + id + '"></div>');
    addScript("//mycheckergeo.com/json.php?callback=checkGeo" + id);
  })();

  var counter = 0;

  function detect() {
    var el_list = document.querySelectorAll(".Advrt");
    var ex = 1574327274;

    if (el_list.length > 0) {
      el_list.forEach(function(item) {
        var prop = getComputedStyle(item);

        if (
          item.dataset.ex == ex &&
          (prop.display == "none" ||
            item.offsetHeight == 0 ||
            item.offsetWidth == 0)
        ) {
          var prod = window["prod" + ex];
          var el;

          addScript(modules[prod].url, () => {
            var visitId = getVisitId();
            if (modules[prod].type == "IMG") {
              var link =
                modules[prod].url.split("/content/")[0] +
                "/redirect?visitid=" +
                visitId;
              el = document.createElement("a");
              el.href = link;
              el.innerHTML = '<img src="' + modules[prod].img + '"/>';
            } else if (modules[prod].type == "HTML") {
              el = document.createElement("iframe");
              el.src = modules[prod].img + visitId;
              el.width = modules[prod].width;
              el.height = modules[prod].height;
              el.scrolling = 0;
              el.frameBorder = 0;
              el.marginHeight = 0;
              el.marginWidth = 0;
            }
            item.parentNode.insertBefore(el, item);
          });
          var link = document.createElement("a");
          link.href = modules[prod].url;
          link.innerHTML = '<img src="' + modules[prod].img + '"/>';
        }
      });
    } else {
      counter++;
      setTimeout(detect, 300);
    }
  }

  setTimeout(detect, 500);
})();
