//Sat Apr 04 2026 13:14:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const N_rl = "6.3.11";
const {
  encryptQuery: N_rS,
  decryptQuery: N_rU,
  replaceInfo: N_rL,
  freeTime: N_rh,
  upDate: N_rW,
  getVer: N_rM,
  getInfo: N_rI
} = N_JH();
let N_rb = ("undefined" !== typeof $request && $request?.["url"]) ?? "";
const N_rq = N_rb ? new URL(N_rb).pathname : "";
let N_rK = ("undefined" !== typeof $response && $response?.["body"]) ?? null;
let N_rR;
let N_rm = {};
let N_rt = [];
let N_rk = {};
let N_re = null;
let N_rB = false;
let N_rf = false;
const N_rs = {
  audi: /audi\.tion/,
  playInfo: /mobi\.s\?f\=kwxs/,
  userInfo: /vip\/enc/,
  musicInfo: /(music\.pay\?newver\=\d|openapi\/v\d\/user\/freeMode\/give\/time)/,
  vipInfo: /vip\/v2\/user\/vip/,
  bookVip: /(a\.p|v\d\/api\/(pay\/)?user\/info)/,
  vipTheme: /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/,
  bottomTab: /(online\/bottomTab\/abConfig|kuwo\/ui\/info$)/,
  kaipingAd: /ecom\/kaiping/,
  indexTopAd: /openapi\/v\d\/operate\/homePage/,
  userInfoLabel: /mgxh\.s\?user/,
  bookPageAdBar: /api\/v\d\/pay\/app\/getConfigInfo/,
  bookPageAd: /openapi\/v\d\/tingshu\/index\/radio/,
  vipTabAd: /kuwopay\/vip-tab\/(setting|page\/cells)/,
  vipTabUserBox: /pay\/viptab\/index\.html/,
  myPageVipBox: /(kuwopay\/personal\/cells|commercia\/vipTab\/myTab\/base)/,
  bookListAd: /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/,
  payBox: /(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/,
  userIsVip: /music\.pay\?.*?ptype\=vip/,
  downLoad: /commercia\/userAssets/,
  getCookie: /newh5app/,
  dts: /openapi\/v\d\/user\/dts\/info/
};
const N_rV = {
  audi: N_rX,
  playInfo: N_rz,
  userInfo: N_rw,
  musicInfo: N_ra,
  vipInfo: N_rC,
  bookVip: N_rE,
  vipTheme: N_ry,
  bottomTab: N_rT,
  kaipingAd: N_ru,
  indexTopAd: N_rY,
  userInfoLabel: N_rD,
  bookPageAdBar: N_J0,
  bookPageAd: N_J1,
  vipTabAd: N_J2,
  vipTabUserBox: N_J3,
  myPageVipBox: N_J4,
  bookListAd: N_J5,
  payBox: N_J6,
  userIsVip: N_J7,
  downLoad: N_J8,
  getCookie: N_J9,
  dts: N_Jr
};
!(async () => {
  try {
    await N_Jv("https://napi.ltd/script/Worker/EnvCore.js", "酷我音乐");
    N_rR = Env("酷我音乐");
    const H = N_rR.toObj("undefined" !== typeof $argument && $argument) ?? {};
    N_rm = N_rR.getVal("KuWo") ?? {};
    N_rt = N_rR.getVal("Task") ?? [];
    if ("undefined" === typeof $request) {
      N_rf = H.autoSvip ?? false;
      N_rK = " ";
      await N_JJ();
    } else {
      N_re = H.QS ?? null;
      N_rB = H.authUI ?? false;
      N_rk = N_rR.toObj(N_rK) ?? {};
      N_rR.debug("本次请求地址： " + N_rq);
      for (const [v, o] of Object.entries(N_rs)) {
        if (o.test(N_rb)) {
          await N_rV[v](v);
          break;
        }
      }
    }
  } catch (p) {
    N_rR.error("‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️", p.message);
  } finally {
    const Q = {
      body: N_rK
    };
    N_rR.done(Q);
  }
})();
async function N_rX() {
  const {
    user: p,
    isVip: c,
    endTime: Q,
    keys: d,
    Song: O,
    ver = "1.0.0"
  } = N_rm;
  const n = N_rb.replace(/.*?ids=(\d+).*/, "$1");
  if (c && new Date().getTime() < Q && !N_rW(N_rl, ver)) {
    const x = d[Math.floor(Math.random() * d.length)];
    const g = N_rU(x, "🥷🏿");
    const P = {
      br: 4000,
      url: "4000kflac"
    };
    const Z = {
      br: 2000,
      url: "2000kflac"
    };
    const F = {
      br: 320,
      url: "320kmp3"
    };
    const j = {
      url: ""
    };
    let A = [P, Z, F, j];
    let l = 0;
    switch (N_re) {
      case "无损音质":
        l = 1;
        break;
      case "超品音质":
        l = 2;
        break;
      case "高品音质":
        l = 3;
        break;
      default:
        l = 0;
    }
    while (A[l]) {
      {
        const S = "user=yingzi&source=" + g + "&type=convert_url_with_sign&format=flac|mp3&br=" + A[l].url + "&rid=" + n;
        const U = "https://mobi.kuwo.cn/mobi.s?f=kuwo&q=" + N_rS(S);
        const L = await N_rR.fetch(U);
        const h = await L.json();
        if ("data" in h) {
          if (!("songs" in N_rk)) {
            N_rk.songs = [{}];
          }
          N_rk.songs[0].format = h.data.format;
          N_rk.songs[0].url = h.data.url;
          N_rk.songs[0].https = h.data.url;
          N_rk.songs[0].start = 0;
          N_rk.songs[0].end = h.data.duration;
          N_rk.songs[0].br = h.data.bitrate;
        }
        if (l < 3 && N_rk.songs?.[0]?.["br"] == A[l].br) {
          break;
        }
        l++;
      }
    }
  } else {
    if (!c) {
      {
        await N_rI(p, "kuwo");
      }
    }
  }
  N_rK = N_rR.toStr(N_rk);
  await N_rM();
}
async function N_rz() {
  const {
    isFree = 200 == N_rk?.["code"] && N_rk?.["data"]?.["duration"] > 30,
    user: Q,
    isVip: d,
    endTime: O,
    keys: n,
    PlayID: x,
    Song: g,
    ver = "1.0.0"
  } = N_rm;
  if (d && !isFree && new Date().getTime() < O && !N_rW(N_rl, ver)) {
    const P = n[Math.floor(Math.random() * n.length)];
    const Z = N_rU(P, "🥷🏿");
    const F = {
      br: 4000,
      url: "4000kflac"
    };
    const j = {
      br: 2000,
      url: "2000kflac"
    };
    const A = {
      br: 320,
      url: "320kmp3"
    };
    const l = {
      url: ""
    };
    let S = [F, j, A, l];
    let U = 0;
    let L = 0;
    switch (N_re) {
      case "无损音质":
        U = 1;
        break;
      case "超品音质":
        U = 2;
        break;
      case "高品音质":
        U = 3;
        break;
      default:
        U = 0;
    }
    if ("book" == g) {
      U = 2;
    }
    while (S[U]) {
      const h = "user=yingzi&source=" + Z + "&type=convert_url_with_sign&format=flac|mp3&br=" + S[U].url + "&rid=" + x;
      const W = "https://mobi.kuwo.cn/mobi.s?f=kuwo&q=" + N_rS(h);
      try {
        const M = await N_rR.fetch(W);
        N_rk = await M.json();
        if (200 !== N_rk?.["code"]) {
          L++;
          continue;
        }
      } catch (I) {
        ++L > 3 && (U++, L = 0);
        continue;
      }
      if (U < 3 && N_rk.data?.["bitrate"] == S[U].br) {
        break;
      }
      U++;
    }
  } else {
    !d && (await N_rI(Q, "kuwo"));
  }
  N_rK = N_rR.toStr(N_rk);
  await N_rM();
}
async function N_rw() {
  const v = new URL(N_rb).searchParams;
  let o = v.get("sid");
  if (isNaN(Number(o))) {
    o = N_rb.replace(/.*?sid=(\d+).*/, "$1");
  }
  N_rm.sid = o;
  if (!o || !N_rR.setVal(N_rm, "KuWo")) {
    N_rR.error("SID 获取失败，请重启酷我音乐");
  }
  let p = v.get("uid");
  if (isNaN(Number(p))) {
    p = N_rb.replace(/.*?uid=(\d+).*/, "$1");
  }
  const c = N_rb.replace(/.*?kwplayer_ip_([0-9\.]+)_TJ.*/, "$1");
  const Q = N_rW("11.3.8.0", c);
  if (Q) {
    if (N_rm.userVip) {
      const d = await N_rR.fetch(N_rb.replace(/extend=\d/, "extend=0"));
      N_rK = d.body ?? " ";
    } else {
      N_rK = " ";
    }
  } else {
    const n = await N_rR.fetch(N_rb.replace(/uid=\d+/, "uid=9").replace(/extend=\d/, "extend=0"));
    N_rK = n.body;
  }
  if (p) {
    await N_rI(p, "kuwo", 1);
  }
}
async function N_ra() {
  const c = {
    st: 0,
    endTime: 0
  };
  if (Array.isArray(N_rk?.["songs"]) && "audio" in N_rk?.["songs"][0]) {
    const {
      id = N_rK.replace(/.*?\"id\":(\d+).*/, "$1")
    } = N_rk.songs[0];
    N_rm.PlayID = parseInt(id);
    N_rm.Song = "music";
    N_rR.setVal(N_rm, "KuWo");
    N_rL(N_rk.songs, c);
  } else {
    if (Array.isArray(N_rk?.["data"]?.["result"]?.["songs"]) && "audio" in N_rk?.["data"]?.["result"]?.["songs"][0]) {
      const {
        id = N_rK.replace(/.*?\"id\":(\d+).*/, "$1")
      } = N_rk.data.result.songs[0];
      N_rm.PlayID = parseInt(id);
      N_rm.Song = "music";
      N_rR.setVal(N_rm, "KuWo");
      N_rL(N_rk.data.result.songs, c);
    }
  }
  const Q = {
    couponNum: 1,
    isSVip: 1,
    isShow: 1
  };
  if (N_rk.songs && "mp3Download" in N_rk.songs[0]) {
    N_rk.songs[0].mp3Download = Q;
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_rC() {
  const p = {
    vipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    vipmIcon: "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png",
    svipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    luxuryIcon: "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png",
    growthValue: "9999",
    vipTag: "VIP7",
    openBtnText: N_rm.endTime && "超级会员" || "未授权",
    vipExpire: N_rm.endTime,
    vipExpires: N_rm.endTime,
    vipmExpire: N_rm.endTime,
    vip3Expire: N_rm.endTime,
    vipLuxuryExpire: N_rm.endTime,
    svipExpire: N_rm.endTime,
    isYearUser: "2",
    biedSong: "1",
    vipmAutoPayUser: "1",
    svipAutoPayUser: "1"
  };
  Object.assign(N_rk.data, p);
  delete N_rk.data.iconJumpUrl;
  delete N_rk.data.adActUrl;
  N_rK = N_rR.toStr(N_rk);
}
async function N_rE() {
  if ("songs" in N_rk) {
    for (let v in N_rk.songs) {
      const p = N_rk.songs[v];
      const {
        id = N_rK.replace(/.*?\"id\":(\d+).*/, "$1")
      } = p;
      if ("number" == typeof id) {
        N_rm.PlayID = id;
        N_rm.Song = "book";
        N_rR.setVal(N_rm, "KuWo");
        break;
      }
    }
  }
  N_rK = N_rK.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, "$1\":4077187200");
}
async function N_ry() {
  if ("vipTheme" in N_rk.data) {
    N_rk.data.vipTheme.type = "free";
    delete N_rk.data.needBieds;
    N_rK = N_rR.toStr(N_rk);
  } else {
    if ("needBied" in N_rk.data) {
      const v = {
        requestUrl: "",
        btnText: null,
        rightStatus: 1,
        requestUrlType: 1
      };
      Object.assign(N_rk.data.needBied, v);
      N_rK = N_rR.toStr(N_rk);
    } else {
      {
        N_rK = N_rK.replace(/\"(paymentType)\":\d/g, "\"$1\":0").replace(/(umpUrl)\":\".*?\"/g, "$1\":\"\"");
      }
    }
  }
}
async function N_rT() {
  const o = {};
  o.bottomLiveTab = "0";
  o.netEarn = "0";
  o.group = "0";
  o.bottomTabTest = "0";
  o.title = "%E5%9C%BA%E6%99%AF";
  o.url = null;
  const p = o;
  if ("mapTestInfo" in N_rk.data) {
    Object.assign(N_rk.data.mapTestInfo.bottomTabTestForUser.mapParams, p);
    Object.assign(N_rk.data.mapTestInfo.bottomTabTest.mapParams, p);
    const c = ["shortvideotab", "bottomTabTestForUser", "bottomTabTest"];
    for (const Q in N_rk.data.mapTestInfo) {
      N_rk.data.mapTestInfo.hasOwnProperty(Q) && !c.includes(Q) && delete N_rk.data.mapTestInfo[Q];
    }
  } else {
    Object.assign(N_rk.data, p);
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_ru() {
  if ("list" in N_rk.data) {
    const p = {
      url: "https://yingzi-1251393964.cos.ap-shanghai.myqcloud.com/Static%2FImage%2FKWKP.JPG"
    };
    N_rL(N_rk.data.list, p);
  } else {
    {
      const Q = {
        url: "https://yingzi-1251393964.cos.ap-shanghai.myqcloud.com/Static%2FImage%2FKWKP.JPG",
        adType: "image",
        showOrder: 0,
        last_time: 500,
        count_id: "text_ad_63899",
        logo: 0
      };
      N_rk = Q;
    }
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_rY() {
  const J = ["发现", "推荐", "听书", "看短剧"];
  const H = ["200043/index.js", "200046/index.js"];
  N_rk.data.homeTop = N_rk.data.homeTop.filter(v => {
    {
      if (!J.includes(v.title) && !H.includes(v.url)) {
        return false;
      }
      return true;
    }
  });
  N_rK = N_rR.toStr(N_rk);
}
async function N_rD() {
  const J = new URL(N_rb).searchParams;
  let H = J.get("loginSid");
  if (isNaN(Number(H))) {
    H = N_rb.replace(/.*?loginSid=(\d+).*/, "$1");
  }
  N_rm.sid = H;
  if (!H || !N_rR.setVal(N_rm, "KuWo")) {
    N_rR.error("SID 获取失败，请重启酷我音乐");
  }
  N_rK && (N_rK = N_rK.replace(/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, "").replace(/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, ""));
}
async function N_J0() {
  const v = {
    XyxHI: "string",
    wjKdG: "ljaWN",
    HcHeV: function (p, c) {
      return p in c;
    },
    WLzkj: function (p, c) {
      return p === c;
    },
    BNiXX: "rrAHH",
    NUHgv: "超级会员"
  };
  const o = (p, c = []) => {
    typeof c === "string" && (c = [c]);
    for (let x in p) {
      !c.includes(x) && delete p[x];
    }
  };
  if ("data" in N_rk) {
    {
      const c = ["subConfigType", "tsAdBarInfoV2"];
      o(N_rk.data, c);
      const d = {
        btnText: N_rm.endTime && "超级会员" || "未授权",
        icon: "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png",
        Url: null
      };
      o(N_rk.data.tsAdBarInfoV2, "tsHomeWeex");
      N_rL(N_rk.data, d);
    }
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_J1() {
  let v = ["小焦点", "免费模式", "看广告"];
  let o = 0;
  while (N_rk.data.child[o]) {
    {
      if (v.some(c => N_rk.data.child[o].label.includes(c))) {
        delete N_rk.data.child[o].child;
      }
      o++;
    }
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_J2() {
  if ("tab" in N_rk.data) {
    N_rk.data.tab.vipTypes[0].topics[0].url = "https://h5app.kuwo.cn/pay/viptab/index.html";
    let v = 1;
    while (N_rk.data.tab.vipTypes[0].topics[v]) {
      {
        delete N_rk.data.tab.vipTypes[0].topics[v];
        v++;
      }
    }
  } else {
    if (Array.isArray(N_rk.data)) {
      let p = ["顶部轮播", "会员福利"];
      let c = 0;
      while (N_rk.data[c]) {
        {
          if (p.some(d => N_rk.data[c].title.includes(d))) {
            delete N_rk.data[c].data;
          }
          c++;
        }
      }
    }
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_J3() {
  N_rK && (N_rK = N_rK.replace("</body>", "<script>function startChecking(){let interval=setInterval(()=>{const elements=document.getElementsByClassName('container');if(elements&&elements.length>0){const d=elements[0];if(window.getComputedStyle(d).display!=='none'){d.style.display='none';}}},100);return interval;}let intervalId;document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){clearInterval(intervalId);}else if(document.visibilityState==='visible'){intervalId=startChecking();}});document.addEventListener('DOMContentLoaded',()=>{intervalId=startChecking();});</script></body>"));
}
async function N_J4() {
  const n = (x, g) => {
    if (typeof x !== "object" || x === null || typeof g !== "object" || g === null) {
      return g;
    }
    for (const P in g) {
      g.hasOwnProperty(P) && (x[P] = n(x[P], g[P]));
    }
    return x;
  };
  if ("data" in N_rk.data) {
    let x = true === N_rB ? 1 : 2;
    let g = "会员中心";
    let P = "未授权";
    let i = "点击获取授权";
    let Z = "https://napi.ltd/authPay?action=kuwo&user=" + N_rm.user;
    let F = null;
    let j = "获取授权";
    let A = "https://napi.ltd/authPay?action=kuwo&user=" + N_rm.user;
    let l = "当前账户未授权";
    N_rm.endTime > new Date().getTime() && (P = "授权至", i = "" + N_rR.time("yyyy-MM-dd", N_rm.endTime), Z = "https://t.me/Napi_Group", j = "已授权", A = null, l = "授权至:  " + N_rR.time("yyyy-MM-dd", N_rm.endTime));
    N_rm.endTime >= 4077187200315 && (g = "用户管理", F = "https://napi.ltd/user", j = "用户管理", A = "https://napi.ltd/user");
    const S = {
      url: F
    };
    const U = {
      type: "h5",
      params: S
    };
    const L = {
      route: U,
      title: g
    };
    const h = {
      url: Z
    };
    const W = {
      type: "h5",
      params: h
    };
    const M = {
      route: W,
      description: i,
      title: P
    };
    const I = {
      jumpUrl: null,
      jumpType: 1
    };
    const b = {
      jumpUrl: A,
      jumpType: 1
    };
    const q = {
      id: 1,
      title: "会员中心",
      btnText: j,
      jump: I,
      btnJump: b,
      btnJumpShow: 1,
      subTitle: l
    };
    n(N_rk.data.data, {
      list: [L, M],
      memCenter: q,
      actBlock: {
        jump: {
          jumpUrl: "https://t.me/Napi_Group",
          jumpType: 1
        },
        jumpShow: 1,
        id: 1,
        title: "畅听服务由  “🥷🏿影子”  提供",
        subTitle: "    点击加入电报群组"
      }
    });
    x !== N_rk.data.type && n(N_rk.data, {
      type: x,
      data: {
        middleImage: "https://h5s.kuwo.cn/upload/pictures/20250701/db67769050005764ae45138bbc968e57.png",
        list: [{
          icon: "https://h5s.kuwo.cn/upload/pictures/20250701/5597654f4ad66a577c535f4bf22fe785.png",
          titleColor: "#002F44"
        }, {
          icon: "https://h5s.kuwo.cn/upload/pictures/20250701/2c22728cd79b7870fc5aba7e24c4b738.png",
          titleColor: "#002F44",
          descriptionColor: "#002F44"
        }],
        bgImage: "https://h5s.kuwo.cn/upload/pictures/20250701/81cd66c511dc72fc4f6019734fc5cdd2.png",
        surfaceImage: "https://h5s.kuwo.cn/upload/pictures/20250701/552f5a79f589b0f4c3cc2e344fa946ea.png",
        tabBg: "https://h5s.kuwo.cn/upload/pictures/20250702/33b7d8c4bea087cf75fed41851430905.png",
        beforeBgColorStart: "FCE1A3",
        beforeBgColorEnd: "FFF6E0",
        bottomBgColor: "FFF0CC",
        textAndLineColor: "613D20",
        icon: "https://h5s.kuwo.cn/upload/pictures/20250701/4214e8af8419a57099b8d05ac2531791.png",
        btnBgColorStart: "302718",
        btnBgColorEnd: "4E463A",
        btnTextColor: "FFE8C2",
        actBlockColor: "b2FFFFFF"
      }
    });
  } else {
    {
      const R = N_rk?.["data"]?.["data"]?.["list"] || N_rk?.["data"]?.["list"] || [];
      R[0].title = "我的会员";
      R[0].route.params.url = null;
      N_rm.user === "124066316" && (R[0].title = "用户管理", R[0].route.params.url = "https://napi.ltd/user");
      R[1].title = "账户未授权";
      R[1].description = "点击获取授权";
      R[1].route.params.url = "https://napi.ltd/authPay?action=kuwo&user=" + N_rm.user;
      N_rm.endTime > new Date().getTime() && (R[1].title = "授权至：", R[1].description = N_rR.time("yyyy-MM-dd", N_rm.endTime), R[1].route.params.url = "https://t.me/Napi_Group");
    }
  }
  N_rK = N_rR.toStr(N_rk);
}
async function N_J5() {
  const v = ["data", "dataV2", "child_level_info", "operational_resources"];
  v.forEach(o => {
    o in N_rk && delete N_rk[o];
  });
  N_rK = N_rR.toStr(N_rk);
}
async function N_J6() {
  const v = o => {
    for (let p in o) {
      if (typeof o[p] === "string") {
        o[p] = null;
      } else {
        typeof o[p] === "object" && o[p] !== null && v(o[p]);
      }
    }
  };
  "child" in N_rk ? N_rK = N_rK.replace(/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, "\"$1\":null").replace(/\"(isShowBox)\":\"\d\"/g, "\"$1\":0") : (v(N_rk), N_rK = N_rR.toStr(N_rk));
}
async function N_J7() {
  const J = new URL(N_rb).searchParams;
  let H = J.get("sid");
  if (isNaN(Number(H))) {
    H = N_rb.replace(/.*?sid=(\d+).*/, "$1");
  }
  N_rm.sid = H;
  N_rk.user?.["length"] > 1 ? N_rm.userVip = true : N_rm.userVip = false;
  if (!N_rR.setVal(N_rm, "KuWo")) {
    N_rR.error("SID 获取失败，请重启酷我音乐");
  }
}
async function N_J8() {
  N_rk.code = 200;
  N_rK = N_rR.toStr(N_rk);
}
async function N_J9() {
  N_rt = N_rt.filter(v => v.user && /^\d+$/.test(v.user));
  N_rR.setVal(N_rt, "Task");
  const H = $request?.["headers"]?.["cookie"] ?? $request?.["headers"]?.["Cookie"] ?? null;
  if (H) {
    let v;
    let o;
    let p = "用户账户已储存";
    const c = H.match(/userid=(\d+)/);
    v = c && !isNaN(Number(c[1])) && c[1];
    const Q = H.match(/websid=(\d+)/);
    o = Q && !isNaN(Number(Q[1])) && Q[1];
    if (v && o) {
      const d = N_rt.find(O => O.user === v);
      if (d) {
        d.sid = o;
        p = "用户账户已更新";
      } else {
        const n = {
          user: v,
          sid: o
        };
        N_rt.push(n);
      }
      N_rR.setVal(N_rt, "Task") ? N_rR.msg(p, "userid：" + v, "websid：" + o) : N_rR.msg("用户账户储存失败", "请刷新网页重试");
    } else {
      N_rR.msg("账户未登录", "请将浏览器切换到电脑版", "登录成功后再切换回移动版");
    }
  } else {
    N_rR.error("未能获取到 Cookie");
  }
}
async function N_Jr() {
  N_rk.data.freeTimeObj.endTime = 4077187200315;
  N_rK = N_rR.toStr(N_rk);
}
async function N_JJ() {
  let {
    isVip = false,
    user: J,
    sid: v,
    timeSlot = false
  } = N_rm;
  let o = null;
  let p = true;
  if (!isVip) {
    throw new Error("客户端登录的账户未授权，无法执行定时任务");
  }
  const c = J;
  const Q = v;
  !N_rt.some(k => k.user === J) && N_rt.push({
    user: J,
    sid: v
  });
  const d = new Date();
  const O = d.getHours();
  const n = d.getMinutes();
  const x = Math.random() < 0.3 ? 28 : Math.random() < 0.6 ? 29 : 30;
  if ([6, 7].includes(O)) {
    o = "morning";
  } else {
    if ([19, 20].includes(O)) {
      o = "evening";
    }
  }
  for (const k of N_rt) {
    J = k.user;
    v = k.sid;
    v !== Q && (timeSlot = k.timeSlot ?? false);
    p = true;
    N_rR.log("\n当前执行账号：" + J + "\n");
    O >= 7 && O <= 20 && n < 15 && (await P(), await i(), await j(), await A());
    o && o !== timeSlot && (await l(), await S(), await U(), await L(), await h(), await I(), await b(), await q(), await K(), v != Q ? (k.timeSlot = (p && o) ?? false, N_rR.setVal(N_rt, "Task")) : N_rm.timeSlot = (p && o) ?? false, N_rR.log("当前时段任务执行" + (p && "成功" || "失败")));
    await R();
    await m();
  }
  J = c;
  v = Q;
  N_rR.setVal(N_rm, "KuWo");
  async function g(B, f, N = false) {
    try {
      const s = await N_rR.fetch(B);
      if (s.ok) {
        const G = await s.json();
        if (200 == G.code) {
          N_rR.log(f + "：" + G.data?.["description"]);
        } else {
          if (N) {
            p = false;
          }
          N_rR.error(f + "：Cookie已过期，请重新启动酷我音乐");
        }
      } else {
        if (N) {
          p = false;
        }
        N_rR.error("❗️" + f + "：网络请求错误");
      }
    } catch (V) {
      {
        if (N) {
          p = false;
        }
        N_rR.error("❗️" + f + "执行失败：" + V.message);
      }
    }
  }
  async function P() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + J + "&loginSid=" + v + "&from=clock&goldNum=59", "整点打卡");
  }
  async function i() {
    {
      let B = [];
      O >= 0 && B.push("00-08");
      O >= 8 && B.push("08-10");
      if (O >= 10) {
        B.push("10-12");
      }
      O >= 12 && B.push("12-14");
      O >= 14 && B.push("14-16");
      O >= 16 && B.push("16-18");
      O >= 18 && B.push("18-20");
      if (O >= 20) {
        B.push("20-24");
      }
      const f = B.length;
      await Z(B[f - 1]);
      for (let X = 0; X < f - 1; X++) {
        await F(B[X]);
        await N_rR.wait(200 + Math.random() * 300);
      }
    }
  }
  async function Z(e) {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=" + J + "&loginSid=" + v + "&action=new&time=" + e + "&goldNum=" + x, "宝箱任务");
  }
  async function F(e) {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=" + J + "&loginSid=" + v + "&action=old&time=" + e + "&goldNum=" + x, "补领宝箱");
  }
  async function j() {
    {
      const B = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + J + "&loginSid=" + v + "&from=videoadver&goldNum=58";
      for (let f = 0; f < 20; f++) {
        try {
          {
            const N = await N_rR.fetch(B);
            if (N.ok) {
              const s = await N.json();
              N_rR.log("视频广告：" + s.data?.["description"]);
              if (200 !== s.data?.["status"]) {
                break;
              }
            } else {
              N_rR.error("❗️视频广告：网络请求错误");
            }
          }
        } catch (X) {
          N_rR.error("❗️视频广告第" + (f + 1) + "次任务执行失败：" + X.message);
        }
        await N_rR.wait(200 + Math.random() * 300);
      }
    }
  }
  async function A() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + J + "&loginSid=" + v + "&from=surprise&goldNum=68&surpriseType=1", "惊喜任务");
  }
  async function l() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + J + "&loginSid=" + v + "&from=sign&extraGoldNum=110", "每日签到", true);
  }
  async function S() {
    {
      await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + J + "&loginSid=" + v + "&from=novel&goldNum=18", "每日小说", true);
    }
  }
  async function U() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + J + "&loginSid=" + v + "&from=mobile&goldNum=18", "每日听歌", true);
  }
  async function L() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=" + J + "&loginSid=" + v + "&from=collect&goldNum=18", "每日收藏", true);
  }
  async function h() {
    let B = [];
    try {
      const f = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newUserSignList?loginUid=" + J + "&loginSid=" + v;
      const N = await N_rR.fetch(f);
      if (N.ok) {
        const s = await N.json();
        if (200 == s.code) {
          const G = s.data?.["dataList"]?.["find"](X => X.taskType === "listen");
          const V = (G?.["listenList"]?.["filter"](X => X.timetraStatus != "0" && X.goldNum != "null") || []).map(X => ({
            goldNum: X.goldNum,
            time: X.time,
            unit: X.unit
          }));
          B = V;
        }
      }
      if (B.length === 0) {
        p = false;
        N_rR.error("听歌任务：任务查询失败");
        return;
      }
      for (let X of B) {
        const {
          goldNum: z,
          time: w,
          unit: a
        } = X;
        if (z && w && a) {
          const C = a === "s" ? "秒" : a === "m" ? "分钟" : a;
          await W(w, z, a, C);
        }
        await N_rR.wait(200 + Math.random() * 300);
      }
    } catch (E) {
      p = false;
      N_rR.error("❗️听歌任务查询失败：" + E.message);
    }
  }
  async function W(B, f, N, s) {
    try {
      const G = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + J + "&loginSid=" + v + "&from=listen&goldNum=" + f + "&listenTime=" + B + "&unit=" + N;
      const V = await N_rR.fetch(G);
      if (V.ok) {
        const X = await V.json();
        X.msg === "success" ? N_rR.log("听歌任务：" + X.data?.["description"] + "（" + B + " " + s + "）") : (p = false, N_rR.error("听歌任务：Cookie已过期，请重新启动酷我音乐"));
      } else {
        p = false;
        N_rR.error("❗️听歌任务：网络请求错误");
      }
    } catch (z) {
      p = false;
      N_rR.error("❗️听歌任务执行失败：" + z.message);
    }
  }
  async function I() {
    try {
      {
        const f = "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=" + J + "&loginSid=" + v + "&type=free";
        const N = await N_rR.fetch(f);
        if (N.ok) {
          const s = await N.json();
          200 == s.code ? N_rR.log("免费抽奖：领取到" + s.data?.["loterryname"]) : N_rR.log("免费抽奖：" + s.msg);
        } else {
          p = false;
          N_rR.error("❗️免费抽奖：网络请求错误");
        }
      }
    } catch (V) {
      p = false;
      N_rR.error("❗️免费抽奖执行失败：" + V.message);
    }
  }
  async function b() {
    const B = "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=" + J + "&loginSid=" + v + "&type=video";
    for (let f = 0; f < 10; f++) {
      try {
        {
          const N = await N_rR.fetch(B);
          if (N.ok) {
            const s = await N.json();
            if (200 == s.code) {
              N_rR.log("视频抽奖：领取到" + s.data?.["loterryname"] + " ");
            } else {
              N_rR.log("视频抽奖：" + s.msg);
              break;
            }
          } else {
            p = false;
            N_rR.error("❗️视频抽奖：网络请求错误");
          }
        }
      } catch (V) {
        p = false;
        N_rR.error("❗️视频抽奖第" + (f + 1) + "次任务执行失败：" + V.message);
      }
      await N_rR.wait(200 + Math.random() * 300);
    }
  }
  async function q() {
    const e = {
      name: "新浪微博打卡",
      from: "jumpWeibo",
      goldNum: 98
    };
    const B = {
      name: "全民K歌打卡",
      from: "jumpKge",
      goldNum: 58
    };
    const f = {
      name: "喜马拉雅打卡",
      from: "jumpXiMaLaYa",
      goldNum: 388
    };
    const N = {
      name: "京东金融打卡",
      from: "jumpJdjr",
      goldNum: 298
    };
    const s = {
      name: "快手极速版打卡",
      from: "jumpKuaiShou",
      goldNum: 88
    };
    const G = {
      name: "懒人听书打卡",
      from: "jumpLanRen",
      goldNum: 398
    };
    const V = {
      name: "百度极速版打卡",
      from: "jumpBaiduLite",
      goldNum: 98
    };
    const X = [e, B, f, N, s, G, V];
    for (const z of X) {
      await g("https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + J + "&loginSid=" + v + "&from=" + z.from + "&goldNum=" + z.goldNum + "&pFrom=friendshipCheckin", z.name, true);
      await N_rR.wait(200 + Math.random() * 300);
    }
  }
  async function K() {
    const B = {
      KyJSL: "未授权",
      vBhFT: "yyyy-MM-dd",
      huumD: "会员中心",
      nPwvl: function (f, N, s) {
        return f(N, s);
      },
      SbHRZ: "https://h5s.kuwo.cn/upload/pictures/20250701/2c22728cd79b7870fc5aba7e24c4b738.png",
      dJhSF: "https://h5s.kuwo.cn/upload/pictures/20250701/81cd66c511dc72fc4f6019734fc5cdd2.png",
      sZHki: "https://h5s.kuwo.cn/upload/pictures/20250701/552f5a79f589b0f4c3cc2e344fa946ea.png",
      itDqo: "https://h5s.kuwo.cn/upload/pictures/20250702/33b7d8c4bea087cf75fed41851430905.png",
      EikFk: "FCE1A3",
      lVFCw: "FFF0CC",
      WNMWX: "https://h5s.kuwo.cn/upload/pictures/20250701/4214e8af8419a57099b8d05ac2531791.png",
      GOthS: "4E463A",
      FxmTl: "小焦点",
      ZUPtm: "免费模式",
      ZNlnl: "child"
    };
    {
      const f = [1, 2, 3];
      for (const N of f) {
        try {
          const s = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=" + J + "&loginSid=" + v + "&from=coinAccumulationTask&taskId=" + N;
          const G = await N_rR.fetch(s);
          if (G.ok) {
            const V = await G.json();
            if (200 == V.code) {
              if (V.data?.["status"]) {
                {
                  N_rR.log("今日奖励：领取到" + V.data?.["obtain"] + "金币");
                }
              } else {
                {
                  N_rR.log("今日奖励：" + V.data?.["description"]);
                  break;
                }
              }
            } else {
              p = false;
              N_rR.error("今日奖励：Cookie已过期，请重新启动酷我音乐");
            }
          } else {
            {
              p = false;
              N_rR.error("❗️今日奖励：网络请求错误");
            }
          }
        } catch (a) {
          p = false;
          N_rR.error("❗️每日奖励任务执行失败：" + a.message);
        }
        await N_rR.wait(200 + Math.random() * 300);
      }
    }
  }
  async function R() {
    {
      try {
        const f = "https://integralapi.kuwo.cn/api/v1/online/sign/new/newBoxFinish?apiversion=47&loginUid=" + J + "&loginSid=" + v + "&action=new&goldNum=20&apiv=6";
        const N = await N_rR.fetch(f);
        if (N.ok) {
          const s = await N.json();
          if (200 == s.code) {
            if (s.data?.["status"]) {
              N_rR.log("定时宝箱：领取到 " + s.data?.["obtain"] + " 金币");
            } else {
              N_rR.log("定时宝箱：" + s.data?.["description"]);
            }
          } else {
            N_rR.error("定时宝箱：Cookie已过期，请重新启动酷我音乐");
          }
        } else {
          N_rR.error("❗️定时宝箱：网络请求错误");
        }
      } catch (z) {
        N_rR.error("❗️定时宝箱执行失败：" + z.message);
      }
    }
  }
  async function m() {
    {
      try {
        const f = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/earningUserSignList?loginUid=" + J + "&loginSid=" + v;
        const N = await N_rR.fetch(f);
        if (N.ok) {
          const s = await N.json();
          if (s.data?.["isSign"]) {
            N_rR.log("当前金币：" + s.data?.["remainScore"]);
            if (N_rf && J == c && 50000 < s.data?.["remainScore"]) {
              await t();
            }
          } else {
            {
              N_rR.error("当前金币：Cookie已过期，请重新启动酷我音乐");
            }
          }
        } else {
          N_rR.error("❗️当前金币：网络请求错误");
        }
      } catch (V) {
        N_rR.error("❗️当前金币查询失败：" + V.message);
      }
    }
  }
  async function t() {
    await g("https://integralapi.kuwo.cn/api/v1/online/sign/getExchangeAward?loginUid=" + J + "&loginSid=" + v + "&platform=ios&source=kwplayer_ip_11.1.0.0_TJ.ipa&version=11.1.0.0&exchangeType=svip&quotaId=161", "周卡兑换");
  }
}
function N_JH() {
  const v = {
    QKQAg: function (f, N, s) {
      return f(N, s);
    },
    kOOcb: "</body>",
    kYRsV: function (f, N) {
      return f(N);
    },
    idRtx: "https://napi.ltd/user",
    SiDqV: function (f, N) {
      return f === N;
    },
    KkoeH: function (f, N) {
      return f(N);
    },
    LVLTX: "2|8|0|6|1|5|7|9|4|3",
    tWsFt: function (f, N) {
      return f(N);
    },
    emLGM: function (f, N, s, G) {
      return f(N, s, G);
    },
    pxEpw: function (f, N) {
      return f * N;
    },
    mUHpE: function (f, N) {
      return f(N);
    },
    JVbLw: function (f, N) {
      return f === N;
    },
    OHsBO: function (f, N) {
      return f(N);
    },
    sebeU: function (f, N) {
      return f * N;
    },
    tESZD: function (f, N) {
      return f % N;
    },
    uynhu: function (f, N, s) {
      return f(N, s);
    },
    OskOQ: function (f, N) {
      return f > N;
    },
    KMsCv: function (f, N) {
      return f - N;
    },
    wYgLn: "title",
    JtLtE: "124066316",
    iKDrE: "description",
    bmFxq: "url",
    OJJoZ: function (f, N) {
      return f > N;
    },
    hVbgy: "audio",
    Zisod: function (f, N) {
      return f !== N;
    },
    gtrPm: function (f, N) {
      return f === N;
    },
    CLMRe: function (f, N) {
      return f < N;
    },
    MEDNq: function (f, N) {
      return f < N;
    },
    EjRBT: function (f, N) {
      return f > N;
    },
    pXySQ: function (f, N) {
      return f === N;
    },
    dxkBN: "vQpXA",
    YHaXk: "KuWo",
    esiJx: function (f, N) {
      return f * N;
    },
    SfEdG: "\n本次更新为常规更新",
    HqoKe: "object",
    DZwPg: "返回版本数据格式异常",
    EZtCt: "版本获取失败",
    htOsy: "pwphB",
    mcefc: "需要更新 -> 请更新你的脚本！",
    KBhcy: "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png",
    csVXq: "YEzFF",
    bIQFo: "https://napi.ltd/script/Worker/EnvCore.js",
    RHNlv: "酷我音乐",
    iBomQ: " 的授权信息...",
    Lfbyz: "RCvdr",
    MnDaI: "https://napi.ltd/authPay",
    vTknq: "kwapp://open?t=27&u=https%3A%2F%2Ft.me%2FNapi_Group",
    nYbyx: function (f, N) {
      return f != N;
    },
    vvMId: function (f, N) {
      return f != N;
    },
    WYrCL: "当前账户 ",
    mmGMG: function (f, N) {
      return f + N;
    },
    YEQkj: "xWnmA",
    oCXCZ: "未获取到授权信息",
    XruPQ: function (f, N) {
      return f + N;
    },
    ovVqO: function (f, N) {
      return f + N;
    },
    fZBsg: function (f) {
      return f();
    },
    xCDdm: function (f, N, s, G, V, X, z, w, a, C, E, y, T, u, Y, D, r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, rr, rJ, rH, rv, ro, rp, rc, rQ, rd, rO, rn, rx, rg, rP, ri, rZ, rF, rj, rA, rl, rS, rU, rL, rh, rW, rM, rI, rb, rq, rK, rR) {
      return f(N, s, G, V, X, z, w, a, C, E, y, T, u, Y, D, r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, rr, rJ, rH, rv, ro, rp, rc, rQ, rd, rO, rn, rx, rg, rP, ri, rZ, rF, rj, rA, rl, rS, rU, rL, rh, rW, rM, rI, rb, rq, rK, rR);
    },
    BLcnP: function (f, N, s, G, V, X, z, w, a, C, E, y, T, u, Y, D, r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, rr, rJ, rH, rv, ro, rp, rc, rQ, rd, rO, rn, rx, rg, rP, ri, rZ, rF, rj, rA, rl, rS, rU, rL, rh, rW, rM, rI, rb, rq, rK, rR, rm, rt, rk, re, rB, rf, rN, rs) {
      return f(N, s, G, V, X, z, w, a, C, E, y, T, u, Y, D, r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, rr, rJ, rH, rv, ro, rp, rc, rQ, rd, rO, rn, rx, rg, rP, ri, rZ, rF, rj, rA, rl, rS, rU, rL, rh, rW, rM, rI, rb, rq, rK, rR, rm, rt, rk, re, rB, rf, rN, rs);
    }
  };
  const c = f => {
    f = BigInt(f);
    return {
      low: Number(f),
      valueOf: () => f.valueOf(),
      toString: () => f.toString(),
      not: () => c(~f),
      isNegative: () => f < 0,
      or: N => c(f | BigInt(N)),
      and: N => c(f & BigInt(N)),
      xor: N => c(f ^ BigInt(N)),
      equals: N => f === BigInt(N),
      multiply: N => c(f * BigInt(N)),
      shiftLeft: N => c(f << BigInt(N)),
      shiftRight: N => c(f >> BigInt(N))
    };
  };
  const Q = f => Array.from(new Array(f).keys());
  const d = (f, N) => Array(N).fill().reduce(s => s.multiply(f), c(1));
  const O = (...f) => f.map(N => N === -1 ? c(-1, -1) : c(N));
  const n = O(31, 0, 1, 2, 3, 4, -1, -1, 3, 4, 5, 6, 7, 8, -1, -1, 7, 8, 9, 10, 11, 12, -1, -1, 11, 12, 13, 14, 15, 16, -1, -1, 15, 16, 17, 18, 19, 20, -1, -1, 19, 20, 21, 22, 23, 24, -1, -1, 23, 24, 25, 26, 27, 28, -1, -1, 27, 28, 29, 30, 31, 30, -1, -1);
  const x = O(57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7, 56, 48, 40, 32, 24, 16, 8, 0, 58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6);
  const g = O(39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25, 32, 0, 40, 8, 48, 16, 56, 24);
  const P = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  const i = O(0, 1048577, 3145731);
  const Z = Q(64).map(f => d(2, f));
  Z[Z.length - 1] = Z[Z.length - 1].multiply(-1);
  const F = O(15, 6, 19, 20, 28, 11, 27, 16, 0, 14, 22, 25, 4, 17, 30, 9, 1, 7, 23, 13, 31, 26, 2, 8, 18, 12, 29, 5, 21, 10, 3, 24);
  const j = O(56, 48, 40, 32, 24, 16, 8, 0, 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 60, 52, 44, 36, 28, 20, 12, 4, 27, 19, 11, 3);
  const A = O(13, 16, 10, 23, 0, 4, -1, -1, 2, 27, 14, 5, 20, 9, -1, -1, 22, 18, 11, 3, 25, 7, -1, -1, 15, 6, 26, 19, 12, 1, -1, -1, 40, 51, 30, 36, 46, 54, -1, -1, 29, 39, 50, 44, 32, 47, -1, -1, 43, 48, 38, 55, 33, 52, -1, -1, 45, 41, 49, 35, 28, 31, -1, -1);
  const l = [[14, 4, 3, 15, 2, 13, 5, 3, 13, 14, 6, 9, 11, 2, 0, 5, 4, 1, 10, 12, 15, 6, 9, 10, 1, 8, 12, 7, 8, 11, 7, 0, 0, 15, 10, 5, 14, 4, 9, 10, 7, 8, 12, 3, 13, 1, 3, 6, 15, 12, 6, 11, 2, 9, 5, 0, 4, 2, 11, 14, 1, 7, 8, 13], [15, 0, 9, 5, 6, 10, 12, 9, 8, 7, 2, 12, 3, 13, 5, 2, 1, 14, 7, 8, 11, 4, 0, 3, 14, 11, 13, 6, 4, 1, 10, 15, 3, 13, 12, 11, 15, 3, 6, 0, 4, 10, 1, 7, 8, 4, 11, 14, 13, 8, 0, 6, 2, 15, 9, 5, 7, 1, 10, 12, 14, 2, 5, 9], [10, 13, 1, 11, 6, 8, 11, 5, 9, 4, 12, 2, 15, 3, 2, 14, 0, 6, 13, 1, 3, 15, 4, 10, 14, 9, 7, 12, 5, 0, 8, 7, 13, 1, 2, 4, 3, 6, 12, 11, 0, 13, 5, 14, 6, 8, 15, 2, 7, 10, 8, 15, 4, 9, 11, 5, 9, 0, 14, 3, 10, 7, 1, 12], [7, 10, 1, 15, 0, 12, 11, 5, 14, 9, 8, 3, 9, 7, 4, 8, 13, 6, 2, 1, 6, 11, 12, 2, 3, 0, 5, 14, 10, 13, 15, 4, 13, 3, 4, 9, 6, 10, 1, 12, 11, 0, 2, 5, 0, 13, 14, 2, 8, 15, 7, 4, 15, 1, 10, 7, 5, 6, 12, 11, 3, 8, 9, 14], [2, 4, 8, 15, 7, 10, 13, 6, 4, 1, 3, 12, 11, 7, 14, 0, 12, 2, 5, 9, 10, 13, 0, 3, 1, 11, 15, 5, 6, 8, 9, 14, 14, 11, 5, 6, 4, 1, 3, 10, 2, 12, 15, 0, 13, 2, 8, 5, 11, 8, 0, 15, 7, 14, 9, 4, 12, 7, 10, 9, 1, 13, 6, 3], [12, 9, 0, 7, 9, 2, 14, 1, 10, 15, 3, 4, 6, 12, 5, 11, 1, 14, 13, 0, 2, 8, 7, 13, 15, 5, 4, 10, 8, 3, 11, 6, 10, 4, 6, 11, 7, 9, 0, 6, 4, 2, 13, 1, 9, 15, 3, 8, 15, 3, 1, 14, 12, 5, 11, 0, 2, 12, 14, 7, 5, 10, 8, 13], [4, 1, 3, 10, 15, 12, 5, 0, 2, 11, 9, 6, 8, 7, 6, 9, 11, 4, 12, 15, 0, 3, 10, 5, 14, 13, 7, 8, 13, 14, 1, 2, 13, 6, 14, 9, 4, 1, 2, 14, 11, 13, 5, 0, 1, 10, 8, 3, 0, 11, 3, 5, 9, 4, 15, 2, 7, 8, 12, 15, 10, 7, 6, 12], [13, 7, 10, 0, 6, 9, 5, 15, 8, 4, 3, 10, 11, 14, 12, 5, 2, 11, 9, 6, 15, 12, 0, 3, 4, 1, 14, 13, 1, 2, 7, 8, 1, 2, 12, 15, 10, 4, 0, 3, 13, 14, 6, 9, 7, 8, 9, 6, 15, 1, 5, 12, 3, 10, 14, 5, 8, 7, 11, 0, 4, 13, 2, 11]];
  const S = (f, N, s) => {
    {
      let z = c(0);
      Q(N).forEach(w => {
        if (f[w].isNegative() || s.and(Z[f[w].low]).equals(0)) {
          {
            return;
          }
        }
        z = z.or(Z[w]);
      });
      return z;
    }
  };
  const U = (f, N) => {
    let G = c(0);
    let V = c(0);
    const X = Q(8).map(() => c(0));
    const z = [c(0), c(0)];
    let w = c(0);
    let a = c(0);
    G = S(x, 64, N);
    z[0] = G.and(4294967295);
    z[1] = G.and(-4294967296).shiftRight(32);
    Q(16).forEach(C => {
      a = c(z[1]);
      a = S(n, 64, a);
      a = a.xor(f[C]);
      Q(8).forEach(T => {
        X[T] = a.shiftRight(T * 8).and(255);
      });
      V = c(0);
      Q(8).reverse().forEach(T => {
        V = V.shiftLeft(4).or(l[T][X[T]]);
      });
      a = S(F, 32, V);
      w = c(z[0]);
      z[0] = c(z[1]);
      z[1] = w.xor(a);
    });
    z.reverse();
    G = z[1].shiftLeft(32).and(-4294967296).or(z[0].and(4294967295));
    G = S(g, 64, G);
    return G;
  };
  const L = (f, N, s) => {
    let G = S(j, 56, f);
    Q(16).forEach(V => {
      G = G.and(i[P[V]]).shiftLeft(28 - P[V]).or(G.and(i[P[V]].not()).shiftRight(P[V]));
      N[V] = S(A, 64, G);
    });
    s === 1 && Q(8).forEach(V => {
      [N[V], N[15 - V]] = [N[15 - V], N[V]];
    });
  };
  const h = new TextEncoder();
  const W = new TextDecoder();
  const M = (f, N, s) => {
    N = h.encode(N ||= "ylzsxkwm");
    let V = c(0);
    Q(8).forEach(u => {
      V = c(N[u]).shiftLeft(u * 8).or(V);
    });
    const X = Math.floor(f.length / 8);
    const z = Q(16).map(() => c(0));
    L(V, z, s);
    const w = Q(X).map(() => c(0));
    Q(X).forEach(u => {
      Q(8).forEach(Y => {
        w[u] = c(f[Y + u * 8]).shiftLeft(Y * 8).or(w[u]);
      });
    });
    const a = Q(Math.floor((1 + 8 * (X + 1)) / 8)).map(() => c(0));
    Q(X).forEach(u => {
      a[u] = U(z, w[u]);
    });
    const C = f.slice(X * 8);
    let E = c(0);
    Q(f.length % 8).forEach(u => {
      E = c(C[u]).shiftLeft(u * 8).or(E);
    });
    if (C.length || s === 0) {
      a[X] = U(z, E);
    }
    const y = Q(8 * a.length).map(() => 0);
    let T = 0;
    a.forEach(u => {
      Q(8).forEach(r0 => {
        y[T] = u.shiftRight(r0 * 8).and(255).low;
        T += 1;
      });
    });
    return new Uint8Array(y);
  };
  const I = (f, N) => M(f, N, 0);
  const b = (f, N) => M(f, N, 1);
  const q = (f, N = null) => {
    const s = h.encode(f);
    const G = I(s, N);
    return btoa(String.fromCharCode(...G));
  };
  const K = (f, N = null) => {
    const s = atob(f);
    const G = new Uint8Array([...s].map(w => w.charCodeAt(0)));
    const V = b(G, N);
    let X = V.length;
    while (X > 0 && V[X - 1] === 0) {
      X--;
    }
    const z = V.subarray(0, X);
    return W.decode(z);
  };
  const R = (f, N = {}) => {
    {
      if (Array.isArray(f)) {
        f.forEach(G => R(G, N));
        return;
      }
      if (typeof f === "object" && f !== null) {
        {
          for (let V in f) {
            {
              Object.entries(N).forEach(([z, w]) => {
                V.includes(z) && (f[V] = w);
              });
              R(f[V], N);
            }
          }
          return;
        }
      }
    }
  };
  const m = (f, N) => {
    try {
      const G = f.split(".").map(Number);
      const V = N.split(".").map(Number);
      for (let X = 0; X < Math.max(G.length, V.length); X++) {
        const z = G[X] || 0;
        const w = V[X] || 0;
        if (z < w) {
          return true;
        }
        if (z > w) {
          return false;
        }
      }
      return false;
    } catch (a) {
      throw new Error("对比版本号时发生错误\n" + a.message);
    }
  };
  const t = async () => {
    const {
      user: f,
      isVip = false,
      freeTime = 0
    } = N_rm;
    const N = new Date().getTime();
    const s = N + 3600000;
    if (isVip && freeTime < s) {
      const G = "https://wapi.kuwo.cn/openapi/v1/user/freemium/h5/switches";
      const X = {
        loginUid: f,
        status: 1
      };
      const z = {
        url: G,
        body: X
      };
      const w = await N_rR.fetch(z);
      if (w.ok) {
        {
          N_rk = await w.json();
          const a = N_rk.data.endTime;
          N_rm.freeTime = Number(a);
          N_rR.setVal(N_rm, "KuWo");
        }
      }
    }
  };
  const k = async () => {
    {
      await t();
      let G;
      let V;
      let X = 0;
      N_rR.debug("正在获取脚本最新版本号...");
      while (!V && X < 3) {
        try {
          const z = {
            url: "https://napi.ltd/getVer/KuWo",
            timeout: 15000
          };
          G = await N_rR.fetch(z);
          if (!G?.["ok"]) {
            throw new Error("版本信息响应状态异常");
          }
          V = await G.json();
          if (typeof V !== "object" || !V) {
            throw new Error("返回版本数据格式异常");
          }
        } catch (a) {
          X++;
          N_rR.debug("获取版本数据失败，正在重试第" + X + "次...");
        }
      }
      if (!V) {
        return N_rR.error("版本获取失败", "网络异常，重试" + X + "次后仍未获取到数据");
      }
      if (m(N_rl, V.ver)) {
        {
          N_rR.debug("脚本最新版本号：" + V.ver);
          let E = V.info.join("\n");
          if (E) {
            E = "\n长按通知查看本次更新详情\n\n" + E;
          } else {
            E = "\n本次更新为常规更新";
          }
          N_rR.msg("需要更新 -> 请更新你的脚本！", "", E, {
            "open-url": "kwapp://open?t=27&u=https%3A%2F%2Ft.me%2FNapi_Group",
            "media-url": "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png"
          });
          N_rm.ver = V.ver;
          N_rR.setVal(N_rm, "KuWo");
        }
      } else {
        N_rR.debug("本地脚本为最新版本");
      }
    }
  };
  const e = async (f, N, s = 0) => {
    const X = "type=" + N + "&user=" + f;
    const {
      user: z,
      endTime: w
    } = N_rm;
    if (s || !z || z != f || !w || new Date().getTime() > w || !N_rm.keys) {
      {
        await N_Jv("https://napi.ltd/script/Worker/EnvCore.js", "酷我音乐", true);
        N_rR.log("正在获取 " + f + " 的授权信息...");
        let a;
        let C;
        let E = 0;
        while (!C && E < 3) {
          {
            try {
              {
                const u = {
                  url: "https://napi.ltd/authPay",
                  body: X
                };
                a = await N_rR.fetch(u);
                if (!a?.["ok"]) {
                  throw new Error("授权信息响应状态异常");
                }
                C = await a.json();
                if (typeof C !== "object" || !C) {
                  throw new Error("返回授权数据格式异常");
                }
              }
            } catch (Y) {
              E++;
              N_rR.debug("获取授权数据失败，正在重试第" + E + "次...");
            }
          }
        }
        const y = {
          "open-url": "kwapp://open?t=27&u=https%3A%2F%2Ft.me%2FNapi_Group"
        };
        if (!C) {
          return N_rR.error("授权失败", "", "网络异常，重试后${i}次仍未获取到数据", y);
        }
        for (let r0 in C) C.hasOwnProperty(r0) && (N_rm[r0] = C[r0]);
        N_rR.log("授权数据获取完成...");
        N_rR.setVal(N_rm, "KuWo");
        if (C.isVip) {
          let r1 = N_rR.time("yyyy-MM-dd HH:mm", N_rm.endTime);
          N_rR.log("当前账户 " + f + " 已授权\n授权有效期至：" + r1);
          const r2 = {
            "open-url": "kwapp://open?t=27&u=https%3A%2F%2Ft.me%2FNapi_Group",
            "media-url": "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png"
          };
          (z != C.user || w != C.endTime) && N_rR.msg("当前账户 " + f + " 已授权", "", "有效期至：" + r1, r2);
        } else {
          {
            N_rR.log("未能获取到当前账户 " + f + " 的授权信息\n即将再次获取你的授权信息");
            const r3 = {
              "open-url": "kwapp://open?t=27&u=https%3A%2F%2Fnapi.ltd%2FauthPay%3Faction%3Dkuwo%26user%3D" + f,
              "media-url": "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png"
            };
            N_rR.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权", r3);
          }
        }
      }
    } else {
      N_rR.log("当前账户 " + f + " 已授权\n祝使用愉快！");
    }
  };
  const B = {
    encryptQuery: q,
    decryptQuery: K,
    replaceInfo: R,
    freeTime: t,
    upDate: m,
    getVer: k,
    getInfo: e
  };
  return B;
}
async function N_Jv(J, H = "Napi", v = false) {
  v && console.log("【" + H + "】强制更新脚本...");
  console.log("【" + H + "】准备加载脚本...");
  const c = typeof $prefs !== "undefined" ? $prefs.valueForKey(H + ".js") : $persistentStore?.["read"](H + ".js");
  const Q = O => {
    console.log("【" + H + "】开始执行脚本...");
    eval(O);
  };
  const d = async () => {
    console.log("【" + H + "】正在加载脚本...");
    let n = "";
    const x = new Promise((g, P) => {
      setTimeout(() => P(new Error("请求超时（10秒）")), 10000);
    });
    try {
      const g = new Promise((P, i) => {
        if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
          {
            const Z = {
              url: J,
              timeout: 10000
            };
            $task.fetch(Z).then(F => {
              P(F.body ?? "");
            }, F => i(F));
          }
        } else {
          if (typeof $httpClient !== "undefined" && typeof $httpClient.get === "function") {
            const j = {
              url: J,
              timeout: 10000
            };
            $httpClient.get(j, (A, l, S) => {
              if (A) {
                i(A);
              }
              const L = S ?? l?.["body"] ?? "";
              P(L);
            });
          } else {
            i(new Error("不支持的代理工具请求API"));
          }
        }
      });
      n = await Promise.race([g, x]);
      if (!n) {
        throw new Error("响应体为空");
      }
      Q(n);
      typeof $prefs !== "undefined" ? $prefs.setValueForKey(n, H + ".js") : $persistentStore.write(n, H + ".js");
      console.log("【" + H + "】脚本缓存成功...");
    } catch (P) {
      console.log("【" + H + "】请求失败：" + (P?.["message"] ?? "未知错误"));
      throw P;
    }
  };
  if (!!c && !v) {
    console.log("【" + H + "】开始加载缓存...");
    try {
      {
        Q(c);
      }
    } catch (n) {
      console.log("【" + H + "】准备重载脚本...", n.message);
      await d();
    }
  } else {
    console.log("【" + H + "】开始加载脚本...");
    await d();
  }
}