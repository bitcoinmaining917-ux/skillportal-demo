import { useSearchMarksheet } from "@/hooks/useQueries";
import type { TraineeRecord } from "@/hooks/useQueries";
import { useRef, useState } from "react";

const examSystems = ["---Select---", "NCVT", "SCVT"];
const annualYears = [
  "---select---",
  "2020-21",
  "2021-22",
  "2022-23",
  "2023-24",
  "2024-25",
];

interface SubjectRow {
  subject: string;
  maxMarks: number;
  marksObtained: bigint;
  passMarks: number;
}

function getSubjects(record: TraineeRecord): SubjectRow[] {
  return [
    {
      subject: "Trade Theory",
      maxMarks: 100,
      marksObtained: record.tradeTheoryMarks,
      passMarks: 40,
    },
    {
      subject: "Employability Skills",
      maxMarks: 50,
      marksObtained: record.employabilityMarks,
      passMarks: 20,
    },
    {
      subject: "Workshop Calculation & Science",
      maxMarks: 50,
      marksObtained: record.workshopCalcMarks,
      passMarks: 20,
    },
    {
      subject: "Engineering Drawing",
      maxMarks: 50,
      marksObtained: record.engDrawingMarks,
      passMarks: 20,
    },
    {
      subject: "Trade Practical",
      maxMarks: 250,
      marksObtained: record.tradePracticalMarks,
      passMarks: 100,
    },
    {
      subject: "Formative Assessment",
      maxMarks: 200,
      marksObtained: record.formativeAssessmentMarks,
      passMarks: 80,
    },
  ];
}

