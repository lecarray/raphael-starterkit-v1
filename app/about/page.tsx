"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Globe, Sparkles } from "lucide-react";

export default function AboutPage() {
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
              <h1 className="text-xl font-bold">About Us</h1>
              <p className="text-sm text-muted-foreground">
                Learn more about our mission and story
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
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Bridging Cultures with
              <br />
              <span className="text-primary">Meaningful Chinese Names</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that a name is more than just words - it's a bridge between cultures, 
              a reflection of identity, and a connection to the rich heritage of Chinese tradition.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To help people from all backgrounds discover meaningful Chinese names that reflect 
                  their personality while honoring traditional Chinese naming conventions and cultural significance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We envision a world where cultural bridges are built through meaningful names, 
                  connecting people across different backgrounds with Chinese heritage and traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We combine advanced AI technology with deep cultural knowledge to create authentic 
                  Chinese names that respect tradition while meeting modern personalization needs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* How Our AI Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">How Our AI Works</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our advanced AI technology combines cultural wisdom with personalization
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold mx-auto">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-center">Input Analysis</h4>
                  <p className="text-muted-foreground text-center">
                    Our AI analyzes your English name, gender preference, and personality traits to understand your unique characteristics.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold mx-auto">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-center">Cultural Matching</h4>
                  <p className="text-muted-foreground text-center">
                    Advanced algorithms match your profile with appropriate Chinese characters that carry positive meanings and cultural significance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold mx-auto">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-center">Name Generation</h4>
                  <p className="text-muted-foreground text-center">
                    Generate multiple personalized Chinese names with detailed meanings, pronunciations, and cultural context.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Our Story
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Chinese Name Generator was born from a simple observation: in our increasingly 
                  connected world, many people desire meaningful connections to Chinese culture, 
                  but finding an authentic Chinese name that truly represents their identity can be challenging.
                </p>
                <p>
                  Traditional Chinese naming is a beautiful art form that considers not just the sound 
                  of a name, but its meaning, cultural significance, and how it reflects the person's 
                  character and aspirations. Our advanced AI technology combines this ancient wisdom 
                  with modern personalization to create names that are both culturally authentic and personally meaningful.
                </p>
                <p>
                  Whether you're a student preparing for study in China, a professional working with 
                  Chinese colleagues, or simply someone fascinated by Chinese culture, we're here to 
                  help you discover a name that truly represents who you are while honoring the rich 
                  traditions of Chinese naming conventions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Authenticity</h4>
                  <p className="text-muted-foreground">
                    Every name we generate respects traditional Chinese naming conventions 
                    and cultural significance, ensuring authenticity and appropriateness.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Personal Meaning</h4>
                  <p className="text-muted-foreground">
                    We believe names should reflect who you are. Our AI considers your personality, 
                    preferences, and individual characteristics to create truly personalized names.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Educational Value</h4>
                  <p className="text-muted-foreground">
                    Beyond just providing names, we help users understand the meaning, 
                    pronunciation, and cultural context of their Chinese names.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accessibility</h4>
                  <p className="text-muted-foreground">
                    We make Chinese name generation accessible to everyone, regardless of their 
                    background or familiarity with Chinese culture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">Contact & Support</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Have questions about our AI Chinese name generator or need assistance? Our team is here to help you on your 
                journey to finding the perfect Chinese name that reflects your personality and honors Chinese cultural traditions.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary font-semibold">Email:</span>
                      <a href="mailto:support@chinesename.club" className="text-primary hover:text-primary/80 underline underline-offset-4">
                        support@chinesename.club
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary font-semibold">Website:</span>
                      <a href="https://chinesename.club" className="text-primary hover:text-primary/80 underline underline-offset-4">
                        chinesename.club
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
                  <div className="space-y-3">
                    <div>
                      <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                    <div>
                      <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Discover Your Chinese Name?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of others who have found their perfect Chinese name. 
              Start your cultural journey today with our AI-powered name generator.
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link href="/">
                Get Started Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}