export default function WorkOrderFavoritesFilter(context) {
    return { name: 'Customers', values: [{ReturnValue: 'FirstName', DisplayValue: context.localizeText('FirstName')}]};
}