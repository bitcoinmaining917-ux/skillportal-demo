import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TraineeRecord {
    dob: string;
    theoryMarks: bigint;
    result: string;
    totalMarks: bigint;
    trade: string;
    itiName: string;
    examSystem: string;
    practicalMarks: bigint;
    annualYear: string;
    name: string;
    engDrawingMarks: bigint;
    formativeAssessmentMarks: bigint;
    tradeTheoryMarks: bigint;
    nsqfLevel: string;
    fatherName: string;
    workshopCalcMarks: bigint;
    rollNumber: string;
    tradePracticalMarks: bigint;
    resultDate: string;
    employabilityMarks: bigint;
    examDate: string;
}
export interface backendInterface {
    getAllTrainees(): Promise<Array<TraineeRecord>>;
    searchMarksheet(rollNumber: string, examSystem: string, annualYear: string): Promise<Array<TraineeRecord>>;
}
