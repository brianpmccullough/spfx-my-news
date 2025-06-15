import * as React from 'react';
import styles from './News.module.scss';
import type { INewsProps } from './INewsProps';
import { INewsItem } from '../../../models/INewsItem';
import FeaturedWithImagesNewsLayout from './FeaturedWithImagesNewsLayout';


interface INewsState {
  newsItems: INewsItem[];
  loading: boolean;
  error?: string;
}

export default class News extends React.Component<INewsProps, INewsState> {
  constructor(props: INewsProps) {
    super(props);
    this.state = {
      newsItems: [],
      loading: true,
      error: undefined,
    };
  }

  public componentDidMount(): void {
    // eslint-disable-next-line no-void
    void this._loadNews();
  }

  private async _loadNews(): Promise<void> {
    try {
      const newsItems = await this.props.newsService.getNewsFromSites([]);
      this.setState({ newsItems, loading: false });
    } catch (error) {
      this.setState({ error: (error as Error).message, loading: false });
    }
  }

  public render(): React.ReactElement<INewsProps> {
    const {
      hasTeamsContext,
    } = this.props;

    const { newsItems, loading, error } = this.state;

    return (
      <section className={`${styles.news} ${hasTeamsContext ? styles.teams : ''}`}>
        {loading && <div>Loading news...</div>}
        {error && <div className={styles.error}>Error: {error}</div>}
        {!loading && !error && (
          <FeaturedWithImagesNewsLayout newsItems={newsItems} />
        )}
        <div className={styles.error}>Error: See the semantic colors in action...</div>
      </section>
    );
  }
}
