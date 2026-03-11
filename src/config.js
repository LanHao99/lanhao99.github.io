const config = {
	//网页元数据
	metaData: {
		title: 'LanHao的个人主页🎉',
		description: '欢迎来到LanHao的奇妙世界！',
		keywords: 'LanHao,lanhao,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm LanHao", // 标题

	// 颜色配置
	color: {
		themecolor: "#c2fff0", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#c2fff0", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 80, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ["医学", "视频", "摄影", "动画", "独立游戏", "IP写作"],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "paper",
				"preview": "/img/wallpaper/static/Paper_Texture_07.jpg",
				"url": "/img/wallpaper/static/Paper_Texture_07.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":""
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['医学', '视频', '摄影', '动画', '独立游戏', '写作'],
		skillPoints: [60, 80, 50, 50, 60, 60],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://www.github.com/LanHao99" },
		{ icon: "mdi-email", link: "mailto:lan_hao@sjtu.edu.cn" },
		{ icon: "/img/icons/bilibili.svg", link: "https://space.bilibili.com/3494358330378685?spm_id_from=333.337.0.0" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com/@Lan_Hao" },
		{ icon: "/img/icons/xiaohongshu.svg", link: "https://xhslink.com/m/5Vz5y6b1Ues" }
	],

	//打字机
	typeWriterStrings: [
		"我们想要给万事万物赋予意义，归根结底，是因为无法面对世界的虚无本质罢了。",
		"我们坐在一艘帆船上。四周都是海洋，连接到遥远的地平线。",
		"所有的魔法都是时间魔法。",
		"知识由语言承载，语言的“概念”彼此依赖，构成一个网。就像加减乘除的数据可以计算世界，几个基础的概念也可以织成一张完整的网。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "paper", "preview": "/img/wallpaper/static/Paper_Texture_07.png", "url": "/img/wallpaper/static/Paper_Texture_07.png" },
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/anime1.jpg", title: "太微知识库", subtitle: "概念网", text: "知识由语言承载，语言的\"概念\"彼此依赖，构成一个网。就像加减乘除的数据可以计算世界，几个基础的概念也可以织成一张完整的网。", url: "https://lanhao.cc/LanHaoTiddly/", show: false },
		{ go: "🗂️ 前往", img: "/img/anime2.jpg", title: "IP设计", subtitle: "位面游荡", text: "筑起一座乌托邦。", url: "/IP/", show: false },
		{ go: "📽️ 前往", img: "/img/anime3.jpg", title: "视频创作", subtitle: "3,000 miles of wonder", text: "创作本身就是意义。", url: "/Video/", show: false },
		{ go: "🎮 前往", img: "/img/anime4.jpg", title: "独立游戏", subtitle: "\"homo ludens\"", text: "给沉闷的世界带来一丝乐趣", url: "/Games/", show: false },
		{ go: "🗃 前往", img: "/img/anime5.jpg", title: "绘画与动画", subtitle: "没AI画的好", text: "AI只能带来焦虑，握在手里的笔才踏实", url: "/ArtCartoon/", show: false },
		{ go: "🎨 前往", img: "/img/anime1.jpg", title: "邀请函", subtitle: "加入我们！", text: "何时能得到自己想要的生活呢？", url: "/Invitation/", show: false },
		{ go: "💍 前往", img: "/img/anime2.jpg", title: "网文", subtitle: "扑街小能手", text: "所有的魔法都是时间魔法。", url: "/Novel/", show: false },
		{ go: "🔍 前往", img: "/img/anime3.jpg", title: "课表", subtitle: "坐牢大师", text: "", url: "/Links/", show: false },
	],

	statement: ["备案号：沪ICP备2024056990号-1", "Copyright © 2026 Medigeek"],
}

export default config