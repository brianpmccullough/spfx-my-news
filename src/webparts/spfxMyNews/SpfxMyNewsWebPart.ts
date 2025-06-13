import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SpfxMyNewsWebPartStrings';
import News from './components/News';
import { INewsProps } from './components/INewsProps';

export interface ISpfxMyNewsWebPartProps {
  description: string;
}

export default class SpfxMyNewsWebPart extends BaseClientSideWebPart<ISpfxMyNewsWebPartProps> {

  private _currentTheme: IReadonlyTheme | undefined;

  public render(): void {
    const element: React.ReactElement<INewsProps> = React.createElement(
      News,
      {
        hasTeamsContext: !!this.context.sdks.microsoftTeams
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return Promise.resolve();
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._currentTheme = currentTheme;
    console.log(this._currentTheme);
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPanePage1Name
          },
          groups: [
            {
              groupName: strings.PropertyPaneGlobalGroupName,
              groupFields: [
              ]
            }
          ]
        }
      ]
    };
  }
}
