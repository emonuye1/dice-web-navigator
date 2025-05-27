
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Copyright, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  const webApps = [
    {
      id: "remot-dadu-merah",
      title: "Remot Dadu Merah",
      description: "Remote control untuk dadu merah",
      url: "https://firmanuye12.github.io/remot-dadu-merah/",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      id: "monitor-dadu-merah",
      title: "Monitor Dadu Merah",
      description: "Monitor untuk dadu merah",
      url: "https://firmanuye12.github.io/monitor/",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: "remot-dadu-kecrek",
      title: "Remot Dadu Kecrek",
      description: "Remote control untuk dadu kecrek",
      url: "https://firmanuye12.github.io/dice-remot/",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "monitor-dadu-kecrek",
      title: "Monitor Dadu Kecrek",
      description: "Monitor untuk dadu kecrek",
      url: "https://remote-app-guardian.lovable.app/",
      color: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-3 sm:p-6 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">
            Dashboard Aplikasi Dadu
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-4">
            Pilih aplikasi yang ingin Anda buka
          </p>
          
          {showInstallButton && (
            <Button 
              onClick={handleInstallClick}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Install Aplikasi ke Desktop
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {webApps.map((app) => (
            <Card key={app.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-white text-xl sm:text-2xl flex items-center gap-2 sm:gap-3">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                  {app.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-base sm:text-lg">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link to={`/app/${app.id}`}>
                  <Button 
                    className={`w-full py-4 sm:py-6 text-base sm:text-lg font-semibold text-white ${app.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Buka Aplikasi
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-slate-400">
            Klik pada salah satu tombol di atas untuk membuka aplikasi
          </p>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="mt-8 py-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Copyright className="w-4 h-4" />
            <span>Copyright by Firman</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
