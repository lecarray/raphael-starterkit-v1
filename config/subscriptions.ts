import { ProductTier } from "@/types/subscriptions";

export const SUBSCRIPTION_TIERS: ProductTier[] = [
  // 保留以备将来添加月度订阅产品
];

export const CREDITS_TIERS: ProductTier[] = [
  {
    name: "积分包",
    id: "tier-1000-credits",
    productId: "prod_3sXyswTZQqqkawALyUD7gk", // $5 one-time purchase for 1000 credits
    priceMonthly: "$5",
    description: "1000积分，无限次生成中文名字",
    creditAmount: 1000,
    features: [
      "包含1000积分",
      "💎 标准生成（1积分）- 高质量名字与文化寓意",
      "👑 高级生成（4积分）- 深度AI分析与性格匹配",
      "详细的文化分析和汉字解释",
      "保存无限个喜爱的名字",
      "导出精美PDF证书",
      "访问热门名字数据库",
      "优先客服支持 (support@chinesename.club)",
      "积分永不过期"
    ],
    featured: true,
    discountCode: ""
  }
];
