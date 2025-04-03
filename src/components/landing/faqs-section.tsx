"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const FAQS = [
  {
    q: "How do I find a tutor on Tutoree?",
    a: "You can browse tutor profiles, filter by subjects, experience, ratings, and availability. You can also directly message tutors to schedule a session.",
    t: "general",
  },
  {
    q: "Is Tutoree free for students?",
    a: "Yes, creating an account and browsing tutor profiles is free. However, you will need to pay for tutoring sessions according to each tutor's rates.",
    t: "pricing",
  },
  {
    q: "How do I apply for a tutoring job on Tutoree?",
    a: "Tutors can sign up by creating a profile, listing their skills, subjects, and availability, and apply for tutoring jobs posted by students or parents.",
    t: "tutors",
  },
  {
    q: "Can I schedule a trial session with a tutor?",
    a: "Yes, many tutors offer trial sessions. You can check their profile for availability or contact them directly to request a trial lesson.",
    t: "general",
  },
  {
    q: "How do payments work on Tutoree?",
    a: "Payments are processed securely through the Tutoree platform. Students pay upfront for tutoring sessions, and tutors receive payment after the session is completed.",
    t: "billing",
  },
  {
    q: "What happens if a tutor cancels a session?",
    a: "If a tutor cancels a session, you will receive a full refund or you can reschedule with another tutor of your choice.",
    t: "general",
  },
  {
    q: "How do I contact Tutoree support?",
    a: "You can contact our support team via email at support@tutoree.com or use the chat widget available on our website.",
    t: "general",
  },
];

const FAQ_TYPES = Array.from(new Set(FAQS.map((faq) => faq.t).sort()));

const FAQsSection = () => {
  const [selectedFaqType, setSelectedFaqType] = useState(FAQ_TYPES[0]);

  return (
    <div>
      <div className="pb-20 pt-4 max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <p className="text-3xl sm:text-4xl font-medium text-center">
              Frequently Asked Questions
            </p>
            <p className="font-medium text-sm sm:text-base text-center">
              These are the most common questions about using Tutoree. <br />
              Feel free to <span className="underline">contact us</span> if
              you still have any doubts.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid place-items-center">
              <Tabs
                defaultValue={FAQ_TYPES[0]}
                className="mx-auto"
                value={selectedFaqType}
                onValueChange={(v) => setSelectedFaqType(v)}
              >
                <TabsList>
                  {FAQ_TYPES.map((type) => (
                    <TabsTrigger key={type} value={type} className="capitalize">
                      {type}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="max-w-screen-md mx-auto">
              <Accordion type="single" className="w-full">
                {FAQS.map((faq) => {
                  if (faq.t !== selectedFaqType) return null;

                  return (
                    <AccordionItem key={faq.q} value={faq.q}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
