export type TimeLineItem = {
		name: string;
		place: string;
		dates: string;
		inactiveDates?: string;
		description: string;
		tasks?: string[];
		isLastElement: boolean;
}