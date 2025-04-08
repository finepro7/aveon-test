"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GamepadIcon, Users, Briefcase, Trophy, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <GamepadIcon className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Level Up Your Gaming Career
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Connect with top gaming studios and find your dream role in game development
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Find Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                For Employers
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold mb-2">5000+</h3>
                <p className="text-muted-foreground">Game Developers Placed</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold mb-2">300+</h3>
                <p className="text-muted-foreground">Partner Studios</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-muted-foreground">Placement Success Rate</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Explore Game Development Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Game Programmers",
                "3D Artists",
                "Game Designers",
                "Unity Developers",
                "Unreal Engine Specialists",
                "Technical Artists",
              ].map((role) => (
                <Link href="#" key={role}>
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2">{role}</h3>
                    <p className="text-muted-foreground mb-4">
                      Find the best opportunities for {role.toLowerCase()}
                    </p>
                    <Button variant="ghost" className="group">
                      View Jobs
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Find Your Next Gaming Role?
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search for game development jobs..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black"
                  />
                </div>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}