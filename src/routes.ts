import { createBrowserRouter } from "react-router";
import { UniversityLandingPage } from "./components/UniversityLandingPage";
import { ModernUniversityLanding } from "./components/ModernUniversityLanding";
import { EnhancedLandingPage } from "./components/EnhancedLandingPage";
import FigmaLandingPage from "./components/FigmaLandingPage";
import DumriCollegeLanding from "./components/DumriCollegeLanding";
import { LoginPage } from "./components/LoginPage";
import { EnhancedAdminDashboard } from "./components/EnhancedAdminDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdmissionManagement } from "./components/AdmissionManagement";
import { StudentDashboard } from "./components/StudentDashboard";
import { DocumentUpload } from "./components/DocumentUpload";
import { FeePayment } from "./components/FeePayment";
import { CertificateDownload } from "./components/CertificateDownload";
import { AdmissionApplicationForm } from "./components/AdmissionApplicationForm";
import { CertificateRequestManagement } from "./components/CertificateRequestManagement";
import { DigitalIDCard } from "./components/DigitalIDCard";
import { About } from "./components/About";
import { Academics } from "./components/Academics";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
// import { ProgramsPage } from "./components/pages/ProgramsPage";
import { SignupPage } from "./components/pages/SignupPage";
import { StudentGallery } from "./components/StudentGallery";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { TeacherClasses } from "./components/TeacherClasses";
import { TeacherAttendance } from "./components/TeacherAttendance";
import { TeacherAssignments } from "./components/TeacherAssignments";
import { TeacherStudents } from "./components/TeacherStudents";
import { TeacherSchedule } from "./components/TeacherSchedule";
import { TeacherExams } from "./components/TeacherExams";
import { TeacherNotices } from "./components/TeacherNotices";
import { TeacherMessages } from "./components/TeacherMessages";
import { TeacherManagement } from "./components/TeacherManagement";
import { ScheduleManagement } from "./components/ScheduleManagement";
import { FeeManagement } from "./components/FeeManagement";
import { AdminFeePayment } from "./components/AdminFeePayment";
import { AllStudentsData } from "./components/AllStudentsData";
import { AddStudentForm } from "./components/AddStudentForm";
import { AddTeacherForm } from "./components/AddTeacherForm";
import { AccountManagement } from "./components/AccountManagement";
import { ClassManagement } from "./components/ClassManagement";
import { SubjectManagement } from "./components/SubjectManagement";
import { AttendanceManagement } from "./components/AttendanceManagement";
import { ExamManagement } from "./components/ExamManagement";
import { NoticeManagement } from "./components/NoticeManagement";
import { MessageManagement } from "./components/MessageManagement";
import { Reports } from "./components/Reports";
import { StudentClasses } from "./components/StudentClasses";
import { StudentSchedule } from "./components/StudentSchedule";
import { StudentAttendance } from "./components/StudentAttendance";
import { StudentExams } from "./components/StudentExams";
import { StudentResults } from "./components/StudentResults";
import { StudentAssignments } from "./components/StudentAssignments";
import { StudentLibrary } from "./components/StudentLibrary";
import { StudentNotices } from "./components/StudentNotices";
import { StudentMessages } from "./components/StudentMessages";
import { TrackApplication } from "./components/TrackApplication";
import { NotFound } from "./components/NotFound";
import { AddNewClass } from "./components/AddNewClass";
import { AddNewSubject } from "./components/AddNewSubject";
import { AddSchedule } from "./components/AddSchedule";
import { ScheduleNewExam } from "./components/ScheduleNewExam";
import { CreateNotice } from "./components/CreateNotice";
import { StudentFeeReceipt } from "./components/StudentFeeReceipt";
import { StudentView } from "./components/StudentView";
import { Approved } from "./components/pages/Approved";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DumriCollegeLanding,
  },
  {
    path: "/modern",
    Component: ModernUniversityLanding,
  },
  {
    path: "/christ",
    Component: UniversityLandingPage,
  },
  {
    path: "/enhanced",
    Component: EnhancedLandingPage,
  },
  {
    path: "/figma",
    Component: FigmaLandingPage,
  },
  {
    path: "/about",
    Component: About,
  },
  // {
  //   path: "/programs",
  //   Component: ProgramsPage,
  // },
  {
    path: "/academics",
    Component: Academics,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/apply",
    Component: AdmissionApplicationForm,
  },
  {
    path: "/admin/dashboard",
    Component: EnhancedAdminDashboard,
  },
  {
    path: "/admin/admissions",
    Component: AdmissionManagement,
  },
  {
    path: "/admin/teachers",
    Component: TeacherManagement,
  },
  {
    path: "/admin/schedule",
    Component: ScheduleManagement,
  },
  {
    path: "/admin/certificates",
    Component: CertificateRequestManagement,
  },
  {
    path: "/admin/fee",
    Component: FeeManagement,
  },
  {
    path: "/admin/reports",
    Component: Reports,
  },
  {
    path: "/admin/admin-fee-payment",
    Component: AdminFeePayment,
  },
  {
    path: "/admin/exams",
    Component: ExamManagement,
  },
  {
    path: "/admin/students",
    Component: AllStudentsData,
  },
  {
    path: "/admin/add-student",
    Component: AddStudentForm,
  },
  {
    path: "/admin/students/:studentId",
    Component: StudentView,
  },
  {
    path: "/admin/students/:applicationId/approved",
    Component: Approved,
  },
  {
    path: "/admin/add-teacher",
    Component: AddTeacherForm,
  },
  {
    path: "/admin/account",
    Component: AccountManagement,
  },
  {
    path: "/admin/classes",
    Component: ClassManagement,
  },
  {
    path: "/admin/subjects",
    Component: SubjectManagement,
  },
  {
    path: "/admin/attendance",
    Component: AttendanceManagement,
  },
  {
    path: "/admin/notices",
    Component: NoticeManagement,
  },
  {
    path: "/admin/messages",
    Component: MessageManagement,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/documents",
    Component: DocumentUpload,
  },
  {
    path: "/student/fees",
    Component: FeePayment,
  },
  {
    path: "/student/certificates",
    Component: CertificateDownload,
  },
  {
    path: "/student/id-card",
    Component: DigitalIDCard,
  },
  {
    path: "/student/gallery",
    Component: StudentGallery,
  },
  {
    path: "/student/classes",
    Component: StudentClasses,
  },
  {
    path: "/student/schedule",
    Component: StudentSchedule,
  },
  {
    path: "/student/attendance",
    Component: StudentAttendance,
  },
  {
    path: "/student/exams",
    Component: StudentExams,
  },
  {
    path: "/student/results",
    Component: StudentResults,
  },
  {
    path: "/student/assignments",
    Component: StudentAssignments,
  },
  {
    path: "/student/library",
    Component: StudentLibrary,
  },
  {
    path: "/student/notices",
    Component: StudentNotices,
  },
  {
    path: "/student/messages",
    Component: StudentMessages,
  },
  {
    path: "/student/track-application",
    Component: TrackApplication,
  },
  {
    path: "/teacher/dashboard",
    Component: TeacherDashboard,
  },
  {
    path: "/teacher/students",
    Component: TeacherStudents,
  },
  {
    path: "/teacher/classes",
    Component: TeacherClasses,
  },
  {
    path: "/teacher/schedule",
    Component: TeacherSchedule,
  },
  {
    path: "/teacher/attendance",
    Component: TeacherAttendance,
  },
  {
    path: "/teacher/exams",
    Component: TeacherExams,
  },
  {
    path: "/teacher/assignments",
    Component: TeacherAssignments,
  },
  {
    path: "/teacher/notices",
    Component: TeacherNotices,
  },
  {
    path: "/teacher/messages",
    Component: TeacherMessages,
  },
  {
    path: "/admin/add-class",
    Component: AddNewClass,
  },
  {
    path: "/admin/add-subject",
    Component: AddNewSubject,
  },
  {
    path: "/admin/add-schedule",
    Component: AddSchedule,
  },
  {
    path: "/admin/schedule-exam",
    Component: ScheduleNewExam,
  },
  {
    path: "/admin/create-notice",
    Component: CreateNotice,
  },
  {
    path: "/student/fee-receipt",
    Component: StudentFeeReceipt,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);