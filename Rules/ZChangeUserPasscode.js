export default function ChangeUserPasscode(controlProxy) {
    if (controlProxy.getPasscodeSource()) {
        return controlProxy.executeAction('/DemoApp/Actions/ZChangeUserPasscode.action');
    }
    
}
/*if (controlProxy.getPasscodeSource() === 0) {
        return controlProxy.executeAction('/DemoApp/Actions/ZDisplayPasscodeSource.action');
    }
    else {
        return controlProxy.executeAction('/DemoApp/Actions/ZChangeUserPasscode.action');
    }*/