"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/use-user";
import { useSubscription } from "@/hooks/use-subscription";
import { useCredits } from "@/hooks/use-credits";

const formSchema = z.object({
  englishName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  birthYear: z.string().optional(),
  personalityTraits: z.string().optional(),
  namePreferences: z.string().optional(),
  planType: z.enum(["1", "4"], {
    required_error: "Please select a plan type.",
  }),
});

interface NameGeneratorFormProps {
  onGenerate: (data: z.infer<typeof formSchema>) => Promise<void>;
  isGenerating: boolean;
  hasTriedFree?: boolean;
  savedFormData?: any;
}

export default function NameGeneratorForm({ onGenerate, isGenerating, hasTriedFree = false, savedFormData }: NameGeneratorFormProps) {
  const { toast } = useToast();
  const { user } = useUser();
  const subscriptionData = useSubscription();
  const { credits: userCredits, loading: creditsLoading } = useCredits();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      englishName: "",
      gender: "male",
      birthYear: "",
      personalityTraits: "",
      namePreferences: "",
      planType: "1",
    },
  });

  // Load saved form data when component mounts or savedFormData changes
  useEffect(() => {
    if (savedFormData) {
      console.log('Loading saved form data:', savedFormData);
      form.reset({
        englishName: savedFormData.englishName || "",
        gender: savedFormData.gender || "male",
        birthYear: savedFormData.birthYear || "",
        personalityTraits: savedFormData.personalityTraits || "",
        namePreferences: savedFormData.namePreferences || "",
        planType: "1", // Always default to standard
      });
      
      toast({
        title: "Welcome back!",
        description: "Your previous form data has been restored. You can modify it and generate again.",
      });
    }
  }, [savedFormData, form, toast]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await onGenerate(values);
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate name. Please try again.",
      });
    }
  }

  const handlePremiumFeatureClick = () => {
    if (!user) {
      toast({
        title: "Premium Feature",
        description: "Please sign in to access personality traits and name preferences.",
      });
    }
  };

  // Check if user has enough credits
  const creditCost = parseInt(form.watch('planType') || '1');
  const currentCredits = userCredits?.remaining_credits || 0;
  const hasEnoughCredits = user ? currentCredits >= creditCost : true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="shadow-lg border border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Generate Your Chinese Name</CardTitle>
          <CardDescription>
            Tell us about yourself and let our AI create a name that resonates with your identity.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Your Name Field */}
            <div className="space-y-2">
              <Label htmlFor="englishName" className="text-base font-medium">
                Your Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="englishName"
                placeholder="Enter your name"
                className="h-12 text-base"
                {...form.register("englishName")}
              />
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                {user ? (
                  <>
                    <span>Credits: {creditsLoading ? 'Loading...' : currentCredits}</span>
                    <span className="text-primary">|</span>
                    <span>Ready to generate!</span>
                  </>
                ) : (
                  <>
                    <span>🎁 Free Trial Available</span>
                    <span className="text-primary">No registration required!</span>
                  </>
                )}
              </div>
              {form.formState.errors.englishName && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.englishName.message}
                </p>
              )}
            </div>

            {/* Gender Field */}
            <div className="space-y-2">
              <Label className="text-base font-medium">Gender</Label>
              <Select
                onValueChange={(value) => form.setValue("gender", value as "male" | "female" | "other")}
                defaultValue={form.getValues("gender")}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Birth Year Field */}
            <div className="space-y-2">
              <Label htmlFor="birthYear" className="text-base font-medium">
                Birth Year (Optional)
              </Label>
              <Input
                id="birthYear"
                type="number"
                placeholder="1990"
                className="h-12"
                {...form.register("birthYear")}
              />
            </div>

            {/* Personality Traits Field */}
            <div className="space-y-2">
              <Label htmlFor="personalityTraits" className="text-base font-medium flex items-center justify-between">
                <span>Personality Traits</span>
                {!user && <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">Premium</span>}
              </Label>
              <Textarea
                id="personalityTraits"
                placeholder="Describe your personality traits..."
                className="min-h-[100px]"
                onClick={!user ? handlePremiumFeatureClick : undefined}
                readOnly={!user}
                {...form.register("personalityTraits")}
              />
            </div>

            {/* Name Preferences Field */}
            <div className="space-y-2">
              <Label htmlFor="namePreferences" className="text-base font-medium flex items-center justify-between">
                <span>Name Preferences</span>
                {!user && <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">Premium</span>}
              </Label>
              <Textarea
                id="namePreferences"
                placeholder="Any specific preferences for your Chinese name..."
                className="min-h-[100px]"
                onClick={!user ? handlePremiumFeatureClick : undefined}
                readOnly={!user}
                {...form.register("namePreferences")}
              />
            </div>

            {/* Plan Type Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Generation Type</Label>
              <RadioGroup
                onValueChange={(value) => form.setValue("planType", value as "1" | "4")}
                defaultValue={form.getValues("planType")}
                className="grid grid-cols-1 gap-3"
              >
                <div className="relative">
                  <div className="flex items-center space-x-3 px-4 py-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border">
                    <RadioGroupItem value="1" id="standard" />
                    <div className="flex-grow">
                      <Label htmlFor="standard" className="font-medium cursor-pointer flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">💎</span>
                          <div>
                            <p className="font-semibold text-foreground">Standard Generation</p>
                            <p className="text-sm text-muted-foreground">Good quality, cultural significance</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">1 Credit</p>
                          <p className="text-xs text-muted-foreground">~$0.005 value</p>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center space-x-3 px-4 py-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg hover:from-primary/10 hover:to-primary/15 transition-colors border border-primary/20">
                    <RadioGroupItem value="4" id="premium" />
                    <div className="flex-grow">
                      <Label htmlFor="premium" className="font-medium cursor-pointer flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">👑</span>
                          <div>
                            <p className="font-semibold text-foreground">Premium Generation</p>
                            <p className="text-sm text-muted-foreground">Advanced AI, personality matching</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">4 Credits</p>
                          <p className="text-xs text-muted-foreground">~$0.02 value</p>
                        </div>
                      </Label>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      Recommended
                    </span>
                  </div>
                </div>
              </RadioGroup>
              
              {/* Pricing info */}
              {!user && (
                <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    💡 <strong>Need credits?</strong> Check our pricing below - Credit Pack ($5) includes 1000 credits, perfect for unlimited Premium generations!
                  </p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isGenerating || (user && !hasEnoughCredits)}
              className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </div>
              ) : user ? (
                hasEnoughCredits ? (
                  <>
                    {creditCost === 1 ? '💎 Generate Standard Name' : '👑 Generate Premium Name'}
                    <span className="ml-2 text-base opacity-80">({creditCost} Credit{creditCost > 1 ? 's' : ''})</span>
                  </>
                ) : (
                  <>
                    Insufficient Credits 
                    <span className="ml-2 text-sm opacity-80">(Need {creditCost - currentCredits} more)</span>
                  </>
                )
              ) : hasTriedFree ? (
                "Sign Up for More"
              ) : (
                <>
                  🎁 Try Free Generation
                  <span className="ml-2 text-base opacity-80">(No Login Required)</span>
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}