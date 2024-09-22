import React from "react";
import { FaArchive, FaBookOpen, FaHome, FaRegCalendar, FaRegCalendarPlus, FaUserEdit } from "react-icons/fa";
import { MdArchive, MdChildCare, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorSidebar = () => {
  return (
    <div class="sidebar-wrapper">
      <div className="row flex-nowrap">
        <div className=" d-flex justify-content-center px-0 bg-success min-vh-100">
          <div className="d-flex flex-md-column flex-wrap gap-3 px-4 px-md-0 py-4 py-md-0 align-items-sm-end px-3 pt-2 text-white">
            <Link
              to="/tutor-dashboard"
              className="d-flex align-items-center py-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fs-md-4  d-sm-inline">
                <span className="me-3">
                  <MdDashboard className="fs-3" />
                </span>
                Dashboard
              </span>
            </Link>
            <Link
              to="/edit-profile"
              className="d-flex align-items-center pb-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-flex align-tems-center fs-md-3  d-sm-inline">
                <span className="me-3">
                  <FaUserEdit className="fs-3" />
                </span>
                Edit Profile
              </span>
            </Link>
            <Link
              to="/add-schedule"
              className="d-flex align-items-center pb-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-flex align-tems-center fs-md-3  d-sm-inline">
                <span className="me-3">
                  <FaRegCalendarPlus className="fs-3" />
                </span>
                Schedule
              </span>
            </Link>
            <Link
              to="/settings"
              className="d-flex align-items-center pb-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-flex align-tems-center fs-md-3  d-sm-inline">
                <span className="me-3">
                  <FaArchive className="fs-3" />
                </span>
                Account Settings
              </span>
            </Link>
            <Link
              to="/classroom-demo"
              className="d-flex align-items-center pb-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-flex align-tems-center fs-md-3  d-sm-inline">
                <span className="me-3">
                  <FaBookOpen className="fs-3" />
                </span>
                Classroom Demo
              </span>
            </Link>
            <Link
              to="/training-area"
              className="d-flex align-items-center pb-md-5 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-flex align-tems-center fs-md-3  d-sm-inline">
                <span className="me-3">
                  <FaBookOpen className="fs-3" />
                </span>
                Training Area
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSidebar;
