"use client";

import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GamepadIcon className="h-8 w-8 text-purple-600" />
            <span className="font-bold text-xl">Aveon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-foreground/80 hover:text-foreground">Jobs</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">Companies</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">About</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">Contact</Link>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com" target="_blank" className="text-foreground/60 hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-foreground/60 hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-foreground/60 hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Button variant="default" className="ml-4 bg-purple-600 hover:bg-purple-700">
              Post a Job
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-foreground/80 hover:text-foreground">Jobs</Link>
              <Link href="#" className="text-foreground/80 hover:text-foreground">Companies</Link>
              <Link href="#" className="text-foreground/80 hover:text-foreground">About</Link>
              <Link href="#" className="text-foreground/80 hover:text-foreground">Contact</Link>
              <div className="flex space-x-4 pt-4">
                <Link href="https://github.com" target="_blank" className="text-foreground/60 hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-foreground/60 hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-foreground/60 hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                Post a Job
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}