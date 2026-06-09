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

  type OldActor = {
    trainees : [TraineeRecord];
  };

  type NewActor = {
    trainees : [TraineeRecord];
  };

  public func migration(old : OldActor) : NewActor {
    let newRecord : TraineeRecord = {
      rollNumber = "08756845846283";
      name = "Amit Kumar Verma";
      trade = "Electrician";
      itiName = "Govt. ITI Delhi";
      examSystem = "Annual";
      annualYear = "2023-2024";
      theoryMarks = 72;
      practicalMarks = 78;
      totalMarks = 150;
      result = "Pass";
    };
    let list = List.fromArray<TraineeRecord>(old.trainees);
    list.add(newRecord);
    {
      trainees = list.toArray<TraineeRecord>();
    };
  };
};