function MarksheetCard({ record }: { record: TraineeRecord }) {
  const subjects = getSubjects(record);
  const totalMax = 700;
  const totalObtained = Number(record.totalMarks);
  const overallPass = record.result.toLowerCase() === "pass";
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let finalHeight = imgHeight;
      let yPos = margin;
      if (imgHeight > pageHeight - margin * 2) {
        finalHeight = pageHeight - margin * 2;
        yPos = margin;
      } else {
        yPos = (pageHeight - imgHeight) / 2;
      }
      pdf.addImage(imgData, "PNG", margin, yPos, imgWidth, finalHeight);
      pdf.save(`Marksheet_${record.rollNumber}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
  };

  return (
    <div>
      <div
        ref={cardRef}
        className="border border-[#c8d8e8] rounded-sm overflow-hidden bg-white"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3a7abf] to-[#2a5a9e] px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Trainee MarkSheet</h3>
          <span
            className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wide ${
              overallPass
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {record.result}
          </span>
        </div>

        {/* Candidate Details */}
        <div className="p-4 border-b border-[#c8d8e8]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">
                Candidate Name
              </span>
              <span className="text-foreground">{record.name}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">
                Father/Guardian Name
              </span>
              <span className="text-foreground">{record.fatherName}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">
                Date of Birth
              </span>
              <span className="text-foreground">{record.dob}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">Roll Number</span>
              <span className="text-foreground">{record.rollNumber}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">Trade</span>
              <span className="text-foreground">{record.trade}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">NSQF Level</span>
              <span className="text-foreground">{record.nsqfLevel}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">ITI Name</span>
              <span className="text-foreground">{record.itiName}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">Exam System</span>
              <span className="text-foreground">{record.examSystem}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">
                Annual Year / Academic Session
              </span>
              <span className="text-foreground">{record.annualYear}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-bold text-[#0a1f3d]">Exam Date</span>
              <span className="text-foreground">{record.examDate}</span>
            </div>
          </div>
        </div>

        {/* Subject-wise Marks Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#d0e4f7]">
                <th className="border border-[#c8d8e8] px-3 py-2 text-left font-bold text-[#0a1f3d]">
                  Subject
                </th>
                <th className="border border-[#c8d8e8] px-3 py-2 text-right font-bold text-[#0a1f3d]">
                  Max Marks
                </th>
                <th className="border border-[#c8d8e8] px-3 py-2 text-right font-bold text-[#0a1f3d]">
                  Marks Obtained
                </th>
                <th className="border border-[#c8d8e8] px-3 py-2 text-right font-bold text-[#0a1f3d]">
                  Pass Marks
                </th>
                <th className="border border-[#c8d8e8] px-3 py-2 text-center font-bold text-[#0a1f3d]">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => {
                const passed = Number(s.marksObtained) >= s.passMarks;
                return (
                  <tr
                    key={s.subject}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}
                  >
                    <td className="border border-[#c8d8e8] px-3 py-2">
                      {s.subject}
                    </td>
                    <td className="border border-[#c8d8e8] px-3 py-2 text-right">
                      {s.maxMarks}
                    </td>
                    <td className="border border-[#c8d8e8] px-3 py-2 text-right font-semibold">
                      {s.marksObtained.toString()}
                    </td>
                    <td className="border border-[#c8d8e8] px-3 py-2 text-right">
                      {s.passMarks}
                    </td>
                    <td className="border border-[#c8d8e8] px-3 py-2 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-sm text-xs font-semibold ${
                          passed
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {passed ? "Pass" : "Fail"}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {/* Total Row */}
              <tr className="bg-[#e8f0fe] font-bold">
                <td className="border border-[#c8d8e8] px-3 py-2">Total</td>
                <td className="border border-[#c8d8e8] px-3 py-2 text-right">
                  {totalMax}
                </td>
                <td className="border border-[#c8d8e8] px-3 py-2 text-right">
                  {totalObtained}
                </td>
                <td className="border border-[#c8d8e8] px-3 py-2 text-right">
                  —
                </td>
                <td className="border border-[#c8d8e8] px-3 py-2 text-center">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-sm text-xs font-semibold ${
                      overallPass
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {record.result}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="p-3 bg-[#fafbfc] border-t border-[#c8d8e8] text-sm flex items-center justify-between">
          <span className="text-muted-foreground">
            Date of Result:{" "}
            <span className="font-semibold text-foreground">
              {record.resultDate}
            </span>
          </span>
          <span className="text-muted-foreground">
            Overall Result:{" "}
            <span
              className={`font-bold ${overallPass ? "text-green-700" : "text-red-700"}`}
            >
              {record.result}
            </span>
          </span>
        </div>
      </div>
      {/* Download Button */}
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={handleDownloadPDF}
          className="bg-[#1565C0] hover:bg-[#0d47a1] text-white text-sm font-semibold px-6 py-2 rounded-sm transition-colors flex items-center gap-2"
          data-ocid="marksheet.download_button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-label="Download"
            role="img"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Marksheet
        </button>
      </div>
    </div>
  );
}

export default function TraineeMarkSheet() {
  const [rollNumber, setRollNumber] = useState("");
  const [examSystem, setExamSystem] = useState("NCVT");
  const [annualYear, setAnnualYear] = useState("2024-25");
  const [searchEnabled, setSearchEnabled] = useState(false);

  const {
    data: results,
    isLoading,
    error,
  } = useSearchMarksheet(rollNumber, examSystem, annualYear, searchEnabled);

  const handleSearch = () => {
    if (rollNumber.trim() === "08756845846283") {
      setSearchEnabled(true);
    } else {
      setSearchEnabled(false);
    }
  };

  const handleClear = () => {
    setRollNumber("");
    setExamSystem("NCVT");
    setAnnualYear("2024-25");
    setSearchEnabled(false);
  };

  const hasSearched = searchEnabled;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold text-[#0a1f3d] mb-4">
        Trainee MarkSheet
      </h2>

      {/* Search Criteria Box */}
      <div className="border border-[#c8d8e8] rounded-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-[#3a7abf] to-[#2a5a9e] px-4 py-2">
          <h3 className="text-sm font-bold text-white">Search Criteria</h3>
        </div>
        <div className="bg-[#fafbfc] p-4 border-t border-[#c8d8e8]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Row 1 */}
            <div>
              <label
                htmlFor="rollNumber"
                className="block text-sm font-bold text-foreground mb-1"
              >
                Roll Number/Registration Number
                <span className="text-red-600">*</span>
              </label>
              <input
                id="rollNumber"
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="w-full border border-[#c8d8e8] rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565C0] bg-white"
                placeholder="Enter roll number"
                data-ocid="marksheet.roll_number.input"
              />
            </div>
            <div>
              <label
                htmlFor="examSystem"
                className="block text-sm font-bold text-foreground mb-1"
              >
                Exam System<span className="text-red-600">*</span>
              </label>
              <select
                id="examSystem"
                value={examSystem}
                onChange={(e) => setExamSystem(e.target.value)}
                className="w-full border border-[#c8d8e8] rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565C0] bg-white"
                data-ocid="marksheet.exam_system.select"
              >
                {examSystems.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 2 */}
            <div>
              <label
                htmlFor="annualYear"
                className="block text-sm font-bold text-foreground mb-1"
              >
                Please Select Annual<span className="text-red-600">*</span>
              </label>
              <select
                id="annualYear"
                value={annualYear}
                onChange={(e) => setAnnualYear(e.target.value)}
                className="w-full border border-[#c8d8e8] rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1565C0] bg-white"
                data-ocid="marksheet.annual_year.select"
              >
                {annualYears.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSearch}
              className="bg-[#1565C0] hover:bg-[#0d47a1] text-white text-sm font-semibold px-6 py-2 rounded-sm transition-colors"
              data-ocid="marksheet.search_button"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-[#1565C0] hover:bg-[#0d47a1] text-white text-sm font-semibold px-6 py-2 rounded-sm transition-colors"
              data-ocid="marksheet.clear_button"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {isLoading && (
        <div
          className="text-center py-8 text-muted-foreground"
          data-ocid="marksheet.loading_state"
        >
          Loading...
        </div>
      )}

      {error && (
        <div
          className="text-center py-8 text-red-600"
          data-ocid="marksheet.error_state"
        >
          Error fetching results. Please try again.
        </div>
      )}

      {hasSearched && !isLoading && !error && results && results.length > 0 && (
        <div className="space-y-6">
          {results.map((record, index) => (
            <div
              key={record.rollNumber + record.annualYear}
              data-ocid={`marksheet.item.${index + 1}`}
            >
              <MarksheetCard record={record} />
            </div>
          ))}
        </div>
      )}

      {hasSearched &&
        !isLoading &&
        !error &&
        (!results || results.length === 0) && (
          <div
            className="border border-[#c8d8e8] rounded-sm bg-white p-6 text-center text-muted-foreground"
            data-ocid="marksheet.empty_state"
          >
            No records found for the given search criteria.
          </div>
        )}
    </div>
  );
}
