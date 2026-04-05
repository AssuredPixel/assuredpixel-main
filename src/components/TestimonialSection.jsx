import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data (replace with your actual import)
const mockData = {
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVision Inc",
      content:
        "Working with AssuredPixel transformed our online presence completely. Within 6 months, we saw a 300% increase in customer inquiries and our conversion rates doubled. Their team's expertise in digital strategy is unmatched!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GreenLeaf Organic",
      content:
        "The results speak for themselves. Our website is now a lead generation machine for our target market, and we've seen a 250% increase in qualified sales opportunities. The ROI has been exceptional.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Urban Fitness Co",
      content:
        "I was skeptical about digital marketing at first, but AssuredPixel proved me wrong. They delivered beyond expectations with clear communication, transparent reporting, and most importantly - real results.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "David Park",
      role: "Owner",
      company: "Park's Home Services",
      content:
        "Our local digital presence was practically non-existent before working with this team. Now we dominate local search results and get calls daily from new customers. Our new brand identity looks amazing!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "E-commerce Manager",
      company: "Bella Fashion",
      content:
        "AssuredPixel helped us optimize our entire e-commerce brand and site. User experience improved dramatically, our brand feels premium, and most importantly - sales increased by 180%.",
      rating: 3,
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    },
  ],
};

export const TestimonialsSection = () => {
  const { testimonials } = mockData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return null;
};