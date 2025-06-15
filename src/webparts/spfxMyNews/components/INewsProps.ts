import { INewsService } from "../../../services/INewsService";

export interface INewsProps {
  newsService: INewsService;
  hasTeamsContext: boolean;
}
