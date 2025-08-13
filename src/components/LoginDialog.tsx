import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, User, Shield } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [activeRole, setActiveRole] = useState("siswa");
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    // TODO: Implement proper authentication
    console.log(`Login as ${role}`);
    onOpenChange(false);
    
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Login</DialogTitle>
          <DialogDescription className="text-center">
            Pilih peran Anda untuk masuk ke sistem
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
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
              <Input id="student-id" placeholder="Masukkan NIS Anda" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password">Password</Label>
              <Input id="student-password" type="password" placeholder="Masukkan password" />
            </div>
            <Button 
              onClick={() => handleLogin("siswa")} 
              className="w-full bg-gradient-primary hover:shadow-glow"
            >
              Login sebagai Siswa
            </Button>
          </TabsContent>

          <TabsContent value="guru" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="teacher-id">NIP (Nomor Induk Pegawai)</Label>
              <Input id="teacher-id" placeholder="Masukkan NIP Anda" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teacher-password">Password</Label>
              <Input id="teacher-password" type="password" placeholder="Masukkan password" />
            </div>
            <Button 
              onClick={() => handleLogin("guru")} 
              className="w-full bg-secondary hover:shadow-elevated"
            >
              Login sebagai Guru
            </Button>
          </TabsContent>

          <TabsContent value="admin" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-username">Username Admin</Label>
              <Input id="admin-username" placeholder="Masukkan username admin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input id="admin-password" type="password" placeholder="Masukkan password" />
            </div>
            <Button 
              onClick={() => handleLogin("admin")} 
              className="w-full bg-accent hover:shadow-elevated"
            >
              Login sebagai Admin
            </Button>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          Lupa password? Hubungi administrator sekolah
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;