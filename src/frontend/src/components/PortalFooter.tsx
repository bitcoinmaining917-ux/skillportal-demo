export default function PortalFooter() {
  return (
    <footer className="bg-[#d0e4f7] border-t border-[#a8c8e8]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#0a1f3d]">
        <p className="text-center md:text-left">
          &copy; 2015 Ministry of Skill Development And Entrepreneurship,
          Government of India. Suggested browser Microsoft Edge, Chrome or
          Safari only.
        </p>
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span>
            Total Hits : <strong>5,496,259</strong>
          </span>
          <span className="text-[#0a1f3d]/40">|</span>
          <span>
            Yearly Hits : <strong>3,685,177</strong>
          </span>
          <span className="text-[#0a1f3d]/40">|</span>
          <span>
            Monthly Hits : <strong>53,002</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
