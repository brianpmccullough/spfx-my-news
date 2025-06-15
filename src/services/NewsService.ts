import { WebPartContext } from "@microsoft/sp-webpart-base";
import { INewsItem } from "../models/INewsItem";
import { INewsService } from "./INewsService";

export default class NewsService implements INewsService {
    private readonly _tenantUrl: string;

    constructor(context: WebPartContext) {
        this._tenantUrl = context.pageContext.site.absoluteUrl.split('/sites/')[0];
    }

    getNewsFromSites(siteUrls: string[]): Promise<INewsItem[]> {
        return Promise.resolve(
            this._news.map(n => ({
              ...n,
              url: `${this._tenantUrl}/SitePages/${n.title}.aspx`
            }))
        );
    }

    getNews(newsUrls: string[]): Promise<INewsItem[]> {
        return Promise.resolve(
            this._news2.map(n => ({
              ...n,
              url: `${this._tenantUrl}/SitePages/${n.title}.aspx`
            }))
        );
    }

    private _news = [
  {
    "id": 1,
    "title": "Corporate Social Responsibility Initiative Kicks Off",
    "summary": "The HR portal will be down from 10 PM Friday to 6 AM Saturday for scheduled updates.",
    "views": 1458,
    "likes": 276,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/1/1280/720",
    "published": new Date("2025-06-09T00:00:00")
  },
  {
    "id": 2,
    "title": "Check Yo Head: Updates to Mental Health Resources",
    "summary": "Our wellness program now includes mental health resources, fitness reimbursements, and monthly webinars.",
    "views": 439,
    "likes": 294,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/2/1280/720",
    "published": new Date("2025-05-22T00:00:00")
  },
  {
    "id": 3,
    "title": "New Flexible Work Policy Announced for All Employees",
    "summary": "All employees must complete security awareness training by the end of this month.",
    "views": 1145,
    "likes": 258,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/3/1280/720",
    "published": new Date("2025-06-11T00:00:00")
  },
  {
    "id": 4,
    "title": "Upcoming Maintenance on the HR Portal This Weekend",
    "summary": "The HR portal will be down from 10 PM Friday to 6 AM Saturday for scheduled updates.",
    "views": 1068,
    "likes": 302,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/4/1280/720",
    "published": new Date("2025-06-11T00:00:00")
  },
  {
    "id": 5,
    "title": "Employee Spotlight: Jack Potts",
    "summary": "We’re hosting guest speakers and employee spotlights throughout Diversity Month.",
    "views": 1320,
    "likes": 256,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/5/1280/720",
    "published": new Date("2025-06-02T00:00:00")
  },
  {
    "id": 6,
    "title": "Quarterly Town Hall Scheduled for Next Thursday",
    "summary": "Our wellness program now includes mental health resources, fitness reimbursements, and monthly webinars.",
    "views": 1376,
    "likes": 18,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/6/1280/720",
    "published": new Date("2025-06-13T00:00:00")
  },
  {
    "id": 7,
    "title": "IT Department Rolls Out New Laptop Upgrade Schedule",
    "summary": "Learning Week offers over 40 workshops on leadership, tech skills, and personal development.",
    "views": 1176,
    "likes": 310,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/7/1280/720",
    "published": new Date("2025-06-09T00:00:00")
  },
  {
    "id": 8,
    "title": "Quarterly Town Hall Scheduled for Next Thursday",
    "summary": "Starting July 1st, employees can work remotely up to three days per week as part of our new flexible policy.",
    "views": 922,
    "likes": 362,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/8/1280/720",
    "published": new Date("2025-05-31T00:00:00")
  }
];

    private _news2 = [
  {
    "id": 9,
    "title": "Results of the Annual Employee Engagement Survey Released",
    "summary": "Survey results show improvements in communication and work-life balance, with 85% participation.",
    "views": 969,
    "likes": 62,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/9/1280/720",
    "published": new Date("2025-06-10T00:00:00")
  },
  {
    "id": 10,
    "title": "Corporate Social Responsibility Initiative Kicks Off",
    "summary": "Learning Week offers over 40 workshops on leadership, tech skills, and personal development.",
    "views": 1204,
    "likes": 199,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/10/1280/720",
    "published": new Date("2025-06-11T00:00:00")
  },
  {
    "id": 11,
    "title": "Celebrate Diversity Month with Events and Speakers",
    "summary": "The town hall will include Q&A with leadership and an overview of this quarter's financials.",
    "views": 314,
    "likes": 128,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/11/1280/720",
    "published": new Date("2025-06-07T00:00:00")
  },
  {
    "id": 12,
    "title": "Results of the Annual Employee Engagement Survey Released",
    "summary": "Join us in supporting local charities through our new social responsibility campaign.",
    "views": 216,
    "likes": 192,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/12/1280/720",
    "published": new Date("2025-06-04T00:00:00")
  },
  {
    "id": 13,
    "title": "Quarterly Town Hall Scheduled for Next Thursday",
    "summary": "Starting July 1st, employees can work remotely up to three days per week as part of our new flexible policy.",
    "views": 1104,
    "likes": 181,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/13/1280/720",
    "published": new Date("2025-06-12T00:00:00")
  },
  {
    "id": 14,
    "title": "Security Awareness Training Deadline Approaching Soon",
    "summary": "Survey results show improvements in communication and work-life balance, with 85% participation.",
    "views": 1488,
    "likes": 365,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/14/1280/720",
    "published": new Date("2025-05-22T00:00:00")
  },
  {
    "id": 15,
    "title": "Results of the Annual Employee Engagement Survey Released",
    "summary": "The HR portal will be down from 10 PM Friday to 6 AM Saturday for scheduled updates.",
    "views": 1286,
    "likes": 10,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/15/1280/720",
    "published": new Date("2025-06-14T00:00:00")
  },
  {
    "id": 16,
    "title": "Results of the Annual Employee Engagement Survey Released",
    "summary": "The HR portal will be down from 10 PM Friday to 6 AM Saturday for scheduled updates.",
    "views": 612,
    "likes": 41,
    "url": "",
    "imageUrl": "https://picsum.photos/seed/16/1280/720",
    "published": new Date("2025-06-03T00:00:00")
  }
];
 

    
}