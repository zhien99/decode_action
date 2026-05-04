//Mon May 04 2026 10:39:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  let body = $response.body;
  let ddm = null;
  let data = null;
  let anchor = false;
  function tryParse(raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  ddm = tryParse(body);
  if (!ddm) {
    let start = body.indexOf("{");
    let end = body.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      ddm = tryParse(body.substring(start, end + 1));
      if (ddm) {
        console.log("✅ 使用截断JSON解析成功");
      }
    }
  }
  if (!ddm) {
    let match = body.match(/\{[\s\S]*\}/);
    if (match) {
      ddm = tryParse(match[0]);
      if (ddm) {
        console.log("✅ 使用正则JSON解析成功");
      }
    }
  }
  if (!ddm) {
    console.log("❌ JSON解析彻底失败，跳过脚本");
    $done({});
    return;
  }
  const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
  const bundle_id = ddm.receipt.bundle_id || ddm.receipt.Bundle_Id;
  const list = {
    bazaart: {
      tp: "timea",
      hx: "hxpda",
      id: "Bazaart_Super_Three_Months_v4"
    },
    SHScan: {
      tp: "timea",
      hx: "hxpda",
      id: "com.ws.SHScanFree.Year"
    },
    EnglishTalent: {
      tp: "timea",
      hx: "hxpda",
      id: "com.mango.newYearVip",
      strict: "auto"
    },
    "art.yueyin.ebook-convert": {
      tp: "timea",
      hx: "hxpda",
      id: "art.yueyin.ebook.year"
    },
    MaiqiSun: {
      tp: "timeb",
      hx: "hxpda",
      id: "life_cn_68"
    },
    PulseWatch: {
      tp: "timeb",
      hx: "hxpda",
      id: "relaxlife_ebp"
    },
    PicCompress: {
      tp: "timea",
      hx: "hxpda",
      id: "pc_vip_new_1y"
    },
    XiangCePhoto: {
      tp: "timeb",
      hx: "hxpda",
      id: "ql128"
    },
    FileMaster: {
      tp: "timeb",
      hx: "hxpda",
      id: "FileMaster_ProVersion"
    },
    Tuesday: {
      tp: "timeb",
      hx: "hxpda",
      id: "PIGLET_VIP_Forever"
    },
    "IPTV%20Flixana": {
      tp: "timeb",
      hx: "hxpda",
      id: "iptv_flixana_lifetime_sub"
    },
    AdBlocker: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.va.adBlocker.lifeTimefree"
    },
    ECGPlus: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.wms.hrv.pro"
    },
    WatchWallpaper: {
      tp: "timea",
      hx: "hxpda",
      id: "indie.davidwang.WatchWallpaper.yearsubscriptegold"
    },
    "com.beauty.MeiTui": {
      tp: "timea",
      hx: "hxpda",
      id: "vip_member_v3_365day"
    },
    ChmReader: {
      tp: "timeb",
      hx: "hxpda",
      id: "EpubReader_ProVersion"
    },
    MediaConvert: {
      tp: "timeb",
      hx: "hxpda",
      id: "MediaConverter_ProVersion"
    },
    Period: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hanchongzan.time.pro"
    },
    "com.sixiaobo.MusCut": {
      tp: "timeb",
      hx: "hxpdb",
      id: "com.purecollage.pro"
    },
    "com.hanchongzan.loverlist": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hanchongzan.loverlist.01"
    },
    FlashTransportMaster: {
      tp: "timea",
      hx: "hxpda",
      id: "com.flashtransport.fightenegery.yearly.base"
    },
    "com.ideack.ASR": {
      tp: "timeb",
      hx: "hxpda",
      id: "ASR_Permanent_Plan"
    },
    Presets: {
      tp: "timea",
      hx: "hxpda",
      id: "com.chromatech.chroma.yearlyAutoRenewable"
    },
    GoodTask: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hahainteractive.goodtask3.pro"
    },
    "com.hanchongzan.period": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hanchongzan.period.girl"
    },
    "com.hanchongzan.book": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hanchongzan.book.vip"
    },
    SoundLab: {
      tp: "timeb",
      hx: "hxpda",
      id: "8001"
    },
    ECGANALYZER: {
      tp: "timea",
      hx: "hxpda",
      id: "com.wms.hrv.yearlyfamilysharing"
    },
    "com.RuoG.Pixiu": {
      tp: "timea",
      hx: "hxpda",
      id: "com.RuoG.Pixiu.VIPYear"
    },
    "com.ideack.BusinessCard": {
      tp: "timeb",
      hx: "hxpda",
      id: "BusinessCardVipPerpetual"
    },
    "com.ideack.MagicAudio": {
      tp: "timeb",
      hx: "hxpdb",
      id: "MagicAudioPermanent"
    },
    DuChuangZhe: {
      tp: "timea",
      hx: "hxpda",
      id: "org.zrey.du.main"
    },
    PhotoWhite: {
      tp: "timeb",
      hx: "hxpda",
      id: "org.zrey.photowhite.flash_lifetime"
    },
    "Pure%20Tuber%20Pro": {
      tp: "timeb",
      hx: "hxpda",
      id: "lifetime"
    },
    FETreeVideoChange: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.dj.videototext.forever"
    },
    "%E5%B0%8F%E5%B0%8F%E7%9B%B8%E6%9C%BA%E5%A4%A7%E5%B8%88": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.ai.merge.forever.vip"
    },
    FoodIdentificationTool: {
      tp: "timeb",
      hx: "hxpda",
      id: "20002"
    },
    "com.qingcheng.seal.Seal": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.qingcheng.seal.Seal.premium.forever"
    },
    "com.geekapp.VoiceTranslation": {
      tp: "timeb",
      hx: "hxpda",
      id: "VoiceTranslatorPerpetual"
    },
    "com.idealityapp.VideoEditing": {
      tp: "timeb",
      hx: "hxpda",
      id: "MagicVideo_Vip_Permanent"
    },
    YinzhangMaster: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.xiaoqi.seal.forever"
    },
    "com.cuilingshi.flipclock": {
      tp: "timeb",
      hx: "hxpda",
      id: "FlipClockProVersion"
    },
    "com.maine.aifill": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.maine.aifill.unlimited"
    },
    Graphionica: {
      tp: "timea",
      hx: "hxpda",
      id: "premium_year"
    },
    AIAssistant: {
      tp: "timea",
      hx: "hxpda",
      id: "AIchat_1w_7.99_trial"
    },
    MonitorPlus: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.unhonin.MonitorPlus.proversion"
    },
    MessageHold: {
      tp: "timea",
      hx: "hxpda",
      id: "com.messagehold.forever"
    },
    "Guitar%20Gravitas": {
      tp: "timea",
      hx: "hxpda",
      id: "GuitarGravitasChordsScalesArpeggiosLessons"
    },
    "com.casttv.remotetv": {
      tp: "timeb",
      hx: "hxpda",
      id: "liftetime2"
    },
    WallpaperWidget: {
      tp: "timea",
      hx: "hxpda",
      id: "com.widget.theme.yearly.3dayfree"
    },
    ProREC: {
      tp: "timea",
      hx: "hxpda",
      id: "ProAudioCamera_Annual"
    },
    "TypeOn%20Keyboard": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.hanchongzan.book.vip"
    },
    PhotoCollagePro: {
      tp: "timeb",
      hx: "hxpda",
      id: "PHOTABLE_PREMIUM"
    },
    "com.alphamobiletech.bodyApp": {
      tp: "timeb",
      hx: "hxpda",
      id: "Bodyapp_Forever"
    },
    "com.alphamobiletech.facey": {
      tp: "timeb",
      hx: "hxpda",
      id: "Facey_Forever"
    },
    Packet: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.aaaalab.nepacket.iap.full"
    },
    AllMyBatteries: {
      tp: "timeb",
      hx: "hxpda",
      id: "AllMyBatteries_Ultimate"
    },
    VDIT: {
      tp: "timeb",
      hx: "hxpda",
      id: "me.imgbase.videoday.profeaturesLifetime"
    },
    CodeSnippet: {
      tp: "timea",
      hx: "hxpda",
      id: "it.beatcode.codesnippetpro.annualSubscription"
    },
    darkWeb: {
      tp: "timea",
      hx: "hxpda",
      id: "dforce_unlock_all_functions"
    },
    BookReader: {
      tp: "timea",
      hx: "hxpda",
      id: "com.reader.1year"
    },
    BeatStation: {
      tp: "timea",
      hx: "hxpda",
      id: "BS_Pro_Yearly"
    },
    FastPlayer: {
      tp: "timea",
      hx: "hxpda",
      id: "VideoPlayer_ProVersion"
    },
    SimpleNotation: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.xinlin.notation.once"
    },
    ChordMaster: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.chordMaster.once"
    },
    Xfuse: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.xfuse.ProVision"
    },
    "com.BertonYc.ScannerOCR": {
      tp: "timeb",
      hx: "hxpda",
      id: "Scanner_Subscibe_Permanent"
    },
    HRV: {
      hx: "hxpdc",
      id: "com.stress.test.record.yearly"
    },
    iVCam: {
      tp: "timeb",
      hx: "hxpda",
      id: "ivcam.full"
    },
    RBrowser: {
      tp: "timea",
      hx: "hxpda",
      id: "com.mm.RBroswer.product11"
    },
    Filterra: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.filterra.wtonetimepurchase"
    },
    MOLDIV: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.jellybus.Moldiv.IAP.PRO7999"
    },
    PICSPLAY: {
      tp: "timea",
      hx: "hxpda",
      id: "com.jellybus.PicsPlay2.IAP.PRO5999"
    },
    Rookie: {
      tp: "timea",
      hx: "hxpda",
      id: "com.jellybus.Rookie.IAP.PRO5999"
    },
    MoneyWiz: {
      tp: "timea",
      hx: "hxpda",
      id: "com.moneywiz.personalfinance.1year"
    },
    qxzs: {
      tp: "timeb",
      hx: "hxpda",
      id: "yongjiu"
    },
    Overdrop: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.weather.overdrop.forever"
    },
    Boom: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.globaldelight.iBoom.LifetimeDiscountPack"
    },
    "PDFReaderPro%20Free": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001"
    },
    VideoHelper: {
      tp: "timeb",
      hx: "hxpda",
      id: "vip_service"
    },
    "Digital%20Planner": {
      tp: "timea",
      hx: "hxpda",
      id: "com.softwings.DigitalPlanner.1year"
    },
    SuperMandarin: {
      tp: "timea",
      hx: "hxpda",
      id: "pth_vip_year"
    },
    SuperQuestion: {
      tp: "timea",
      hx: "hxpda",
      id: "qtzs_vip_year"
    },
    SuperElves: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.SuperElves.Answer.Forever"
    },
    SuperDriving: {
      tp: "timeb",
      hx: "hxpda",
      id: "jiakao_vip_forever"
    },
    Pollykann: {
      tp: "timeb",
      hx: "hxpda",
      id: "vip.forever.pollykann"
    },
    JCCalendar: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.sjc.calendar.vip.lifelong"
    },
    "com.yanxia.ChsMedical": {
      tp: "timeb",
      hx: "hxpda",
      id: "VIPUser"
    },
    SuperPointer: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.SuperPointer.Location.Forever"
    },
    SnakeReader: {
      tp: "timea",
      hx: "hxpda",
      id: "com.lyran.snakescanner.premium18"
    },
    FourthPPT: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.FourthPPT.Mobile.Forever"
    },
    OneExtractor: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.OneExtractor.Video.Forever"
    },
    "com.Colin.Colors": {
      tp: "timea",
      hx: "hxpda",
      id: "com.colin.colors.annualVIP"
    },
    PhotosSorter: {
      tp: "timeb",
      hx: "hxpda",
      id: "sorter.pro.ipa"
    },
    intolive: {
      tp: "timea",
      hx: "hxpda",
      id: "me.imgbase.intolive.proSubYearly"
    },
    MyAlbum: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.colin.myalbum.isUpgradeVip"
    },
    VideoEditor: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.god.videohand.alwaysowner"
    },
    ShotOn: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.colin.shoton.forevervip"
    },
    TimeCut: {
      tp: "timea",
      hx: "hxpda",
      id: "com.floatcamellia.hfrslowmotion.forevervip"
    },
    "com.floatcamellia.motiok": {
      tp: "timea",
      hx: "hxpda",
      id: "com.floatcamellia.motiok.vipforever"
    },
    GreetingScanner: {
      tp: "timea",
      hx: "hxpda",
      id: "com.alphaplus.greetingscaner.w.b"
    },
    FancyCamPlus: {
      tp: "timea",
      hx: "hxpda",
      id: "com.alphaplus.fancycam.year.198"
    },
    Again: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.owen.again.profession"
    },
    "com.damon.dubbing": {
      tp: "timea",
      hx: "hxpda",
      id: "com.damon.dubbing.vip12"
    },
    ZHUBEN: {
      tp: "timea",
      hx: "hxpda",
      id: "com.xiaoyu.yue"
    },
    XIAOTangHomeParadise: {
      tp: "timea",
      hx: "hxpda",
      id: "com.yuee.mo2"
    },
    film: {
      tp: "timea",
      hx: "hxpda",
      id: "pro_auto_subscribe_year_ovs"
    },
    Muza: {
      tp: "timea",
      hx: "hxpda",
      id: "com.appmuza.premium_year"
    },
    StandbyWidget: {
      tp: "timed",
      hx: "hxpda",
      id: "com.standby.idream.year.68",
      ids: "standbyus.nonconsume.missingyou"
    },
    Mango6Minute: {
      tp: "timea",
      hx: "hxpda",
      id: "576170870"
    },
    "Photo%20Cutout": {
      tp: "timea",
      hx: "hxpda",
      id: "com.icepine.allyear"
    },
    WasteCat: {
      tp: "timeb",
      hx: "hxpda",
      id: "dev.sanjin.WasteCat.PermanentVip"
    },
    MeowTalk: {
      tp: "timea",
      hx: "hxpda",
      id: "meowtalk.month.basic.autorenewable.subscription"
    },
    habitdot: {
      tp: "timeb",
      hx: "hxpda",
      id: "habitdots_pro_forever"
    },
    stretchworkout: {
      tp: "timea",
      hx: "hxpda",
      id: "com.abishkking.premiumYearStretch"
    },
    "com.uzstudio.avenuecast.ios": {
      tp: "timeb",
      hx: "hxpda",
      id: "1001"
    },
    CongZhenBaZi: {
      tp: "timeb",
      hx: "hxpda",
      id: "vip_forever_78"
    },
    CongZhenQiMen: {
      tp: "timea",
      hx: "hxpda",
      id: "cn.congzhen.CongZhenQiMen.yearlyplan"
    },
    ProFit: {
      tp: "timea",
      hx: "hxpda",
      id: "com.maxty.gofitness.yearlyplan"
    },
    GPSMaker: {
      tp: "timea",
      hx: "hxpda",
      id: "theodolite_vip_year"
    },
    Smoke: {
      tp: "timea",
      hx: "hxpda",
      id: "smoke19870727"
    },
    AppAlarmIOS: {
      tp: "timea",
      hx: "hxpda",
      id: "alarm.me.vip.year.tier1"
    },
    Tinglee: {
      tp: "timea",
      hx: "hxpdb",
      id: "vip.forever.tinglee"
    },
    NoteKeys: {
      tp: "timea",
      hx: "hxpda",
      id: "notekeys_access_weekly"
    },
    SheetMusicPro: {
      tp: "timea",
      hx: "hxpda",
      id: "sheetmusicpro.yearwithtrial"
    },
    ProtractorEdge: {
      tp: "timea",
      hx: "hxpda",
      id: "ProtracatorEdge.PremiumAccess"
    },
    "Piano%20Plus": {
      tp: "timea",
      hx: "hxpda",
      id: "kn_access_weekly"
    },
    "Notation%20Pad": {
      tp: "timea",
      hx: "hxpda",
      id: "np_access_weekly"
    },
    "Guitar%20Notation": {
      tp: "timea",
      hx: "hxpda",
      id: "gn_access_weekly"
    },
    "Piano%20Fantasy": {
      tp: "timea",
      hx: "hxpda",
      id: "com.lotuz.PianoFantasy.weekwithtrail"
    },
    "Piano%20Rush": {
      tp: "timea",
      hx: "hxpda",
      id: "com.lotuz.PianoPro.weekwithtrail"
    },
    "com.richads.saucyart": {
      tp: "timea",
      hx: "hxpda",
      id: "com.richads.saucyart.sub.quarterly_29.99"
    },
    SurveyorPro: {
      tp: "timea",
      hx: "hxpda",
      id: "com.celiangyuan.SurveyorPro.OneYear"
    },
    "com.ydatong.dingdone": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.ydatong.dingdone.vip.forever"
    },
    Dial: {
      tp: "timea",
      hx: "hxpda",
      id: "2104"
    },
    "qxwp%20copy": {
      tp: "timed",
      hx: "hxpda",
      id: "com.chowjoe.wp2free.year.pro",
      ids: "com.chowjoe.wp2free.coin.70"
    },
    LingLongShouZ: {
      tp: "timea",
      hx: "hxpda",
      id: "zhenwushouzhangQuarterlyPlus"
    },
    MediaEditor: {
      tp: "timeb",
      hx: "hxpda",
      id: "alwaysowner"
    },
    "com.gostraight.smallAccountBook": {
      tp: "timeb",
      hx: "hxpda",
      id: "ForeverVIPPayment"
    },
    ZJTBiaoGe: {
      tp: "timea",
      hx: "hxpda",
      id: "zhangjt.biaoge.monthvip"
    },
    MiniMouse: {
      tp: "timea",
      hx: "hxpda",
      id: "minimouse_vip_1year"
    },
    "Paste%20Keyboard": {
      tp: "timea",
      hx: "hxpda",
      id: "com.keyboard.1yetr"
    },
    EWA: {
      tp: "timea",
      hx: "hxpda",
      id: "com.ewa.renewable.subscription.year8"
    },
    BuBuSZ: {
      tp: "timea",
      hx: "hxpda",
      id: "quaVersion"
    },
    "com.icandiapps.nightsky": {
      tp: "timea",
      hx: "hxpda",
      id: "com.icandiapps.ns4.annual"
    },
    Wallpapers: {
      tp: "timea",
      hx: "hxpda",
      id: "wallpaperworld.subscription.yearly.12.notrial"
    },
    "com.yumiteam.Kuki.ID": {
      tp: "timea",
      hx: "hxpda",
      id: "com.yumiteam.Kuki.ID.2"
    },
    "com.quangtm193.picpro": {
      tp: "timea",
      hx: "hxpda",
      id: "com.quangtm193.picpro1year"
    },
    Storybeat: {
      tp: "timea",
      hx: "hxpda",
      id: "yearly_1"
    },
    SmartGym: {
      tp: "timea",
      hx: "hxpda",
      id: "com.smartgymapp.smartgym.premiumuserworkoutsyearly"
    },
    Prookie: {
      tp: "timea",
      hx: "hxpda",
      id: "prookie.month.withtrial.0615"
    },
    BodyTune: {
      tp: "timea",
      hx: "hxpda",
      id: "Bodypro1"
    },
    "killer.sudoku.free.brain.puzzle": {
      tp: "timea",
      hx: "hxpda",
      id: "ks.i.iap.premium"
    },
    "sudoku.puzzle.free.game.brain": {
      tp: "timea",
      hx: "hxpda",
      id: "sudoku.i.sub.vvip.p1y"
    },
    "One%20Markdown": {
      tp: "timeb",
      hx: "hxpda",
      id: "10012"
    },
    "MWeb%20iOS": {
      tp: "timeb",
      hx: "hxpda",
      id: "10001"
    },
    NYMF: {
      tp: "timea",
      hx: "hxpda",
      id: "com.nymf.app.premium_year"
    },
    "com.lockwidt.cn": {
      tp: "timea",
      hx: "hxpda",
      id: "com.lockwidt.cn.member"
    },
    Utsuki: {
      tp: "timea",
      hx: "hxpda",
      id: "KameePro"
    },
    "one%20sec": {
      tp: "timea",
      hx: "hxpda",
      id: "wtf.riedel.one_sec.pro.annual.individual"
    },
    "com.instagridpost.rsigp": {
      tp: "timea",
      hx: "hxpda",
      id: "com.GridPost.oneyearplus"
    },
    "com.skysoft.removalfree": {
      tp: "timea",
      hx: "hxpda",
      id: "com.skysoft.removalfree.discount.unlimitedaccess"
    },
    MGhostLens: {
      tp: "timea",
      hx: "hxpda",
      id: "com.ghostlens.premium1month"
    },
    Luminous: {
      tp: "timea",
      hx: "hxpda",
      id: "com.spacemushrooms.weekly"
    },
    PerfectImage: {
      tp: "timea",
      hx: "hxpda",
      id: "Perfect_Image_VIP_Yearly"
    },
    moment: {
      tp: "timea",
      hx: "hxpda",
      id: "PYJMoment2"
    },
    HiddenBox: {
      tp: "timec",
      hx: "hxpdb",
      version: "1"
    },
    Synthesizer: {
      tp: "timea",
      hx: "hxpda",
      id: "com.qingxiu.synthesizer.mon"
    },
    ContractMaster: {
      tp: "timea",
      hx: "hxpda",
      id: "com.qingxiu.contracts.monthly"
    },
    MyDiary: {
      tp: "timea",
      hx: "hxpda",
      id: "diary.yearly.vip.1029"
    },
    Translator: {
      tp: "timea",
      hx: "hxpda",
      id: "trans_sub_week"
    },
    Idea: {
      tp: "timea",
      hx: "hxpda",
      id: "top.ideaapp.ideaiOS.membership.oneyear"
    },
    ZeroTuImg: {
      tp: "timea",
      hx: "hxpda",
      id: "ZeroTuImgPlus"
    },
    "com.traveltao.ExchangeAssistant": {
      tp: "timea",
      hx: "hxpda",
      id: "lxbyplus"
    },
    ServerKit: {
      tp: "timea",
      hx: "hxpda",
      id: "com.serverkit.subscription.year.a"
    },
    RawPlus: {
      tp: "timea",
      hx: "hxpda",
      id: "com.dynamicappdesign.rawplus.yearlysubscription"
    },
    OrderGenerator: {
      tp: "timeb",
      hx: "hxpda",
      id: "oder_pay_forever"
    },
    GenerateAllOrdersTool: {
      tp: "timea",
      hx: "hxpda",
      id: "Order_Vip_010"
    },
    MoMoShouZhang: {
      tp: "timea",
      hx: "hxpda",
      id: "shunchangshouzhangQuarterlyPlus"
    },
    Mindkit: {
      tp: "timeb",
      hx: "hxpda",
      id: "mindkit_permanently"
    },
    Miary: {
      tp: "timeb",
      hx: "hxpda",
      id: "lifetime_sub"
    },
    BingQiTools: {
      tp: "timea",
      hx: "hxpda",
      id: "bingqi_e2"
    },
    AnyDown: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.xiaoqi.down.forever"
    },
    Reader: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.xiaoqi.reader.forever"
    },
    "com.bestmusicvideo.formmaster": {
      tp: "timea",
      hx: "hxpda",
      id: "com.form.1yearvip"
    },
    ExcelSpreadSheetsWPS: {
      tp: "timea",
      hx: "hxpda",
      id: "com.turbocms.SimpleSpreadSheet.viponeyear"
    },
    XinQingRiJi: {
      tp: "timea",
      hx: "hxpda",
      id: "zhiwenshouzhangQuarterlyPlus"
    },
    Nutrilio: {
      tp: "timea",
      hx: "hxpda",
      id: "net.nutrilio.one_year_plus"
    },
    AIHeader: {
      tp: "timea",
      hx: "hxpda",
      id: "com.ai.avatar.maker.month.3dayfree"
    },
    MoodTracker: {
      tp: "timeb",
      hx: "hxpda",
      id: "co.vulcanlabs.moodtracker.lifetime2"
    },
    "com.dandelion.Routine": {
      tp: "timeb",
      hx: "hxpda",
      id: "membership"
    },
    YSBrowser: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.ys.pro"
    },
    "org.zrey.metion": {
      tp: "timed",
      hx: "hxpda",
      id: "org.zrey.metion.pro",
      ids: "org.zrey.metion.main"
    },
    ZenJournal: {
      tp: "timea",
      hx: "hxpda",
      id: "zen_pro"
    },
    "com.visualmidi.app.perfectpiano.Perfect-Piano": {
      tp: "timea",
      hx: "hxpda",
      id: "auto_renew_monthly_subscription"
    },
    Straw: {
      tp: "timea",
      hx: "hxpda",
      id: "com.1year.eyedropper"
    },
    vibee: {
      tp: "timea",
      hx: "hxpda",
      id: "com.vibee.year.bigchampagne"
    },
    DrumPads: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.gismart.drumpads.pro_lifetime_30"
    },
    WaterMaskCamera: {
      tp: "timea",
      hx: "hxpda",
      id: "com.camera.watermark.yearly.3dayfree"
    },
    SymbolKeyboard: {
      tp: "timeb",
      hx: "hxpda",
      id: "fronts.keyboard.singingfish.one"
    },
    "com.kuaijiezhilingdashi.appname": {
      tp: "timea",
      hx: "hxpda",
      id: "com.othermaster.yearlyvip"
    },
    LogInput: {
      tp: "timea",
      hx: "hxpda",
      id: "com.logcg.loginput"
    },
    HandNote: {
      tp: "timeb",
      hx: "hxpda",
      id: "permanent_membership"
    },
    Kilonotes: {
      tp: "timea",
      hx: "hxpda",
      id: "kipa_kilonotes_quarter_subscription"
    },
    YiJianKouTu: {
      tp: "timea",
      hx: "hxpda",
      id: "XiChaoYiJianKouTuPlus"
    },
    FileArtifact: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.shengzhou.fileartifact.permanent"
    },
    Wext: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.lmf.wext.life"
    },
    ColorCapture: {
      tp: "timeb",
      hx: "hxpda",
      id: "10001"
    },
    xTerminal: {
      tp: "timea",
      hx: "hxpda",
      id: "xterminal.pro2"
    },
    Fotoz: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.kiddy.fotoz.ipa.pro"
    },
    TheLastFilm: {
      tp: "timea",
      hx: "hxpda",
      id: "Filmroll_Pro_1Year"
    },
    Motivation: {
      tp: "timea",
      hx: "hxpda",
      id: "com.monkeytaps.motivation.premium.year3"
    },
    "io.sumi.GridDiary2": {
      tp: "timea",
      hx: "hxpda",
      id: "io.sumi.GridDiary.pro.annually"
    },
    "com.leapfitness.fasting": {
      tp: "timea",
      hx: "hxpda",
      id: "com.leapfitness.fasting.oneyear1"
    },
    WidgetBox: {
      tp: "timeb",
      hx: "hxpda",
      id: "widgetlab001"
    },
    LifeTracker: {
      tp: "timea",
      hx: "hxpda",
      id: "com.dk.lifetracker.yearplan"
    },
    imgplay: {
      tp: "timea",
      hx: "hxpda",
      id: "me.imgbase.imgplay.subscriptionYearly"
    },
    WaterMinder: {
      tp: "timea",
      hx: "hxpda",
      id: "waterminder.premiumYearly"
    },
    HashPhotos: {
      tp: "timeb",
      hx: "hxpda",
      id: "com.kobaltlab.HashPhotos.iap.proLifetime"
    },
    SilProject: {
      tp: "timea",
      hx: "hxpda",
      id: "com.sm.Alina.Pro"
    },
    "com.chenxi.shanniankapian": {
      tp: "timea",
      hx: "hxpda",
      id: "com.chenxi.shannian.superNian"
    },
    "com.risingcabbage.pro.camera": {
      tp: "timea",
      hx: "hxpda",
      id: "com.risingcabbage.pro.camera.yearlysubscription"
    },
    "co.bazaart.patternator": {
      tp: "timea",
      hx: "hxpda",
      id: "Patternator_Lock_Screen_Monthly"
    },
    "cn.linfei.SimpleRecorder": {
      tp: "timea",
      hx: "hxpda",
      id: "cn.linfei.SimpleRecorder.Plus"
    },
    "com.maliquankai.appdesign": {
      tp: "timec",
      hx: "hxpdb",
      version: "1.5.8"
    },
    BestColor: {
      tp: "timea",
      hx: "hxpda",
      id: "com.bestColor.tool.month"
    },
    "com.decibel.tool": {
      tp: "timea",
      hx: "hxpda",
      id: "decibel98free3"
    },
    MeasurementTools: {
      tp: "timea",
      hx: "hxpda",
      id: "mesurementyearvip"
    },
    TinyPNGTool: {
      tp: "timea",
      hx: "hxpda",
      id: "com.tinypngtool.tool.weekvip"
    },
    IconChange: {
      tp: "timea",
      hx: "hxpda",
      id: "iconeryearvip"
    },
    "com.floatcamellia.motionninja": {
      tp: "timea",
      hx: "hxpda",
      id: "com.floatcamellia.motionninja.yearlyvip"
    },
    "com.iuuapp.audiomaker": {
      tp: "timed",
      hx: "hxpda",
      id: "com.iuuapp.audiomaker.cloud.year",
      ids: "com.iuuapp.audiomaker.removeads"
    },
    "com.biggerlens.photoretouch": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.photoretouch.SVIP"
    },
    "com.macpaw.iosgemini": {
      tp: "timea",
      hx: "hxpda",
      id: "com.macpaw.iosgemini.month.trial"
    },
    "com.mematom.ios": {
      tp: "timea",
      hx: "hxpda",
      id: "MMYear"
    },
    "com.LuoWei.aDiary": {
      tp: "timea",
      hx: "hxpda",
      id: "com.LuoWei.aDiary.yearly0"
    },
    "com.zerone.hidesktop": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.zerone.hidesktop.forever"
    },
    MagicWidget: {
      tp: "timeb",
      hx: "hxpda",
      id: "cf__forever_0_4.7.1"
    },
    "com.tasmanic.capture": {
      tp: "timea",
      hx: "hxpda",
      id: "CTPCAPTUREYEARLY"
    },
    "com.readdle.CalendarsLite": {
      tp: "timea",
      hx: "hxpda",
      id: "com.readdle.CalendarsLite.subscription.year20trial7"
    },
    "com.readdle.ReaddleDocsIPad": {
      tp: "timea",
      hx: "hxpda",
      id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers"
    },
    "com.1ps.lovetalk": {
      tp: "timea",
      hx: "hxpda",
      id: "com.1ps.lovetalk.normal.weekly"
    },
    "tech.miidii.MDClock": {
      tp: "timeb",
      hx: "hxpda",
      id: "tech.miidii.MDClock.pro"
    },
    "com.floatcamellia.prettyup": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.floatcamellia.prettyup.onetimepurchase"
    },
    "com.zijayrate.analogcam": {
      tp: "timea",
      hx: "hxpda",
      id: "com.zijayrate.analogcam.vipforever10"
    },
    "net.daylio.Daylio": {
      tp: "timea",
      hx: "hxpda",
      id: "net.daylio.one_year_pro.offer_initial"
    },
    "com.palmmob.pdfios": {
      tp: "timea",
      hx: "hxpda",
      id: "com.palmmob.pdfios.168"
    },
    "com.palmmob.scanner2ios": {
      tp: "timea",
      hx: "hxpda",
      id: "com.palmmob.scanner2ios.396"
    },
    "com.palmmob.officeios": {
      tp: "timea",
      hx: "hxpda",
      id: "com.palmmob.officeios.188"
    },
    "com.palmmob.recorder": {
      tp: "timea",
      hx: "hxpda",
      id: "com.palmmob.recorder.198"
    },
    "com.7color.newclean": {
      tp: "timea",
      hx: "hxpda",
      id: "com.cleaner.salesyear"
    },
    Habbit: {
      tp: "timea",
      hx: "hxpda",
      id: "HabitUpYearly"
    },
    "com.dbmeterpro.dB-Meter-Free": {
      tp: "timea",
      hx: "hxpda",
      id: "com.dbmeterpro.premiumModeSubscriptionWithTrial"
    },
    "com.vstudio.newpuzzle": {
      tp: "timea",
      hx: "hxpda",
      id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99"
    },
    "com.ziheng.OneBox": {
      tp: "timeb",
      hx: "hxpda",
      id: "com.ziheng.OneBox"
    },
    ChickAlarmClock: {
      tp: "timeb",
      hx: "hxpda",
      id: "Lifetime_Promotion"
    },
    "com.CalculatorForiPad.InternetRocks": {
      tp: "timea",
      hx: "hxpda",
      id: "co.airapps.calculator.year"
    },
    SuperWidget: {
      tp: "timea",
      hx: "hxpda",
      id: "com.focoslive"
    },
    Picsew: {
      tp: "timeb",
      hx: "hxpdb",
      id: "com.sugarmo.ScrollClip.pro"
    },
    vpn: {
      tp: "timea",
      hx: "hxpda",
      id: "yearautorenew"
    },
    TT: {
      tp: "timea",
      hx: "hxpda",
      id: "com.55panda.hicalculator.year_sub"
    },
    Focos: {
      tp: "timea",
      hx: "hxpda",
      id: "com.focos.1w_t4_1w"
    },
    ProKnockOut: {
      tp: "timed",
      hx: "hxpda",
      id: "com.knockout.SVIP.50off",
      ids: "com.knockout.1year.AIVIP"
    },
    "com.teadoku.flashnote": {
      tp: "timea",
      hx: "hxpda",
      id: "pro_ios_ipad_mac"
    }
  };
  const autoMap = {
    year: ["com.internet-rocks", "co.airapps"],
    yearly: ["com.pocket"],
    yearlysubscription: ["solutions.wzp"],
    lifetime: ["co.vulcanlabs"],
    forever: []
  };
  const nullExpireApps = [];
  const purchase = "2025-09-09T09:09:09Z";
  const expiration = "2099-09-09T09:09:09Z";
  const AutoID = {
    year: bid => `${bid}.year`,
    yearly: bid => `${bid}.yearly`,
    yearlysubscription: bid => `${bid}.yearlysubscription`,
    lifetime: bid => `${bid}.lifetime`,
    forever: bid => `${bid}.Forever`
  };
  for (const type in autoMap) {
    autoMap[type].forEach(key => {
      if (!list[key]) {
        const isForever = ["lifetime", "forever"].includes(type);
        list[key] = {
          tp: isForever ? "timeb" : "timea",
          hx: "hxpda",
          auto: true,
          autoType: type
        };
      }
    });
  }
  function rand(len) {
    let s = "";
    for (let i = 0; i < len; i++) {
      s += Math.floor(Math.random() * 10);
    }
    return s;
  }
  function format(time) {
    return time.toISOString().replace(/\.\d{3}Z$/, "Z").replace("T", " ").replace("Z", " Etc/GMT");
  }
  function formatPST(time) {
    let pst = new Date(time.getTime() - 25200000);
    return pst.toISOString().replace(/\.\d{3}Z$/, "Z").replace("T", " ").replace("Z", " America/Los_Angeles");
  }
  let now = new Date(purchase);
  let start = new Date(now.getTime() - 60000);
  let expire = new Date(now.getTime() + 315360000000);
  let fixedExpire = new Date(expiration);
  let transactionid = "49000" + rand(10);
  var encode_version = "jsjiami.com.v5";
  function build(_0x4e187d, _0x160040, _0xead6ae, _0xa6d44e, _0x2a4624, _0xfff05) {
    if (!(_0x160040 instanceof Date) || isNaN(_0x160040)) {
      _0x160040 = new Date();
    }
    if (!(_0xead6ae instanceof Date) || isNaN(_0xead6ae)) {
      _0xead6ae = new Date(_0x160040.getTime() + 86400000);
    }
    let _0xbd7db0 = _0x2a4624 ? _0xead6ae : fixedExpire;
    let _0x5a5466 = new Date(_0x160040.getTime() - 1000);
    let _0x216273 = {
      quantity: "1",
      transaction_id: transactionid,
      original_transaction_id: transactionid,
      purchase_date: format(_0x160040),
      purchase_date_ms: String(_0x160040.getTime()),
      purchase_date_pst: formatPST(_0x160040),
      product_id: _0x4e187d,
      is_trial_period: "false",
      is_in_intro_offer_period: "false",
      in_app_ownership_type: "PURCHASED",
      web_order_line_item_id: "49000" + rand(10),
      original_purchase_date: format(_0x5a5466),
      original_purchase_date_ms: String(_0x5a5466.getTime()),
      original_purchase_date_pst: formatPST(_0x5a5466)
    };
    if (_0xa6d44e === "timea" || _0xa6d44e === "timed") {
      _0x216273.expires_date = format(_0xbd7db0);
      _0x216273.expires_date_ms = String(_0xbd7db0.getTime());
      _0x216273.expires_date_pst = formatPST(_0xbd7db0);
    }
    if (_0xa6d44e === "timeb" && _0xfff05) {
      _0x216273.expires_date = null;
      _0x216273.expires_date_ms = null;
      _0x216273.expires_date_pst = null;
    }
    return _0x216273;
  }
  function buildHistory(_0x3937dd, _0x3c7a6a, _0x408311, _0x49e8e3) {
    let _0x152517 = now;
    let _0x5d8181 = start;
    if (_0x408311 === "auto") {
      _0x152517 = new Date();
      _0x5d8181 = new Date(_0x152517.getTime() - 60000);
    }
    if (_0x408311 === "fix") {
      _0x152517 = new Date(purchase);
      _0x5d8181 = new Date(_0x152517.getTime() - 60000);
    }
    if (!_0x408311) {
      return [build(_0x3937dd, _0x152517, expire, _0x3c7a6a, false, _0x49e8e3)];
    }
    let _0x13bab7 = 31536000000;
    let _0x3d14bc = new Date(_0x152517.getTime() - _0x13bab7);
    let _0x2bb52d = new Date(_0x3d14bc.getTime() + _0x13bab7);
    let _0x196d1b = _0x3c7a6a === "timeb" ? "timea" : _0x3c7a6a;
    return [build(_0x3937dd, _0x3d14bc, _0x2bb52d, _0x196d1b, true, _0x49e8e3), build(_0x3937dd, _0x152517, expire, _0x3c7a6a, true, _0x49e8e3)];
  }
  function fakeReceipt() {
    let _0x31dc16 = "receipt_" + Date.now() + "_" + Math.random();
    return btoa(_0x31dc16 + _0x31dc16);
  }
  for (const i in list) {
    const regex = new RegExp("^" + i, "i");
    if (regex.test(ua) || regex.test(bundle_id)) {
      let {
        tp,
        hx,
        id,
        ids,
        version,
        strict,
        auto,
        autoType
      } = list[i];
      if (auto && autoType && AutoID[autoType]) {
        id = AutoID[autoType](bundle_id);
      }
      const forceNull = nullExpireApps.includes(i);
      let history = buildHistory(id, tp, strict, forceNull);
      let latest = history[history.length - 1];
      switch (tp) {
        case "timea":
          data = [latest];
          break;
        case "timeb":
          data = [latest];
          break;
        case "timec":
          data = [];
          break;
        case "timed":
          data = [build(ids, new Date(latest.purchase_date_ms), expire, "timed", strict, forceNull), latest];
          break;
      }
      if (hx.includes("hxpda")) {
        ddm.receipt.in_app = data;
        ddm.latest_receipt_info = strict ? history : data;
        ddm.pending_renewal_info = [{
          product_id: id,
          original_transaction_id: transactionid,
          auto_renew_product_id: id,
          auto_renew_status: "1"
        }];
        ddm.latest_receipt = fakeReceipt();
      } else {
        if (hx.includes("hxpdb")) {
          ddm.receipt.in_app = data;
        } else {
          if (hx.includes("hxpdc")) {
            const patch = {
              expires_date_formatted: format(fixedExpire),
              expires_date: String(fixedExpire.getTime()),
              expires_date_formatted_pst: formatPST(fixedExpire),
              purchase_date: format(now),
              purchase_date_ms: String(now.getTime()),
              purchase_date_pst: formatPST(now),
              original_purchase_date: format(start),
              original_purchase_date_ms: String(start.getTime()),
              original_purchase_date_pst: formatPST(start),
              transaction_id: transactionid,
              original_transaction_id: transactionid,
              web_order_line_item_id: "49000" + rand(10),
              product_id: id,
              in_app_ownership_type: "PURCHASED",
              is_trial_period: "false",
              is_in_intro_offer_period: "false"
            };
            ddm.receipt = Object.assign({}, ddm.receipt, patch);
            ddm.latest_receipt_info = Object.assign({}, ddm.receipt);
            ddm.status = 0;
          }
        }
      }
      if (version && version.trim() !== "") {
        ddm.receipt.original_application_version = version;
      }
      anchor = true;
      console.log("恭喜您，已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/ddm1023");
      break;
    }
  }
  (function (_0xf0ef8f, _0x115283, _0xfb3239) {
    _0xfb3239 = "al";
    try {
      {
        _0xfb3239 += "ert";
        _0x115283 = encode_version;
        if (!(typeof _0x115283 !== "undefined" && _0x115283 === "jsjiami.com.v5")) {
          _0xf0ef8f[_0xfb3239]("删除版本号，js会定期弹窗，还请支持我们的工作");
        }
      }
    } catch (_0x161118) {
      _0xf0ef8f[_0xfb3239]("删除版本号，js会定期弹窗");
    }
  })(window);
  encode_version = "jsjiami.com.v5";
  if (!anchor) {
    const inApp = ddm.receipt.in_app || [];
    if (inApp.length > 0) {
      let updated = false;
      for (const item of inApp) {
        if (item.product_id) {
          if (!item.expires_date) {
            console.log("✅ 存在永久订阅或无到期时间，跳过修改 🎉");
            $done({});
            return;
          }
          const expireTime = item.expires_date_ms ? Number(item.expires_date_ms) : 0;
          if (expireTime < Date.now()) {
            item.expires_date = format(fixedExpire);
            item.expires_date_ms = String(fixedExpire.getTime());
            item.expires_date_pst = formatPST(fixedExpire);
            updated = true;
          }
        }
      }
      if (updated) {
        console.log("⚠️ 发现订阅已过期，已更新到期时间 🎉");
      } else {
        console.log("✅ 存在有效订阅，无需修改 🎉");
      }
    } else {
      let fallbackId = AutoID.yearly(bundle_id);
      let history = buildHistory(fallbackId, "timea", false, false);
      let latest = history[0];
      latest.expires_date = format(fixedExpire);
      latest.expires_date_ms = String(fixedExpire.getTime());
      latest.expires_date_pst = formatPST(fixedExpire);
      ddm.receipt.in_app = [latest];
      ddm.latest_receipt_info = [latest];
      ddm.pending_renewal_info = [{
        product_id: fallbackId,
        original_transaction_id: transactionid,
        auto_renew_product_id: fallbackId,
        auto_renew_status: "1"
      }];
      console.log("❌ 未识别有效订阅，已使用备用方案🎉🎉🎉\n叮当猫の分享频道: https://t.me/ddm1023");
    }
  }
  $done({
    body: JSON.stringify(ddm || {})
  });
})();