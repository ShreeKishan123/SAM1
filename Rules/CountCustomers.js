export default function CustomersCount(sectionProxy) {
	
	
    return sectionProxy.count('/DemoApp/Services/MDPAppService.service', 'Customers', '').then((count) => {
        sectionProxy.getPageProxy().getClientData().EquipmentTotalCount = count;
        
        // If "Customers" Entity set is availale, then it return the total customers
        return count;
    });   
}