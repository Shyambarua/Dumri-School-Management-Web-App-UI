import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { SharedNavigation } from "./shared/SharedNavigation";
import { Briefcase, UserCheck, GraduationCap, Heart, ClipboardCheck, Users, Building2 } from "lucide-react";
import svgPaths from "../imports/svg-x8yhpltdsp";
import imgImg from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
import img23714285420260224035427Jpg from "figma:asset/9411083632a695a2b9b96381c339905746b585c3.png";
import imgSectionFindYourDegree from "figma:asset/6fb5ca094257a7b3948a4b9db380c9b28814680c.png";
import imgSectionCampusAdventures from "figma:asset/ced9d5d7f3ce34f807e9b277d17d57c96268b8b3.png";
import imgPlacements from "figma:asset/02236aa8f5034cb5dd3d0f6afd80b83e07638b54.png";
import imgChristConsulting from "figma:asset/8037a3f4b866bcfc7a92eca3975ba026bad83920.png";
import imgAdmissions from "figma:asset/1b8bd5f15a3cdd65fda9ac91d0704cdd3ae23365.png";
import imgHealthServices from "figma:asset/279b090f3dd9b47e9ce47988f71b834ce53675f7.png";
import imgExaminations from "figma:asset/4e8a73cbd5e4b1237003eb675167d4260c6ef2ab.png";
import imgCentresCells from "figma:asset/fe844ca260956b35e9de15491599cde2f951a793.png";
import imgSectionEventsCampusW from "figma:asset/96e1271e98bbd41b05a1e9ed91fc1895bdd5006a.png";
import imgEventsBg from "figma:asset/7b3441358b7db7dbb6afb1c40372e938b37fb197.png";
import imgSectionVignteeee from "figma:asset/8b8ff9224475b9318a67f1510323e1736cc61a48.png";
import imgTellATale1 from "figma:asset/428e9a82aa3a56261889c4b9e388b51942f2272b.png";
import imgTellATale2 from "figma:asset/67529013d3689662828047b20bdd33edaf92f516.png";
import imgTellATale3 from "figma:asset/5423f3c995ee1d097e5f3a0e53d472669230dd10.png";
import imgTellATale4 from "figma:asset/9e54e95c8994a095badd8b900606abdd52b3ca7e.png";
import imgTellATale5 from "figma:asset/4d1f9323858b357f075b977d93ef7948d472b6f3.png";
import imgBgGradntPng from "figma:asset/9b49c6d56789477dd7b90b373344e397877965c6.png";
import imgName from "figma:asset/e64231869036b9cde6f92c11af831e7ab3f5eecc.png";
import imgAchivementsImage from "figma:asset/113b6bb1f8c6cad527ebef7cfa20c015c5db8c5e.png";
import imgAchivementsImg from "figma:asset/4e0f17fd8366ab447e0e1707028079dcc82383a3.png";
import imgResearchFacilities from "figma:asset/e179dbec51c78a0573a64faddf45f62460898265.png";
import imgResearchFacilities1 from "figma:asset/b255faa0bb5b3cd5f4b7bdb204cf643572cc139e.png";
import imgResearchFacilities2 from "figma:asset/74c7eac73722f84eb450ce7ada378d0734d7dbaa.png";
import imgResearchFacilities3 from "figma:asset/1a90479b6e9e6cc70871e30419c57533c3c83fd4.png";
import imgResearchFacilities4 from "figma:asset/d4dd9e53762a9116222a67aea3d60a091effdf05.png";
import imgResearchFacilities5 from "figma:asset/d78fa9d65eca7bf6ceaf00d37a1ceb69e690c3bb.png";
import imgName1 from "figma:asset/76b3dc25c834fa9318076f6ed93452605d06bdd3.png";
import imgName2 from "figma:asset/16d69cc9e38f315b687a2805cf61559194c17cc8.png";
import imgName3 from "figma:asset/00aa3d5431b3d04e703acb847c73b8edacbbd268.png";
import imgShade from "figma:asset/252b03f0440487a17106b0ecda4e8f4a5738be5c.png";
import imgLabs from "figma:asset/ea3d9d4e7dabec6525976c5be927620dd61bb1ba.png";
import imgQsWorldUniversityRankings from "figma:asset/f15cb3d386218a8532efb47f826af5dafa9a15ae.png";
import imgQsWorldSustainabilityRankings from "figma:asset/c1bd62398098d89f97f6aca52872e97a1b09e562.png";
import imgTheSubjectRankings2026 from "figma:asset/41fa596e0ffcd9168e7697da3fee6c77be46650c.png";
import imgWorldUniversityRankingsAsia2026 from "figma:asset/bf54e1e15cc43620b1fbf170e3cdab62623e3a4f.png";
import imgTheWorldUniversityRankingForInnovation2025 from "figma:asset/15c3a2d2c00f3d5ecaf3d1d86e3a3e41ce706ce6.png";
import imgName4 from "figma:asset/563d8e85de7fb31189dfc05f50f0cb8666ade840.png";
import imgValedictoryOfDepartmentOfEconomics26February2026BangaloreYeshwanthpurCampus from "figma:asset/3ced4fadfe0894301c0ecfc465a60ed2bbdb5f0a.png";
import imgValedictoryOfDepartmentOfProfessionalStudies26February2026BangaloreYeshwanthpurCampus from "figma:asset/f37957a2416ce9e5df6f986378582b62f8ac66ef.png";
import imgNritta2026NrityaSamarpan25February2026BangaloreYeshwanthpurCampus from "figma:asset/8bb012cb18491ab060e52d601b035453dedd9f44.png";
import imgGallery from "figma:asset/e509cf6e74366464abcaa9097e467caecc71ea3a.png";
import imgValedictoryOfPrism202625February2026BangaloreYeshwanthpurCampus from "figma:asset/8493b4456624124a99d1f0bb95eeef3f047fab37.png";
import imgValedictoryOfCaps25February2026BangaloreYeshwanthpurCampus from "figma:asset/4538fb301283f4ebabd0c9c8384cee174b6f3d32.png";
import imgMindSelfAndHealingTraditionsAndProspects24February2026BangaloreYeshwanthpurCampus from "figma:asset/9ce82a5c949165ad2270eff4300f1373cc8e2ac4.png";
import imgSectionVideoPpBg from "figma:asset/5de67a80bffdf139d94e9ef61685010ce90da1d9.png";
import imgSchoolName from "figma:asset/135f567ae19fa2da7febd9532c806aaf1b2f0806.png";
import imgInternationalStudents from "figma:asset/a82d6f7484dde9643d3ac214fa310b74dcaa6a46.png";
import imgSectionProdAlumni from "figma:asset/dd218179bbce7708f7077b4b3abd02fc2c66a8de.png";
import imgComponent17 from "figma:asset/906c051cebca4bc3eef586431159839db61f7871.png";
import imgName5 from "figma:asset/5fbd278664b15a0b3880af013a036f9dd868bef9.png";
import imgName6 from "figma:asset/3d517db9b53c70621aaf63ddefb6cdbd5f7e5313.png";
import imgSectionSocialmediaWdgt from "figma:asset/b7458ea64b960e74f6e6c1703e23c259546c28a6.png";
import imgAqma6QL0R7Pz3S9CSs2PX96ZhrYYaxybkhXgYeEa4WghCf6T0XPkRj9ZoNyYrN85Xe1ALnLhTqlRuJlMjTkxFuMp4 from "figma:asset/0f87e4a5196d14c006df0b7480c622b7970fbdb5.png";
import imgAqo2Ck3Drpf0Ai8E28ImWzt6GIajYhD56BWkUlUt5DyysOdASd5Jh8USLz6Axc4S8GPxz1E24Oag4Jcgpm4OrjFJz0Q8BYsdMMp4 from "figma:asset/f7883e702cf881bb69ab5e1526c6b6696a722fcd.png";
import img629591488180992041369173873294802342293289923NJpg from "figma:asset/acbf2df85208d6385ad30d7f53644a86b27761ff.png";
import img631838878180987385819173877110310279382797744NJpg from "figma:asset/081178be4e31e4a7b2f1521658c448b0470b564d.png";
import { imgTellATale } from "../imports/svg-pduv6";
import Frame from "../imports/Frame-206-1785";

