import MarksheetMixin "mixins/marksheet-api";
import Types "types/marksheet";

actor {
  let trainees : [Types.TraineeRecord];
  include MarksheetMixin(trainees);
};

