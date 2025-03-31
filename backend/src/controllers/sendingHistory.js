const SendingHistory = require("../models/sendingHistory");

exports.add = async (req, res) => {
  try {
    console.log("Request to add sendingHistory...");
    const data = filterSendingHistory(req.body);
    const sendingHistory = new SendingHistory(data);
    sendingHistory.save().then(
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
    console.log("Request to get sendingHistory by Id...");
    const result = await SendingHistory.findById(req.params.id);
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByReport = async (req, res) => {
  try {
    console.log("Request to get sendingHistory by reportId...");
    const result = await SendingHistory.find({ reportId: req.params.reportId });
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all sendingHistorys...");
    const result = await SendingHistory.find();
    return res.status(200).json({datas: result});
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update sendingHistory...");
    const data = filterSendingHistory(req.body);
    SendingHistory.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete sendingHistory...");
    SendingHistory.deleteOne({ _id: req.params.id }).then(
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

function filterSendingHistory(input) {
  var sendingHistory = {
    "sendDate": input.sendDate,
    "sender": input.sender,
    "receiver": input.receiver,
    "sendMode": input.sendMode,
    "subject": input.subject,
    "content": input.content,
  };
  return sendingHistory;
}
