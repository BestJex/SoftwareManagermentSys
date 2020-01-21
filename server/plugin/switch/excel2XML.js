module.exports = (excelData) => {
    const fs = require('fs');
    const xml2js = require('xml2js');
    let xmlData = require('./XMLDateStructure')(); //xml文件的数据结构
    xmlData.SNetManSwitchConfig.SwitchList.Switch = xmlData.SNetManSwitchConfig.SwitchList.Switch.slice(1); //删除数据结构中第一个示例模板

    console.log(excelData)
    for (let i = 0; i < excelData.length; i++) {
        let xmlObj = require('./XMLDateStructure')().SNetManSwitchConfig.SwitchList.Switch[0]; //xml的数据结构，（obj是引用类型）
        let errMsg;

        if (excelData[i].Ip === undefined) {
            errMsg = `ip不能为空,为空Ip应该在第 ${i+2} 行,请仔细检查`;
            return errMsg
        } else {
            xmlObj.BaseInfo.Ip = excelData[i].Ip;
        }

        if (excelData[i].SwitchIpUpLayer === undefined) {
            delete xmlData.SNetManSwitchConfig.SwitchList.Switch[i].SwitchIpUpLayer;
        } else {
            xmlObj.BaseInfo.SwitchIpUpLayer = excelData[i].SwitchIpUpLayer;
        }

        if (excelData[i].ReadCommunity === undefined) {
            errMsg = `ReadCommunity不能为空,为空ReadCommunity应该在第 ${i+2} 行,请仔细检查`;
            return errMsg
        } else {
            xmlObj.BaseInfo.ReadCommunity = excelData[i].ReadCommunity;
        }

        if (excelData[i].WriteCommunity === undefined) {
            errMsg = `WriteCommunity不能为空,为空WriteCommunity应该在第 ${i+2} 行,请仔细检查`;
            return errMsg
        } else {
            xmlObj.BaseInfo.WriteCommunity = excelData[i].WriteCommunity;
        }

        if (excelData[i].vlanState === undefined) {
            delete xmlObj.Mib.vlanState;
        } else {
            xmlObj.Mib.vlanState.Addin = excelData[i].vlanState;
        }

        if (excelData[i].PrivateBridge === undefined) {
            delete xmlObj.Mib.PrivateBridge
        } else {
            xmlObj.Mib.PrivateBridge.Addin = excelData[i].PrivateBridge;
        }

        xmlData.SNetManSwitchConfig.SwitchList.Switch.push(xmlObj); //把交换机数据push到xml对象中
    }

    let builder = new xml2js.Builder();
    let xml = builder.buildObject(xmlData); //生成xml结构
    let xmlFilePath = './plugin/switch/temp/SwitchService.xml' //xml文件地址

    fs.writeFile(xmlFilePath, xml, (err) => {
        if (err) throw err;
        return xmlFilePath = `http://localhost:3322/api/download/switch/temp/SwitchService.xml`
    })
}