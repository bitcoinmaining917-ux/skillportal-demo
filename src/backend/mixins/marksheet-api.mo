import MarksheetLib "../lib/marksheet";
import Types "../types/marksheet";

mixin (trainees : [Types.TraineeRecord]) {
  public query func searchMarksheet(
    rollNumber : Text,
    examSystem : Text,
    annualYear : Text,
  ) : async [Types.TraineeRecord] {
    MarksheetLib.searchMarksheet(trainees, rollNumber, examSystem, annualYear);
  };

  public query func getAllTrainees() : async [Types.TraineeRecord] {
    MarksheetLib.getAllTrainees(trainees);
  };
};
