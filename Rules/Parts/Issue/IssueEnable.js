import libCommon from '../../Common/Library/CommonLibrary';
export default function IssueEnable(context) {

    let binding = context.binding;
    let textItemCode = libCommon.getAppParam(context, 'PART', 'TextItemCategory');
    let stockItemCode = libCommon.getAppParam(context, 'PART', 'StockItemCategory');
    if (binding.hasOwnProperty('ItemCategory')) {
        if (binding.ItemCategory === textItemCode || binding.ItemCategory === stockItemCode) {
            return true;         
        } else {
            return false;
        }
    } else {
        return false;
    }
}
