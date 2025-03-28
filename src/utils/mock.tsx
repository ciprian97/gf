import {
  ActivityIcon,
  DashboardIcon,
  LibraryIcon,
  PayoutsIcon,
  SchedulesIcon,
  SecurityIcon,
  SettingsIcon,
} from "../assets";

export const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    key: "activity",
    label: "Activity",
    icon: <ActivityIcon />,
  },
  {
    key: "library",
    label: "Library",
    icon: <LibraryIcon />,
  },
  {
    key: "security",
    label: "Security",
    icon: <SecurityIcon />,
  },
  {
    key: "schedules",
    label: "Schedules",
    icon: <SchedulesIcon />,
  },
  {
    key: "payouts",
    label: "Payouts",
    icon: <PayoutsIcon />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

export const dataView = {
  user: {
    name: "Andrei",
  },
  general: {
    widgets: {
      spent: {
        text: "Spent this month",
        value: "$682.5",
        chartData: {
          data: [
            { month: "Jan", value: 70, id: 0 },
            { month: "Feb", value: 50, id: 1 },
            { month: "Mar", value: 60, id: 2 },
            { month: "Apr", value: 90, id: 3 },
            { month: "May", value: 30, id: 4 },
          ],
        },
      },
      newClients: {
        text: "New clients",
        value: "321",
      },
      earnings: {
        text: "Earnings",
        value: "$350.40",
      },
      activity: {
        text: "Activity",
        value: "$540.50",
      },
    },
  },
  statistics: {
    chartData: {
      totalSpent: "$682.5",
      data: [
        { month: "Jan", value: 30, id: 0 },
        { month: "Feb", value: 80, id: 1 },
        { month: "Mar", value: 70, id: 2 },
        { month: "Apr", value: 75, id: 3 },
        { month: "May", value: 65, id: 4 },
        { month: "Jun", value: 90, id: 5 },
        { month: "Jul", value: 40, id: 6 },
        { month: "Aug", value: 80, id: 7 },
        { month: "Sep", value: 20, id: 8 },
        { month: "Oct", value: 60, id: 9 },
        { month: "Nov", value: 30, id: 10 },
        { month: "Dec", value: 50, id: 11 },
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
        { month: "Jan", value: 40, id: 0 },
        { month: "Feb", value: 30, id: 1 },
        { month: "Mar", value: 80, id: 2 },
        { month: "Apr", value: 40, id: 3 },
        { month: "May", value: 70, id: 4 },
        { month: "Jun", value: 90, id: 5 },
        { month: "Jul", value: 20, id: 6 },
      ],
    },

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
};
