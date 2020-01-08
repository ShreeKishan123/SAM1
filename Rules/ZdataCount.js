export default function WorkOrdersCount(sectionProxy) {
    return sectionProxy.count('/DemoApp/Services/MDPAppService.service','Customers', '').then((count) => {
        return count;
    });
}
