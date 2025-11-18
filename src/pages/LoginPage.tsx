import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Alert, AlertDescription } from '../components/ui/alert';
import { 
  User, 
  Lock,
  Users,
  Briefcase,
  GraduationCap,
  AlertCircle
} from 'lucide-react';
import logoImage from 'figma:asset/64eb2df99a63ecb03c60d08c30a8160676f37bba.png';

interface LoginPageProps {
  onLogin: (role: 'participant' | 'mentor' | 'brand', name: string) => void;
}

// Dummy data untuk simulasi autentikasi
const dummyUsers = [
  { email: 'peserta@vinix.com', password: 'peserta123', role: 'participant' as const, name: 'Alex Thompson' },
  { email: 'mentor@vinix.com', password: 'mentor123', role: 'mentor' as const, name: 'Dr. Sarah Johnson' },
  { email: 'brand@vinix.com', password: 'brand123', role: 'brand' as const, name: 'TechRetail Inc.' },
];

export function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<'participant' | 'mentor' | 'brand' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    {
      type: 'participant' as const,
      title: 'Peserta',
      icon: GraduationCap,
      description: 'Ikuti proyek dan bangun portfolio Anda',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'mentor' as const,
      title: 'Mentor',
      icon: Users,
      description: 'Bimbing peserta dalam proyek mereka',
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: 'brand' as const,
      title: 'Brand',
      icon: Briefcase,
      description: 'Posting proyek dan kelola tim',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulasi delay untuk autentikasi
    setTimeout(() => {
      // Cari user berdasarkan email dan password
      const user = dummyUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError('Email atau password salah. Silakan coba lagi.');
        setIsLoading(false);
        return;
      }

      // Cek apakah role sesuai
      if (user.role !== selectedRole) {
        const roleNames = {
          participant: 'Peserta',
          mentor: 'Mentor',
          brand: 'Brand'
        };
        setError(
          `Akun ini terdaftar sebagai ${roleNames[user.role]}, bukan ${roleNames[selectedRole!]}. Silakan login dengan role yang sesuai.`
        );
        setIsLoading(false);
        return;
      }

      // Login berhasil
      onLogin(user.role, user.name);
      setIsLoading(false);
    }, 800);
  };

  const handleRoleSelect = (role: 'participant' | 'mentor' | 'brand') => {
    setSelectedRole(role);
    setError('');
    setEmail('');
    setPassword('');
  };

  const handleBack = () => {
    setSelectedRole(null);
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <img 
            src={logoImage} 
            alt="VINIX7" 
            className="h-16 w-auto mx-auto mb-4 brightness-150"
          />
          <h1 className="text-4xl md:text-5xl text-white mb-2">
            Selamat Datang di <span className="text-accent">VINIX RMP</span>
          </h1>
          <p className="text-xl text-white/80">Masuk ke akun Anda untuk melanjutkan</p>
        </motion.div>

        {!selectedRole ? (
          // Role Selection
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl text-white text-center mb-6">Pilih Peran Anda</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <motion.div
                  key={role.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className="p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-accent rounded-2xl bg-white/95 backdrop-blur-sm group"
                    onClick={() => handleRoleSelect(role.type)}
                  >
                    <div className={`bg-gradient-to-br ${role.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-primary text-center mb-2">{role.title}</h3>
                    <p className="text-muted-foreground text-center">{role.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Info Akun Demo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-lg text-primary mb-3">💡 Akun Demo untuk Testing</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-left">
                    <p className="text-primary mb-1"><strong>Peserta:</strong></p>
                    <p className="text-muted-foreground">Email: peserta@vinix.com</p>
                    <p className="text-muted-foreground">Password: peserta123</p>
                  </div>
                  <div className="text-left">
                    <p className="text-primary mb-1"><strong>Mentor:</strong></p>
                    <p className="text-muted-foreground">Email: mentor@vinix.com</p>
                    <p className="text-muted-foreground">Password: mentor123</p>
                  </div>
                  <div className="text-left">
                    <p className="text-primary mb-1"><strong>Brand:</strong></p>
                    <p className="text-muted-foreground">Email: brand@vinix.com</p>
                    <p className="text-muted-foreground">Password: brand123</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ) : (
          // Login Form
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <Card className="p-8 rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className={`bg-gradient-to-br ${roles.find(r => r.type === selectedRole)?.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {roles.find(r => r.type === selectedRole)?.icon && (
                    <div className="w-8 h-8 text-white">
                      {selectedRole === 'participant' && <GraduationCap className="w-8 h-8" />}
                      {selectedRole === 'mentor' && <Users className="w-8 h-8" />}
                      {selectedRole === 'brand' && <Briefcase className="w-8 h-8" />}
                    </div>
                  )}
                </div>
                <h2 className="text-2xl text-primary mb-1">
                  Masuk sebagai {roles.find(r => r.type === selectedRole)?.title}
                </h2>
                <p className="text-muted-foreground">
                  {roles.find(r => r.type === selectedRole)?.description}
                </p>
              </div>

              {error && (
                <Alert variant="destructive" className="mb-5">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Ingat saya</span>
                  </label>
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    Lupa password?
                  </a>
                </div>

                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Memproses...' : 'Masuk'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="w-full rounded-lg"
                    disabled={isLoading}
                  >
                    Kembali
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Belum punya akun?{' '}
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  Daftar sekarang
                </a>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}