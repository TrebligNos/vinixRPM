import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Briefcase, 
  Users, 
  Award, 
  Rocket, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';
import logoImage from 'figma:asset/64eb2df99a63ecb03c60d08c30a8160676f37bba.png';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Briefcase,
      title: 'Proyek Nyata',
      description: 'Kerjakan proyek industri nyata dari brand terkemuka'
    },
    {
      icon: Users,
      title: 'Bimbingan Ahli',
      description: 'Dibimbing oleh profesional berpengalaman sepanjang perjalanan Anda'
    },
    {
      icon: Award,
      title: 'Raih Pengakuan',
      description: 'Bangun portofolio yang menampilkan pencapaian dunia nyata Anda'
    },
    {
      icon: Rocket,
      title: 'Percepat Karir',
      description: 'Dapatkan pengalaman praktis yang membedakan Anda'
    }
  ];

  const stats = [
    { value: '500+', label: 'Proyek Aktif' },
    { value: '50+', label: 'Brand Partner' },
    { value: '10k+', label: 'Peserta' },
    { value: '95%', label: 'Tingkat Keberhasilan' }
  ];

  const benefits = [
    'Akses ke proyek dari perusahaan Fortune 500',
    'Bimbingan personal dari ahli industri',
    'Sertifikat digital dan kredensial portofolio',
    'Jaringan dengan profesional dan rekan sejawat',
    'Pembelajaran fleksibel yang sesuai jadwal Anda',
    'Pengalaman pemecahan masalah dunia nyata'
  ];

  const testimonials = [
    {
      name: 'Ahmadinejad',
      role: 'Mahasiswa',
      avatar: 'https://rencanamu.id/assets/file_uploaded/editor/1452486244-youthmanua.jpg',
      rating: 5,
      testimonial: 'Program ini benar-benar mengubah cara saya belajar. Proyek-proyeknya sangat relevan dengan industri dan bimbingan mentor sangat membantu saya mendapatkan pekerjaan impian.'
    },
    {
      name: 'Angelina',
      role: 'Brand Manager di TechCorp',
      avatar: 'https://univ45sby.ac.id/wp-content/uploads/2014/10/pmb.png',
      rating: 5,
      testimonial: 'Kami mendapatkan talenta-talenta luar biasa melalui platform ini. Kualitas hasil kerja para peserta melebihi ekspektasi kami. Sangat direkomendasikan!'
    },
    {
      name: 'Budi',
      role: 'Fresh Graduate',
      avatar: 'https://assets.unileversolutions.com/v1/87411411.png',
      rating: 4,
      testimonial: 'VINIX RMP memberikan saya portofolio yang kuat. Saya merasa lebih percaya diri saat wawancara kerja dan berhasil mendapatkan beberapa tawaran.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(13,27,42,0.05),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-2 rounded-full mb-8 border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm">Dipercaya oleh 10.000+ Mahasiswa & Profesional</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-primary tracking-tight">
              Menjembatani Pembelajaran dengan{' '}
              <span className="text-accent">Pengalaman Industri Nyata</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Terhubung dengan proyek mikro dunia nyata dari brand ternama. Bangun portofolio, 
              tingkatkan keterampilan praktis, dan percepat karir Anda bersama VINIX RMP.
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('participant')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Users className="w-5 h-5 mr-2" />
                Gabung Sebagai
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Mengapa Memilih VINIX RMP?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rasakan platform pembelajaran unik yang dirancang untuk profesional modern
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl">
                  <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">Cara Kerjanya</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Langkah mudah untuk memulai perjalanan Anda dengan proyek dunia nyata
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Jelajahi Proyek', description: 'Telusuri beragam proyek dari brand ternama sesuai minat Anda' },
              { step: '02', title: 'Daftar & Belajar', description: 'Kirim lamaran Anda dan dapatkan mentor ahli' },
              { step: '03', title: 'Bangun Portofolio', description: 'Selesaikan proyek, raih pengakuan, dan pamerkan karya Anda' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl text-accent/30 mb-4">{item.step}</div>
                <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-primary mb-6">
                Apa yang Akan <span className="text-accent">Anda Dapatkan</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lebih dari sekadar belajar—bangun keterampilan yang penting di dunia nyata
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-xl p-3">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-white">
                      <div className="text-3xl">85%</div>
                      <div className="text-white/70">Mendapat Tawaran Kerja</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-xl p-3">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-white">
                      <div className="text-3xl">3x</div>
                      <div className="text-white/70">Pertumbuhan Karir Lebih Cepat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-xl p-3">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-white">
                      <div className="text-3xl">100+</div>
                      <div className="text-white/70">Perusahaan Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kisah sukses dari para peserta dan brand yang telah bergabung dengan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full flex flex-col justify-between bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div>
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.testimonial}"</p>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-amber-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Bergabunglah dengan ribuan profesional yang membangun masa depan mereka dengan pengalaman dunia nyata
            </p>
            <Button 
              size="lg"
              onClick={() => onNavigate('participant')}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Mulai Sekarang
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logoImage} 
              alt="VINIX7" 
              className="h-12 w-auto brightness-150"
            />
          </div>
          <p className="text-white/70">© 2025 VINIX Real-World Micro Project. Hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
