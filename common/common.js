Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 60,
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Date"
  },
  owner: {
    type: String,
    label: "Owner"
  },
  username: {
    type: String,
    label: "Username"
  },
  image: {
    type: String,
    label: "Image",
    optional: true
  },
  text: {
    type: String,
    label: "text",
    max: 10000
  }
}));

var Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/constellation/public/uploads"})]
});
