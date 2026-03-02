import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  User,
  Shield,
  Users,
  ChevronRight,
  KeyRound,
  Sparkles,
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  Check,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { SharedNavbar } from "./SharedNavbar";

const roles = [
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    description: "Access your courses, assignments & grades",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: Users,
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    description: "Manage classes, attendance & evaluations",
  },
  {
    id: "admin",
    label: "Admin",
    icon: Shield,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    description: "Full system control & analytics",
  },
];

export function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<
    "student" | "teacher" | "admin" | null
  >(null);
  const [step, setStep] = useState<"role" | "credentials" | "mobile" | "otp">(
    "role",
  );
  
  // For username/password login (teacher & admin)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // For mobile/OTP login (student)
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (
    role: "student" | "teacher" | "admin",
  ) => {
    setSelectedRole(role);
    // Student uses mobile/OTP, Teacher & Admin use username/password
    if (role === "student") {
      setStep("mobile");
    } else {
      setStep("credentials");
    }
  };

  // Handle username/password login (teacher & admin)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Navigate based on role
        if (selectedRole === "admin") {
          navigate("/admin/dashboard");
        } else if (selectedRole === "teacher") {
          navigate("/teacher/dashboard");
        }
      }, 1500);
    }
  };

  // Handle mobile number submission (student)
  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
      }, 1500);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(
          `otp-${index + 1}`,
        );
        nextInput?.focus();
      }
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/student/dashboard");
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step === "otp") {
      setStep("mobile");
      setOtp(["", "", "", "", "", ""]);
    } else if (step === "mobile" || step === "credentials") {
      setStep("role");
      setSelectedRole(null);
      setUsername("");
      setPassword("");
      setMobile("");
      setShowPassword(false);
      setShowResetPassword(false);
    }
  };

  const handleResetPassword = () => {
    setShowResetPassword(true);
    // In a real application, you would handle password reset here
    setTimeout(() => {
      alert("Password reset link has been sent to your registered email!");
      setShowResetPassword(false);
    }, 1500);
  };

  const selectedRoleData = roles.find(
    (r) => r.id === selectedRole,
  );

  return (
    <>
      <SharedNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.div
                className="inline-flex items-center justify-center mb-4"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
                EduManage Pro
              </h1>
              <p className="text-gray-600 text-lg">
                Secure Login Portal
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {/* Step 1: Role Selection */}
              {step === "role" && (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <div className="text-center mb-8">
                      <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 mb-4 px-4 py-2">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Step 1 of 3
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Select Your Role
                      </h2>
                      <p className="text-gray-600">
                        Choose how you want to access the system
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {roles.map((role, index) => (
                        <motion.div
                          key={role.id}
                          initial={{ opacity: 0, y: 50, rotateX: -60 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            y: -15, 
                            scale: 1.05,
                            rotateY: 10,
                            rotateX: -10,
                            z: 80,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95, rotateY: 0 }}
                          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                        >
                          <button
                            onClick={() =>
                              handleRoleSelect(
                                role.id as
                                  | "student"
                                  | "teacher"
                                  | "admin",
                              )
                            }
                            className="w-full p-6 rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all text-left relative overflow-hidden group"
                          >
                            {/* Background gradient on hover */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <div className="relative z-10">
                              <motion.div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4 shadow-lg`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <role.icon className="w-7 h-7 text-white" />
                              </motion.div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {role.label}
                              </h3>
                              <p className="text-sm text-gray-600 mb-4">
                                {role.description}
                              </p>
                              <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                                Continue
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2A: Username/Password Login (Teacher & Admin) */}
              {step === "credentials" && selectedRoleData && (
                <motion.div
                  key="credentials"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>

                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedRoleData.gradient} items-center justify-center mb-4 shadow-lg`}
                      >
                        <selectedRoleData.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge
                        className={`bg-gradient-to-r ${selectedRoleData.bgGradient} border-0 mb-4 px-4 py-2`}
                      >
                        <KeyRound className="w-4 h-4 mr-2" />
                        Step 2 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedRoleData.label} Login
                      </h2>
                      <p className="text-gray-600">
                        Enter your credentials to continue
                      </p>
                    </div>

                    <form
                      onSubmit={handleLogin}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 pr-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Forgot Password Link */}
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={handleResetPassword}
                          disabled={showResetPassword}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-semibold disabled:opacity-50"
                        >
                          {showResetPassword ? "Sending reset link..." : "Forgot Password?"}
                        </button>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={!username || !password || isLoading}
                          className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${selectedRoleData.gradient} hover:opacity-90 shadow-lg`}
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Login
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">
                          🔒 Secure Login:
                        </span>{" "}
                        Your credentials are encrypted and secure
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2B: Mobile Number Entry (Student) */}
              {step === "mobile" && selectedRoleData && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>

                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedRoleData.gradient} items-center justify-center mb-4 shadow-lg`}
                      >
                        <selectedRoleData.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge
                        className={`bg-gradient-to-r ${selectedRoleData.bgGradient} border-0 mb-4 px-4 py-2`}
                      >
                        <KeyRound className="w-4 h-4 mr-2" />
                        Step 2 of 3
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Student Login
                      </h2>
                      <p className="text-gray-600">
                        Enter your registered mobile number
                      </p>
                    </div>

                    <form
                      onSubmit={handleSendOTP}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="tel"
                            placeholder="Enter 10-digit mobile number"
                            value={mobile}
                            onChange={(e) =>
                              setMobile(
                                e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10),
                              )
                            }
                            className="pl-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            required
                            maxLength={10}
                          />
                        </div>
                        {mobile.length > 0 &&
                          mobile.length < 10 && (
                            <p className="text-sm text-red-500 mt-2">
                              Please enter a valid 10-digit number
                            </p>
                          )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={
                            mobile.length !== 10 || isLoading
                          }
                          className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${selectedRoleData.gradient} hover:opacity-90 shadow-lg`}
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Send OTP
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">
                          🔒 Secure Login:
                        </span>{" "}
                        An OTP will be sent to your registered mobile number
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: OTP Verification (Student) */}
              {step === "otp" && selectedRoleData && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>

                    <div className="text-center mb-8">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedRoleData.gradient} items-center justify-center mb-4 shadow-lg`}
                      >
                        <Smartphone className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-0 mb-4 px-4 py-2">
                        <Check className="w-4 h-4 mr-2" />
                        Step 3 of 3
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Verify OTP
                      </h2>
                      <p className="text-gray-600">
                        Enter the 6-digit code sent to
                        <br />
                        <span className="font-semibold text-gray-900">
                          +91 {mobile}
                        </span>
                      </p>
                    </div>

                    <form
                      onSubmit={handleVerifyOTP}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
                          Enter OTP
                        </label>
                        <div className="flex gap-2 justify-center">
                          {otp.map((digit, index) => (
                            <motion.input
                              key={index}
                              id={`otp-${index}`}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(
                                  index,
                                  e.target.value,
                                )
                              }
                              onKeyDown={(e) => {
                                if (
                                  e.key === "Backspace" &&
                                  !digit &&
                                  index > 0
                                ) {
                                  const prevInput =
                                    document.getElementById(
                                      `otp-${index - 1}`,
                                    );
                                  prevInput?.focus();
                                }
                              }}
                              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: index * 0.1,
                              }}
                              whileFocus={{ scale: 1.1 }}
                            />
                          ))}
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={
                            otp.join("").length !== 6 ||
                            isLoading
                          }
                          className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${selectedRoleData.gradient} hover:opacity-90 shadow-lg`}
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Verify & Login
                              <Check className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setIsLoading(true);
                            setTimeout(
                              () => setIsLoading(false),
                              1500,
                            );
                          }}
                          className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                        >
                          Didn't receive OTP? Resend
                        </button>
                      </div>
                    </form>

                    <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">
                          ⏰ Note:
                        </span>{" "}
                        OTP is valid for 5 minutes only
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8 text-gray-600"
            >
              <p className="text-sm">
                Need help? Contact support at{" "}
                <a
                  href="mailto:support@edumanage.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  support@edumanage.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}