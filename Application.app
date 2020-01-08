{
	"_Name": "DemoApp",
	"Version": "/DemoApp/Globals/AppDefinition_Version.global",
	"MainPage": "/DemoApp/Pages/Main.page",
	"OnLaunch": [
		"/DemoApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/DemoApp/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/DemoApp/Actions/Service/InitializeOffline.action",
	"Styles": "/DemoApp/Styles/Styles.less",
	"Localization": "/DemoApp/i18n/i18n.properties"
}