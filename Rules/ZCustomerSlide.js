export default function WorkOrdersHighPriorityListView(context) {
    
    /*
    let actionBinding = {
        isHighPriorityList: true,
    };
    */

    context.getPageProxy().setActionBinding(true);
    return context.executeAction('/DemoApp/Actions/ZCustomerSlideFullPage.action');
}