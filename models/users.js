const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: String,
    userID: String,
    email: String,
    address: String,
    lb: String,
    money: Number,
    weekly: Number,
    claim_t: String,
    claim_a: String,
    claim_s: String,
    claim_w: String,
    claim_ar: String,
    claim_p: String,
    claim_b: String,
    claim_tw: String,
    ign_pogo: String,
    fc_pogo: String,
    ign_arena: String,
    ign_mtgo: String,
})

module.exports = mongoose.model("Users", dataSchema);