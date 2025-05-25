
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Aplikasi Tidak Ditemukan</h1>
          <Link to="/">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header dengan tombol kembali */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/20 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              {currentApp.title}
            </h1>
          </div>
          
          <a 
            href={currentApp.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ExternalLink className="w-4 h-4 mr-2" />
              Buka di Tab Baru
            </Button>
          </a>
        </div>
      </div>

      {/* Iframe untuk menampilkan aplikasi web */}
      <div className="h-[calc(100vh-80px)]">
        <iframe
          src={currentApp.url}
          className="w-full h-full border-0"
          title={currentApp.title}
          allow="fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WebApp;
