//Sat May 09 2026 10:18:06 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("神秘VPN", {
  "logLevel": "debug"
});
(async () => {
  try {
    const l1l1IiiI = await loadUtils();
    if (!l1l1IiiI || typeof l1l1IiiI.createCryptoJS !== "function") throw new ReferenceError("Utils 或 createCryptoJS 方法未正确加载");
    const i1lI1IIl = l1l1IiiI.createCryptoJS(),
      lIllI1i = {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 7.1.2; zh-cn; V1936A Build/N2G47O) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "Content-Type": "application/x-www-form-urlencoded"
      };
    function I1IiIII() {
      return Date.now();
    }
    function IIIii1li() {
      const ili1ii1 = Math.floor(Date.now() / 1000 / 1800);
      return i1lI1IIl.MD5("req_id_" + ili1ii1).toString();
    }
    function Iiii11il() {
      {
        const i1IIIlIi = Date.now();
        return i1lI1IIl.MD5("serial_num_" + i1IIIlIi).toString();
      }
    }
    function li11iIlI(lliiiIIi, Iii1iIIi, il1l1lii) {
      const IiI1iI11 = lliiiIIi.toString(),
        lll111ll = (lliiiIIi & 1) !== 0 ? [5, 11, 11, 8, 27, 12, 9, 21] : [16, 8, 10, 12, 26, 11, 2, 18];
      let iiIl1Iii = Iii1iIIi[lll111ll[0]] + Iii1iIIi[lll111ll[1]] + IiI1iI11[lll111ll[2]] + Iii1iIIi[lll111ll[3]] + Iii1iIIi[lll111ll[4]] + IiI1iI11[lll111ll[5]] + Iii1iIIi[lll111ll[6]] + Iii1iIIi[lll111ll[7]];
      iiIl1Iii += il1l1lii.length ? il1l1lii[parseInt(IiI1iI11[11])] : Iii1iIIi[parseInt(IiI1iI11[11])];
      return iiIl1Iii;
    }
    function iiili(illIlIl1, iI1lil1, iIl1II1I) {
      const iliilllI = illIlIl1.toString(),
        III1ill1 = (illIlIl1 & 1) !== 0 ? [5, 11, 11, 8, 27, 12, 9, 21] : [16, 8, 10, 12, 26, 11, 2, 18];
      let lIlI1lli = iI1lil1[III1ill1[0]] + iI1lil1[III1ill1[1]] + iliilllI[III1ill1[2]] + iI1lil1[III1ill1[3]] + iI1lil1[III1ill1[4]] + iliilllI[III1ill1[5]] + iI1lil1[III1ill1[6]] + iI1lil1[III1ill1[7]];
      lIlI1lli += iIl1II1I[III1ill1[0]] + iIl1II1I[III1ill1[1]] + iliilllI[III1ill1[2]] + iIl1II1I[III1ill1[3]] + iIl1II1I[III1ill1[4]] + iliilllI[III1ill1[5]] + iIl1II1I[III1ill1[6]] + iIl1II1I[III1ill1[7]];
      return lIlI1lli;
    }
    function l1ll11l() {
      {
        const lIllIl1I = Math.floor(Math.random() * 2) + 7;
        let liIIii1i = "";
        const iiI1lll = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i1l1llll = 0; i1l1llll < lIllIl1I; i1l1llll++) {
          liIIii1i += iiI1lll.charAt(Math.floor(Math.random() * iiI1lll.length));
        }
        return liIIii1i;
      }
    }
    function iIIl11ii(ilIiIIlI) {
      {
        ilIiIIlI.clientModel = l1ll11l();
        ilIiIIlI.clientType = "Android";
        ilIiIIlI.promoteChannel = "S100";
        ilIiIIlI.rankVersion = "10";
        ilIiIIlI.version = "v2.0.4";
        const l1Ii11il = Object.keys(ilIiIIlI).sort();
        let iiIl1i1I = "";
        for (let iiii1lI1 of l1Ii11il) {
          iiIl1i1I += iiii1lI1 + "=" + ilIiIIlI[iiii1lI1] + "&";
        }
        iiIl1i1I = iiIl1i1I.slice(0, -1);
        const li1il1i1 = li11iIlI(ilIiIIlI.requestTimestamp, ilIiIIlI.requestId, ilIiIIlI.token || ""),
          I1lIIii1 = i1lI1IIl.MD5(iiIl1i1I + li1il1i1).toString();
        ilIiIIlI.sign = I1lIIii1;
        return ilIiIIlI;
      }
    }
    function Ii11iIIl(Iii1liIi, IIlI1IlI) {
      {
        const i1ilI111 = i1lI1IIl.enc.Base64.parse(IIlI1IlI),
          lliiIi11 = i1lI1IIl.enc.Utf8.parse("A-16-Byte-String"),
          ililliI = i1lI1IIl.AES.decrypt({
            "ciphertext": i1ilI111
          }, i1lI1IIl.enc.Utf8.parse(Iii1liIi), {
            "iv": lliiIi11,
            "mode": i1lI1IIl.mode.CBC,
            "padding": i1lI1IIl.pad.Pkcs7
          });
        return ililliI.toString(i1lI1IIl.enc.Utf8);
      }
    }
    function iII1Iill(iII1iiii) {
      const l1lIIlIl = [];
      for (let iiiI111i in iII1iiii) if (iII1iiii.hasOwnProperty(iiiI111i)) {
        l1lIIlIl.push(encodeURIComponent(iiiI111i) + "=" + encodeURIComponent(iII1iiii[iiiI111i]));
      }
      return l1lIIlIl.join("&");
    }
    async function illIliIl(I1illilI) {
      try {
        {
          const I1lllllI = iIIl11ii({
              "requestId": IIIii1li(),
              "requestTimestamp": I1IiIII(),
              "serialNumber": I1illilI
            }),
            Iiilii11 = iII1Iill(I1lllllI),
            IlIi11 = await new Promise((i1I1l1i1, II1illI1) => {
              $.post({
                "url": "https://api.go01.top/proxy/user/auto/login",
                "headers": lIllI1i,
                "body": Iiilii11
              }, (ii1II1I1, ll11IiIi, iii1li) => {
                {
                  if (ii1II1I1) II1illI1(ii1II1I1);else {
                    i1I1l1i1({
                      "resp": ll11IiIi,
                      "body": iii1li
                    });
                  }
                }
              });
            }),
            IlII11Il = JSON.parse(IlIi11.body);
          return IlII11Il.data.token;
        }
      } catch (I1Ii1ii) {
        $.logErr("登录失败：" + I1Ii1ii);
      }
    }
    async function i1II1ill(l1iililI, IliII1Il) {
      try {
        const l111iiI = iIIl11ii({
            "requestId": IIIii1li(),
            "requestTimestamp": I1IiIII(),
            "serialNumber": l1iililI,
            "token": IliII1Il,
            "vipType": "vip"
          }),
          iI1li11I = iII1Iill(l111iiI),
          IliIi1l1 = await new Promise((lii1IIil, i1Il1lli) => {
            $.post({
              "url": "https://api.go01.top/proxy/user/fetch/node/list",
              "headers": lIllI1i,
              "body": iI1li11I
            }, (il1ili11, Ililil11, lII1ll1I) => {
              il1ili11 ? i1Il1lli(il1ili11) : lii1IIil({
                "resp": Ililil11,
                "body": lII1ll1I
              });
            });
          }),
          ill1lili = JSON.parse(IliIi1l1.body);
        return ill1lili.data;
      } catch (llllI11I) {
        $.logErr("获取节点列表失败：" + llllI11I);
      }
    }
    async function IllilIi1(IlIii1ll, lliiII1l, I1IiI1) {
      try {
        {
          const III11I1l = I1IiIII(),
            liiII1l = IIIii1li(),
            I1Il1l1i = iIIl11ii({
              "requestId": liiII1l,
              "requestTimestamp": III11I1l,
              "serialNumber": IlIii1ll,
              "token": lliiII1l,
              "nodeId": I1IiI1
            }),
            IiI1IlIl = iII1Iill(I1Il1l1i),
            i1liii1 = await new Promise((illIiili, iIlIilI) => {
              $.post({
                "url": "https://api.go01.top/proxy/user/fetch/node/detail",
                "headers": lIllI1i,
                "body": IiI1IlIl
              }, (IIl11lIl, llI1lii1, l11li1II) => {
                IIl11lIl ? iIlIilI(IIl11lIl) : illIiili({
                  "resp": llI1lii1,
                  "body": l11li1II
                });
              });
            }),
            iliilI = JSON.parse(i1liii1.body).data,
            i1I1i = iiili(III11I1l, liiII1l, lliiII1l),
            li11lll1 = Ii11iIIl(i1I1i, iliilI.content),
            iI1llill = li11lll1.split(","),
            ilII11i = "trojan://" + iI1llill[3] + "@" + iI1llill[1] + ":" + iI1llill[2] + "?security=tls&type=tcp&headerType=none&allowInsecure=1#" + encodeURIComponent(iliilI.name);
          $.log(ilII11i);
          return ilII11i;
        }
      } catch (Il1Il1i) {
        $.logErr("获取节点信息失败：" + Il1Il1i);
      }
    }
    async function ill1lI1(iIilIi1) {
      try {
        {
          const i1Ill1ii = await fetch("https://dpaste.com/api/", {
              "method": "POST",
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              "body": "expiry_days=1&content=" + encodeURIComponent(iIilIi1)
            }),
            lii1lI1 = (await i1Ill1ii.text()).trim() + ".txt";
          return lii1lI1;
        }
      } catch (l1IliiiI) {
        $.logErr("上传到 Dpaste 失败: " + l1IliiiI);
        return null;
      }
    }
    const IiiIIi11 = Iiii11il(),
      IIl1illI = await illIliIl(IiiIIi11);
    if (IIl1illI) {
      {
        const iil1lilI = await i1II1ill(IiiIIi11, IIl1illI);
        let lIIliili = "";
        for (const liiI111I of iil1lilI) {
          {
            const I111iiI = await IllilIi1(IiiIIi11, IIl1illI, liiI111I.id);
            I111iiI && (lIIliili += I111iiI + "\n");
          }
        }
        const Ii111i1 = await ill1lI1(lIIliili);
        if (Ii111i1) {}
      }
    }
  } catch (I111liil) {
    $.logErr(I111liil);
  } finally {
    $.done();
  }
})();
async function loadUtils() {
  let ll111liI = $.getdata("Utils_Code") || "";
  if (ll111liI && ll111liI.length) return $.log("✅ " + $.name + ": 原创基础上适配ios代理工具by-iu"), eval(ll111liI), creatUtils();
  $.log("🚀 " + $.name + ": 开始下载Utils代码");
  return new Promise(lIIl1lii => {
    $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(Ili1l1i => {
      $.setdata(Ili1l1i, "Utils_Code");
      eval(Ili1l1i);
      $.log("✅ Utils加载成功, 请继续");
      lIIl1lii(creatUtils());
    });
  });
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e);
        if (!s && !a) return {};
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, a, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, a, i(r));
          break;
        case "Quantumult X":
          $notify(e, s, a, i(r));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}