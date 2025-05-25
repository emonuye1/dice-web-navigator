
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Dashboard Aplikasi Dadu
          </h1>
          <p className="text-xl text-slate-300">
            Pilih aplikasi yang ingin Anda buka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webApps.map((app) => (
            <Card key={app.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <ExternalLink className="w-6 h-6" />
                  {app.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/app/${app.id}`}>
                  <Button 
                    className={`w-full py-6 text-lg font-semibold text-white ${app.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Buka Aplikasi
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            Klik pada salah satu tombol di atas untuk membuka aplikasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
