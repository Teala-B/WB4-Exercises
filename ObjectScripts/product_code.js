let productInfo = {
    supplierCode: "ttt:tyh-h"
}

function parsePartCode(code) {
    let partCode = ("ttt:tyh-h");
    const colon = code.indexOf(":");
    const dash = code.indexOf("-");

    partCode.supplierCode = code.substring(0, colon);
    partCode.productNumber = code.substring(colon + 1, dash);
    partCode.size =  code.substring(dash + 1);

    return partCode
   

}
console.log(partCode.size);