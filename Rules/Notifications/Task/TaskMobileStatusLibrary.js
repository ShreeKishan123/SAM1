import libMobile from '../../MobileStatus/MobileStatusLibrary';
import Logger from '../../Log/Logger';
import libCommon from '../../Common/Library/CommonLibrary';
import HideActionItems from '../../Common/HideActionItems';


const notificationDetailsPage = 'NotificationDetailsPage';
const notificationTaskDetailsPage = 'NotificationTaskDetailsPage';

export default class {

    static startTask(context) {
        var pageContext = libMobile.getPageContext(context, notificationTaskDetailsPage);
        return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/Task/TaskStartUpdate.action').then(function() {
            pageContext.setToolbarItemCaption('StartTaskTbI', context.localizeText('end_task'));
            context.getPageProxy().getClientData().ChangeStatus = libCommon.getAppParam(context, 'MOBILESTATUS', context.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/ParameterNames/StartParameterName.global').getValue());
            return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/MobileStatus/TaskMobileStatusSuccessMessage.action');
        }).catch(err => {
            context.dismissActivityIndicator();
            /**Implementing our Logger class*/
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryNotifications.global').getValue(), err);
            return '';
        });
    }

    static completeTask(context) {
        var pageContext = libMobile.getPageContext(context, notificationTaskDetailsPage);
        return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/Task/TaskCompleteUpdate.action').then(function() {
            pageContext.setToolbarItemCaption('StartTaskTbI', context.localizeText('task_success'));
            context.getPageProxy().getClientData().ChangeStatus = libCommon.getAppParam(context, 'MOBILESTATUS', context.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/ParameterNames/CompleteParameterName.global').getValue());
            HideActionItems(context.getPageProxy(), 2);
            return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/MobileStatus/TaskMobileStatusSuccessMessage.action');
        }).catch(err => {
            context.dismissActivityIndicator();

            /**Implementing our Logger class*/
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryNotifications.global').getValue(), err);
            return '';
        });
    }

    static successTask(context) {
        var pageContext = libMobile.getPageContext(context, notificationTaskDetailsPage);
        return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/Task/TaskSuccessUpdate.action').then(function() {
            pageContext.setToolbarItemCaption('StartTaskTbI', pageContext.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/SuccessText.global').getValue());
            context.getPageProxy().getClientData().ChangeStatus = libCommon.getAppParam(context, 'MOBILESTATUS', context.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/ParameterNames/SuccessParameterName.global').getValue());
            libCommon.enableToolBar(context, notificationTaskDetailsPage, 'StartTaskTbI', false);
            return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/MobileStatus/TaskMobileStatusSuccessMessage.action');
        }).catch(err => {
            context.dismissActivityIndicator();
            /**Implementing our Logger class*/
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryNotifications.global').getValue(), err);
            return '';
        });
    }

    static completeTaskWithoutSuccessFlag(context) {
        var pageContext = libMobile.getPageContext(context, notificationTaskDetailsPage);
        return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/Task/TaskCompleteUpdate.action').then(function() {
            libCommon.enableToolBar(context, notificationTaskDetailsPage, 'StartTaskTbI', false);
            HideActionItems(context.getPageProxy(), 2);          
            return pageContext.executeAction('/SAPAssetManager/Actions/Notifications/MobileStatus/TaskMobileStatusSuccessMessage.action');
        }).catch(err => {
            context.dismissActivityIndicator();
            /**Implementing our Logger class*/
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryNotifications.global').getValue(), err);
            return '';
        });
    }

    static getMobileStatus(context) {
        return new Promise((resolve, reject) => {
            try {
                libMobile.mobileStatus(context, context.binding).then(status => {
                    resolve(status);
                });
            } catch (error) {
                reject('');
            }
        });
    }

    static getHeaderMobileStatus(context) {
        var pageContext = libMobile.getPageContext(context, notificationDetailsPage);
        return this.getMobileStatus(pageContext);
    }
}
