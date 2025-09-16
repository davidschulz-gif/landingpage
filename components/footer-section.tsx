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
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "API", href: "#api" },
    { name: "Integrations", href: "#integrations" }
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Press", href: "#press" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Community", href: "#community" },
    { name: "Support", href: "#support" },
    { name: "Status", href: "#status" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" }
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
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Logo Section */}
        <div className="mb-12 flex flex-col items-center space-y-2">
          <img
            src="/logo/typus_logo_red_transp.png"
            alt="Typus.AI logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span
            className="text-center uppercase"
            style={{
              fontFamily: "var(--font-source-serif-4), 'Source Serif 4', serif",
              fontSize: "12px",
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="sm:text-[18px] md:text-[24px] lg:[text-30px] font-semibold text-gray-900 uppercase tracking-wide mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">API</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Integrations</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[18px] md:text-[24px] lg:[text-30px] font-semibold text-gray-900 uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[18px] md:text-[24px] lg:[text-30px] font-semibold text-gray-900 uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Tutorials</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Community</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[18px] md:text-[24px] lg:[text-30px] font-semibold text-gray-900 uppercase tracking-wide mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="sm:text-[18px] md:text-[24px] lg:[text-30px] font-semibold text-gray-900 uppercase tracking-wide mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Email</Link></li>
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