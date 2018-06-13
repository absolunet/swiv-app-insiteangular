# Swiv App modules - Insite w/ AngularJS
Here are all the modules for [Swiv](https://github.com/absolunet/swiv) in <a href="https://www.insitesoft.com/" target="_blank">Insite software</a>'s implementation of AngularJS in the Responsive theme ([see the full wiki here](wiki)).


## Getting started

To use this module, you just have to import the main file as a dependency and add it in your main AngularJS module, normally called `"insite"` (~/InsiteCommerce.Web/Themes/Theme.YourTheme/Scripts/insite.module.ts).

The module defined in this package is `"insite.swiv"`, designed as:

- `"insite.swiv"`
    - `"insite.swiv.gee"`


```javascript
// ...
module insite {
    // ...
    angular
        .module("insite", [
            "insite-common",
            "insite-cmsShell",
            "ngSanitize",
            "ipCookie",
            "angular.filter",
            "ngMap",
            "ab-base64",
            "kendo.directives",
            "ui.router",

            // We add the main module here
            "insite.swiv"
        ])
        .run(["appRunService", ($appRunService: IAppRunService) => { $appRunService.run(); }])
        .service("appRunService", AppRunService);
}

```

It is a plug-and-play plugin, so nothing else to do to keep the vanilla flavour!

However, there are some services and directives that you can use in addition to this custom behaviour ([see the wiki](wiki)).
