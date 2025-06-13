import * as React from 'react';
import styles from './News.module.scss';
import type { INewsProps } from './INewsProps';

export default class News extends React.Component<INewsProps> {
  public render(): React.ReactElement<INewsProps> {
    const {
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.news} ${hasTeamsContext ? styles.teams : ''}`}>
        TODO:
      </section>
    );
  }
}
