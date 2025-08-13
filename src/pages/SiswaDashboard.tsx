import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SiswaSidebar } from "@/components/SiswaSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, FileText, Bell, Mail } from "lucide-react";

const SiswaDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <SiswaSidebar />
        
        <div className="flex-1">
          <header className="h-16 flex items-center border-b bg-card px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold">Dashboard Siswa</h1>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Siswa</span>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ekstrakurikuler</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Yang Anda ikuti</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notifikasi</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Pesan baru</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Request</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Dalam proses</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profil Saya</CardTitle>
                  <CardDescription>
                    Informasi profil dan data pribadi Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Ahmad Rizki</h3>
                        <p className="text-sm text-muted-foreground">NIS: 2024001</p>
                        <p className="text-sm text-muted-foreground">Kelas: 6A</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Lihat Profil Lengkap
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ekstrakurikuler Saya</CardTitle>
                  <CardDescription>
                    Daftar kegiatan ekstrakurikuler yang Anda ikuti
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">Sepak Bola</h4>
                        <p className="text-xs text-muted-foreground">Setiap Rabu, 15:00</p>
                      </div>
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">Seni & Kerajinan</h4>
                        <p className="text-xs text-muted-foreground">Setiap Jumat, 14:00</p>
                      </div>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">Musik</h4>
                        <p className="text-xs text-muted-foreground">Setiap Sabtu, 10:00</p>
                      </div>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Aktif</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Ajukan Perubahan Data</CardTitle>
                  <CardDescription>
                    Buat request untuk perubahan data pribadi atau informasi lainnya
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="h-16 flex flex-col gap-2">
                      <User className="h-5 w-5" />
                      Request Perubahan Data
                    </Button>
                    <Button variant="secondary" className="h-16 flex flex-col gap-2">
                      <FileText className="h-5 w-5" />
                      Request Surat Keterangan
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col gap-2">
                      <Mail className="h-5 w-5" />
                      Request Lainnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SiswaDashboard;