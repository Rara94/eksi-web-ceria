import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Shield, BookOpen, Users, Settings } from "lucide-react";

const Login = () => {
  const [activeRole, setActiveRole] = useState("siswa");
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    // TODO: Implement proper authentication
    console.log(`Login as ${role}`);
    
    // Redirect to appropriate dashboard
    switch (role) {
      case "siswa":
        navigate("/siswa");
        break;
      case "guru":
        navigate("/guru");
        break;
      case "admin":
        navigate("/admin");
        break;
    }
  };

  const sidebarFeatures = [
    {
      icon: BookOpen,
      title: "Pembelajaran Digital",
      description: "Akses materi dan tugas secara online"
    },
    {
      icon: Users,
      title: "Komunitas Sekolah",
      description: "Terhubung dengan siswa dan guru lainnya"
    },
    {
      icon: Settings,
      title: "Manajemen Data",
      description: "Kelola profil dan informasi pribadi"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">EkstraSekolah</h1>
            <p className="text-xl opacity-90">Platform Ekstrakurikuler SD Digital</p>
          </div>
          
          <div className="space-y-6 max-w-md">
            {sidebarFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm opacity-75">
              Bergabunglah dengan lebih dari <span className="font-bold">500+ siswa</span> aktif
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full animate-bounce-gentle" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="lg:hidden flex items-center justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Selamat Datang</h2>
            <p className="text-muted-foreground">Masuk ke akun Anda untuk melanjutkan</p>
          </div>

          <Card className="shadow-elevated">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Masuk ke Sistem</CardTitle>
              <CardDescription>
                Pilih peran Anda untuk mengakses dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="siswa" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Siswa
                  </TabsTrigger>
                  <TabsTrigger value="guru" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Guru
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Admin
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="siswa" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">NIS (Nomor Induk Siswa)</Label>
                    <Input 
                      id="student-id" 
                      placeholder="Masukkan NIS Anda"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Kata Sandi</Label>
                    <Input 
                      id="student-password" 
                      type="password" 
                      placeholder="Masukkan kata sandi"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <Button 
                    onClick={() => handleLogin("siswa")} 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    Masuk sebagai Siswa
                  </Button>
                </TabsContent>

                <TabsContent value="guru" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-id">NIP (Nomor Induk Pegawai)</Label>
                    <Input 
                      id="teacher-id" 
                      placeholder="Masukkan NIP Anda"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teacher-password">Kata Sandi</Label>
                    <Input 
                      id="teacher-password" 
                      type="password" 
                      placeholder="Masukkan kata sandi"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <Button 
                    onClick={() => handleLogin("guru")} 
                    className="w-full bg-secondary hover:shadow-elevated transition-all duration-300"
                  >
                    Masuk sebagai Guru
                  </Button>
                </TabsContent>

                <TabsContent value="admin" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-username">Username Admin</Label>
                    <Input 
                      id="admin-username" 
                      placeholder="Masukkan username admin"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Kata Sandi</Label>
                    <Input 
                      id="admin-password" 
                      type="password" 
                      placeholder="Masukkan kata sandi"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <Button 
                    onClick={() => handleLogin("admin")} 
                    className="w-full bg-accent hover:shadow-elevated transition-all duration-300"
                  >
                    Masuk sebagai Admin
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Lupa kata sandi? 
                  <button className="text-primary hover:underline ml-1 transition-colors">
                    Hubungi administrator sekolah
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;