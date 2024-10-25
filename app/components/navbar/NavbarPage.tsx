"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ProgressBar Component
const ProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      const progressBar = document.getElementById(
        "progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollProgress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="progress-bar"
      className="fixed top-16 left-0 h-1 bg-blue-500 transition-all duration-300"
      style={{ width: "0%" }}
    />
  );
};

// Notification Component
const Notification = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white text-center transition-transform duration-300 ease-in-out opacity-100 translate-y-0">
      {message}
      <button onClick={onClose} className="ml-4 text-white">
        ✖️
      </button>
    </div>
  );
};

// Custom Hook for Notifications
const useNotification = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const notify = (msg: string) => {
    setMessage(msg);
    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };

  return { show, message, notify };
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("한국어");
  const [loading, setLoading] = useState(false);
  const { show, message, notify } = useNotification();

  const [navItems, setNavItems] = useState([
    { name: "스튜디오", path: "/studio" },
    { name: "워크센터", path: "/workcenter" },
    { name: "손비서", path: "/assistant" },
    { name: "메타휴먼", path: "/metahuman" },
    { name: "영상제작소", path: "/video" },
    { name: "공지사항", path: "/notice" },
    { name: "제휴문의", path: "/partnership" },
  ]);

  const englishNavItems = [
    { name: "Studio", path: "/studio" },
    { name: "Work Center", path: "/workcenter" },
    { name: "Assistant", path: "/assistant" },
    { name: "Meta Human", path: "/metahuman" },
    { name: "Video Production", path: "/video" },
    { name: "Announcements", path: "/notice" },
    { name: "Partnership Inquiries", path: "/partnership" },
  ];

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setSelectedLang(storedLang);
      if (storedLang === "English") {
        setNavItems(englishNavItems);
      }
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLoading(true);
    setIsLangOpen(false);

    setTimeout(() => {
      setSelectedLang(lang);
      localStorage.setItem("language", lang);

      if (lang === "English") {
        setNavItems(englishNavItems);
        notify("Language switched to English");
      } else {
        setNavItems([
          { name: "스튜디오", path: "/studio" },
          { name: "워크센터", path: "/workcenter" },
          { name: "손비서", path: "/assistant" },
          { name: "메타휴먼", path: "/metahuman" },
          { name: "영상제작소", path: "/video" },
          { name: "공지사항", path: "/notice" },
          { name: "제휴문의", path: "/partnership" },
        ]);
        notify("언어가 한국어로 변경되었습니다");
      }

      setLoading(false);
    }, 500); // Simulate fetching data
  };

  return (
    <>
      <nav
        className="bg-black text-gray-300 shadow-md sticky top-0 z-50"
        role="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Homepage">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              {navItems.map((item) => (
                <div className="relative group" key={item.name}>
                  <Link
                    className="hover:text-white transition duration-300 relative hover-scale"
                    href={item.path}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-[rgb(254,120,112)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              ))}
            </div>

            {/* Language Selector for Desktop */}
            <div className="hidden md:flex items-center relative group">
              <button
                className="hover:text-white flex items-center transition duration-300"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-haspopup="true"
                aria-expanded={isLangOpen}
                aria-label="Select Language"
              >
                🌐 {selectedLang}
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white text-black p-2 shadow-md rounded-lg"
                  role="menu"
                >
                  <button
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    onClick={() => changeLanguage("한국어")}
                    role="menuitem"
                  >
                    한국어
                  </button>
                  <button
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    onClick={() => changeLanguage("English")}
                    role="menuitem"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            <ProgressBar />

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {show && <Notification message={message} onClose={() => notify("")} />}

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-transform duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-500 rounded-lg shadow-lg">
          {navItems.map((item) => (
            <Link
              className="block text-gray-200 hover:bg-gray-700 transition duration-300 rounded-lg px-4 py-2"
              key={item.name}
              href={item.path}
              role="menuitem"
            >
              {item.name}
            </Link>
          ))}

          {/* Language Selector for Mobile */}
          <div className="mt-2">
            <button
              className="flex items-center text-white"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-haspopup="true"
              aria-expanded={isLangOpen}
              aria-label="Select Language"
            >
              🌐 {selectedLang}
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLangOpen && (
              <div
                className="mt-2 bg-white text-black p-2 shadow-md rounded-lg transition-opacity duration-300"
                role="menu"
              >
                <button
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  onClick={() => changeLanguage("한국어")}
                  role="menuitem"
                >
                  한국어
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  onClick={() => changeLanguage("English")}
                  role="menuitem"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
