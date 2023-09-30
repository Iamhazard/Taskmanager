const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`mongoDB connected:`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

//const connectDB = require("./config/connectDB");

//method to connect database
// const startserver = async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startserver();
