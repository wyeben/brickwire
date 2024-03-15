const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
    location: {
        type: String,
    },
    address: {
        type: String,
    },
    apartmentName: {
        type: String,
    },
    ongoing: {
        type: String,
    },
    unit: {
        type: String,
    },
    nofUnit: {
        type: String,
    },
    description1: {
        type: String,
    },
    description2: {
        type: String,
    },
    description3: {
        type: String,
    },
    description4: {
        type: String,
    },
    description5: {
        type: String,
    },
    deliveryDate: {
        type: String,
    },
    residentialFlatType: {
        type: String,
    },
    shortletFlatType: {
        type: String,
    },
    averageAnnualAppreciation: {
        type: String,
    },
    annualNetYieldResidential: {
        type: String,
    },
    annualNetYieldShortlet: {
        type: String,
    },
    roi: {
        type: String,
    },
    residentialFlatPrice: {
        type: String,
    },
    shortletFlatPrice: {
        type: String,
    },
    paymentPlan: {
        type: String,
    },
    nofSlots: {
        type: String,
    },
    nofBoughtSlots: {
        type: String,
    },
    slotPrice: {
        type: String,
    },
    slotCellPrice: {
        type: String,
    },
    investmentWindow: {
        type: String,
    },
    img: {
        type: String,
    },
    imageB: {
        type: String,
    },
    imageC: {
        type: String,
    },
    imageD: {
        type: String,
    },
    imageE: {
        type: String,
    },
}, { timestamps: true })

export default mongoose?.models?.Property || mongoose.model("Property", PropertySchema)
