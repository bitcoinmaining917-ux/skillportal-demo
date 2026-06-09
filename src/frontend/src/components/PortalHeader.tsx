import { useState } from "react";

const navLinks = [
  "Home",
  "ITI",
  "Trainee",
  "Verification",
  "Instructor",
  "Examiner",
  "Calendar",
  "CFI",
  "Help",
  "Dashboard",
  "Complaint Tool",
];

const utilityLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Support",
  "Login",
  "FAQ",
  "Help",
  "SiteMap",
];

export default function PortalHeader() {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">(
    "normal",
  );

  const fontSizeClass =
    fontSize === "large"
      ? "text-[110%]"
      : fontSize === "larger"
        ? "text-[125%]"
        : "";

  const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className={fontSizeClass}>
      {/* Top Utility Bar */}
      <div className="bg-[#f0f4f8] border-b border-[#c8d8e8]">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-end text-xs text-[#1a3a5c]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setFontSize("larger")}
                className="w-6 h-6 flex items-center justify-center border border-[#1a3a5c] text-[10px] font-bold hover:bg-[#1a3a5c] hover:text-white transition-colors"
                aria-label="Increase font size"
                data-ocid="font_size_increase.button"
              >
                +A
              </button>
              <button
                type="button"
                onClick={() => setFontSize("normal")}
                className="w-6 h-6 flex items-center justify-center border border-[#1a3a5c] text-[10px] hover:bg-[#1a3a5c] hover:text-white transition-colors"
                aria-label="Reset font size"
                data-ocid="font_size_reset.button"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize("large")}
                className="w-6 h-6 flex items-center justify-center border border-[#1a3a5c] text-[10px] hover:bg-[#1a3a5c] hover:text-white transition-colors"
                aria-label="Decrease font size"
                data-ocid="font_size_decrease.button"
              >
                -A
              </button>
            </div>
            <span className="text-[#1a3a5c] mx-1">|</span>
            <nav className="hidden md:flex items-center gap-1 text-[#1a3a5c]">
              {utilityLinks.map((item, idx) => (
                <span key={item} className="flex items-center">
                  <a
                    href={`#${slugify(item)}`}
                    className="hover:underline whitespace-nowrap px-1"
                    data-ocid={`utility_${item.toLowerCase().replace(/\s+/g, "_")}.link`}
                  >
                    {item}
                  </a>
                  {idx < utilityLinks.length - 1 && (
                    <span className="text-[#1a3a5c]/50 mx-0.5">|</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header Bar — White Background */}
      <div className="bg-white border-b border-[#d0e4f7]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Government Emblem — Ashoka Lion Capital SVG */}
          <div className="flex-shrink-0">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="emblem-title"
            >
              <title id="emblem-title">Government Emblem of India</title>
              {/* Base / Abacus */}
              <rect x="10" y="52" width="44" height="4" rx="1" fill="#1a3a5c" />
              <rect x="14" y="48" width="36" height="3" rx="1" fill="#1a3a5c" />
              {/* Lions */}
              <path
                d="M20 46 L24 30 L28 34 L32 28 L36 34 L40 30 L44 46 Z"
                fill="#1a3a5c"
              />
              {/* Center wheel / chakra */}
              <circle
                cx="32"
                cy="24"
                r="6"
                stroke="#1a3a5c"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="32" cy="24" r="1.5" fill="#1a3a5c" />
              {/* Spokes */}
              <line
                x1="32"
                y1="18"
                x2="32"
                y2="30"
                stroke="#1a3a5c"
                strokeWidth="1"
              />
              <line
                x1="26"
                y1="24"
                x2="38"
                y2="24"
                stroke="#1a3a5c"
                strokeWidth="1"
              />
              <line
                x1="27.8"
                y1="19.8"
                x2="36.2"
                y2="28.2"
                stroke="#1a3a5c"
                strokeWidth="1"
              />
              <line
                x1="27.8"
                y1="28.2"
                x2="36.2"
                y2="19.8"
                stroke="#1a3a5c"
                strokeWidth="1"
              />
              {/* Horse left */}
              <path d="M12 46 Q14 38 18 40 L20 46 Z" fill="#1a3a5c" />
              {/* Bull right */}
              <path d="M52 46 Q50 38 46 40 L44 46 Z" fill="#1a3a5c" />
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold leading-tight text-[#0a1f3d]">
              Ministry of Skill Development And Entrepreneurship
            </h1>
            <p className="text-sm md:text-base text-[#1a3a5c]">
              National Council For Vocational Training
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar — Light Blue */}
      <nav className="bg-[#d0e4f7] border-b border-[#a8c8e8]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-1 py-1">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${slugify(link)}`}
                  className="block px-3 py-2 text-sm font-medium text-[#0a1f3d] hover:bg-[#a8c8e8] hover:text-[#0a1f3d] rounded-sm transition-colors"
                  data-ocid={`nav_${link.toLowerCase().replace(/\s+/g, "_")}.link`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
