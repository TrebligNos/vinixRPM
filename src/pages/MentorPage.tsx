import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { 
  Users, 
  Star, 
  MessageSquare,
  FileText,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  Send,
  ThumbsUp,
  AlertCircle,
  Building2
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function MentorPage() {
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const stats = [
    { icon: Users, label: 'Mentee', value: '12', color: 'text-blue-500' },
    { icon: FileText, label: 'Proyek Aktif', value: '8', color: 'text-green-500' },
    { icon: Award, label: 'Selesai', value: '45', color: 'text-purple-500' }
  ];

  const mentees = [
    {
      id: 1,
      name: 'Sarah Miller',
      project: 'Redesain UX E-commerce',
      progress: 85,
      lastUpdate: '2 jam yang lalu',
      status: 'Sesuai Target',
      nextMilestone: 'Review Prototipe Final'
    },
    {
      id: 2,
      name: 'John Davis',
      project: 'Pengembangan Aplikasi Mobile',
      progress: 60,
      lastUpdate: '1 hari yang lalu',
      status: 'Sesuai Target',
      nextMilestone: 'Integrasi API'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      project: 'Kampanye Media Sosial',
      progress: 40,
      lastUpdate: '3 jam yang lalu',
      status: 'Perlu Perhatian',
      nextMilestone: 'Strategi Konten'
    },
    {
      id: 4,
      name: 'Michael Chen',
      project: 'Dashboard Analisis Data',
      progress: 75,
      lastUpdate: '5 jam yang lalu',
      status: 'Sesuai Target',
      nextMilestone: 'Review Visualisasi'
    }
  ];

  const pendingReviews = [
    {
      id: 1,
      mentee: 'Alex Thompson',
      project: 'Analisis Kampanye Media Sosial',
      brand: 'BrandMax',
      submission: 'Dokumen Strategi Kampanye + Mockup Visual',
      submittedDate: '28 Nov 2025',
      dueDate: '30 Nov 2025',
      link: 'https://drive.google.com/...',
      notes: 'Sudah menyelesaikan semua tahapan kampanye termasuk analisis target audience dan content calendar untuk 3 bulan ke depan.',
      status: 'menunggu' // 'menunggu', 'direview', 'approved'
    },
    {
      id: 2,
      mentee: 'Sarah Miller',
      project: 'Redesain UX E-commerce',
      brand: 'TechRetail Inc.',
      submission: 'Desain Wireframe - Minggu 3',
      submittedDate: '27 Nov 2025',
      dueDate: '29 Nov 2025',
      link: 'https://figma.com/...',
      notes: 'High-fidelity prototype sudah selesai dengan user testing dari 10 responden.',
      status: 'menunggu'
    }
  ];

  const approvedSubmissions = [
    {
      id: 3,
      mentee: 'Michael Chen',
      project: 'Dashboard Analisis Data',
      brand: 'DataCorp',
      approvedDate: '25 Nov 2025',
      submittedToBrand: false,
      score: 92
    },
    {
      id: 4,
      mentee: 'Emma Wilson',
      project: 'Audit Aksesibilitas Website',
      brand: 'AccessibleWeb',
      approvedDate: '20 Nov 2025',
      submittedToBrand: true,
      score: 95
    }
  ];

  const handleApproveSubmission = (submissionId: number) => {
    const submission = pendingReviews.find(s => s.id === submissionId);
    if (feedback.trim() === '') {
      toast.error('Mohon berikan feedback untuk mentee');
      return;
    }
    toast.success(`Submission dari ${submission?.mentee} telah disetujui!`);
    setReviewDialogOpen(false);
    setSelectedSubmission(null);
    setFeedback('');
  };

  const handleSubmitToBrand = (submissionId: number, menteeName: string, brand: string) => {
    toast.success(`Submission dari ${menteeName} berhasil dikirim ke ${brand}!`);
  };

  const handleSubmitFeedback = (menteeName: string) => {
    toast.success(`Feedback berhasil dikirim untuk ${menteeName}`);
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
            Dashboard <span className="text-accent">Mentor</span>
          </h1>
          <p className="text-xl text-muted-foreground">Bimbing mentee Anda dan lacak perkembangan mereka</p>
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

        {/* Pending Reviews */}
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-4">Pengajuan Review dari Mentee</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pendingReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-accent/30 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-primary mb-1">{review.project}</h3>
                      <p className="text-muted-foreground">Mentee: {review.mentee}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Building2 className="w-3 h-3" />
                        <span>Brand: {review.brand}</span>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 rounded-lg">
                      Mendesak
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Submission:</p>
                      <p className="text-sm text-primary">{review.submission}</p>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <p className="text-sm text-blue-900 mb-1"><strong>Catatan Mentee:</strong></p>
                      <p className="text-sm text-blue-800 italic">&ldquo;{review.notes}&rdquo;</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Dikirim:</span>
                      <span className="text-primary">{review.submittedDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Batas Review:</span>
                      <span className="text-destructive">{review.dueDate}</span>
                    </div>

                    <div className="pt-3 border-t border-border flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 rounded-lg"
                        onClick={() => window.open(review.link, '_blank')}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Lihat File
                      </Button>
                      <Dialog open={reviewDialogOpen && selectedSubmission === review.id}
                              onOpenChange={(open) => {
                                setReviewDialogOpen(open);
                                if (open) setSelectedSubmission(review.id);
                                else {
                                  setSelectedSubmission(null);
                                  setFeedback('');
                                }
                              }}>
                        <DialogTrigger asChild>
                          <Button className="flex-1 rounded-lg">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Review & Approve
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-2xl max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Review Submission - {review.mentee}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                              <Label>Proyek</Label>
                              <Input value={review.project} disabled className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                              <Label>Brand</Label>
                              <Input value={review.brand} disabled className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                              <Label>Submission</Label>
                              <Input value={review.submission} disabled className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="score">Nilai (0-100)</Label>
                              <Input 
                                id="score" 
                                type="number" 
                                min="0" 
                                max="100"
                                placeholder="95" 
                                className="rounded-lg"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="feedback">Feedback untuk Mentee</Label>
                              <Textarea 
                                id="feedback" 
                                placeholder="Berikan feedback yang konstruktif..."
                                rows={5}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="rounded-lg"
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                onClick={() => handleApproveSubmission(review.id)}
                                className="flex-1 rounded-lg bg-green-600 hover:bg-green-700"
                              >
                                <ThumbsUp className="w-4 h-4 mr-2" />
                                Setujui Submission
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => {
                                  setReviewDialogOpen(false);
                                  setSelectedSubmission(null);
                                  setFeedback('');
                                }}
                                className="rounded-lg"
                              >
                                Batal
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Approved Submissions - Ready to Submit to Brand */}
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-4">Submission yang Disetujui</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {approvedSubmissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-green-200 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-primary mb-1">{submission.project}</h3>
                      <p className="text-muted-foreground">Mentee: {submission.mentee}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Building2 className="w-3 h-3" />
                        <span>Brand: {submission.brand}</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-lg">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Disetujui
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-green-900"><strong>Nilai:</strong></span>
                        <span className="text-2xl text-green-600">{submission.score}%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-700">
                        <Clock className="w-3 h-3" />
                        <span>Disetujui: {submission.approvedDate}</span>
                      </div>
                    </div>

                    {submission.submittedToBrand ? (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="flex items-center gap-2 text-sm text-blue-800">
                          <Send className="w-4 h-4" />
                          <span><strong>Sudah disubmit ke {submission.brand}</strong></span>
                        </div>
                      </div>
                    ) : (
                      <Button 
                        className="w-full rounded-lg bg-primary hover:bg-primary/90"
                        onClick={() => handleSubmitToBrand(submission.id, submission.mentee, submission.brand)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit ke {submission.brand}
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mentees Progress */}
        <div>
          <h2 className="text-2xl text-primary mb-4">Progres Mentee</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mentees.map((mentee, index) => (
              <motion.div
                key={mentee.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-primary mb-1">{mentee.name}</h3>
                      <p className="text-muted-foreground">{mentee.project}</p>
                    </div>
                    <Badge 
                      className={`rounded-lg ${
                        mentee.status === 'Sesuai Target' 
                          ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                          : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                      }`}
                    >
                      {mentee.status}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progres Keseluruhan</span>
                        <span className="text-primary">{mentee.progress}%</span>
                      </div>
                      <Progress value={mentee.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Update Terakhir</p>
                        <p className="text-sm text-primary">{mentee.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Milestone Berikutnya</p>
                        <p className="text-sm text-primary">{mentee.nextMilestone}</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-border">
                      <Textarea 
                        placeholder="Berikan feedback dan bimbingan..."
                        className="rounded-lg min-h-[80px]"
                      />
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 rounded-lg"
                          onClick={() => handleSubmitFeedback(mentee.name)}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Kirim Feedback
                        </Button>
                        <Button variant="outline" className="rounded-lg">
                          <CheckCircle2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 rounded-2xl border-2 border-primary">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent rounded-xl p-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl">Dampak Mentoring Anda</h2>
                  <p className="text-white/80">Bulan November 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">95%</div>
                  <div className="text-white/80">Tingkat Keberhasilan Proyek</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">48jam</div>
                  <div className="text-white/80">Waktu Respons Rata-rata</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}