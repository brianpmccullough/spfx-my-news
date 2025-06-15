import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme, ISemanticColors } from '@microsoft/sp-component-base';

import * as strings from 'SpfxMyNewsWebPartStrings';
import News from './components/News';
import { INewsProps } from './components/INewsProps';
import NewsService from '../../services/NewsService';
import { INewsService } from '../../services/INewsService';

export interface ISpfxMyNewsWebPartProps {
  description: string;
}

export default class SpfxMyNewsWebPart extends BaseClientSideWebPart<ISpfxMyNewsWebPartProps> {

  private _newsService: INewsService;
  private _currentTheme: IReadonlyTheme | undefined;

  public render(): void {
    const element: React.ReactElement<INewsProps> = React.createElement(
      News,
      {
        newsService: this._newsService,
        hasTeamsContext: !!this.context.sdks.microsoftTeams
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this._newsService = new NewsService(this.context);
    return Promise.resolve();
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._currentTheme = currentTheme;
    this.setCSSVariables(this._currentTheme)
  }

  private setCSSVariables(theme: IReadonlyTheme): void {
    const semanticColors = theme.semanticColors || {};
    const keys = Object.keys(semanticColors);
    keys.forEach((key: keyof ISemanticColors) => {
      const value = semanticColors[key];
      this.domElement.style.setProperty(`--${key}`, value as string);
    });
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
