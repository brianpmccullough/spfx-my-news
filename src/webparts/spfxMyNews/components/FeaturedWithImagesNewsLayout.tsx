import * as React from 'react';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { INewsItem } from '../../../models/INewsItem';
import styles from './News.module.scss';


// Accept newsItems as a prop
interface FeaturedWithImagesNewsLayoutProps {
  newsItems: INewsItem[];
}

const FeaturedWithImagesNewsLayout: React.FC<FeaturedWithImagesNewsLayoutProps> = ({ newsItems }) => {
  return (
    // Example usage in News.tsx or a layout component
<div className={styles.grid}>
  {newsItems[0] && (
    <div className={styles.featured} key={newsItems[0].id}>
      <Image
        src={newsItems[0].imageUrl}
        alt={newsItems[0].title}
        imageFit={ImageFit.cover}
        width="100%"
        height="100%"
      />
      <div className={styles.caption}>
        <strong>{newsItems[0].title}</strong>
      </div>
    </div>
  )}
  {newsItems.slice(1).map(item => (
    <div className={styles.square} key={item.id}>
      <Image
        src={item.imageUrl}
        alt={item.title}
        imageFit={ImageFit.cover}
        width="100%"
        height="100%"
      />
      <div className={styles.caption}>
        <strong>{item.title}</strong>
      </div>
    </div>
  ))}
</div>
  );
};

export default FeaturedWithImagesNewsLayout;