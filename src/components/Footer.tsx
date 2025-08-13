import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">EkstraSekolah</span>
                <span className="text-xs opacity-80">SD Digital</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Platform digital untuk mengelola kegiatan ekstrakurikuler sekolah dasar
              dengan sistem yang terintegrasi dan mudah digunakan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Beranda</a></li>
              <li><a href="#activities" className="opacity-90 hover:opacity-100 transition-opacity">Kegiatan</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">Tentang Kami</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">Kontak</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kegiatan</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Sepak Bola</li>
              <li className="opacity-90">Seni & Kerajinan</li>
              <li className="opacity-90">Musik & Choir</li>
              <li className="opacity-90">Sains Club</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">(021) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-90">info@ekstrasekolah.sch.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="opacity-90">Jl. Pendidikan No. 123, Jakarta</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="opacity-90">
            © 2024 EkstraSekolah SD Digital. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;