const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// const getAll = async (req, res, next) => {
const getAll = async (req, res) => {
    // #swagger.tags = ['Journal']

    const result = await mongodb.getDb().db().collection('journal').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};
// const getSingle = async (req, res, next) => {
const getSingle = async (req, res) => {
    // #swagger.tags = ['Journal']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('journal').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createEntry = async (req, res) => {
    // #swagger.tags = ['Journal']
    const journal = {
        entryName: req.body.entryName,
        date: req.body.date,
        body: req.body.body,
        tags: req.body.tags,
        backColor: req.body.backColor,
        font: req.body.font
    };
    const result = await mongodb.getDb().db().collection('journal').insertOne(journal);

    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(
            result.error || 'Some error occurred while creating the journal entry.'
        );
    }
};

const modifyEntry = async (req, res) => {
    // #swagger.tags = ['Journal']
    const userId = new ObjectId(req.params.id);
    const journal = {
        entryName: req.body.entryName,
        date: req.body.date,
        body: req.body.body,
        tags: req.body.tags,
        backColor: req.body.backColor,
        font: req.body.font
    };
    const result = await mongodb
        .getDb()
        .db()
        .collection('journal')
        .replaceOne({ _id: userId }, journal);

    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(
            result.error || 'Some error occurred while modifying the journal entry.'
        );
    }
};

const deleteEntry = async (req, res) => {
    // #swagger.tags = ['Journal']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('journal').remove({ _id: userId }, true);

    if (result.deletedCount > 0) {
        res.status(204).json(result);
    } else {
        res.status(500).json(
            result.error || 'Some error occurred while deleting the journal entry.'
        );
    }
};

module.exports = { getAll, getSingle, createEntry, modifyEntry, deleteEntry };
