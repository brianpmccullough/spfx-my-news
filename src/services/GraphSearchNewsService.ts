import { BaseWebPartContext } from "@microsoft/sp-webpart-base";
import { INewsItem } from "../models/INewsItem";
import { INewsService } from "./INewsService";

export default class GraphSearchNewsService implements INewsService {
  private context: BaseWebPartContext;

  constructor(context: BaseWebPartContext) {
    this.context = context;
  }

  public async getNewsFromSites(siteUrls: string[]): Promise<INewsItem[]> {
    const queryText = siteUrls.length
      ? siteUrls.map(url => `Path:"${url}"`).join(" OR ")
      : '*';
    return this._searchNews(queryText);
  }

  public async getNews(newsUrls: string[]): Promise<INewsItem[]> {
    const queryText = newsUrls.length
      ? newsUrls.map(url => `WebUrl:"${url}"`).join(" OR ")
      : '*';
    return this._searchNews(queryText);
  }

  private async _searchNews(queryText: string): Promise<INewsItem[]> {
    const queryString = `(PromotedState=2) AND (${queryText})`;

    const requestBody = {
        requests: [
        {
            entityTypes: ["listItem"],
            query: { queryString },
            from: 0,
            size: 10,
            fields: [
            "id",
            "title",
            "description",
            "webUrl",
            "createdBy",
            "createdDateTime",
            "lastModifiedDateTime",
            "firstPublishedDate",
            "previewImageUrl",
            "fileType"
            ],
            sortProperties: [
            {
                name: "firstPublishedDate",
                isDescending: true
            }
            ]
        }
        ]
    };

    const client = await this.context.msGraphClientFactory.getClient('3');
    const response = await client.api('/search/query')
      .version('v1.0')
      .post(requestBody);

    const items: INewsItem[] = [];
    const results = response.value?.[0]?.hitsContainers?.[0]?.hits || [];
    for (const hit of results) {
      const resource = hit.resource || {};
      items.push({
        id: resource.id || hit.id,
        title: resource.name || resource.title || '',
        summary: resource.description || '',
        imageUrl: resource.webUrl || '',
        url: resource.webUrl || '',
        published: new Date(resource.firstPublishedDate),
        likes: 0,
        views: 0
      });
    }
    return items;
  }
}