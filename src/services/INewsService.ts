import { INewsItem } from "../models/INewsItem";

export interface INewsService {
    getNewsFromSites(siteUrls: string[]): Promise<INewsItem[]>;
    getNews(newsUrls: string[]): Promise<INewsItem[]>;
}