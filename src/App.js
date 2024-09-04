import React, { createContext, useReducer } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
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
import Error from "./pages/Error";
import StudentDashboard from "./components/dashboards/student-dashboard/StudentDashboard";
import TutorDashboard from "./components/dashboards/tutor-dashboard/TutorDashboard";
import AdminDashboard from "./components/dashboards/admin-dashboard/AdminDashboard";
import EditProfile from "./components/dashboards/student-dashboard/EditProfile";
import ParentalWatch from "./components/dashboards/student-dashboard/ParentalWatch";
import StudentArchives from "./components/dashboards/student-dashboard/StudentArchives";
import QuranRevision from "./components/dashboards/student-dashboard/QuranRevision";
import HireQuranTutors from "./components/dashboards/student-dashboard/HireQuranTutors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Conversations from "./components/dashboards/student-dashboard/Conversations";

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
          <Route path="/" exact component={Home} />
          <Route path="/findtutors" component={FindTutor} />
          <Route path="/priceplan" component={PricePlan} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/quran" component={Quran} />
          <Route path="/qaida" component={Qaida} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/tos" component={ToS} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/whyus" component={WhyUS} />
          <Route path="/faqs" component={FaQ} />
          <Route path="/useapp" component={UseApp} />
          <Route path="/signup" component={Signup} />

          {/* Private routes for authenticated users only */}
          <PrivateRoute
            path="/students/dashboard"
            component={StudentDashboard}
            roles={["student"]}
          />
          <PrivateRoute
            path="/students/edit-profile"
            component={EditProfile}
            roles={["student"]}
          />
          <PrivateRoute
            path="/students/parental_watch"
            component={ParentalWatch}
            roles={["student"]}
          />
          <PrivateRoute
            path="/students/on_demand"
            component={StudentArchives}
            roles={["student"]}
          />
          <PrivateRoute
            path="/students/quran_revision"
            component={QuranRevision}
            roles={["student"]}
          />
           <PrivateRoute
            path="/conversations"
            component={Conversations}
            roles={["student"]}
          />
          <PrivateRoute
            path="/tutor-dashboard"
            component={TutorDashboard}
            roles={["teacher"]}
          />
          <PrivateRoute
            path="/admin-dashboard"
            component={AdminDashboard}
            roles={["admin"]}
          />

          {/* Fallback for any other routes */}
          <PrivateRoute
            path="*"
            render={() => (
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
            )}
          />
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
