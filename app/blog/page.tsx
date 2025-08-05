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
              2025 Practical Guide
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How to Choose a Beautiful and Meaningful Chinese Name
            </h1>
            <div className="bg-muted/30 rounded-lg p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Quick Summary:</strong> This article will guide you through the cultural background of Chinese names, 
                naming structures, character selection principles, and demonstrate how to use 
                <Link href="/" className="text-primary hover:text-primary/80 underline underline-offset-4"> ChineseName.club</Link> 
                to generate personalized Chinese names that match your personality and desired meanings.
              </p>
            </div>
          </motion.div>

          {/* Section 1: Why Need Chinese Name */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              Why Do You Need a Chinese Name?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Cultural Communication</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Communicate more naturally with Chinese-speaking communities and reduce cultural barriers
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Social Advantage</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Enhance your affinity in Chinese social media, job hunting, and learning scenarios
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Cultural Respect</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Demonstrate respect and interest in Chinese culture and traditions
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Section 2: Cultural Foundation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Cultural Foundation of Chinese Naming</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <h4 className="text-lg font-bold">Family Name (Surname)</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• China has approximately 500 common surnames, with the top 100 surnames covering approximately 85% of the population</li>
                    <li>• Surnames come first in Chinese names and usually consist of 1 Chinese character</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <h4 className="text-lg font-bold">Given Name</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Commonly composed of 1-2 Chinese characters, 3-character names are also becoming popular</li>
                    <li>• Emphasizes meaning, phonetics, and the Five Elements (used by those who believe in it)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>Warm Tip:</strong> If you don't have specific preferences, you can prioritize common surnames like 
                「陈」「李」「王」to avoid excessive pronunciation difficulty.
              </p>
            </div>
          </motion.section>

          {/* Section 3: Name Structure Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">3 Common Structures of Chinese Names</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-4 text-left font-semibold">Structure</th>
                    <th className="border border-border p-4 text-left font-semibold">Example</th>
                    <th className="border border-border p-4 text-left font-semibold">Usage Scenario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4">Single Name (Surname + 1 Character)</td>
                    <td className="border border-border p-4 font-mono">王伟 (Wang Wei)</td>
                    <td className="border border-border p-4 text-muted-foreground">Concise and powerful, common for males</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4">Double Name (Surname + 2 Characters)</td>
                    <td className="border border-border p-4 font-mono">李思涵 (Li Sihan)</td>
                    <td className="border border-border p-4 text-muted-foreground">Rich in meaning, gender-neutral</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4">Compound Surname (2-Character Surname + 1-2 Characters)</td>
                    <td className="border border-border p-4 font-mono">司徒墨 (Situ Mo)</td>
                    <td className="border border-border p-4 text-muted-foreground">Unique personality, attention to pronunciation needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 4: Golden Principles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">5 Golden Principles for Character Selection</h2>
            <div className="grid gap-4">
              {[
                { number: "1", title: "Positive Meaning", desc: "Avoid negative or sensitive words" },
                { number: "2", title: "Pleasant Pronunciation", desc: "Avoid awkward consonant and vowel combinations; harmonious tones in Mandarin" },
                { number: "3", title: "Beautiful Writing", desc: "Not overly complex strokes, as it affects writing experience" },
                { number: "4", title: "Low Repetition Rate", desc: "Use tools to check national name frequency for uniqueness" },
                { number: "5", title: "Easy Pinyin", desc: "Convenient for foreign friends or system input" }
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

          {/* Section 5: Hands-on Practice */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Hands-on Practice: Generate Names with ChineseName.club in 3 Steps</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-bold">Visit the Generator</h4>
                  <p className="text-muted-foreground text-sm">
                    Open → <Link href="/" className="text-primary hover:text-primary/80 underline">ChineseName.club</Link>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-bold">Fill Your Preferences</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Gender, desired meanings (e.g., "wisdom", "courage")</li>
                    <li>• Optional "Personality Traits" and "Name Preferences" fields</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-bold">Generate & Save Favorites</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• System returns 5-10 candidate names with pinyin and meaning analysis</li>
                    <li>• Click "Save" to add to your personal list, download certificates or use TTS voice later</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm mb-4">
                Explore more features: <Link href="/product/popular-names" className="text-primary hover:text-primary/80 underline mx-1">Popular Names</Link> • 
                <Link href="/#pricing" className="text-primary hover:text-primary/80 underline mx-1">Pricing</Link>
              </p>
            </div>
          </motion.section>

          {/* Section 6: Verification */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">How to Verify Your Name's Pronunciation and Meaning</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>Pronunciation Test:</strong>
                  <span className="text-muted-foreground ml-2">Use built-in TTS reading function or Google Translate.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>Meaning Verification:</strong>
                  <span className="text-muted-foreground ml-2">Check "Kangxi Dictionary" or "Standard Chinese Character Table".</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <strong>Social Testing:</strong>
                  <span className="text-muted-foreground ml-2">Invite 3-5 native speaker friends to comment on pronunciation and impressions.</span>
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
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Q: Can I use the pronunciation of my English name to create a Chinese name?</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>A:</strong> Yes, but ensure the pronunciation sounds natural and avoid forcing the transliteration. 
                    For example, "Anna" can be transliterated as "安娜" (An Na).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Q: Are double names more popular than single names?</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>A:</strong> Double names are more common in urban areas; single names are classic and concise. 
                    The choice depends on personal style.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Q: Will the generated names be duplicated?</h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>A:</strong> ChineseName.club automatically detects common name duplications and suggests 
                    alternative options to ensure uniqueness.
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
            <h2 className="text-3xl font-bold mb-4">Conclusion: Let Your Chinese Name Become Your Cultural Bridge</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              A good Chinese name is not just a string of characters - it's a bridge for you to communicate with the Chinese world. 
              Visit ChineseName.club now and explore your unique Chinese name!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-2xl">👉</span>
              <Button asChild size="lg" className="font-medium text-lg px-8 py-3">
                <Link href="/">
                  Generate Now → Enter Chinese Name Generator
                </Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}