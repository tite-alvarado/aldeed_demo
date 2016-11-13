Router.route('/', {
  name: 'home',
  template: 'home'
  }
);

Router.route('/edit/:_id', {
  name: 'edit',
  template: 'updateForm',
  data: function() {
    // console.log("router : " + this.params._id);
    var who = this.params._id;
    return Data.findOne({"_id":who});
  }
});
