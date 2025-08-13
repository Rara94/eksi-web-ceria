import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import soccerImage from "@/assets/soccer-activity.jpg";
import artImage from "@/assets/art-activity.jpg";
import musicImage from "@/assets/music-activity.jpg";
import scienceImage from "@/assets/science-activity.jpg";

const activities = [
  {
    id: 1,
    title: "Sepak Bola",
    description: "Latihan sepak bola untuk mengembangkan keterampilan motorik dan kerjasama tim",
    image: soccerImage,
    schedule: "Selasa & Kamis",
    time: "15:30 - 17:00",
    participants: 25,
    location: "Lapangan Sekolah",
    category: "Olahraga",
    color: "bg-success"
  },
  {
    id: 2,
    title: "Seni & Kerajinan",
    description: "Mengembangkan kreativitas melalui berbagai kegiatan seni dan kerajinan tangan",
    image: artImage,
    schedule: "Senin & Rabu",
    time: "14:00 - 15:30",
    participants: 20,
    location: "Ruang Seni",
    category: "Seni",
    color: "bg-warning"
  },
  {
    id: 3,
    title: "Musik & Choir",
    description: "Belajar bermain alat musik dan menyanyi dalam paduan suara sekolah",
    image: musicImage,
    schedule: "Jumat",
    time: "14:30 - 16:00",
    participants: 30,
    location: "Ruang Musik",
    category: "Musik",
    color: "bg-accent"
  },
  {
    id: 4,
    title: "Sains Club",
    description: "Eksperimen sains menyenangkan untuk menumbuhkan rasa ingin tahu",
    image: scienceImage,
    schedule: "Sabtu",
    time: "09:00 - 11:00",
    participants: 18,
    location: "Lab Sains",
    category: "Sains",
    color: "bg-info"
  }
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kegiatan Ekstrakurikuler
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beragam pilihan kegiatan ekstrakurikuler yang dirancang untuk mengembangkan bakat, minat, 
            dan karakter siswa secara menyeluruh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card 
              key={activity.id} 
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${activity.color} text-white`}>
                    {activity.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {activity.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{activity.schedule}</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{activity.participants} peserta</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{activity.location}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  Lihat Detail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
            Lihat Semua Kegiatan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;