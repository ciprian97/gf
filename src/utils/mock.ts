import { Content } from "./types";

export const dataView = {
  user: {
    name: "Andrei",
  },
  statistics: {
    chartData: {
      totalSpent: "$682.5",
      data: [
        { month: "Jan", value: 30, id: 0 },
        { month: "Feb", value: 40, id: 1 },
        { month: "Mar", value: 20, id: 2 },
        { month: "Apr", value: 50, id: 3 },
        { month: "May", value: 70, id: 4 },
        { month: "Jun", value: 60, id: 5 },
        { month: "Jul", value: 80, id: 6 },
        { month: "Aug", value: 40, id: 7 },
        { month: "Sep", value: 30, id: 8 },
        { month: "Oct", value: 90, id: 9 },
        { month: "Nov", value: 50, id: 10 },
        { month: "Dec", value: 20, id: 11 },
      ],
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
  },
  details: {
    chartData: {
      amount: "$682.5",
      sentiment: "POSITIVE",
      savings: "+2.45%",
      data: [
        { month: "Jan", value: 30, id: 0 },
        { month: "Feb", value: 40, id: 1 },
        { month: "Mar", value: 20, id: 2 },
        { month: "Apr", value: 50, id: 3 },
        { month: "May", value: 70, id: 4 },
        { month: "Jun", value: 60, id: 5 },
        { month: "Jul", value: 50, id: 6 },
      ],
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
} as Content;
