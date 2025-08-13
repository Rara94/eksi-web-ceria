import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-activities.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Wujudkan Bakat 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Terbaik</span> 
                Anak Anda
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Platform digital untuk kegiatan ekstrakurikuler SD yang menghubungkan siswa, guru, dan orangtua dalam mengembangkan potensi anak secara optimal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 group"
              >
                Jelajahi Kegiatan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Tonton Video
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Kegiatan Ekstrakurikuler</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Guru Pembimbing</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Kegiatan Ekstrakurikuler SD"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-lg shadow-soft animate-bounce-gentle">
              <div className="text-2xl font-bold text-success">🏆</div>
              <div className="text-sm font-medium">Juara 1</div>
              <div className="text-xs text-muted-foreground">Lomba Sains</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-soft animate-bounce-gentle" style={{animationDelay: "0.5s"}}>
              <div className="text-2xl font-bold text-info">🎨</div>
              <div className="text-sm font-medium">15 Karya</div>
              <div className="text-xs text-muted-foreground">Pameran Seni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;