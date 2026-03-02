import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Building2,
  Briefcase,
  Microscope,
  BookOpen,
  CheckCircle2,
  Clock,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { SharedNavbar } from '../SharedNavbar';

const programs = [
  {
    category: 'Engineering & Technology',
    icon: Building2,
    color: 'emerald',
    courses: [
      {
        name: 'B.Tech in Computer Science & Engineering',
        duration: '4 Years',
        seats: 120,
        eligibility: '10+2 with Physics, Chemistry, Mathematics',
        fee: '₹1.5L per year',
      },
      {
        name: 'B.Tech in Mechanical Engineering',
        duration: '4 Years',
        seats: 90,
        eligibility: '10+2 with PCM',
        fee: '₹1.2L per year',
      },
      {
        name: 'B.Tech in Civil Engineering',
        duration: '4 Years',
        seats: 60,
        eligibility: '10+2 with PCM',
        fee: '₹1.2L per year',
      },
      {
        name: 'B.Tech in Electronics & Communication',
        duration: '4 Years',
        seats: 90,
        eligibility: '10+2 with PCM',
        fee: '₹1.4L per year',
      },
    ],
  },
  {
    category: 'Management & Business',
    icon: Briefcase,
    color: 'yellow',
    courses: [
      {
        name: 'MBA (Master of Business Administration)',
        duration: '2 Years',
        seats: 120,
        eligibility: 'Graduation with 50% marks',
        fee: '₹3L per year',
      },
      {
        name: 'BBA (Bachelor of Business Administration)',
        duration: '3 Years',
        seats: 60,
        eligibility: '10+2 in any stream',
        fee: '₹80K per year',
      },
    ],
  },
  {
    category: 'Sciences',
    icon: Microscope,
    color: 'emerald',
    courses: [
      {
        name: 'B.Sc in Physics',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 with Science',
        fee: '₹50K per year',
      },
      {
        name: 'B.Sc in Chemistry',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 with Science',
        fee: '₹50K per year',
      },
      {
        name: 'B.Sc in Mathematics',
        duration: '3 Years',
        seats: 30,
        eligibility: '10+2 with Mathematics',
        fee: '₹45K per year',
      },
    ],
  },
  {
    category: 'Arts & Humanities',
    icon: BookOpen,
    color: 'yellow',
    courses: [
      {
        name: 'BA in English Literature',
        duration: '3 Years',
        seats: 40,
        eligibility: '10+2 in any stream',
        fee: '₹40K per year',
      },
      {
        name: 'BA in Economics',
        duration: '3 Years',
        seats: 50,
        eligibility: '10+2 in any stream',
        fee: '₹45K per year',
      },
      {
        name: 'BA in Psychology',
        duration: '3 Years',
        seats: 35,
        eligibility: '10+2 in any stream',
        fee: '₹42K per year',
      },
    ],
  },
];

export function ProgramsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <SharedNavbar />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-yellow-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6">
              <BookOpen className="w-3 h-3 mr-1" />
              Academic Programs
            </Badge>
            <h1 className="mb-6 text-5xl md:text-6xl text-emerald-900">
              Diverse Programs for Every Aspiration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose from our wide range of undergraduate and postgraduate programs designed 
              to prepare you for success in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className={`w-16 h-16 rounded-2xl bg-${program.color}-100 flex items-center justify-center`}>
                <program.icon className={`w-8 h-8 text-${program.color}-600`} />
              </div>
              <div>
                <h2 className={`text-${program.color}-900`}>{program.category}</h2>
                <p className="text-muted-foreground">{program.courses.length} programs available</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {program.courses.map((course, courseIndex) => (
                <Card key={courseIndex} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="mb-3">{course.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className={`bg-${program.color}-50 text-${program.color}-700 border-${program.color}-200`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}
                        </Badge>
                        <Badge variant="outline" className={`bg-${program.color}-50 text-${program.color}-700 border-${program.color}-200`}>
                          <Users className="w-3 h-3 mr-1" />
                          {course.seats} Seats
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Eligibility</p>
                        <p className="text-sm">{course.eligibility}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Annual Fee</p>
                        <p className="text-sm">{course.fee}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => navigate('/apply')}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    >
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Download Syllabus
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Apply now for admission 2026-27 and take the first step towards your dream career
          </p>
          <Button size="lg" onClick={() => navigate('/apply')} className="bg-white text-emerald-600 hover:bg-yellow-50">
            Apply for Admission 2026-27
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}