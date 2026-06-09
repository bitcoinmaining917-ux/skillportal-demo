import Array "mo:core/Array";
import Types "../types/marksheet";

module {
  public type TraineeRecord = Types.TraineeRecord;

  public func searchMarksheet(
    records : [TraineeRecord],
    rollNumber : Text,
    examSystem : Text,
    annualYear : Text,
  ) : [TraineeRecord] {
    let skipExamSystem = examSystem == "" or examSystem == "---Select---";
    let skipYear = annualYear == "" or annualYear == "---select---";
    records.filter<TraineeRecord>(
      func(r) {
        let rollMatch = rollNumber == "" or r.rollNumber == rollNumber;
        let examMatch = skipExamSystem or r.examSystem == examSystem;
        let yearMatch = skipYear or r.annualYear == annualYear;
        rollMatch and examMatch and yearMatch;
      },
    );
  };

  public func getAllTrainees(records : [TraineeRecord]) : [TraineeRecord] {
    records;
  };
};
