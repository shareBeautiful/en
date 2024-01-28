

// 页面数据
// 默认显示语言 中文：zh,英文：en
let lang = 'en'

// desc 为中文文字
// enDesc 为英文文字
let dsy_data = {
    // 图片目录
    imgSrc: 'image/',

    // logo 旁名字
    title: {
        desc: '德思意科技(深圳)有限公司',
        enDesc: 'DSY TECH CO.LTD'
    },

    // 导航文字
    menu: [
        {
            id: 'top',
            desc: '首页',
            enDesc: 'index'
        },
        {
            id: 'a',
            desc: '产品与服务',
            enDesc: 'Product shows'
        },
        {
            id: 'b',
            desc: '关于我们',
            enDesc: 'About us'
        },
        {
            id: 'c',
            desc: '企业文化',
            enDesc: '',
            hide: true
        },
        {
            id: 'd',
            desc: '联系我们',
            enDesc: 'Contact us'
        }
    ],

    menus: [

        {
            id: 'a',
            desc: '邮箱',
            enDesc: 'Email'
        },
        {
            id: 'b',
            desc: 'Linkedin',
            enDesc: 'Linkedin'
        }
    ],


    // 产品与服务
    productData: [
        {
            img: 'product_1.jpg',
            desc: '物联网医院',
            enDesc: 'Premium quality'
        },
        {
            img: 'product_2.jpg',
            desc: '互联网医院',
            enDesc: 'Built-in LED light'
        },
        {
            img: 'product_3.jpg',
            desc: '智慧医院',
            enDesc: 'name...'
        },
        {
            img: 'product_4.jpg',
            desc: '智慧酒店',
            enDesc: 'name...'
        },
        {
            img: 'product_5.jpg',
            desc: '产业物联网',
            enDesc: 'name...'
        },
        {
            img: 'product_6.jpg',
            desc: 'IOT物联网设备',
            enDesc: 'name...'
        },
        {
            img: 'product_4.jpg',
            desc: 'IOT物联网设备',
            enDesc: 'name...'
        }
    ],

    // 关于我们
    aboutData: {
        desc: [
            '德思意科技有限公司是一家技术驱动型的创新公司。',
            '团队核心成员均来自知名互联网企业的精英骨干，具有丰富国际化业务经验，凭借领先的应用技术和专业的产品品质、丰富的互联网经验和行业积累，帮助客户低成本实现智慧化、数字化体系改造。',
            '秉承务实、高效的工作态度，营造热情轻松的氛围环境，不断发掘与引导用户，从业务战略高度，帮助企业持续推进品牌形象传播和口碑塑造。',
            '未来，公司将用卓越的产品和服务，推动企业管理和社会进步，发展成为国内领先的企业管理和社会服务信息系统供应商！'
        ],
        enDesc: [
            ''
        ]
    },

    // 企业文化
    cultureData: {
        desc: [
            '公司愿景：“提供具有国际品质的软件开发和服务，提供行业最佳解决方案”。',
            '公司宗旨：“客户利益、员工利益、股东利益的最大化，即公司价值的最大化”。',
            '企业精神：“诚信、创新、服务、卓越、以人为本”。'
        ],
        enDesc: [

        ]
    },

    // 联系我们
    contactData: {
        qrCode: 'qr.png',
        contactWay: {
            tel: '15626121215',
            desc: [
                '联系电话(微信)：15626121215',
                '联系地址：深圳市福田区福田南路7号'
            ],
            enDesc: [
                'Tel(Wechat)：15626121215',
                'Address：Shenzhen, China'
            ]
        }
    }
}
