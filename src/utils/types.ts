export interface ChartData {
  month: string;
  value: number;
  id: number;
}

export interface Text {
  text: string;
  value: string;
}

export interface Widgets {
  spent: Text & {
    chartData: { data: ChartData[] };
  };
  newClients: Text;
  earnings: Text;
  activity: Text;
}

export interface GeneralSectionType {
  widgets: Widgets;
}

export interface Metrics {
  title: string;
  number: string;
}

export interface StatisticsSectionType {
  chartData: {
    totalSpent: string;
    data: ChartData[];
  };
  profile: {
    name: string;
    location: string;
    metrics: Metrics[];
  };
}

export interface Items {
  title: string;
  subTitle: string;
  iconType?: string;
}

export interface DetailsSectionChartData {
  amount: string;
  sentiment: string;
  savings: string;
  data: ChartData[];
}

export interface DetailsSectionType {
  chartData: DetailsSectionChartData;
  transactionsItems: Items[];
  calendar: {
    date: string;
    calendarItems: Items[];
  };
}

export interface DataView {
  dataView: {
    user: { name: string };
    general: GeneralSectionType;
    statistics: StatisticsSectionType;
    details: DetailsSectionType;
  };
}
