import type { backendInterface } from "../backend";

const sampleTrainees = [
  {
    rollNumber: "08756845846283",
    name: "Amit Kumar Verma",
    fatherName: "Ram Prasad Verma",
    dob: "15-08-2002",
    trade: "Electrician",
    nsqfLevel: "5",
    itiName: "Govt. ITI Delhi",
    examSystem: "NCVT",
    annualYear: "2023-24",
    examDate: "15-03-2024",
    tradeTheoryMarks: BigInt(72),
    employabilityMarks: BigInt(42),
    workshopCalcMarks: BigInt(38),
    engDrawingMarks: BigInt(44),
    tradePracticalMarks: BigInt(218),
    formativeAssessmentMarks: BigInt(172),
    theoryMarks: BigInt(196),
    practicalMarks: BigInt(390),
    totalMarks: BigInt(586),
    result: "Pass",
    resultDate: "20-05-2024",
  },
  {
    rollNumber: "DL001235",
    name: "Priya Sharma",
    fatherName: "Ramesh Sharma",
    dob: "22-04-2001",
    trade: "Fitter",
    nsqfLevel: "4",
    itiName: "Government ITI Noida",
    examSystem: "NCVT",
    annualYear: "2023-24",
    examDate: "10-03-2024",
    tradeTheoryMarks: BigInt(65),
    employabilityMarks: BigInt(40),
    workshopCalcMarks: BigInt(35),
    engDrawingMarks: BigInt(42),
    tradePracticalMarks: BigInt(205),
    formativeAssessmentMarks: BigInt(160),
    theoryMarks: BigInt(182),
    practicalMarks: BigInt(365),
    totalMarks: BigInt(547),
    result: "Pass",
    resultDate: "20-05-2024",
  },
];

export const mockBackend: backendInterface = {
  getAllTrainees: async () => sampleTrainees,
  searchMarksheet: async (rollNumber: string, examSystem: string, annualYear: string) => {
    return sampleTrainees.filter((t) => {
      const matchRoll = !rollNumber || t.rollNumber.toLowerCase().includes(rollNumber.toLowerCase());
      const matchExam = !examSystem || examSystem === "all" || examSystem === "---Select---" || t.examSystem === examSystem;
      const matchYear = !annualYear || annualYear === "all" || annualYear === "---select---" || t.annualYear === annualYear;
      return matchRoll && matchExam && matchYear;
    });
  },
};
