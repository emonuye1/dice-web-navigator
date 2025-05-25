
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Copyright } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const WebApp = () => {
  const { appId } = useParams();

  const webApps = {
    "remot-dadu-merah": {
      title: "Remot Dadu Merah",
      url: "https://firmanuye12.github.io/remot-dadu-merah/",
      color: "bg-red-500 hover:bg-red-600",
    },
    "monitor-dadu-merah": {
      title: "Monitor Dadu Merah",
      url: "https://firmanuye12.github.io/monitor/",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    "remot-dadu-kecrek": {
      title: "Remot Dadu Kecrek",
      url: "https://firmanuye12.github.io/dice-remot/",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    "monitor-dadu-kecrek": {
      title: "Monitor Dadu Kecrek",
      url: "https://remote-app-guardian.lovable.app/",
      color: "bg-green-500 hover:bg-green-600",
    },
  };

  const currentApp = webApps[appId as keyof typeof webApps];

  if (!currentApp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Aplikasi Tidak Ditemukan</h1>
            <Link to="/">
              <Button className="bg-blue-500 hover:bg-blue-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Dashboard
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Copyright Footer */}
        <footer className="py-4 border-t border-white/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <Copyright className="w-4 h-4" />
              <span>Copyright by Firman</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header dengan tombol kembali */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/20 p-3 sm:p-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Kembali</span>
              </Button>
            </Link>
            <h1 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="truncate">{currentApp.title}</span>
            </h1>
          </div>
          
          <a 
            href={currentApp.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ExternalLink className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Buka di Tab Baru</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Iframe untuk menampilkan aplikasi web */}
      <div className="flex-grow overflow-hidden">
        <iframe
          src={currentApp.url}
          className="w-full h-full border-0 min-h-[70vh] min-h-[70dvh]"
          title={currentApp.title}
          allow="fullscreen"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            minHeight: 'calc(100dvh - 120px)'
          }}
        />
      </div>

      {/* Copyright Footer */}
      <footer className="py-2 sm:py-4 border-t border-white/20 bg-black/20 flex-shrink-0">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm">
            <Copyright className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Copyright by Firman</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebApp;
