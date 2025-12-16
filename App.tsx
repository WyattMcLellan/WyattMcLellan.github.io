import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";
import { ProjectDetail } from "./components/ProjectDetail";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-black hover:text-purple-600 transition-colors relative group"
          >
            <h1>Wyatt McLellan</h1>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="relative group">
              <span
                className={`transition-colors ${
                  isActive("/")
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                About
              </span>
              {isActive("/") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                />
              )}
            </Link>
            <Link to="/work" className="relative group">
              <span
                className={`transition-colors ${
                  isActive("/work")
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Work
              </span>
              {isActive("/work") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                />
              )}
            </Link>
            <Link to="/contact" className="relative group">
              <span
                className={`transition-colors ${
                  isActive("/contact")
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Contact
              </span>
              {isActive("/contact") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                />
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4 overflow-hidden"
            >
              <Link
                to="/"
                className={`block ${
                  isActive("/")
                    ? "text-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/work"
                className={`block ${
                  isActive("/work")
                    ? "text-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/contact"
                className={`block ${
                  isActive("/contact")
                    ? "text-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <Navigation />
        <main className="pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/work/:id"
              element={<ProjectDetail />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}