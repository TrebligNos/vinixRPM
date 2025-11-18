import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Award,
  Calendar,
  Building2,
  Target,
  Send,
  FileText,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';

export function ParticipantDashboard() {
  const [submissionDialogOpen, setSubmissionDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const activeProjects = [
    {
      id: 1,
      title: 'Redesain UX E-commerce',
      brand: 'TechRetail Inc.',
      status: 'Dalam Proses',
      progress: 85,
      deadline: '20 Des 2025',
      mentor: 'Sarah Johnson',
      category: 'UI/UX Design',
      reviewStatus: 'belum', // 'belum', 'diajukan', 'direview', 'acc'
      mentorFeedback: null
    },
    {
      id: 2,
      title: 'Analisis Kampanye Media Sosial',
      brand: 'BrandMax',
      status: 'Menunggu Review',
      progress: 100,
      deadline: '25 Des 2025',
      mentor: 'Mike Chen',
      category: 'Marketing',
      reviewStatus: 'diajukan',
      mentorFeedback: null
    },
    {
      id: 3,
      title: 'Dashboard Analisis Data',
      brand: 'DataCorp',
      status: 'Direview Mentor',
      progress: 100,
      deadline: '18 Des 2025',
      mentor: 'Dr. Sarah Johnson',
      category: 'Data Science',
      reviewStatus: 'direview',
      mentorFeedback: 'Pekerjaan yang sangat baik! Visualisasi data Anda sangat jelas dan insightful. Saya hanya punya sedikit saran untuk perbaikan pada bagian filtering. Silakan revisi minor tersebut.'
    }
  ];

  const availableProjects = [
    {
      id: 4,
      title: 'Pengembangan Prototipe Aplikasi Mobile',
      brand: 'FinTech Solutions',
      deadline: '15 Jan 2026',
      category: 'Development',
      difficulty: 'Menengah',
      participants: 12
    },
    {
      id: 5,
      title: 'Dashboard Analisis Data',
      brand: 'DataCorp',
      deadline: '10 Jan 2026',
      category: 'Data Science',
      difficulty: 'Lanjutan',
      participants: 8
    },
    {
      id: 6,
      title: 'Pembuatan Identitas Brand',
      brand: 'StartupHub',
      deadline: '20 Jan 2026',
      category: 'Design',
      difficulty: 'Pemula',
      participants: 15
    }
  ];

  const completedProjects = [
    {
      id: 7,
      title: 'Audit Aksesibilitas Website',
      brand: 'AccessibleWeb',
      completedDate: '15 Nov 2025',
      score: 95,
      feedback: 'Perhatian luar biasa terhadap detail dan dokumentasi yang menyeluruh.',
      reviewStatus: 'acc',
      mentor: 'Sarah Johnson',
      submittedToBrand: true
    },
    {
      id: 8,
      title: 'Analisis Survei Pelanggan',
      brand: 'ResearchPro',
      completedDate: '28 Okt 2025',
      score: 88,
      feedback: 'Wawasan yang bagus dan presentasi temuan yang jelas.',
      reviewStatus: 'acc',
      mentor: 'Mike Chen',
      submittedToBrand: true
    }
  ];

  const handleSubmitForReview = (projectId: number) => {
    toast.success('Tugas berhasil diajukan ke mentor untuk direview!');
    setSubmissionDialogOpen(false);
    setSelectedProject(null);
  };

  const stats = [
    { icon: Briefcase, label: 'Proyek Aktif', value: '3', color: 'text-blue-500' },
    { icon: CheckCircle, label: 'Selesai', value: '7', color: 'text-green-500' },
    { icon: Award, label: 'Sertifikat', value: '5', color: 'text-purple-500' }
  ];

  const getStatusBadge = (reviewStatus: string, status: string) => {
    if (reviewStatus === 'acc') {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-lg">
        <CheckCircle2 className="w-3 h-3 mr-1" />
        Disetujui Mentor
      </Badge>;
    }
    if (reviewStatus === 'direview') {
      return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 rounded-lg">
        <AlertCircle className="w-3 h-3 mr-1" />
        Sedang Direview
      </Badge>;
    }
    if (reviewStatus === 'diajukan') {
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 rounded-lg">
        <Clock className="w-3 h-3 mr-1" />
        Menunggu Review
      </Badge>;
    }
    return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 rounded-lg">
      {status}
    </Badge>;
  };

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
          <h1 className="text-4xl md:text-5xl text-primary mb-2">
            Selamat datang kembali, <span className="text-accent">Alex</span>
          </h1>
          <p className="text-xl text-muted-foreground">Lacak proyek Anda dan lanjutkan perjalanan pembelajaran</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow rounded-2xl border-2">
                <stat.icon className={`w-8 h-8 mb-3 ${stat.color}`} />
                <div className="text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-6 rounded-xl">
            <TabsTrigger value="active" className="rounded-lg">Proyek Aktif</TabsTrigger>
            <TabsTrigger value="available" className="rounded-lg">Tersedia</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-lg">Selesai</TabsTrigger>
          </TabsList>

          {/* Active Projects */}
          <TabsContent value="active">
            <div className="grid md:grid-cols-2 gap-6">
              {activeProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl text-primary mb-1">{project.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span>{project.brand}</span>
                        </div>
                      </div>
                      {getStatusBadge(project.reviewStatus, project.status)}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progres</span>
                          <span className="text-primary">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {project.deadline}</span>
                        </div>
                        <Badge variant="outline" className="rounded-lg">{project.category}</Badge>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-3">
                          Mentor: <span className="text-primary">{project.mentor}</span>
                        </p>

                        {/* Feedback dari Mentor */}
                        {project.mentorFeedback && (
                          <div className="mb-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                            <div className="flex items-start gap-2 mb-2">
                              <AlertCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                              <p className="text-sm text-purple-900">
                                <strong>Feedback Mentor:</strong>
                              </p>
                            </div>
                            <p className="text-sm text-purple-800 italic ml-6">
                              &ldquo;{project.mentorFeedback}&rdquo;
                            </p>
                          </div>
                        )}

                        {/* Action buttons */}
                        {project.progress < 100 ? (
                          <Button className="w-full rounded-lg">Lanjutkan Mengerjakan</Button>
                        ) : project.reviewStatus === 'belum' ? (
                          <Dialog open={submissionDialogOpen && selectedProject === project.id} 
                                  onOpenChange={(open) => {
                                    setSubmissionDialogOpen(open);
                                    if (open) setSelectedProject(project.id);
                                    else setSelectedProject(null);
                                  }}>
                            <DialogTrigger asChild>
                              <Button className="w-full rounded-lg bg-accent hover:bg-accent/90">
                                <Send className="w-4 h-4 mr-2" />
                                Ajukan Review ke Mentor
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="rounded-2xl">
                              <DialogHeader>
                                <DialogTitle>Ajukan Tugas untuk Review</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <Label>Proyek</Label>
                                  <Input value={project.title} disabled className="rounded-lg" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="link">Link Submission (Google Drive, GitHub, dll)</Label>
                                  <Input 
                                    id="link" 
                                    placeholder="https://..." 
                                    className="rounded-lg"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="notes">Catatan untuk Mentor</Label>
                                  <Textarea 
                                    id="notes" 
                                    placeholder="Jelaskan apa yang sudah Anda kerjakan..."
                                    rows={4}
                                    className="rounded-lg"
                                  />
                                </div>
                                <Button 
                                  onClick={() => handleSubmitForReview(project.id)}
                                  className="w-full rounded-lg"
                                >
                                  <Send className="w-4 h-4 mr-2" />
                                  Kirim Pengajuan
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : project.reviewStatus === 'diajukan' ? (
                          <Button disabled className="w-full rounded-lg">
                            <Clock className="w-4 h-4 mr-2" />
                            Menunggu Review Mentor
                          </Button>
                        ) : project.reviewStatus === 'direview' ? (
                          <Button variant="outline" className="w-full rounded-lg border-purple-500 text-purple-700">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Sedang Direview
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Available Projects */}
          <TabsContent value="available">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl text-primary mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>{project.brand}</span>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Tingkat Kesulitan</span>
                          <Badge 
                            variant="outline" 
                            className={`rounded-lg ${
                              project.difficulty === 'Pemula' ? 'border-green-500 text-green-700' :
                              project.difficulty === 'Menengah' ? 'border-yellow-500 text-yellow-700' :
                              'border-red-500 text-red-700'
                            }`}
                          >
                            {project.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {project.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="w-4 h-4" />
                          <span>{project.participants} peserta mendaftar</span>
                        </div>
                      </div>

                      <Badge className="bg-accent/10 text-primary hover:bg-accent/20 rounded-lg">
                        {project.category}
                      </Badge>
                    </div>

                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white rounded-lg">
                      Daftar Sekarang
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Completed Projects */}
          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl text-primary mb-1">{project.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span>{project.brand}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-lg">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Selesai
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {/* Status Approval */}
                      <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center gap-2 text-sm text-green-800">
                          <CheckCircle2 className="w-4 h-4" />
                          <span><strong>Disetujui oleh Mentor {project.mentor}</strong></span>
                        </div>
                        {project.submittedToBrand && (
                          <div className="flex items-center gap-2 text-sm text-green-700 mt-1">
                            <Send className="w-3 h-3" />
                            <span>Sudah disubmit ke {project.brand} oleh mentor</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-accent/20">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Nilai Akhir</div>
                          <div className="text-3xl text-accent">{project.score}%</div>
                        </div>
                        <Award className="w-12 h-12 text-accent" />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Selesai: {project.completedDate}</span>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Feedback Mentor:</p>
                        <p className="text-sm text-foreground italic">&ldquo;{project.feedback}&rdquo;</p>
                      </div>

                      <Button variant="outline" className="w-full rounded-lg">
                        Lihat Sertifikat
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}