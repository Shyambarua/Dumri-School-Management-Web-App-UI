import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Award,
  Users,
  BookOpen,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { SharedNavigation } from '../shared/SharedNavigation';
import { SharedFooter } from '../shared/SharedFooter';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to achieving the highest standards in education and student development.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Upholding ethical values and fostering a culture of honesty and responsibility.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships with students, parents, and the community.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Embracing modern teaching methods and technology to enhance learning.',
  },
];

const achievements = [
  { icon: Award, value: '50+', label: 'National Awards' },
  { icon: Globe, value: '98%', label: 'Success Rate' },
  { icon: Users, value: '50,000+', label: 'Alumni Network' },
  { icon: BookOpen, value: '150+', label: 'Programs Offered' },
];

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SharedNavigation />

      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBoYXBweSUyMGRpdmVyc2V8ZW58MXx8fHwxNzcyMjcxODE5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/95 via-purple-600/90 to-pink-500/85"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border-2 border-white/30">
                <Award className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About EduManage Pro
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed">
              A leading educational institution committed to nurturing talent, fostering innovation,
              and preparing students for global challenges since 1975.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => {
              const colors = [
                { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-pink-500 to-pink-600', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-orange-500 to-orange-600', icon: 'text-white' },
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 ${colors[index].bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform`}>
                    <stat.icon className={`w-10 h-10 ${colors[index].icon}`} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-slate-700 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-white border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide comprehensive, world-class education that empowers students with
                  knowledge, skills, and values to excel in their chosen fields and contribute
                  meaningfully to society. We strive to create an inclusive learning environment
                  that fosters creativity, critical thinking, and holistic development.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-white border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be a globally recognized institution that shapes future leaders and innovators
                  who will drive positive change in the world. We envision an educational
                  ecosystem where academic excellence meets practical application, preparing
                  students for the challenges and opportunities of tomorrow.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide our approach to education and shape our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const colors = [
                { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', border: 'border-blue-200' },
                { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-50', border: 'border-purple-200' },
                { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-50', border: 'border-orange-200' },
                { gradient: 'from-green-500 to-teal-500', bg: 'bg-green-50', border: 'border-green-200' },
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className={`p-6 h-full hover:shadow-2xl transition-all bg-white border-2 ${colors[index].border} group`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors[index].gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
              <p className="text-lg text-slate-600">
                Five decades of educational excellence and innovation
              </p>
            </motion.div>

            <Card className="p-8 bg-white border-slate-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">1975 - The Beginning</h3>
                  <p className="text-slate-600">
                    Founded with a vision to provide quality education accessible to all, starting
                    with just 200 students.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">1990s - Expansion</h3>
                  <p className="text-slate-600">
                    Introduced advanced programs and modern infrastructure, growing to serve over
                    5,000 students.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">2000s - Innovation</h3>
                  <p className="text-slate-600">
                    Embraced digital transformation and established international partnerships,
                    becoming a leader in educational technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">2020s - Excellence</h3>
                  <p className="text-slate-600">
                    Achieved national recognition with top rankings and continue to set new
                    standards in education with 15,000+ students.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/40">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Start your journey with us and become part of a legacy of excellence
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => navigate('/apply')}
                className="bg-white text-[#2563EB] hover:bg-slate-100 text-lg px-8 py-6 shadow-2xl"
              >
                Apply Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SharedFooter />
    </div>
  );
}