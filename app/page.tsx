"use client";

import Card from "./components/Card/Card";
import FaqSection from "./components/FAQs/FAQs";
import HeroSection from "./components/HeroSection/HeroSection";
import JoinFundSection from "./components/JoinFundSec/JoinFundSec";

const obj = [
  {
    imageSrc: "https://i.pinimg.com/236x/14/b7/99/14b799d2139e3bd08532a573c88915d7.jpg",
    title: "Create a Campaign",
    content: "Start your own fundraiser to support a cause you care about. Set your goals, share your story, and make a difference.",
  },
  {
    imageSrc: "https://i.pinimg.com/control/236x/46/90/20/46902093d28785e7c280dd86efadde33.jpg",
    title: "Donate to Causes",
    content: "Browse through campaigns and donate to those that resonate with you. Support projects that bring real change.",
  },
  {
    imageSrc: "https://i.pinimg.com/236x/b8/9c/d0/b89cd029c11523703d8962c420ea042d.jpg", 
    title: "Volunteer Opportunities",
    content: "Join hands with us and volunteer your time and skills for different initiatives across communities.",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Cards Section */}
      <div className="mb-10 text-center pt-5 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Fund, Fast as <span className="italic text-gray-700">Flash</span></h1>
        <p className="text-gray-500 mb-8 text-lg">Fundraise at the speed of thought! Elevate your cause in just a minute with our lightning-fast fundraising platform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {obj.map((object,index)=>
          <Card key={index} {...object}/>)}
        </div>
      </div>
      
      <JoinFundSection />
      <FaqSection />
    </div>
  );
}
