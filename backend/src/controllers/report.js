const Report = require("../models/report");

exports.add = async (req, res) => {
  try {
    console.log("Request to add report...");
    const data = filterReport(req.body);
    const report = new Report(data);
    report.save().then(
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
    console.log("Request to get report by Id...");
    const result = await Report.findById(req.params.id);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByUser = async (req, res) => {
  try {
    console.log("Request to get report by userId...");
    const result = await Report.find({ userId: req.params.userId });
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all reports...");
    const result = await Report.find();
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update report...");
    const data = filterReport(req.body);
    Report.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete report...");
    Report.deleteOne({ _id: req.params.id }).then(
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

function filterReport(input) {
  var report = {
    "content": input.content,
    "title": input.title,
    "file": input.file,
    "ticketId": input.ticketId,
  };
  return report;
}
