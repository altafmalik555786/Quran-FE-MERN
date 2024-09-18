import React, { createContext, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { initialState, reducer } from "./reducer/UseReducer";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import PricePlan from "./pages/PricePlan";
import HowItWorks from "./pages/HowItWorks";
import Quran from "./pages/Quran";
import Qaida from "./pages/Qaida";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ToS from "./pages/ToS";
import Testimonials from "./pages/Testimonials";
import FaQ from "./pages/FaQ";
import WhyUS from "./pages/WhyUs";
import UseApp from "./pages/UseApp";
import Signup from "./pages/Signup";
import StudentDashboard from "./components/dashboards/student-dashboard/StudentDashboard";
import TutorDashboard from "./components/dashboards/tutor-dashboard/TutorDashboard";
import AdminDashboard from "./components/dashboards/admin-dashboard/AdminDashboard";
import EditProfile from "./components/dashboards/student-dashboard/EditProfile";
import ParentalWatch from "./components/dashboards/student-dashboard/ParentalWatch";
import StudentArchives from "./components/dashboards/student-dashboard/StudentArchives";
import QuranRevision from "./components/dashboards/student-dashboard/QuranRevision";
import Conversations from "./components/dashboards/student-dashboard/Conversations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";

// 1 context api
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  const getUserRole = () => {
    return localStorage.getItem("role");
  };
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/findtutors" element={<FindTutor />} />
          <Route path="/priceplan" element={<PricePlan />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/qaida" element={<Qaida />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<ToS />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/whyus" element={<WhyUS />} />
          <Route path="/faqs" element={<FaQ />} />
          <Route path="/useapp" element={<UseApp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes for authenticated users only */}
          <Route
            path="/students/dashboard"
            element={<PrivateRoute element={<StudentDashboard />} roles={["student"]} />}
          />
          <Route
            path="/students/edit-profile"
            element={<PrivateRoute element={<EditProfile />} roles={["student"]} />}
          />
          <Route
            path="/students/parental_watch"
            element={<PrivateRoute element={<ParentalWatch />} roles={["student"]} />}
          />
          <Route
            path="/students/on_demand"
            element={<PrivateRoute element={<StudentArchives />} roles={["student"]} />}
          />
          <Route
            path="/students/quran_revision"
            element={<PrivateRoute element={<QuranRevision />} roles={["student"]} />}
          />
          <Route
            path="/conversations"
            element={<PrivateRoute element={<Conversations />} roles={["student"]} />}
          />
          <Route
            path="/tutor-dashboard"
            element={<PrivateRoute element={<TutorDashboard />} roles={["teacher"]} />}
          />
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute element={<AdminDashboard />} roles={["admin"]} />}
          />

          {/* Fallback for any other routes */}
          <Route
            path="*"
            element={
              <PrivateRoute
                element={
                  <Navigate
                    to={
                      isAuthenticated()
                        ? getUserRole() === "student"
                          ? "/students/dashboard"
                          : getUserRole() === "teacher"
                          ? "/tutor-dashboard"
                          : "/admin-dashboard"
                        : "/signup"
                    }
                  />
                }
              />
            }
          />
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
