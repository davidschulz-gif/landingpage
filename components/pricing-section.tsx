"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Personal",
    price: "Free",
    period: "",
    description: "Perfect for individual architects and students",
    features: [
      "5 renders per month",
      "Basic AI models",
      "Standard resolution",
      "Community support",
      "Basic templates",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for professional architects and small studios",
    features: [
      "100 renders per month",
      "Advanced AI models",
      "High resolution (4K)",
      "Priority support",
      "Custom templates",
      "CAD integration",
      "Style transfer",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large firms and organizations",
    features: [
      "Unlimited renders",
      "Premium AI models",
      "Ultra-high resolution (8K)",
      "Dedicated support",
      "Custom integrations",
      "Team collaboration",
      "Advanced analytics",
      "White-label options",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-red-500 text-white px-4 py-1 text-sm font-medium">
            Most Popular
          </Badge>
        </div>
      )}
      
      <Card 
        className={`relative p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
          plan.popular 
            ? 'border-2 border-red-500 bg-gradient-to-b from-red-50 to-white' 
            : 'border border-gray-200 bg-white hover:border-gray-300'
        }`}
      >
        <div className="text-center mb-8">
          <h3 
            className="text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {plan.name}
          </h3>
          <div className="mb-4">
            <span 
              className="text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-gray-600 ml-1">{plan.period}</span>
            )}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {plan.description}
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span 
                className="text-gray-700 text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.buttonVariant}
          className={`w-full py-3 text-base font-medium transition-all duration-300 ${
            plan.popular 
              ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl' 
              : ''
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {plan.buttonText}
        </Button>
      </Card>
    </motion.div>
  );
};

export function PricingSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Simple, <span className="text-red-500">Transparent</span> Pricing
          </h2>
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Choose the perfect plan for your architectural visualization needs. Start free and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Need a Custom Solution?
            </h3>
            <p 
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              We offer tailored solutions for large enterprises, educational institutions, and government organizations. 
              Contact our sales team to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="px-8 py-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Schedule Demo
              </Button>
              <Button 
                className="px-8 py-3 bg-red-500 hover:bg-red-600"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}