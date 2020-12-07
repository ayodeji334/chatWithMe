const express = require("express");
const router = express.Router();
const chatModel = require("../models/chat");
const { validateToken } = require("../utilis/validateToken");

router.get('/get-chats', validateToken, async (req, res) => {
    try {
        const chats = await chatModel.find();
        if (chats.length !== 0)
            res.status(200).json({
                data: chats,
                message: "Get chats successfully"
            });
        else
            res.status(200).json({
                message: "Chat collection is empty" 
            });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

router.post('/add-chat', validateToken, async (req, res) => {
    try {
        const new__chat = await chatModel.create({ ...req.body });
        res.status(201).json({
            data: new__chat,
            message: "chat created successfully",
        });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

router.patch('/update-chat/:id', validateToken, async (req, res) => {
    try {
        let _id = req.params;
        await chatModel.findByIdAndUpdate({ _id }, {...req.body}, (err, result) => {
            if (err) {
                res.status(401).json({
                    message: err
                });
            } else {
                res.status(401).json({
                    message: "updated succesffully",
                    data: result
                });
            }
        });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

router.delete('/delete-chat/:id', validateToken, async (req, res) => {
    try {
        let _id = req.params;
        await chatModel.findByIdAndDelete({ _id }, (err, result) => {
            if (err) {
                res.status(401).json({
                    message: err
                });
            } else {
                res.status(401).json({
                    message: "deleted succesffully",
                    data: result
                });
            }
        });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

module.exports = router;