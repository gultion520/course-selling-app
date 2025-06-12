const { Schema } = equire("mongoose");

const userSchema = new Schema({
    email: { type: String, unique: true },
    
});

const adminSchema = new Schema({});

const courseSchema = new Schema({});

const purhcaseSchema = new Schema({

});

const userMode = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema); 
const purchaseModel = mongoose.model("purchase", purrhcaseSchema); 

module.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};