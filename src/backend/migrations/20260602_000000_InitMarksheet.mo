import List "mo:core/List";

module {
  type TraineeRecord = {
    rollNumber : Text;
    name : Text;
    trade : Text;
    itiName : Text;
    examSystem : Text;
    annualYear : Text;
    theoryMarks : Nat;
    practicalMarks : Nat;
    totalMarks : Nat;
    result : Text;
  };

  type OldActor = {};

  type NewActor = {
    trainees : [TraineeRecord];
  };

  public func migration(_ : OldActor) : NewActor {
    {
      trainees = [
        {
          rollNumber = "NCT2022001";
          name = "Rajesh Kumar Singh";
          trade = "Electrician";
          itiName = "Govt ITI Patna";
          examSystem = "NCVT";
          annualYear = "2022-23";
          theoryMarks = 72;
          practicalMarks = 80;
          totalMarks = 152;
          result = "Pass";
        },
        {
          rollNumber = "NCT2023002";
          name = "Priya Sharma";
          trade = "Fitter";
          itiName = "Govt ITI Mumbai";
          examSystem = "NCVT";
          annualYear = "2023-24";
          theoryMarks = 65;
          practicalMarks = 75;
          totalMarks = 140;
          result = "Pass";
        },
        {
          rollNumber = "SCT2023003";
          name = "Mohan Das Verma";
          trade = "Welder";
          itiName = "Govt ITI Delhi";
          examSystem = "SCVT";
          annualYear = "2023-24";
          theoryMarks = 45;
          practicalMarks = 50;
          totalMarks = 95;
          result = "Fail";
        },
        {
          rollNumber = "NCT2024004";
          name = "Anita Devi Patel";
          trade = "COPA";
          itiName = "Govt ITI Bangalore";
          examSystem = "NCVT";
          annualYear = "2024-25";
          theoryMarks = 88;
          practicalMarks = 92;
          totalMarks = 180;
          result = "Pass";
        },
        {
          rollNumber = "SCT2024005";
          name = "Suresh Yadav";
          trade = "Plumber";
          itiName = "Govt ITI Chennai";
          examSystem = "SCVT";
          annualYear = "2024-25";
          theoryMarks = 70;
          practicalMarks = 78;
          totalMarks = 148;
          result = "Pass";
        },
      ];
    };
  };
};
