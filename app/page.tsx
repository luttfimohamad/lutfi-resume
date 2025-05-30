"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  GraduationCap,
  Briefcase,
  Award,
  ChevronDown,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              ML
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                    activeSection === item.toLowerCase() ? "text-purple-300" : "text-white/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">ML</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mohamad Lutfi
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Fresh Graduate Frontend Developer passionate about creating beautiful, functional web experiences with
              modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Next.js
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                React
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Saya adalah fresh graduate dari Telkom University dengan IPK 3.6, yang memiliki minat besar dalam
                pengembangan Front End. Fokus utama saya adalah menggunakan teknologi modern seperti Next.js,
                TypeScript, dan Tailwind CSS. Saya antusias dalam menulis clean code dan selalu terbuka untuk belajar
                hal baru.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Clean Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-center">
                      Passionate about writing maintainable, readable, and efficient code following best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Smartphone className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Modern Tech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-center">
                      Experienced with cutting-edge technologies like Next.js, TypeScript, and modern development tools.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Continuous Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-center">
                      Always eager to learn new technologies and improve skills through hands-on projects and training.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <Card className="max-w-2xl mx-auto bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <GraduationCap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Telkom University</CardTitle>
                <CardDescription className="text-white/70">Bandung, West Java, Indonesia</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Software Engineering</h3>
                  <p className="text-white/70">July 2020 - September 2024</p>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-white/70">GPA:</span>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">3.60/4.00</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* SIABDes TAxion */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">Front-End Developer</CardTitle>
                        <CardDescription className="text-purple-300">SIABDes TAxion - Bandung</CardDescription>
                        <p className="text-white/60 text-sm mt-1">September 2023 - September 2024</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-purple-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">
                      SIABDes TAXion adalah startup berbasis teknologi yang mengembangkan sistem informasi akuntansi
                      berbasis web untuk BUMDes dan BUMDesma.
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li>• Membangun front-end aplikasi menggunakan Next.js, TypeScript, dan Tailwind CSS</li>
                      <li>• Menerapkan prinsip Clean Architecture dengan struktur modular</li>
                      <li>• Mengembangkan fitur utama: jurnal umum, buku besar, neraca lajur, laporan laba rugi</li>
                      <li>• Mengelola state menggunakan React Query dan custom hooks</li>
                      <li>• Mengintegrasikan aplikasi dengan REST API menggunakan Axios</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* RC HUMIC */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">Backend Developer Intern</CardTitle>
                        <CardDescription className="text-pink-300">
                          Research Center Human Centric Engineering (RC HUMIC)
                        </CardDescription>
                        <p className="text-white/60 text-sm mt-1">July 2023 - September 2023</p>
                      </div>
                      <Server className="w-8 h-8 text-pink-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">
                      Pusat penelitian yang berfokus pada pengembangan teknologi berbasis komputasi untuk aplikasi
                      biomedis.
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li>
                        • Merancang sistem back-end untuk aplikasi pendeteksi kanker kulit Melanoma dan Basal Cell
                        Carcinoma
                      </li>
                      <li>• Mendesain struktur database untuk pengguna dan data hasil deteksi</li>
                      <li>• Membangun RESTful API dengan Laravel untuk autentikasi dan manajemen data</li>
                      <li>• Berkolaborasi dengan tim Front-End dan Mobile menggunakan Trello</li>
                      <li>• Melakukan deployment source code backend ke server</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CV Kurnia Komputer */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">Praktek Kerja Lapangan (PKL)</CardTitle>
                        <CardDescription className="text-cyan-300">CV. Kurnia Komputer - Tegal</CardDescription>
                        <p className="text-white/60 text-sm mt-1">February 2018 - April 2018</p>
                      </div>
                      <Database className="w-8 h-8 text-cyan-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">
                      Perusahaan yang bergerak di bidang layanan perbaikan dan perawatan perangkat teknologi.
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li>• Melakukan servis dan perawatan perangkat komputer dan printer</li>
                      <li>• Instalasi dan konfigurasi sistem operasi (Windows/Linux)</li>
                      <li>• Mendiagnosa kerusakan hardware dan melakukan troubleshooting</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="w-full bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                  <Badge className="w-full bg-blue-500/20 text-blue-300 border-blue-500/30">TypeScript</Badge>
                  <Badge className="w-full bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Tailwind CSS</Badge>
                  <Badge className="w-full bg-green-500/20 text-green-300 border-green-500/30">React</Badge>
                  <Badge className="w-full bg-orange-500/20 text-orange-300 border-orange-500/30">React Query</Badge>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Server className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="w-full bg-red-500/20 text-red-300 border-red-500/30">Laravel</Badge>
                  <Badge className="w-full bg-green-500/20 text-green-300 border-green-500/30">RESTful API</Badge>
                  <Badge className="w-full bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Node.js</Badge>
                  <Badge className="w-full bg-blue-500/20 text-blue-300 border-blue-500/30">Axios</Badge>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Database className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Database & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="w-full bg-blue-500/20 text-blue-300 border-blue-500/30">Database Design</Badge>
                  <Badge className="w-full bg-purple-500/20 text-purple-300 border-purple-500/30">Git</Badge>
                  <Badge className="w-full bg-green-500/20 text-green-300 border-green-500/30">Docker</Badge>
                  <Badge className="w-full bg-orange-500/20 text-orange-300 border-orange-500/30">Jira</Badge>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Other Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="w-full bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Clean Architecture
                  </Badge>
                  <Badge className="w-full bg-blue-500/20 text-blue-300 border-blue-500/30">Agile Development</Badge>
                  <Badge className="w-full bg-green-500/20 text-green-300 border-green-500/30">CI/CD</Badge>
                  <Badge className="w-full bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Network Admin</Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Code className="w-16 h-16 text-purple-400" />
                    </div>
                    <CardTitle className="text-white">SIABDes TAXion</CardTitle>
                    <CardDescription className="text-white/70">
                      Web-based accounting information system for BUMDes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">TypeScript</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Tailwind</Badge>
                    </div>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Server className="w-16 h-16 text-pink-400" />
                    </div>
                    <CardTitle className="text-white">Skin Cancer Detection API</CardTitle>
                    <CardDescription className="text-white/70">
                      Backend system for melanoma and basal cell carcinoma detection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Laravel</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">REST API</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Database</Badge>
                    </div>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Globe className="w-16 h-16 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white">Portfolio Website</CardTitle>
                    <CardDescription className="text-white/70">
                      Personal portfolio showcasing projects and skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next.js</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Tailwind</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Framer Motion</Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10"
                      onClick={() => window.open("https://showcase-me-pi.vercel.app/", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Site
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and create
              something amazing together!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-white/70 text-sm">luttfimohamad@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-white/70 text-sm">082322265556</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                  <Button
                    variant="link"
                    className="text-white/70 text-sm p-0 h-auto"
                    onClick={() => window.open("https://www.linkedin.com/in/mohamad-lutfi-082104245/", "_blank")}
                  >
                    Connect with me
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Portfolio</h3>
                  <Button
                    variant="link"
                    className="text-white/70 text-sm p-0 h-auto"
                    onClick={() => window.open("https://showcase-me-pi.vercel.app/", "_blank")}
                  >
                    Visit my site
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => window.open("mailto:luttfimohamad@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 Mohamad Lutfi. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
