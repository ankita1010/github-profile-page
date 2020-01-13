export * from "./actionTypes";
export * from "./apiRoutes";

export const bottomRepoDetailsConfig = [
	{
		key: 'language',
		icon: "fa fa-circle"
	},
	{
		key: 'stargazers_count',
		icon: "fa fa-star"
	},
	{
		key: 'updated_at',
		icon: null,
		formatter: 'getRelativeDate'
	},
];
