"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import dietitianIllustration from "../../public/images/rayia-soderberg-t9M_Scl7xdg-unsplash.jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from '../../public/images/profile.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Riya Sharma",
        username: "@riya_fitness",
        body: "The AI Dietitian helped me create a personalized meal plan that fits my vegetarian lifestyle and fitness goals perfectly."
    },
    {
        name: "Amit Verma",
        username: "@amitv_weightloss",
        body: "I lost 7 kilos in 2 months without feeling starved. The portion control tips and snack suggestions were spot-on."
    },
    {
        name: "Priya Menon",
        username: "@priya_health",
        body: "Instead of spending hours researching diets online, I had a complete, balanced plan ready in minutes."
    },
    {
        name: "Rahul Khanna",
        username: "@rahulk_runner",
        body: "The AI tracked my macros and adjusted my meals automatically when I increased my training intensity."
    },
    {
        name: "Ananya Gupta",
        username: "@ananya_g",
        body: "It suggested healthy alternatives to my favorite dishes — now I enjoy my meals guilt-free."
    },
    {
        name: "Sneha Iyer",
        username: "@sneha_fitnessjourney",
        body: "As someone with PCOS, I finally found a diet plan tailored to my condition. My energy levels have improved dramatically."
    }
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Share Your Health Goals",
        description:
            "Tell the AI Dietitian about your fitness objectives, medical conditions, allergies, and lifestyle to create a personalized nutrition plan."
    },
    {
        title: "Step 2: Analyze Dietary Needs",
        description:
            "The AI evaluates your calorie requirements, macro ratios, and nutrient needs based on your body data and activity level."
    },
    {
        title: "Step 3: Get a Customized Meal Plan",
        description:
            "Receive daily or weekly meal recommendations with portion sizes, cooking instructions, and healthy substitutions."
    },
    {
        title: "Step 4: Track Your Food Intake",
        description:
            "Log your meals manually or via integrations, and the AI updates your nutrition status in real-time."
    },
    {
        title: "Step 5: Monitor Progress & Adjust",
        description:
            "The AI reviews your weight, energy, and overall health changes, adjusting your plan for maximum results."
    },
    {
        title: "Step 6: Stay Motivated with Tips",
        description:
            "Get science-backed tips, recipe ideas, and reminders to help you stay consistent and achieve your health goals."
    }
];



export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
          <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
    <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <span
            className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
            }}
        />
        🥗
        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
            AI-Powered Dietitian & Nutrition Coach
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>

    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
        Eat <AuroraText>Smarter & Healthier</AuroraText>  {" "}
        with Your Personal AI Dietitian
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Get a personalized meal plan, nutrition advice, and real-time dietary tracking — 
        tailored to your health goals, body needs, and lifestyle.  
        Whether you want to lose weight, gain muscle, or just eat better, 
        your AI Dietitian is here 24/7.
    </p>

    <div className="">
        <Link href="/search">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Get My Nutrition Plan
                </span>
            </ShimmerButton>
        </Link>
    </div>
</section>



            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

         <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Your Personal AI Dietitian — Tailored Nutrition Plans for You.
        </h2>
        <p className="text-lg text-muted-foreground">
            AI Dietitian Agent analyzes your lifestyle, health goals, and dietary preferences to create
            personalized meal plans, track your nutrition, and help you stay on track for a healthier you.
        </p>
        <Link href="/search">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Get My Personalized Plan
                </span>
            </ShimmerButton>
        </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
        <Image
            src={dietitianIllustration} // Replace with your AI Dietitian illustration path
            alt="AI Dietitian Agent"
            className="w-full max-w-md h-96 object-cover"
            width={10}
            height={10}
            unoptimized
        />
    </div>
</section>



            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

           <section className="px-4 md:px-36 mt-20">
    <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
    >
        <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

        <AccordionItem value="item-1">
            <AccordionTrigger>
                1. What is the AI Dietitian Agent?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    The AI Dietitian Agent is a smart, AI-powered nutrition assistant that creates personalized meal plans, tracks your dietary habits, and helps you reach your health and wellness goals.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>
                2. How does it work?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Simply share your health goals, dietary preferences, and lifestyle details. The AI then analyzes your input to generate tailored meal plans, nutritional tips, and daily progress tracking.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>
                3. Who can use it?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Anyone looking to improve their diet — whether you want to lose weight, gain muscle, manage a health condition, or simply eat healthier — can benefit from the AI Dietitian Agent.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger>
                4. Does it consider medical conditions or allergies?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. You can specify allergies, intolerances, and medical conditions like diabetes or high blood pressure, and the AI will adapt your plan accordingly.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger>
                5. Can it track my daily food intake?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Absolutely. You can log your meals, and the AI will provide instant feedback on calories, macronutrients, and micronutrients — helping you stay aligned with your goals.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger>
                6. Does it provide grocery lists?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. Along with meal plans, you’ll get smart grocery lists to make shopping easier and reduce food waste.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger>
                7. Can it adjust my plan if my goals change?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. Your plan can be updated anytime to match new goals, preferences, or lifestyle changes — ensuring it always fits your needs.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
            <AccordionTrigger>
                8. Does it replace a real dietitian?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    The AI Dietitian Agent provides expert-backed nutritional guidance, but it’s not a substitute for medical advice from a qualified healthcare professional.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
            <AccordionTrigger>
                9. Is there a free version?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. Basic meal planning and tracking features are free. Premium features, such as advanced nutrition analysis and custom recipe generation, may require a subscription.
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</section>


        </main>
    );
}
