import List "mo:core/List";

module {
  type OldRecord = {
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

  type NewRecord = {
    rollNumber : Text;
    name : Text;
    fatherName : Text;
    dob : Text;
    trade : Text;
    nsqfLevel : Text;
    itiName : Text;
    examSystem : Text;
    annualYear : Text;
    examDate : Text;
    tradeTheoryMarks : Nat;
    employabilityMarks : Nat;
    workshopCalcMarks : Nat;
    engDrawingMarks : Nat;
    tradePracticalMarks : Nat;
    formativeAssessmentMarks : Nat;
    theoryMarks : Nat;
    practicalMarks : Nat;
    totalMarks : Nat;
    result : Text;
    resultDate : Text;
  };

  type OldActor = {
    trainees : [OldRecord];
  };

  type NewActor = {
    trainees : [NewRecord];
  };

  public func migration(old : OldActor) : NewActor {
    // Migrate all existing records to the new shape, excluding incorrect roll 08756845846283
    let upgradedArr = old.trainees.filter(
      func(r) { r.rollNumber != "08756845846283" }
    );
    let upgraded = List.fromArray<NewRecord>(
      upgradedArr.map<OldRecord, NewRecord>(
        func(r) : NewRecord {
          {
            rollNumber = r.rollNumber;
            name = r.name;
            fatherName = "";
            dob = "";
            trade = r.trade;
            nsqfLevel = "";
            itiName = r.itiName;
            examSystem = r.examSystem;
            annualYear = r.annualYear;
            examDate = "";
            tradeTheoryMarks = 0;
            employabilityMarks = 0;
            workshopCalcMarks = 0;
            engDrawingMarks = 0;
            tradePracticalMarks = 0;
            formativeAssessmentMarks = 0;
            theoryMarks = r.theoryMarks;
            practicalMarks = r.practicalMarks;
            totalMarks = r.totalMarks;
            result = r.result;
            resultDate = "";
          };
        },
      )
    );

    // Add the correct Monika Navaria record for roll 08756845846283
    upgraded.add({
      rollNumber = "08756845846283";
      name = "MONIKA NAVARIA";
      fatherName = "BANWARI LAL NAVARIA";
      dob = "18-Aug-1993";
      trade = "Electrician";
      nsqfLevel = "5";
      itiName = "Govt. ITI, Nizamuddin East, New Delhi";
      examSystem = "NCVT";
      annualYear = "2024-25";
      examDate = "July 2025";
      tradeTheoryMarks = 62;
      employabilityMarks = 36;
      workshopCalcMarks = 52;
      engDrawingMarks = 38;
      tradePracticalMarks = 220;
      formativeAssessmentMarks = 196;
      theoryMarks = 188;
      practicalMarks = 416;
      totalMarks = 604;
      result = "PASS";
      resultDate = "09 March 2026";
    });

    { trainees = upgraded.toArray<NewRecord>() };
  };
};
