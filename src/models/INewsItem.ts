export interface INewsItem {
    id: number;
    title: string;
    url: string;
    summary: string;
    likes: number;
    views: number;
    imageUrl: string;
    published: Date;
}