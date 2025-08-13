import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GuruSidebar } from "@/components/GuruSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Bell } from "lucide-react";

const GuruDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <GuruSidebar />
        
        <div className="flex-1">
          <header className="h-16 flex items-center border-b bg-card px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold">Dashboard Guru</h1>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Guru</span>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Siswa Aktif</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32</div>
                  <p className="text-xs text-muted-foreground">Di kelas Anda</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ekstrakurikuler</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Yang Anda bimbing</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notifikasi</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Pesan baru</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profil Siswa</CardTitle>
                  <CardDescription>
                    Lihat dan kelola profil siswa di kelas Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Siswa {i}</h4>
                          <p className="text-sm text-muted-foreground">Kelas 6A</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Aktif</p>
                          <p className="text-xs text-muted-foreground">Sepak Bola, Sains</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informasi Terbaru</CardTitle>
                  <CardDescription>
                    Informasi sekolah dan ekstrakurikuler terkini
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <h4 className="font-medium text-sm">Rapat Guru</h4>
                      <p className="text-xs text-muted-foreground">Besok, 14:00 WIB</p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <h4 className="font-medium text-sm">Lomba Sains</h4>
                      <p className="text-xs text-muted-foreground">Minggu depan</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <h4 className="font-medium text-sm">Update Kurikulum</h4>
                      <p className="text-xs text-muted-foreground">Lihat detail</p>
                    </div>
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

export default GuruDashboard;