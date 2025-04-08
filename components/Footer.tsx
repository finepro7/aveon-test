import { GamepadIcon, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GamepadIcon className="h-8 w-8 text-purple-600" />
              <span className="font-bold text-xl">Aveon</span>
            </div>
            <p className="text-muted-foreground">
              Connecting talent with opportunities in the gaming industry.
            </p>
            <div className="flex space-x-4 mt-4">
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
          </div>
          <div>
            <h4 className="font-bold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Browse Jobs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Submit Resume</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Job Alerts</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Career Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Post a Job</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Browse Candidates</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Recruitment Solutions</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Pricing Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Aveon Recruitment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}