"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Zap,
  Headphones,
  Network,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] font-['Inter',sans-serif] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-[#171717]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo/Quick2.png"
                alt="QuickDesk Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 dark:text-gray-300 hover:text-[#3AC282] dark:hover:text-[#3AC282] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-slate-600 dark:text-gray-300 hover:text-[#3AC282] dark:hover:text-[#3AC282] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-slate-600 dark:text-gray-300 hover:text-[#3AC282] dark:hover:text-[#3AC282] transition-colors"
              >
                Early Access
              </a>
              {/* <ThemeToggle /> */}
              <Link
                href="#waitlistform"
                className="bg-[#3AC282] hover:bg-[#1c6141] text-white px-4 py-2 rounded-lg transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-[#171717] dark:via-gray-800 dark:to-[#171717]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Employee Support
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Be First to Experience the
                <span className="bg-gradient-to-r from-[#3AC282] to-purple-600 bg-clip-text text-transparent">
                  Future of Work
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                WorkSync's AI-Powered Employee Support Copilot is launching
                soon. Join{" "}
                <span className="font-semibold text-[#3AC282] dark:text-[#3AC282]">
                  {/* {waitlistCount.toLocaleString()}+ */}
                </span>
                forward-thinking companies on our waitlist.
              </p>

              <div className="mb-8">
                <WaitlistForm />
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    {/* {waitlistCount.toLocaleString()}+ companies waiting */}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    SOC 2 Compliant
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#3AC282] to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        IT Ticket Resolved
                      </p>
                      <p className="text-sm text-slate-500 dark:text-gray-400">
                        Password reset for John Smith
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-[#3AC282] dark:text-[#3AC282]" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        HR Query Answered
                      </p>
                      <p className="text-sm text-slate-500 dark:text-gray-400">
                        PTO policy explained to Sarah
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Process Automated
                      </p>
                      <p className="text-sm text-slate-500 dark:text-gray-400">
                        Expense report submitted
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section
        id="features"
        className="py-20 bg-slate-50 dark:bg-[#171717] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why WorkSync Will Transform Your Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stop letting repetitive tasks slow down your team. WorkSync's AI
              handles the routine so your people can focus on what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#3AC282] dark:bg-[#171717] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Boost Productivity by 40%
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                AI handles repetitive tasks automatically, freeing your teams to
                focus on strategic work that drives real business value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Automated task routing
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Smart prioritization
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Real-time insights
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#3AC282] dark:bg-[#171717] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-[#3AC282] dark:text-[#3AC282]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Reduce Support Tickets by 60%
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                Instant AI-powered responses mean employees get help
                immediately, reducing frustration and support queue backlog.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    24/7 availability
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Instant responses
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Smart escalation
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#3AC282] dark:bg-[#171717] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Network className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Streamline 6 Departments
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                One unified platform handles HR, IT, Finance, Sales, Marketing,
                and Engineering queries with department-specific intelligence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Cross-department sync
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Custom workflows
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#3AC282]" />
                  <span className="text-sm text-slate-600 dark:text-gray-300">
                    Unified dashboard
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-white dark:bg-[#171717] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple AI That Just Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get up and running in minutes, not months. WorkSync integrates
              seamlessly with your existing tools.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#3AC282] dark:text-[#3AC282]">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Connect
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                Integrate with Slack, Teams, Gmail, and your existing tools in
                one click
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Train
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                AI learns your company processes, policies, and workflows
                automatically
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Automate
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                Handle requests, tasks, and queries instantly with intelligent
                responses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Scale
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                Grows with your team, learning and improving with every
                interaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Growing Companies
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300">
              Join hundreds of forward-thinking teams already on our waitlist
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-slate-400 dark:text-gray-500">
                TechCorp
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-slate-400 dark:text-gray-500">
                InnovateLabs
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-slate-400 dark:text-gray-500">
                GrowthCo
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-slate-400 dark:text-gray-500">
                ScaleUp
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#171717] rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-xl text-slate-700 dark:text-gray-300 mb-6 italic">
              "Finally, an AI solution built for mid-market teams. WorkSync
              understands our needs without the enterprise complexity we don't
              need."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-[#3AC282] dark:text-[#3AC282] font-bold">
                  SJ
                </span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Sarah Johnson
                </p>
                <p className="text-slate-600 dark:text-gray-300">
                  Head of Operations, TechStart Inc.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-6 py-3 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-semibold">
                {/* {waitlistCount.toLocaleString()}+ companies on the waitlist */}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section
        id="waitlistform"
        className="py-20 bg-gradient-to-br from-[#3AC282] to-[#171717] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Limited Early Access Program
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're launching WorkSync to a select group of companies first.
              Don't miss your chance to be among the pioneers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Early Access Members Get:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">
                    3-month free trial (worth $2,997)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Priority onboarding & setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">
                    Direct access to our founding team
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Custom integration support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">
                    Exclusive product roadmap input
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Secure Your Spot
              </h3>
              <WaitlistForm showCompanyField={true} />
              <p className="text-sm opacity-75 mt-4 text-center">
                Only <span className="font-bold">47 spots</span> remaining in
                our early access program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Out on the Future of Work
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Be among the first to experience AI-powered employee support that
            actually works.
          </p>

          <div className="mb-8">
            <WaitlistForm />
          </div>

          <p className="text-sm text-slate-400">
            We respect your privacy. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-[#171717] text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo/Quick2.png"
                  alt="QuickDesk Logo"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-slate-400 dark:text-gray-400">
                AI-powered employee support that transforms how teams work
                together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 dark:border-gray-700 mt-12 pt-8 text-center text-slate-400 dark:text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} WorkSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
