Meteor.subscribe("posts");
Meteor.subscribe("userData");

Template.body.helpers({
  posts: function () {
    return Posts.find({}, {sort: {createdAt: -1}});
  }
});

Template.body.events({
  "submit .new-post": function (event) {
    var text = event.target.text.value;
    Meteor.call("addPost", text);
    event.target.text.value = "";
    $('.modal').modal('hide');
    return false;
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.post.events({
  "click .delete": function () {
    Meteor.call("deletePost", this._id);
  },
  "click .update": function (event) {
    var text = event.target.text.value;
    Meteor.call("updatePost", this._id, text);
  }
});

Template.post.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});

UI.registerHelper("prettifyDate", function(timestamp) {
  return moment(timestamp).fromNow();
});
