import { Button } from "@/components/ui/button";
import { Bell, GraduationCap, LogIn } from "lucide-react";
import { useState } from "react";
import LoginDialog from "./LoginDialog";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">EkstraSekolah</span>
            <span className="text-xs text-muted-foreground">SD Digital</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Beranda
          </a>
          <a href="#activities" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Kegiatan
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Tentang
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Kontak
          </a>
        </nav>

        {/* Right side - Notifications and Login */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </span>
          </Button>
          
          <Button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </header>
  );
};

export default Header;