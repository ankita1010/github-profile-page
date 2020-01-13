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
export const filterTypes = [
	{
		label: "All",
	},
	{
		label: "Public",
		key: 'private',
		value: false
	},
	{
		label: "Private",
		key: 'private',
		value: true
	},
	{
		label: "Forks",
		key: 'fork',
		value: true
	},
	{
		label: "Archived",
		key: 'archived',
		value: true
	},
	{
		label: "Mirrors",
		key: 'archived'
	}
]