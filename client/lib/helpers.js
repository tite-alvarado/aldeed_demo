Template.peopleTable.helpers({
  people: function() {
    return Data.find();
  }
});

Template.updateForm.helpers({
  person: function(e) { 
    // console.log("helper " + e);
    var who = Data.findOne({"_id":e});
    if (who) {
      return who;
    }
    return null;
  },
});
