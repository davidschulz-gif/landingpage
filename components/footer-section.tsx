"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Create", href: "#create" },
    { name: "Edit", href: "#edit" },
    { name: "Upscale", href: "#upscale" }
  ],
  community: [
    { name: "Tutorials", href: "#tutorials" },
    { name: "Press", href: "#press" },
    { name: "Reviews", href: "#reviews" },
    { name: "Instagram", href: "#instagram" },
    { name: "Linkedin", href: "#linkedin" }
  ],
  licenses: [
    { name: "Pricing", href: "#pricing" },
    { name: "Plugins", href: "#plugins" },
    { name: "Student Access", href: "#student-access" }
  ],
  contact: [
    { name: "Book a Call", href: "#book-a-call" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#twitter", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin", color: "hover:text-blue-600" },
  { name: "GitHub", icon: Github, href: "#github", color: "hover:text-gray-600" },
  { name: "Email", icon: Mail, href: "mailto:hello@typus.ai", color: "hover:text-red-500" }
];

export function FooterSection() {
  return (
    <footer className="bg-white border-t border-gray-100 rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Logo Section */}
        <div className="mb-12 flex flex-col items-center space-y-2">
          <img
            src="/logo/typus_logo_red_transp.png"
            alt="Typus.AI logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span
            className="text-center uppercase"
            style={{
              fontFamily: "var(--font-source-serif-4), 'Source Serif 4', serif",
              fontSize: "18px",
              fontWeight: 300,
              letterSpacing: "2.5px",
              lineHeight: "1.3em",
              color: "#FF1E1E",
              textTransform: "uppercase",
            }}
          >
            typus.AI
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="sm:text-[12px] md:text-[16px] lg:text-[20px] font-medium uppercase tracking-wide mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[12px] md:text-[16px] lg:text-[20px] font-medium uppercase tracking-wide mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[12px] md:text-[16px] lg:text-[20px] font-medium uppercase tracking-wide mb-4">Licenses</h3>
            <ul className="space-y-2">
              {footerLinks.licenses.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[12px] md:text-[16px] lg:text-[20px] font-medium uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-20 border-gray-100 pt-8">
          <p className="text-xs text-center text-gray-500">© 2025 Typus.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}