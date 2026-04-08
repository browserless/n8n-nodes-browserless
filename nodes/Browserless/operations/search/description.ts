import type { INodeProperties } from 'n8n-workflow';

export const searchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. web scraping best practices',
		description: 'The search query to execute',
		displayOptions: {
			show: {
				operation: ['search'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				placeholder: 'e.g. us, gb, de',
				description: 'Country code to localize search results',
			},
			{
				displayName: 'Language',
				name: 'lang',
				type: 'string',
				default: 'en',
				description: 'Language for search results',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Sources',
				name: 'sources',
				type: 'multiOptions',
				options: [
					{ name: 'Images', value: 'images' },
					{ name: 'News', value: 'news' },
					{ name: 'Web', value: 'web' },
				],
				default: ['web'],
				description: 'Types of search results to include',
			},
			{
				displayName: 'Time Filter',
				name: 'tbs',
				type: 'options',
				options: [
					{ name: 'Any Time', value: '' },
					{ name: 'Past Day', value: 'day' },
					{ name: 'Past Month', value: 'month' },
					{ name: 'Past Week', value: 'week' },
					{ name: 'Past Year', value: 'year' },
				],
				default: '',
				description: 'Filter results by time period',
			},
		],
	},
];
