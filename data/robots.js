/* 由 Excel 导出的机型数据，勿手动编辑 */
(function (global) {
  "use strict";
  const ROBOTS = [
  {
    "no": "NO.372",
    "brand": "自变量机器人",
    "model": "量子二号",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.373",
    "brand": "自变量机器人",
    "model": "五指灵巧手",
    "category": "灵巧手",
    "subcategory": "灵巧手/功能部件",
    "feature": ""
  },
  {
    "no": "NO.152",
    "brand": "追觅科技",
    "model": "追觅人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "家电巨头跨界布局的人形机器人"
  },
  {
    "no": "NO.305",
    "brand": "追觅科技",
    "model": "LimX Oli",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.023",
    "brand": "逐际动力",
    "model": "逐际动力P1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "足式机器人全形态技术公司"
  },
  {
    "no": "NO.153",
    "brand": "逐际动力",
    "model": "TRON1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "逐际动力首款全尺寸高动态人形机器人"
  },
  {
    "no": "NO.154",
    "brand": "逐际动力",
    "model": "CL-1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "逐际动力双足人形机器人技术验证平台"
  },
  {
    "no": "NO.280",
    "brand": "逐际动力",
    "model": "TRON 2",
    "category": "双足人形机器人",
    "subcategory": "轮足融合",
    "feature": "多形态具身机器人，双足/双轮足自由切换，LimX COSA操作系统赋予自主决策能力"
  },
  {
    "no": "NO.304",
    "brand": "逐际动力",
    "model": "LimX Luna",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.018",
    "brand": "众擎机器人",
    "model": "众擎PM01",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "全栈自研关节的运动型人形"
  },
  {
    "no": "NO.274",
    "brand": "众擎机器人",
    "model": "SE01",
    "category": "双足人形机器人",
    "subcategory": "双足人形",
    "feature": "全球首款实现自然拟人步态行走的通用人形机器人，面向教育科研"
  },
  {
    "no": "NO.275",
    "brand": "众擎机器人",
    "model": "T800",
    "category": "双足人形机器人",
    "subcategory": "双足人形",
    "feature": "18万元起全尺寸高动态通用人形机器人，全栈自研关节+固态电池，产能15分钟一台"
  },
  {
    "no": "NO.318",
    "brand": "众擎机器人",
    "model": "T800护甲配件",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.319",
    "brand": "众擎机器人",
    "model": "SA01",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.327",
    "brand": "众擎机器人",
    "model": "JSO1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.220",
    "brand": "中信重工",
    "model": "四足巡检机器人 / 阿信人形机器人",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "国家级特种机器人领军企业，4+6+N产业体系覆盖高危全场景"
  },
  {
    "no": "NO.267",
    "brand": "中坚科技",
    "model": "灵睿P1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "专注电力巡检与安防的工业四足机器人"
  },
  {
    "no": "NO.004",
    "brand": "智元机器人",
    "model": "远征A2旗舰版",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "2026上半年全球出货量最高的人形机器人"
  },
  {
    "no": "NO.005",
    "brand": "智元机器人",
    "model": "灵犀X2",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "灵动活泼的中型人形机器人"
  },
  {
    "no": "NO.143",
    "brand": "智元机器人",
    "model": "精灵G1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "面向重载工业场景的旗舰双足人形机器人"
  },
  {
    "no": "NO.144",
    "brand": "智元机器人",
    "model": "远征A3",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "高性价比通用型工业人形机器人"
  },
  {
    "no": "NO.145",
    "brand": "智元机器人",
    "model": "灵犀X1",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "面向科研教育的轻量化开源人形机器人"
  },
  {
    "no": "NO.309",
    "brand": "智元机器人",
    "model": "精灵G1Max",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.310",
    "brand": "智元机器人",
    "model": "精灵G2",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.317",
    "brand": "智元机器人",
    "model": "远征A2青春版",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.328",
    "brand": "智元机器人",
    "model": "D1 Pro",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.329",
    "brand": "智元机器人",
    "model": "D1 Ultra",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.330",
    "brand": "智元机器人",
    "model": "D1 Max",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.331",
    "brand": "智元机器人",
    "model": "D1  Max Pro",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.334",
    "brand": "智元机器人",
    "model": "远征A3Ultre",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.395",
    "brand": "智身科技",
    "model": "钢镚 L1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.396",
    "brand": "智身科技",
    "model": "钢镚 L1-W",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.397",
    "brand": "智身科技",
    "model": "钢镚 L2",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.398",
    "brand": "智身科技",
    "model": "铜锤 M1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.399",
    "brand": "智身科技",
    "model": "铅球 SP1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.400",
    "brand": "智身科技",
    "model": "银毅 NE01",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.017",
    "brand": "智平方",
    "model": "智平方AlphaBot",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "粤港澳大湾区200亿独角兽"
  },
  {
    "no": "NO.377",
    "brand": "智平方",
    "model": "AlphaBot",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.030",
    "brand": "云深处科技",
    "model": "云深处绝影X30",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "工业四足巡检领域的绝对龙头"
  },
  {
    "no": "NO.033",
    "brand": "云深处科技",
    "model": "云深处山猫(Lynx)",
    "category": "四足/多足机器人",
    "subcategory": "轮足融合机器人",
    "feature": "轮足一体化的创新形态"
  },
  {
    "no": "NO.270",
    "brand": "云深处科技",
    "model": "山猫M20 (Lynx M20)",
    "category": "四足/多足机器人",
    "subcategory": "轮足机器人",
    "feature": "全球首款获CES创新奖的轮足机器人，全地形极速越野"
  },
  {
    "no": "NO.272",
    "brand": "云深处科技",
    "model": "山猫S10 (Lynx S10)",
    "category": "四足/多足机器人",
    "subcategory": "轮足机器人",
    "feature": "单人可携的轻量轮足机器人，灵活部署新标杆"
  },
  {
    "no": "NO.286",
    "brand": "云深处科技",
    "model": "DR02",
    "category": "双足人形机器人",
    "subcategory": "双足人形",
    "feature": "全球首款IP66全天候行业级人形机器人，可在雨雪粉尘极端环境持续作业"
  },
  {
    "no": "NO.306",
    "brand": "云深处科技",
    "model": "DR01",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.273",
    "brand": "越疆机器人",
    "model": "Rover X1",
    "category": "四足/多足机器人",
    "subcategory": "轮足融合",
    "feature": "7499元全球首款家庭智能体轮足机器人，跑步新搭子走进消费市场"
  },
  {
    "no": "NO.332",
    "brand": "越疆机器人",
    "model": "越疆 rover x1 机器狗",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.364",
    "brand": "越疆机器人",
    "model": "Atom",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.365",
    "brand": "越疆机器人",
    "model": "Hexplorer 六足仿生机器人",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.001",
    "brand": "宇树科技",
    "model": "宇树G1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "会后空翻的迷你人形机器人"
  },
  {
    "no": "NO.002",
    "brand": "宇树科技",
    "model": "宇树H1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "宇树首款全尺寸人形机器人"
  },
  {
    "no": "NO.003",
    "brand": "宇树科技",
    "model": "宇树R1",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "把人形机器人价格打到三万以内"
  },
  {
    "no": "NO.027",
    "brand": "宇树科技",
    "model": "宇树Go2",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "最畅销的消费级四足机器人"
  },
  {
    "no": "NO.029",
    "brand": "宇树科技",
    "model": "宇树A2",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "轻量化工业四足新选择"
  },
  {
    "no": "NO.307",
    "brand": "宇树科技",
    "model": "宇树H2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.311",
    "brand": "宇树科技",
    "model": "宇树H2  Plus",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.312",
    "brand": "宇树科技",
    "model": "宇树H2-D",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.313",
    "brand": "宇树科技",
    "model": "宇树R1-A",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.314",
    "brand": "宇树科技",
    "model": "宇树G1-D",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.315",
    "brand": "宇树科技",
    "model": "宇树G1 Comp",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.316",
    "brand": "宇树科技",
    "model": "铁甲拳王",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.320",
    "brand": "宇树科技",
    "model": "AS2",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.321",
    "brand": "宇树科技",
    "model": "GO1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.322",
    "brand": "宇树科技",
    "model": "A1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.323",
    "brand": "宇树科技",
    "model": "B2",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.324",
    "brand": "宇树科技",
    "model": "B1",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.325",
    "brand": "宇树科技",
    "model": "Aliengo",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.009",
    "brand": "优必选",
    "model": "Walker S",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "最早进入车厂实训的国产人形机器人"
  },
  {
    "no": "NO.139",
    "brand": "优必选",
    "model": "Walker S2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "面向工业智造的新一代全尺寸人形机器人"
  },
  {
    "no": "NO.140",
    "brand": "优必选",
    "model": "Walker X",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "历经多代迭代的经典服务人形机器人"
  },
  {
    "no": "NO.336",
    "brand": "优必选",
    "model": "Walker S1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.338",
    "brand": "优必选",
    "model": "Walker C",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.339",
    "brand": "优必选",
    "model": "Walker C1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.340",
    "brand": "优必选",
    "model": "Cruzr Y1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.341",
    "brand": "优必选",
    "model": "Cruzr S2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.343",
    "brand": "优必选",
    "model": "熊猫机器人优悠",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.344",
    "brand": "优必选",
    "model": "凌夜",
    "category": "仿生机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.346",
    "brand": "优必选",
    "model": "小优",
    "category": "仿生机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.388",
    "brand": "优宝特",
    "model": "Y10",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.389",
    "brand": "优宝特",
    "model": "E15",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.390",
    "brand": "优宝特",
    "model": "Y20",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.391",
    "brand": "优宝特",
    "model": "Y20-W",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.392",
    "brand": "优宝特",
    "model": "Y25",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.393",
    "brand": "优宝特",
    "model": "Y30-W",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.394",
    "brand": "优宝特",
    "model": "E1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.212",
    "brand": "优艾智合",
    "model": "YOYOTRON 人形机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "全球首款一脑多态架构跨场景集群操作人形机器人"
  },
  {
    "no": "NO.010",
    "brand": "银河通用",
    "model": "银河通用Galbot G1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "会看视频自学技能的零售服务机器人"
  },
  {
    "no": "NO.148",
    "brand": "银河通用",
    "model": "Galbot S1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "面向零售和工业的第二代轮式人形机器人"
  },
  {
    "no": "NO.156",
    "brand": "星海图",
    "model": "H1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "星海图轻量化双足人形机器人"
  },
  {
    "no": "NO.277",
    "brand": "星海图",
    "model": "R1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "星海图R1系列基础款轮式双臂平台，高性价比具身智能开发底座"
  },
  {
    "no": "NO.278",
    "brand": "星海图",
    "model": "R1 Lite",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "星海图R1系列数据采集专用平台，高效支撑VLA模型训练数据飞轮"
  },
  {
    "no": "NO.279",
    "brand": "星海图",
    "model": "R1 Pro",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "清华系一脑多形轮式人形机器人，G0开源VLA模型赋能，李飞飞团队采用"
  },
  {
    "no": "NO.011",
    "brand": "星动纪元",
    "model": "星动L5",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "清华系高动态人形机器人"
  },
  {
    "no": "NO.146",
    "brand": "星动纪元",
    "model": "星动Q5",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "STAR1升级款，灵巧操作能力大幅提升"
  },
  {
    "no": "NO.147",
    "brand": "星动纪元",
    "model": "星动M7",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "面向家庭和教育的小型高性价比人形机器人"
  },
  {
    "no": "NO.352",
    "brand": "星动纪元",
    "model": "星动XHAND 1 Lite",
    "category": "灵巧手",
    "subcategory": "灵巧手/功能部件",
    "feature": ""
  },
  {
    "no": "NO.353",
    "brand": "星动纪元",
    "model": "星动XHAND 1 PRO",
    "category": "灵巧手",
    "subcategory": "灵巧手/功能部件",
    "feature": ""
  },
  {
    "no": "NO.354",
    "brand": "星动纪元",
    "model": "星动XHAND 1",
    "category": "灵巧手",
    "subcategory": "灵巧手/功能部件",
    "feature": ""
  },
  {
    "no": "NO.366",
    "brand": "星尘智能机器人",
    "model": "S1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.016",
    "brand": "小鹏鹏行",
    "model": "小鹏IRON",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "从智能汽车走出的人形机器人"
  },
  {
    "no": "NO.015",
    "brand": "小米",
    "model": "小米CyberOne（铁大）",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "小米的人形机器人探索者"
  },
  {
    "no": "NO.284",
    "brand": "小米",
    "model": "CyberDog 2（铁蛋2代）",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "小米仿生四足机器人，让机器狗走进千家万户"
  },
  {
    "no": "NO.216",
    "brand": "五八智能",
    "model": "大圣人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "兵器工业集团旗下，面向高危特种场景的遥操作人形机器人"
  },
  {
    "no": "NO.218",
    "brand": "五八智能",
    "model": "天狼Q5 / Q10W / Q25",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "兵器工业集团旗下工业四足龙头，天狼系列覆盖安防巡逻到农业全场景"
  },
  {
    "no": "NO.034",
    "brand": "蔚蓝智能",
    "model": "BabyAlpha A2",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "较早进入消费级市场的机器狗品牌"
  },
  {
    "no": "NO.265",
    "brand": "蔚蓝智能",
    "model": "BabyAlpha chat",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "2026新一代家庭陪伴机器狗，AI让陪伴更有温度"
  },
  {
    "no": "NO.383",
    "brand": "蔚蓝智能",
    "model": "C",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.384",
    "brand": "蔚蓝智能",
    "model": "BabyAlpha Dev-Q",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.385",
    "brand": "蔚蓝智能",
    "model": "BabyAlpha Dev-B",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.386",
    "brand": "蔚蓝智能",
    "model": "BabyAlpha Dev-WQ",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.335",
    "brand": "维他动力",
    "model": "vbot",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": ""
  },
  {
    "no": "NO.025",
    "brand": "拓斯达",
    "model": "拓斯达小拓(TWH020)",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "工业母机基因的人形机器人"
  },
  {
    "no": "NO.282",
    "brand": "拓斯达",
    "model": "星仔",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "工业级大负载四足，80kg动态负载行业领先"
  },
  {
    "no": "NO.283",
    "brand": "拓斯达",
    "model": "TDM020人形双臂机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "负载自重比0.67远超行业水平的人形双臂机器人，桌面级高精度操作"
  },
  {
    "no": "NO.356",
    "brand": "天链机器人",
    "model": "T1 双足人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.357",
    "brand": "天链机器人",
    "model": "Y1轮式折叠升降机器",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.359",
    "brand": "天链机器人",
    "model": "Y2-B双臂俯仰机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.360",
    "brand": "天链机器人",
    "model": "Y2-M双臂升降机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.361",
    "brand": "天链机器人",
    "model": "Y2-P双臂俯仰升降机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.362",
    "brand": "天链机器人",
    "model": "Y4定桩数采双臂机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.264",
    "brand": "腾讯",
    "model": "Robotics X Max 2",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "腾讯机器人实验室教育开放平台，探索AI与运动融合"
  },
  {
    "no": "NO.006",
    "brand": "特斯拉",
    "model": "特斯拉Optimus Gen 2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "马斯克的人形机器人梦想"
  },
  {
    "no": "NO.167",
    "brand": "钛虎机器人",
    "model": "钛虎人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "深耕关节驱动技术的人形机器人企业"
  },
  {
    "no": "NO.020",
    "brand": "松延动力",
    "model": "松延动力Bumi",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "首个把双足人形打到一万元以下的品牌"
  },
  {
    "no": "NO.158",
    "brand": "数字华夏",
    "model": "N2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "以情感交互为特色的服务人形机器人"
  },
  {
    "no": "NO.035",
    "brand": "申昊科技",
    "model": "申昊S400",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "电力配网巡检细分专家"
  },
  {
    "no": "NO.159",
    "brand": "上理追羿",
    "model": "追羿人形",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "产学研结合的上海本土人形机器人"
  },
  {
    "no": "NO.170",
    "brand": "清宝动力",
    "model": "清宝人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "清华系高动态人形机器人创业公司"
  },
  {
    "no": "NO.281",
    "brand": "千寻智能",
    "model": "Moz1（墨子）",
    "category": "双足人形机器人",
    "subcategory": "双足人形",
    "feature": "国内首款高性能全身力控人形机器人，VLA大模型驱动，宁德时代产线量产验证"
  },
  {
    "no": "NO.036",
    "brand": "七腾机器人",
    "model": "防爆四足机器人-X3 Stable",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "防爆特种四足机器人的标杆"
  },
  {
    "no": "NO.387",
    "brand": "七腾机器人",
    "model": "七腾机器人",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.378",
    "brand": "普渡科技",
    "model": "PUDU D5",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.379",
    "brand": "普渡科技",
    "model": "闪电匣Adrm",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.381",
    "brand": "普渡科技",
    "model": "PUDU D9",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.382",
    "brand": "普渡科技",
    "model": "PUDU D7",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.026",
    "brand": "帕西尼感知",
    "model": "TORA-ONE",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "以触觉感知为核心的人形机器人"
  },
  {
    "no": "NO.157",
    "brand": "帕西尼",
    "model": "TORA-DOUBLE ONE",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "以触觉感知为核心的人形机器人"
  },
  {
    "no": "NO.022",
    "brand": "魔法原子",
    "model": "魔法原子MagicBot",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "量产能力快速爬升的人形新锐"
  },
  {
    "no": "NO.375",
    "brand": "络石机器人",
    "model": "轮式双臂机器人Helios",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.376",
    "brand": "络石机器人",
    "model": "人形机器人Human.X",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.333",
    "brand": "灵宝机器人",
    "model": "02",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.355",
    "brand": "灵宝机器人",
    "model": "W1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.149",
    "brand": "乐聚机器人",
    "model": "KUAVO 4Pro",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "乐聚首款全尺寸双足人形机器人开源平台"
  },
  {
    "no": "NO.150",
    "brand": "乐聚机器人",
    "model": "KUAVO 5 / 5-W",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "乐聚全尺寸高动态人形机器人"
  },
  {
    "no": "NO.348",
    "brand": "乐聚机器人",
    "model": "ROBAN 2",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.349",
    "brand": "乐聚机器人",
    "model": "AELOS 开源鸿蒙版",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.350",
    "brand": "乐聚机器人",
    "model": "AELOS Embodied",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.351",
    "brand": "乐聚机器人",
    "model": "AELOS LM",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.166",
    "brand": "跨维智能",
    "model": "跨维人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "以Sim2Real为核心的人形机器人公司"
  },
  {
    "no": "NO.021",
    "brand": "开普勒机器人",
    "model": "开普勒Kepler S1",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "面向工业场景的先行者"
  },
  {
    "no": "NO.219",
    "brand": "具微科技",
    "model": "特种工业四足机器人",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "杭州四小狗核心成员，四防特种四足机器人深耕高危工业场景"
  },
  {
    "no": "NO.262",
    "brand": "晶品特装",
    "model": "JP-DOG800",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "多任务作战机器狗，侦察排爆一肩挑"
  },
  {
    "no": "NO.358",
    "brand": "节卡机器人",
    "model": "JAKA π",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.367",
    "brand": "节卡机器人",
    "model": "JAKA Kargo",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.368",
    "brand": "节卡机器人",
    "model": "JAKA Lumi",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.261",
    "brand": "建设工业",
    "model": "机器狼",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "中国首款列装陆军的军用机器狼，量子保密通信"
  },
  {
    "no": "NO.019",
    "brand": "加速进化",
    "model": "加速进化Booster K1",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "支持零编程示教的人形开发平台"
  },
  {
    "no": "NO.168",
    "brand": "慧灵科技",
    "model": "H-robot-3",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "协作机器人老兵转型人形机器人"
  },
  {
    "no": "NO.259",
    "brand": "哈崎机器人",
    "model": "hachibot",
    "category": "四足/多足机器人",
    "subcategory": "消费级四足",
    "feature": "有情感的机器狗，做人类最忠实的伙伴"
  },
  {
    "no": "NO.214",
    "brand": "高擎机电",
    "model": "Mini Hi / Mini Pi Plus",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "万元级迷你人形机器人，科研教育领域的高性价比开放平台"
  },
  {
    "no": "NO.151",
    "brand": "钢铁侠科技",
    "model": "ARTBOT",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "专注运动控制的国产双足人形机器人"
  },
  {
    "no": "NO.012",
    "brand": "傅利叶",
    "model": "傅利叶GR-2",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "从康复机器人走出的通用人形"
  },
  {
    "no": "NO.013",
    "brand": "傅利叶",
    "model": "傅利叶GR-3",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": "首款主打交互陪伴的人形机器人"
  },
  {
    "no": "NO.276",
    "brand": "傅利叶",
    "model": "GRW轮式双臂机器人",
    "category": "双足人形机器人",
    "subcategory": "双足人形",
    "feature": "国内首款实现量产交付的通用双足人形机器人，开启中国人形机器人商业化元年"
  },
  {
    "no": "NO.141",
    "brand": "达闼科技",
    "model": "XR-4",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "基于云端大脑的新一代服务人形机器人"
  },
  {
    "no": "NO.142",
    "brand": "达闼科技",
    "model": "Cloud Ginger XP",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "已规模部署的云端智能服务人形机器人"
  },
  {
    "no": "NO.268",
    "brand": "达闼科技",
    "model": "XR-1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "全球首款云端智能人形机器人，柔性关节+云端大脑架构开创行业先河"
  },
  {
    "no": "NO.014",
    "brand": "达闼机器人",
    "model": "达闼Cloud Ginger",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "云端大脑驱动的服务人形机器人"
  },
  {
    "no": "NO.007",
    "brand": "波士顿动力",
    "model": "波士顿动力Atlas（电动版）",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "运动控制的天花板"
  },
  {
    "no": "NO.171",
    "brand": "必趣机器人",
    "model": "必趣人形机器人",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "致力于降低人形机器人门槛的新锐企业"
  },
  {
    "no": "NO.024",
    "brand": "北京人形机器人创新中心",
    "model": "天工3.0",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "国家级人形机器人创新平台"
  },
  {
    "no": "NO.347",
    "brand": "北京人形机器人创新中心",
    "model": "天轶2.0",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.209",
    "brand": "艾利特",
    "model": "Centaur-G1",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": "工业级轮式人形先行者，聚焦光模块与AI Infra精密制造"
  },
  {
    "no": "NO.369",
    "brand": "埃斯顿机器人",
    "model": "双臂人形机器人平台HR-B5-U",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.370",
    "brand": "埃斯顿机器人",
    "model": "双臂工业具身智能机器人",
    "category": "双足人形机器人",
    "subcategory": "轮式人形",
    "feature": ""
  },
  {
    "no": "NO.008",
    "brand": "Figure AI",
    "model": "Figure 02",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": "率先进入汽车工厂的美国人形机器人"
  },
  {
    "no": "NO.401",
    "brand": "松延动力",
    "model": "N2 运动健将",
    "category": "双足人形机器人",
    "subcategory": "中小尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.402",
    "brand": "松延动力",
    "model": "E1 极客先锋",
    "category": "双足人形机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.403",
    "brand": "松延动力",
    "model": "小诺",
    "category": "仿生机器人",
    "subcategory": "全尺寸双足人形",
    "feature": ""
  },
  {
    "no": "NO.404",
    "brand": "松延动力",
    "model": "W1",
    "category": "仿生机器人",
    "subcategory": "",
    "feature": ""
  },
  {
    "no": "NO.038",
    "brand": "雷神智能装备",
    "model": "雷神TR-60",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": "融合军工技术的特种四足"
  },
  {
    "no": "NO.405",
    "brand": "云深处科技",
    "model": "绝影lite3",
    "category": "四足/多足机器人",
    "subcategory": "工业四足",
    "feature": ""
  },
  {
    "no": "NO.406",
    "brand": "慧灵科技",
    "model": "H-robot-1",
    "category": "双足人形机器人",
    "subcategory": "",
    "feature": ""
  }
];
  if (typeof module !== "undefined" && module.exports) module.exports = ROBOTS;
  global.ROBOTS = ROBOTS;
})(typeof window !== "undefined" ? window : this);
