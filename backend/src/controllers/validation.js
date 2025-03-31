const Validation = require("../models/validation");

exports.add = async (req, res) => {
  try {
    console.log("Request to add validation...");
    const data = filterValidation(req.body);
    const validation = new Validation(data);
    validation.save().then(
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
    console.log("Request to get validation by Id...");
    const result = await Validation.findById(req.params.id);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByReport = async (req, res) => {
  try {
    console.log("Request to get validation by report Id...");
    const result = await Validation.findById({ reportId: req.params.reportId });
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByUser = async (req, res) => {
  try {
    console.log("Request to get validation by user Id...");
    const result = await Validation.findById({ userId: req.params.userId });
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all validations...");
    const result = await Validation.find();
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update validation...");
    const data = filterValidation(req.body);
    Validation.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete validation...");
    Validation.deleteOne({ _id: req.params.id }).then(
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

function filterValidation(input) {
  var validation = {
    "validationDate": input.validationDate,
    "note": input.note,
    "isValidated": input.isValidated,
  };
  return validation;
}
