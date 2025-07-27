// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

//*--------------------------------------------finding files in a folder----------------------------------*
// const filePath2 = __dirname;
// const readFolder = async () => {
//   try {
//     const res = await fs.promises.readdir(filePath2);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();
//*--------------------------------------------finding files in a folder----------------------------------*

//*----------------------------------------------Write file-----------------------------------------------*
// const writeFilefunc = async () => {
//   try {
//    await fs.promises.writeFile(
//       filePath,
//       "This is the initial data.",
//       "utf-8"
//     );
//     console.log("the data has been written succesfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// writeFilefunc();

const writeFilefunc = async () => {
  try {
    await fs.writeFile(filePath, "This is the initial data.", "utf-8");
    console.log("the data has been written succesfully");
  } catch (error) {
    console.error(error);
  }
};
writeFilefunc();
//*----------------------------------------------Write file-----------------------------------------------*
//*----------------------------------------------Read file-----------------------------------------------*
// const readFilefunc = async () => {
//   try {
//     const data = await fs.promises.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFilefunc();
//*----------------------------------------------Read file-----------------------------------------------*
//*---------------------------------------------append file-----------------------------------------------*
// const appendFilefunc = async () => {
//   try {
//      await fs.promises.appendFile(
//       filePath,
//       "\nThis is the updated data",
//       "utf-8"
//     );
//     console.log("file updated successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// appendFilefunc();
//*---------------------------------------------append file-----------------------------------------------*
//*---------------------------------------------Delete file-----------------------------------------------*
// const deleteFilefunc = async () => {
//   try {
//     await fs.promises.unlink(filePath);
//     console.log("file deleted successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// deleteFilefunc();
//*---------------------------------------------Delete file-----------------------------------------------*
//*---------------------------------------------Rename file-----------------------------------------------*
// const newfileName = "updatedAsyncFile.txt";
// const newFilePath = path.join(__dirname, newfileName);
// const renameFilefunc = async () => {
//   try {
//     await fs.promises.rename(filePath, newFilePath);
//     console.log(file name has been changed successfully);
//   } catch (error) {
//     console.error(error);
//   }
// };
// renameFilefunc();
//*---------------------------------------------Rename file-----------------------------------------------*
