"use client";
import { ChevronRight, Sparkles, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center w-full bg-background">
      <section className="container flex flex-col items-center w-full px-4 pt-40 pb-20 justify-center gap-10 max-sm:py-20">
        {/* Highlight Section */}
        <div className="bg-primary rounded-full p-2 px-5 text-secondary text-sm flex items-center">
          <Sparkles className="w-4 h-4 inline-block mr-2" fill="currentColor" />
          <p className="line-clamp-1 w-full">
            Find the perfect tutor for your learning needs!
          </p>
          <ChevronRight className="w-4 h-4 inline-block ml-2" />
        </div>

        {/* Main Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold text-center text-primary max-sm:text-4xl max-sm:text-left max-sm:w-full">
            Unlock Your Learning Potential
          </h1>
          <h1 className="text-6xl font-bold text-center max-sm:text-4xl max-sm:text-left">
            Find the Best Tutors Near You
          </h1>
        </div>

        {/* Description */}
        <p className="text-center text-xl max-w-2xl font-medium max-sm:text-sm max-sm:text-left">
          Tutoree helps you connect with experienced tutors for personalized learning. Whether you need help with academics, test preparation, or skill-building, we have the right tutor for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
          <Button variant="outline" size="lg" className="max-sm:w-full">
            Explore Tutors <Search className="w-5 h-5 ml-3" />
          </Button>
          <Button size="lg" className="max-sm:w-full">
            Become a Tutor <BookOpen className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;