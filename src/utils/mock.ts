import { Content } from "./types";

export const dataView = {
  user: {
    name: "Andrei",
  },
  details: {
    microchart: {
      amount: "$682.5",
      sentiment: "POSITIVE",
      savings: "+2.45%",
    },
    transactions: {
      transactionsItems: [
        {
          title: "Public Transport",
          subTitle: "22 September 2020",
          iconType: "transport",
        },
        {
          title: "Grocery Store",
          subTitle: "18 September 2020",
          iconType: "store",
        },
        {
          title: "Public Transport",
          subTitle: "22 September 2020",
          iconType: "subscriptions",
        },
      ],
    },
    calendar: {
      date: "27 May",
      calendarItems: [
        {
          title: "Meet w/ Simmmple",
          subTitle: "01:00 PM - 02:00 PM",
        },
        {
          title: "Fitness Training",
          subTitle: "02:00 PM - 03:00 PM",
        },
        {
          title: "Reading time",
          subTitle: "03:00 PM - 04:00 PM",
        },
      ],
    },
  },

  profile: {
    name: "Charles Robbie",
    location: "New York, USA",
    metrics: [
      {
        title: "Projects",
        number: "28",
      },
      {
        title: "Followers",
        number: "643",
      },
      {
        title: "Following",
        number: "76",
      },
    ],
  },
} as Content;