// Carousel images with high-quality images and metadata
const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1642420022278-aaa124e13adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyMzU5MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Welcome to Dumri College",
    subtitle: "Excellence in Education Since 1950",
    cta: "Explore Programs",
    ctaLink: "/academics"
  },
  {
    url: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyMzU5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Libraries & Research Centers",
    cta: "View Gallery",
    ctaLink: "/gallery"
  },
  {
    url: "https://images.unsplash.com/photo-1667564790635-0f560121359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwaW5kaWF8ZW58MXx8fHwxNzcyMzU5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Shape Your Future",
    subtitle: "Join Our Legacy of Success",
    cta: "Apply Now",
    ctaLink: "/apply"
  }
];

export default function DumriCollegeLanding() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [achievementTab, setAchievementTab] = useState<'faculty' | 'student' | 'university'>('faculty');
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [alumniIndex, setAlumniIndex] = useState(0);

  // Auto-rotate carousel - increased to 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SharedNavigation */}
      <SharedNavigation />
      

      
      {/* Hero Carousel Section */}
      <section className="relative h-[calc(100vh-120px)] min-h-[500px] max-h-[700px] overflow-hidden">
        {/* Background Images with fade transition */}
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {carouselImages[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {carouselImages[currentSlide].subtitle}
                </motion.p>
                <motion.button
                  onClick={() => navigate(carouselImages[currentSlide].ctaLink)}
                  className="bg-[#2563EB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {carouselImages[currentSlide].cta}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-12"
                  : "bg-white/50 w-2 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Find Your Degree Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1766339162142-699904b3cf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjB3aGl0ZSUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjM4NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6">
                <span className="text-[#886E53]">Find your </span>
                <span className="text-[#0C4D8B]">Degree</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dumri College offers rigorous programs, valuable resources, and 
                countless opportunities that will enable you to pursue your desired 
                course of study.
              </p>
            </motion.div>

            {/* Right Content - Program Boxes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "DOCTORAL (PhD)", link: "/academics" },
                { title: "POSTGRADUATE", link: "/academics" },
                { title: "UNDERGRADUATE", link: "/academics" },
                { title: "DIPLOMA", link: "/academics" }
              ].map((program, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => navigate(program.link)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-[#0C4D8B] font-medium text-center">
                      {program.title}
                    </h3>
                  </motion.div>
                  {/* Gradient Bottom Border */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0099D0] to-[#FFD288]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(12, 77, 139, 0.95) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(136, 110, 83, 0.85) 100%), url(https://images.unsplash.com/photo-1769699369445-263a7a365df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzIzNzk5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundBlendMode: 'multiply'
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-amber-600/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              <span className="text-amber-200">Campus </span>
              <span className="text-white">Life</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Explore the vibrant campus life at Dumri College with various facilities and services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { name: "Placements", icon: Briefcase },
              { name: "Consulting", icon: UserCheck },
              { name: "Admissions", icon: GraduationCap },
              { name: "Health Services", icon: Heart },
              { name: "Examinations", icon: ClipboardCheck },
              { name: "Student Council", icon: Users },
              { name: "Centres & Cells", icon: Building2 }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="relative aspect-square bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/60 hover:border-amber-300"
                    whileHover={{ 
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(251, 191, 36, 0.2) 100%)"
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mb-1"
                      >
                        <IconComponent 
                          className="w-8 h-8 text-[#0C4D8B] group-hover:text-white transition-colors" 
                          strokeWidth={2}
                        />
                      </motion.div>
                      <motion.p 
                        className="text-center text-xs font-medium text-[#0C4D8B] group-hover:text-white transition-colors leading-tight"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.name}
                      </motion.p>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Events Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imgSectionEventsCampusW})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">Campus </span>
              <span className="text-[#0C4D8B]">Events</span>
            </h2>
          </motion.div>

          {/* Events Carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex gap-6 px-4">
                {[
                  {
                    title: "Annual Tech Symposium 2026",
                    date: "15 Mar - 16 Mar",
                    time: "09:00 AM - 05:00 PM",
                    location: "Main Auditorium",
                    dateLabel: "Mar 15 2026",
                    image: "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2VtaW5hciUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MjM4MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    title: "Career Development Workshop",
                    date: "20 Mar",
                    time: "10:00 AM - 04:00 PM",
                    location: "Seminar Hall",
                    dateLabel: "Mar 20 2026",
                    image: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzIzODA0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    title: "Guest Lecture on Innovation",
                    date: "25 Mar",
                    time: "02:00 PM - 04:00 PM",
                    location: "Conference Room",
                    dateLabel: "Mar 25 2026",
                    image: "https://images.unsplash.com/photo-1759922378100-89dca9fe3c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGV2ZW50JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MjM4MDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    title: "Cultural Fest 2026",
                    date: "28 Mar - 30 Mar",
                    time: "All Day",
                    location: "College Campus",
                    dateLabel: "Mar 28 2026",
                    image: "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2VtaW5hciUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MjM4MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  }
                ].map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="flex-shrink-0 w-[300px] group"
                  >
                    <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#C07E02]/20 hover:border-[#C07E02] h-[420px]">
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        />
                        {/* Date Badge */}
                        <div className="absolute top-4 left-4 bg-[#0C4D8B] text-white px-4 py-2 rounded-lg shadow-lg">
                          <p className="text-sm font-light">{event.dateLabel}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-normal text-black leading-relaxed min-h-[56px]">
                          {event.title}
                        </h3>

                        {/* Event Details */}
                        <div className="space-y-3">
                          {/* Date */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#0C4D8B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-gray-700">{event.date}</p>
                          </div>

                          {/* Time */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#0C4D8B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-gray-700">{event.time}</p>
                          </div>

                          {/* Location */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#0C4D8B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-gray-700">{event.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <motion.button
                onClick={() => navigate("/events")}
                className="inline-flex items-center gap-2 bg-white text-[#0C4D8B] px-6 py-3 rounded-lg font-medium border-2 border-[#0C4D8B] hover:bg-[#0C4D8B] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Events
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Vignette Windows Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1630347794212-1c179c832cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2hpdGUlMjBhYnN0cmFjdCUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">Vignette </span>
              <span className="text-[#0C4D8B]">Windows</span>
            </h2>
          </motion.div>

          {/* Staggered Publications Grid */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { title: "Tell a Tale", image: "https://images.unsplash.com/photo-1436809031070-e5451a391628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbWFnYXppbmUlMjBwdWJsaWNhdGlvbnxlbnwxfHx8fDE3NzIzODA2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080", offset: "mt-0" },
                { title: "Metamorphosis", image: "https://images.unsplash.com/photo-1550592704-6c76defa9985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwam91cm5hbCUyMHdyaXRpbmd8ZW58MXx8fHwxNzcyMzgwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080", offset: "mt-12" },
                { title: "Raconteur", image: "https://images.unsplash.com/photo-1705354154386-2951ff6efa90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbmV3c2xldHRlciUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzIzODA2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080", offset: "mt-24" },
                { title: "Lore to Lure", image: "https://images.unsplash.com/photo-1652422485353-a7eb8210f406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY3JlYXRpdmUlMjB3cml0aW5nfGVufDF8fHx8MTc3MjM4MDYzNHww&ixlib=rb-4.1.0&q=80&w=1080", offset: "mt-12" },
                { title: "Fame to Frame", image: "https://images.unsplash.com/photo-1763306934271-9eaa9aa30f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHB1YmxpY2F0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc3MjM4MDYzNHww&ixlib=rb-4.1.0&q=80&w=1080", offset: "mt-0" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`${item.offset} group cursor-pointer`}
                >
                  <div className="relative">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[3/4]">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Play/View Icon */}
                      <div className="absolute bottom-4 right-4 bg-[#886E53] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mt-3 text-center">
                      <h3 className="text-[#C07E02] font-medium text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C4D8B] to-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              <span className="text-[#FFD700]">Excellence </span>
              <span>in Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { value: "25+", label: "Academic Departments" },
              { value: "5000+", label: "Students" },
              { value: "200+", label: "Faculty Members" },
              { value: "50,000+", label: "Library Books" },
              { value: "10,000+", label: "Alumni" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-light text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-white/90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1762174092777-a73b122249cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGlnaHQlMjBibHVlJTIwcGF0dGVybiUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-slate-50/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">College </span>
              <span className="text-[#0C4D8B]">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NAAC A+ Accreditation",
                description: "Recognized for excellence in higher education with the highest grade"
              },
              {
                title: "100% Placement Rate",
                description: "Our students are recruited by top companies across various industries"
              },
              {
                title: "State-of-the-Art Infrastructure",
                description: "Modern classrooms, labs, library, and sports facilities"
              }
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-[#0C4D8B] mb-4">
                    {achievement.title}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.4 }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Achievements Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1763275469812-c807e3b4a4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYmVpZ2UlMjBhY2FkZW1pYyUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl mb-8">
              <span className="text-[#886E53]">University </span>
              <span className="text-[#0C4D8B]">Achievements</span>
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-t-lg overflow-hidden shadow-md">
              {[
                { key: 'faculty' as const, label: 'Faculty' },
                { key: 'student' as const, label: 'Student' },
                { key: 'university' as const, label: 'University' }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => {
                    setAchievementTab(tab.key);
                    setAchievementIndex(0);
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 font-light transition-all duration-300 ${
                    achievementTab === tab.key
                      ? 'bg-[#D98600] text-white'
                      : 'bg-[#0C4D8B] text-white hover:bg-[#0C4D8B]/80'
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-xl border-2 border-[#C07E02] p-8">
              {/* Content */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <motion.div
                  key={`${achievementTab}-${achievementIndex}`}
                  initial={{ opacity: 0, x: -50, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: 50, rotate: 5 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-full md:w-1/3"
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1770208524687-9ed3dfa80c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYXdhcmQlMjBjZXJlbW9ueSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MjM4MDgyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Achievement"
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  key={`${achievementTab}-${achievementIndex}-text`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  {achievementTab === 'faculty' && (
                    <>
                      <h3 className="text-2xl font-medium text-black mb-4">
                        Distinguished Service Award
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Dr. Joseph C C, Vice Chancellor received the Distinguished Service Award 
                        during the 55th Annual Family Day 2025 - "A Day to Reunite, Reflect, and Reignite"
                      </p>
                    </>
                  )}
                  {achievementTab === 'student' && (
                    <>
                      <h3 className="text-2xl font-medium text-black mb-4">
                        National Merit Scholarship
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Students from Dumri College received National Merit Scholarships for outstanding 
                        academic performance and leadership in extracurricular activities
                      </p>
                    </>
                  )}
                  {achievementTab === 'university' && (
                    <>
                      <h3 className="text-2xl font-medium text-black mb-4">
                        Excellence in Research
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Dumri College recognized as a center of excellence for research and innovation, 
                        contributing significantly to academic publications and patents
                      </p>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setAchievementIndex(Math.max(0, achievementIndex - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#0C4D8B] text-white px-3 py-6 hover:bg-[#0C4D8B]/80 transition-colors"
                aria-label="Previous achievement"
              >
                <span className="text-3xl font-light">‹</span>
              </button>
              <button
                onClick={() => setAchievementIndex(achievementIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#0C4D8B] text-white px-3 py-6 hover:bg-[#0C4D8B]/80 transition-colors"
                aria-label="Next achievement"
              >
                <span className="text-3xl font-light">›</span>
              </button>
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <motion.button
                onClick={() => navigate("/achievements")}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Dumri Labs Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1739113518968-95a1d40d3a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGdyZXklMjBwcm9mZXNzaW9uYWwlMjBwYXR0ZXJufGVufDF8fHx8MTc3MjM4NDE4MXww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="order-2 md:order-1"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzIzODEwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dumri Labs"
                className="w-full rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 relative"
            >
              {/* Heading */}
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl mb-4">
                  <span className="text-[#886E53]">Where Ideas Ignite </span>
                  <span className="text-[#0C4D8B]">: Dumri Labs</span>
                </h2>
              </div>

              {/* Description Card */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#D98600] p-6 mb-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  There are multiple labs affiliated to Schools on each campus of Dumri College. 
                  There are science labs, computer labs, engineering labs, language labs, performance 
                  studios, Media labs, incubation and innovation Centres to fortify the research culture.
                </p>
              </div>

              {/* View All Button */}
              <div className="text-center">
                <motion.button
                  onClick={() => navigate("/labs")}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource Facilities & Campus News Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1630347794212-1c179c832cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2hpdGUlMjBhYnN0cmFjdCUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resource Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-[#886E53]">Resource </span>
                  <span className="text-[#0C4D8B]">Facilities</span>
                </h2>
              </div>

              {/* Facilities List */}
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-8 relative">
                {/* Vertical Gradient Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#81CBBA] via-[#0FBBDB] to-[#67BFD4] rounded-l-lg"></div>

                <div className="grid md:grid-cols-2 gap-6 pl-4">
                  {[
                    { title: "Journals", icon: "📚" },
                    { title: "Newsletters", icon: "📰" },
                    { title: "Learning Environment", icon: "🎓" },
                    { title: "Accolade Chronicles", icon: "🏆" },
                    { title: "Hostel and Dining", icon: "🏠" },
                    { title: "Library", icon: "📖" },
                    { title: "Research Facilities", icon: "🔬" },
                    { title: "Magazines", icon: "📃" }
                  ].map((facility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: idx * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <motion.div 
                        className="w-8 h-8 bg-[#886E53] rounded-full flex items-center justify-center text-white text-sm"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {facility.icon}
                      </motion.div>
                      <span className="text-black font-light group-hover:text-[#0C4D8B] transition-colors">
                        {facility.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Careers Button */}
                <div className="mt-8 text-center">
                  <motion.button
                    onClick={() => navigate("/careers")}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#81CBBA] via-[#0FBBDB] to-[#67BFD4] text-white px-6 py-3 rounded-lg font-normal hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Careers </span>
                    <span className="text-sm">(Job Openings)</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Campus News */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-[#886E53]">Campus </span>
                  <span className="text-[#0C4D8B]">News</span>
                </h2>
              </div>

              {/* News List */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 relative">
                {/* Vertical Gradient Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#81CBBA] via-[#0FBBDB] to-[#67BFD4] rounded-l-lg"></div>

                <div className="space-y-6 pl-4">
                  {[
                    {
                      title: "Call for Field Investigator Position in ICSSR Funded Project",
                      description: "Applications invited for Field Investigator position in the ICSSR research project at Dumri College"
                    },
                    {
                      title: "Annual Research Symposium 2026",
                      description: "Join us for the Annual Research Symposium showcasing innovative projects and research papers"
                    },
                    {
                      title: "New Digital Learning Platform Launch",
                      description: "Dumri College launches state-of-the-art digital learning platform for enhanced student experience"
                    }
                  ].map((news, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#D98600] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <h3 className="text-black font-light leading-relaxed mb-2 group-hover:text-[#0C4D8B] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {news.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                  <motion.button
                    onClick={() => navigate("/news")}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognitions & Accreditations Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F9F3E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">Recognitions </span>
              <span className="text-[#0C4D8B]">Accreditations</span>
            </h2>
          </motion.div>

          {/* Accreditation Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {[
                {
                  title: "QS World University Rankings",
                  image: "https://images.unsplash.com/photo-1587567867628-9df136e92128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmFua2luZyUyMGF3YXJkJTIwYmFkZ2V8ZW58MXx8fHwxNzcyMzgxMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  title: "QS World Sustainability Rankings",
                  image: "https://images.unsplash.com/photo-1594080051162-74b97d619668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGdyZWVuJTIwY2VydGlmaWNhdGlvbnxlbnwxfHx8fDE3NzIzODEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  title: "THE Subject Rankings 2026",
                  image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NyZWRpdGF0aW9uJTIwY2VydGlmaWNhdGUlMjBzZWFsfGVufDF8fHx8MTc3MjM4MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  title: "World University Rankings Asia 2026",
                  image: "https://images.unsplash.com/photo-1628927013432-99ae87d89cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhd2FyZCUyMHRyb3BoeSUyMGVtYmxlbXxlbnwxfHx8fDE3NzIzODEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  title: "The World University Ranking for Innovation 2025",
                  image: "https://images.unsplash.com/photo-1764872140075-525326e20e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwZXhjZWxsZW5jZSUyMGJhZGdlfGVufDF8fHx8MTc3MjM4MTMzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                }
              ].map((accreditation, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 w-full group cursor-pointer">
                    {/* Image Container */}
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src={accreditation.image}
                        alt={accreditation.title}
                        className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <p className="text-black font-light text-sm leading-relaxed">
                        {accreditation.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3">
              {[0, 1, 2].map((dot, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === 2 ? 'bg-[#869791]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Proud Alumni Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1766339162142-699904b3cf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjB3aGl0ZSUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjM4NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 to-white/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">Our Proud </span>
              <span className="text-[#0C4D8B]">Alumni</span>
            </h2>
          </motion.div>

          {/* Alumni Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4">
                {[
                  {
                    name: "SHWETA SASTRI",
                    position: "Managing Director",
                    organization: "Canadian International School Bangalore",
                    degree: "Bachelor of Business Management (BBM)",
                    year: "2004",
                    image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwbGVhZGVyfGVufDF8fHx8MTc3MjI3OTc5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    name: "MADONNA SEBASTIAN",
                    position: "Indian Actress",
                    organization: "Tamil/Malayalam",
                    degree: "Bachelor of Commerce Tourism",
                    year: "2013",
                    image: "https://images.unsplash.com/photo-1669829528850-959d7b08278b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhY3RyZXNzJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMzgxMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    name: "RAJESH KUMAR",
                    position: "Senior Software Engineer",
                    organization: "Tech Giants Inc.",
                    degree: "Bachelor of Computer Applications",
                    year: "2015",
                    image: "https://images.unsplash.com/photo-1770922808954-fb01766b1571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwcHJvZmVzc2lvbmFsJTIwZ3JhZHVhdGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIzODEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  },
                  {
                    name: "PRIYA SHARMA",
                    position: "Entrepreneur & CEO",
                    organization: "Innovation Labs",
                    degree: "Master of Business Administration",
                    year: "2010",
                    image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzIzODEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  }
                ].map((alumni, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 80
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="flex-shrink-0 w-full md:w-[480px]"
                  >
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-[240px] flex">
                      {/* Left - Image */}
                      <div className="w-[180px] flex-shrink-0 overflow-hidden">
                        <motion.img
                          src={alumni.image}
                          alt={alumni.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>

                      {/* Right - Content */}
                      <div className="flex-1 p-6 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30">
                        <h3 className="text-[#0C4D8B] font-semibold text-lg mb-3">
                          {alumni.name}
                        </h3>

                        <div className="space-y-2">
                          <p className="text-[#0C4D8B] font-normal text-base">
                            {alumni.position}
                          </p>
                          <p className="text-[#0C4D8B] font-light text-base">
                            {alumni.organization}
                          </p>
                          <p className="text-[#0C4D8B] font-light text-base">
                            {alumni.degree} ({alumni.year})
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setAlumniIndex(Math.max(0, alumniIndex - 1))}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#D98600] text-white p-3 rounded-lg hover:bg-[#D98600]/80 transition-colors shadow-lg border border-gray-400 z-10"
              aria-label="Previous alumni"
            >
              <span className="text-3xl font-light leading-none">‹</span>
            </button>
            <button
              onClick={() => setAlumniIndex(alumniIndex + 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#D98600] text-white p-3 rounded-lg hover:bg-[#D98600]/80 transition-colors shadow-lg border border-gray-400 z-10"
              aria-label="Next alumni"
            >
              <span className="text-3xl font-light leading-none">›</span>
            </button>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <motion.button
              onClick={() => navigate("/alumni")}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </div>
        </div>
      </section>

      {/* Panoramic Galleria Section */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1762174092777-a73b122249cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGlnaHQlMjBibHVlJTIwcGF0dGVybiUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzg0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-slate-50/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl">
              <span className="text-[#886E53]">Panoramic </span>
              <span className="text-[#0C4D8B]">Galleria</span>
            </h2>
          </motion.div>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {/* Column 1 - Single tall image (centered vertically) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="col-span-1 flex items-center"
            >
              <div className="w-full rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden h-32">
                  <motion.img
                    src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMzgxNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus Building"
                    className="w-full h-full object-cover opacity-90"
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Two stacked images */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="col-span-1 flex flex-col gap-3"
            >
              <motion.div 
                className="rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div className="relative overflow-hidden h-32">
                  <motion.img
                    src="https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyMzgxNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Library"
                    className="w-full h-full object-cover opacity-90"
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="relative overflow-hidden h-32">
                  <motion.img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMzgxNDc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Classroom"
                    className="w-full h-full object-cover opacity-90"
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Column 3 - Single large tall image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="col-span-1"
            >
              <div className="rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden h-[276px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwZmllbGQlMjBzdGFkaXVtfGVufDF8fHx8MTc3MjM4MTQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sports Field"
                    className="w-full h-full object-cover opacity-90"
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 4 - Two stacked images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 flex flex-col gap-3"
            >
              <div className="rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden h-32">
                  <img
                    src="https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIzODE0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Auditorium"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden h-32">
                  <img
                    src="https://images.unsplash.com/photo-1687709645238-0470ff08a6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FmZXRlcmlhJTIwZGluaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyMzgxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cafeteria"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Column 5 - Single square image (centered vertically) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1 flex items-center"
            >
              <div className="w-full rounded-lg overflow-hidden border-4 border-[#005596] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden h-32">
                  <img
                    src="https://images.unsplash.com/photo-1766297248047-6ec337099802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGFib3JhdG9yeSUyMHNjaWVuY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcyMzgxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Laboratory"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* View All Photos Button */}
          <div className="text-center mt-12">
            <motion.button
              onClick={() => navigate("/gallery")}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-normal border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Photos
            </motion.button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#0C4D8B] via-[#2563EB] to-[#0C4D8B] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl text-white font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join Dumri College and be part of a legacy of excellence, innovation, and success.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => navigate("/apply")}
                className="bg-white text-[#2563EB] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2563EB] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172B] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* College Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Dumri College</h3>
              <p className="text-white/70 mb-4">Excellence in Education Since 1950</p>
              <p className="text-white/70 text-sm">Estd. 1950</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Academics", "Admissions", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => navigate(`/${link.toLowerCase()}`)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-white/70">
                <li>Undergraduate</li>
                <li>Postgraduate</li>
                <li>Doctoral (PhD)</li>
                <li>Diploma Courses</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+91 123 456 7890</li>
                <li>info@dumricollege.edu</li>
                <li>Dumri, Jharkhand, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Dumri College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}