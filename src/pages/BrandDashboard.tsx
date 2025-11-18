import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Plus,
  Eye,
  Users,
  FileText,
  Send,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

export function BrandDashboard() {
  const [showNewProjectForm, setShowNewProjectForm] =
    useState(false);

  const stats = [
    {
      icon: FileText,
      label: "Proyek Aktif",
      value: "8",
      color: "text-blue-500",
    },
    {
      icon: Users,
      label: "Total Pelamar",
      value: "124",
      color: "text-green-500",
    },
    {
      icon: CheckCircle,
      label: "Selesai",
      value: "15",
      color: "text-accent",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Redesain UX E-commerce",
      status: "Aktif",
      applicants: 23,
      assigned: 2,
      deadline: "20 Des 2025",
      category: "UI/UX Design",
    },
    {
      id: 2,
      title: "Prototipe Aplikasi Mobile",
      status: "Review",
      applicants: 18,
      assigned: 1,
      deadline: "28 Des 2025",
      category: "Development",
    },
    {
      id: 3,
      title: "Kampanye Media Sosial",
      status: "Aktif",
      applicants: 31,
      assigned: 3,
      deadline: "5 Jan 2026",
      category: "Marketing",
    },
  ];

  const submissions = [
    {
      id: 1,
      participant: "Michael Chen",
      mentor: "Dr. Sarah Johnson",
      project: "Dashboard Analisis Data",
      submittedDate: "28 Nov 2025",
      status: "Disubmit oleh Mentor",
      score: 92,
      mentorApproved: true,
    },
    {
      id: 2,
      participant: "Emma Wilson",
      mentor: "Dr. Sarah Johnson",
      project: "Audit Aksesibilitas Website",
      submittedDate: "27 Nov 2025",
      status: "Disubmit oleh Mentor",
      score: 95,
      mentorApproved: true,
    },
    {
      id: 3,
      participant: "Alex Thompson",
      mentor: "Mike Chen",
      project: "Analisis Kampanye Media Sosial",
      submittedDate: "26 Nov 2025",
      status: "Direview Mentor",
      score: 88,
      mentorApproved: true,
    },
  ];

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Proyek berhasil diposting!");
    setShowNewProjectForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl md:text-5xl text-primary mb-2">
              Dashboard{" "}
              <span className="text-accent">Brand</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Kelola proyek dan review pengajuan Anda
            </p>
          </div>
          <Button
            onClick={() =>
              setShowNewProjectForm(!showNewProjectForm)
            }
            className="bg-primary hover:bg-primary/90 rounded-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Posting Proyek Baru
          </Button>
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
                <stat.icon
                  className={`w-8 h-8 mb-3 ${stat.color}`}
                />
                <div className="text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* New Project Form */}
        {showNewProjectForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="p-8 border-2 border-accent/20 rounded-2xl shadow-xl">
              <h2 className="text-2xl text-primary mb-6">
                Posting Proyek Baru
              </h2>
              <form
                onSubmit={handleSubmitProject}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Judul Proyek</Label>
                    <Input
                      id="title"
                      placeholder="Masukkan judul proyek"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategori</Label>
                    <Select required>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="development">
                          Development
                        </SelectItem>
                        <SelectItem value="marketing">
                          Marketing
                        </SelectItem>
                        <SelectItem value="data">
                          Data Science
                        </SelectItem>
                        <SelectItem value="content">
                          Pembuatan Konten
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Deskripsi Proyek
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Jelaskan tujuan dan kebutuhan proyek..."
                    rows={4}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">
                      Tingkat Kesulitan
                    </Label>
                    <Select required>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Pilih tingkat kesulitan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">
                          Pemula
                        </SelectItem>
                        <SelectItem value="intermediate">
                          Menengah
                        </SelectItem>
                        <SelectItem value="advanced">
                          Lanjutan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">
                      Durasi (minggu)
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="contoh: 4"
                      min="1"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">
                    Keterampilan yang Dibutuhkan
                  </Label>
                  <Input
                    id="requirements"
                    placeholder="contoh: Figma, User Research, Prototyping"
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="rounded-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Posting Proyek
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowNewProjectForm(false)}
                    className="rounded-lg"
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-4">
            Proyek Anda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl text-primary">
                      {project.title}
                    </h3>
                    <Badge
                      className={`rounded-lg ${
                        project.status === "Aktif"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Pelamar
                      </span>
                      <span className="text-primary">
                        {project.applicants}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Ditugaskan
                      </span>
                      <span className="text-primary">
                        {project.assigned}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Deadline: {project.deadline}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="rounded-lg"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-lg"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-lg"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Pelamar
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submissions */}
        <div>
          <h2 className="text-2xl text-primary mb-4">
            Pengajuan dari Mentor
          </h2>
          <p className="text-muted-foreground mb-4">
            Semua submission berikut telah direview dan disetujui oleh mentor sebelum dikirimkan ke Anda.
          </p>
          <Card className="border-2 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-primary">
                      Peserta
                    </th>
                    <th className="text-left p-4 text-primary">
                      Mentor
                    </th>
                    <th className="text-left p-4 text-primary">
                      Proyek
                    </th>
                    <th className="text-left p-4 text-primary">
                      Dikirim
                    </th>
                    <th className="text-left p-4 text-primary">
                      Status
                    </th>
                    <th className="text-left p-4 text-primary">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission, index) => (
                    <motion.tr
                      key={submission.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <p className="text-primary">{submission.participant}</p>
                          {submission.mentorApproved && (
                            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                              <CheckCircle className="w-3 h-3" />
                              <span>Disetujui Mentor</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {submission.mentor}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {submission.project}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {submission.submittedDate}
                      </td>
                      <td className="p-4">
                        <Badge
                          className={`rounded-lg ${
                            submission.status === "Disubmit oleh Mentor"
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                          }`}
                        >
                          {submission.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}