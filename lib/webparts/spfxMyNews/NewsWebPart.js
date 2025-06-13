var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxMyNewsWebPartStrings';
import News from './components/News';
var NewsWebPart = /** @class */ (function (_super) {
    __extends(NewsWebPart, _super);
    function NewsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewsWebPart.prototype.render = function () {
        var element = React.createElement(News, {
            hasTeamsContext: !!this.context.sdks.microsoftTeams
        });
        ReactDom.render(element, this.domElement);
    };
    NewsWebPart.prototype.onInit = function () {
        return Promise.resolve();
    };
    NewsWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._currentTheme = currentTheme;
        console.log(this._currentTheme);
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    NewsWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(NewsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    NewsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPanePage1Name
                    },
                    groups: [
                        {
                            groupName: strings.PropertyPaneGlobalGroupName,
                            groupFields: []
                        }
                    ]
                }
            ]
        };
    };
    return NewsWebPart;
}(BaseClientSideWebPart));
export default NewsWebPart;
//# sourceMappingURL=NewsWebPart.js.map