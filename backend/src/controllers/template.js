const Template = require("../models/template");

exports.add = async (req, res) => {
  try {
    console.log("Request to add template...");
    const data = filterTemplate(req.body);
    const template = new Template(data);
    template.save().then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get template by Id...");
    const result = await Template.findById(req.params.id);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all templates...");
    const result = await Template.find();
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update template...");
    const data = filterTemplate(req.body);
    Template.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    );
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.remove = async (req, res) => {
  try {
    console.log("Request to delete template...");
    Template.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

function filterTemplate(input) {
  var template = {
    "code": input.code,
    "title": input.title,
    "file": input.file,
  };
  return template;
}
