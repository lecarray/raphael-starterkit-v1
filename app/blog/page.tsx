"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Sparkles, Users, Heart, Globe, CheckCircle } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">Blog</h1>
              <p className="text-sm text-muted-foreground">
                Chinese naming insights and guides
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
              <BookOpen className="mr-2 h-4 w-4" />
              2025 实用指南
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              如何为自己取一个好听又有寓意的中文名字
            </h1>
            <div className="bg-muted/30 rounded-lg p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>快速摘要：</strong>本篇文章将带你了解中文名字的文化背景、命名结构、选字原则，并演示如何借助 
                <Link href="/" className="text-primary hover:text-primary/80 underline underline-offset-4">chinesename.club</Link> 
                一键生成符合个性与寓意的中文名字。
              </p>
            </div>
          </motion.div>

          {/* Section 1: 为什么需要中文名字 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              为什么需要一个专属的中文名字？
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">文化沟通</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    与华语社群沟通更自然，减少文化隔阂
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">社交优势</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    提升在中文社交媒体、求职与学习场景中的亲和力
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">文化尊重</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    展现对中国文化的尊重与兴趣
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Section 2: 文化基础 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">中文起名的文化基础</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <h4 className="text-lg font-bold">姓氏（Family Name）</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 中国常用姓氏约 500 个，前 100 姓占全国人口 85% 以上</li>
                    <li>• 姓氏位于名字首位，通常为 1 个汉字</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <h4 className="text-lg font-bold">名字（Given Name）</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 常见 1–2 个汉字组成，3 字名也日渐流行</li>
                    <li>• 讲究字义、音韵与五行（偏信者使用）</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>温馨提示：</strong>若你没有明确偏好，可以优先选择常见姓氏，如「陈」「李」「王」等，避免发音难度过大。
              </p>
            </div>
          </motion.section>

          {/* Section 3: 名字结构表格 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">中文名字的3种常见结构</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-4 text-left font-semibold">结构</th>
                    <th className="border border-border p-4 text-left font-semibold">示例</th>
                    <th className="border border-border p-4 text-left font-semibold">适用场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4">单名（姓 + 1 字）</td>
                    <td className="border border-border p-4 font-mono">王 伟</td>
                    <td className="border border-border p-4 text-muted-foreground">简洁有力，常见于男性</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4">双名（姓 + 2 字）</td>
                    <td className="border border-border p-4 font-mono">李 思涵</td>
                    <td className="border border-border p-4 text-muted-foreground">含义丰富，性别中性</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4">复姓（2 字姓 + 1–2 字名）</td>
                    <td className="border border-border p-4 font-mono">司徒 墨</td>
                    <td className="border border-border p-4 text-muted-foreground">个性独特，需注意读音</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 4: 选字原则 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">选字的5个黄金原则</h2>
            <div className="grid gap-4">
              {[
                { number: "1", title: "寓意积极", desc: "避开消极或敏感词" },
                { number: "2", title: "读音悦耳", desc: "声母、韵母避免拗口连读；普通话四声组合舒缓" },
                { number: "3", title: "书写美观", desc: "笔画不过于繁杂，会影响书写体验" },
                { number: "4", title: "重名率低", desc: "使用工具查询全国同名人数，彰显独特性" },
                { number: "5", title: "拼音易读", desc: "方便外国朋友或系统录入" }
              ].map((principle, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {principle.number}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{principle.title}</h4>
                        <p className="text-muted-foreground text-sm">{principle.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Section 5: 实战演练 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">实战演练：用 chinesename.club 3 步生成名字</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-bold">访问生成器</h4>
                  <p className="text-muted-foreground text-sm">
                    打开 → <Link href="/" className="text-primary hover:text-primary/80 underline">chinesename.club</Link>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-bold">填写偏好</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• 性别、期望寓意（如「智慧」「勇敢」）</li>
                    <li>• 可选「Personality Traits」「Name Preferences」字段</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-bold">一键生成 & 收藏</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• 系统返回 5–10 个候选名，附带拼音与含义解析</li>
                    <li>• 点击「收藏」加入个人列表，后续可下载证书或 TTS 语音</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>内部链接建议：</strong> 在此段落加入锚文本链接到站内
                <Link href="/product/popular-names" className="text-primary hover:text-primary/80 underline mx-1">热门名字</Link>
                <Link href="/#pricing" className="text-primary hover:text-primary/80 underline mx-1">定价</Link>
                等页面，提高爬虫抓取效率。
              </p>
            </div>
          </motion.section>

          {/* Section 6: 检验名字 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">如何检验名字的发音与含义？</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>发音测试：</strong>
                  <span className="text-muted-foreground ml-2">使用站内 TTS 朗读功能 或 Google。</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>含义核对：</strong>
                  <span className="text-muted-foreground ml-2">查询《康熙字典》或《规范汉字表》。</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>社交试用：</strong>
                  <span className="text-muted-foreground ml-2">邀请 3–5 位母语朋友点评读音与印象。</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7: FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">常见 FAQ</h2>
            <div className="space-y-4">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">问：我可以用自己的英文名谐音取中文名吗？</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>答：</strong>可以，但需确保读音自然，避免强行照搬。例如「Anna」可音译为「安娜」。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">问：双名是否比单名更受欢迎？</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>答：</strong>都市地区双名更普遍；单名经典简洁，选择取决于个人风格。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">问：生成的名字会不会重复？</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>答：</strong>chinesename.club 会自动检测常见重名并提示替换选项。
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">结语：让中文名字成为你的文化名片</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              一个好的中文名字不仅仅是一串字符，更是你与中文世界沟通的桥梁。立即访问 chinesename.club，探索属于你的中文名字吧！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-2xl">👉</span>
              <Button asChild size="lg" className="font-medium text-lg px-8 py-3">
                <Link href="/">
                  马上生成 → 点击进入中文名字生成器
                </Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}