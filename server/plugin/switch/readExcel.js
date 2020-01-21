// let t = Object.keys(data[0]).length //计算属性个数


// for (let i = 1; i < data.length; i++) {
//     switchIp.push(data[i].__EMPTY_2);
// }
// console.log(switchIp)


module.exports = (ExcelDir) => {
    const xlsx = require("xlsx");
    const workbook = xlsx.readFile(ExcelDir);

    let sheetNames = workbook.SheetNames; //获取表名
    let sheet = workbook.Sheets[sheetNames[0]]; //通过表明得到表对象
    let data = xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json
    return data;
}