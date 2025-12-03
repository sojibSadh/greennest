import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-green-50">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet></Outlet>
            </main>
            <ToastContainer position="top-center" />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
