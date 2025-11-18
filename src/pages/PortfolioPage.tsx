import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { 
  Award, 
  Star, 
  Download,
  ExternalLink,
  Briefcase,
  TrendingUp,
  Target,
  MessageSquare,
  Calendar,
  Building2
} from 'lucide-react';

export function PortfolioPage() {
  const profile = {
    name: 'Alex Thompson',
    role: 'UX Designer & Developer',
    joinedDate: 'Maret 2024',
    completedProjects: 12,
    averageScore: 92,
    totalCertificates: 8
  };

  const skills = [
    'UI/UX Design',
    'React Development',
    'User Research',
    'Prototyping',
    'Analisis Data',
    'Digital Marketing'
  ];

  const achievements = [
    { title: 'Top Performer', description: 'Masuk 5% terbaik dari peserta', icon: Award },
    { title: 'Nilai Sempurna', description: 'Mencapai 100% pada 3 proyek', icon: Star },
    { title: 'Pembelajar Cepat', description: 'Menyelesaikan proyek lebih cepat dari jadwal', icon: TrendingUp },
    { title: 'Team Player', description: 'Berkolaborasi di 5+ proyek grup', icon: Target }
  ];

  const projects = [
    {
      id: 1,
      title: 'Redesain Platform E-commerce',
      brand: 'TechRetail Inc.',
      category: 'UI/UX Design',
      completedDate: 'Nov 2025',
      score: 98,
      skills: ['Figma', 'User Research', 'Prototyping'],
      description: 'Redesain lengkap alur checkout yang menghasilkan peningkatan konversi sebesar 40%.',
      feedback: 'Pekerjaan luar biasa dengan perhatian luar biasa terhadap kebutuhan pengguna. Riset sangat menyeluruh dan desain sangat bagus.'
    },
    {
      id: 2,
      title: 'Aplikasi Mobile Banking',
      brand: 'FinTech Solutions',
      category: 'Development',
      completedDate: 'Okt 2025',
      score: 95,
      skills: ['React Native', 'Integrasi API', 'Keamanan'],
      description: 'Mengembangkan fitur mobile banking yang aman dengan autentikasi biometrik.',
      feedback: 'Kode yang bersih, dokumentasi yang baik, dan selesai lebih cepat dari jadwal. Kemampuan problem-solving yang hebat.'
    },
    {
      id: 3,
      title: 'Kampanye Media Sosial',
      brand: 'BrandMax',
      category: 'Marketing',
      completedDate: 'Sep 2025',
      score: 90,
      skills: ['Strategi Konten', 'Analytics', 'Copywriting'],
      description: 'Membuat dan menjalankan kampanye selama sebulan yang meningkatkan engagement sebesar 65%.',
      feedback: 'Pendekatan kreatif dengan pengambilan keputusan berbasis data. Presentasi hasil yang sangat baik.'
    },
    {
      id: 4,
      title: 'Dashboard Analitik Pelanggan',
      brand: 'DataCorp',
      category: 'Data Science',
      completedDate: 'Agu 2025',
      score: 94,
      skills: ['Python', 'Tableau', 'SQL'],
      description: 'Membangun dashboard interaktif untuk wawasan pelanggan dan analisis perilaku secara real-time.',
      feedback: 'Kemampuan visualisasi data yang mengesankan dan komunikasi wawasan kompleks yang jelas.'
    }
  ];

  const mentorFeedback = [
    {
      mentor: 'Sarah Johnson',
      role: 'Senior UX Designer',
      company: 'TechRetail Inc.',
      feedback: 'Alex adalah salah satu peserta paling berdedikasi yang pernah saya bimbing. Kemampuannya untuk melakukan iterasi berdasarkan feedback sangat luar biasa.',
      rating: 5
    },
    {
      mentor: 'Mike Chen',
      role: 'Lead Developer',
      company: 'FinTech Solutions',
      feedback: 'Keterampilan teknis yang kuat dikombinasikan dengan komunikasi yang sangat baik. Alex secara konsisten memberikan pekerjaan berkualitas tinggi.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 rounded-2xl border-2 border-primary">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-accent">
                <AvatarFallback className="bg-accent text-primary text-3xl">AT</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-white">
                <h1 className="text-4xl mb-2">{profile.name}</h1>
                <p className="text-xl text-white/90 mb-4">{profile.role}</p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Bergabung {profile.joinedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{profile.completedProjects} Proyek Selesai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{profile.averageScore}% Nilai Rata-rata</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="secondary" className="rounded-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Unduh Portfolio
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 text-center rounded-2xl border-2 hover:border-accent transition-all">
              <div className="text-4xl text-primary mb-2">{profile.completedProjects}</div>
              <div className="text-sm text-muted-foreground">Proyek</div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 text-center rounded-2xl border-2 hover:border-accent transition-all">
              <div className="text-4xl text-accent mb-2">{profile.averageScore}%</div>
              <div className="text-sm text-muted-foreground">Nilai Rata-rata</div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 text-center rounded-2xl border-2 hover:border-accent transition-all">
              <div className="text-4xl text-green-500 mb-2">{profile.totalCertificates}</div>
              <div className="text-sm text-muted-foreground">Sertifikat</div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-primary mb-4">Keterampilan & Keahlian</h2>
          <Card className="p-6 rounded-2xl border-2">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-accent/10 text-primary hover:bg-accent/20 px-4 py-2 rounded-lg"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-primary mb-4">Pencapaian</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl"
              >
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-primary mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-primary mb-4">Proyek Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-primary mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{project.brand}</span>
                    </div>
                  </div>
                  
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="rounded-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Badge className="bg-accent/10 text-primary hover:bg-accent/20 rounded-lg">
                      {project.category}
                    </Badge>
                    <span className="text-muted-foreground">{project.completedDate}</span>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Feedback Mentor:</p>
                        <p className="text-sm text-foreground italic">&ldquo;{project.feedback}&rdquo;</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full rounded-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Lihat Detail Proyek
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Mentor Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl text-primary mb-4">Testimoni Mentor</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mentorFeedback.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 italic">&ldquo;{testimonial.feedback}&rdquo;</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-primary">{testimonial.mentor}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
