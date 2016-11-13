Template.updateForm.events({
  "click #remove": function(event) {
      event.preventDefault();
      var who = this._id;
      // console.log("event : " + who);
      var r = confirm("Are you sure you want to remove this record?");
      // console.log(r);
      if ( r == true ) {
        Data.remove({"_id":who});
        Router.go('home');
      }
   }
});
