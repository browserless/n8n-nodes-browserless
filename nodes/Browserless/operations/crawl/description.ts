import type { INodeProperties } from 'n8n-workflow';

export const crawlFields: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: ['crawl'],
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
				operation: ['crawl'],
			},
		},
		options: [
			{
				displayName: 'Allow External Links',
				name: 'allowExternalLinks',
				type: 'boolean',
				default: false,
				description: 'Whether to follow links to external domains',
			},
			{
				displayName: 'Allow Subdomains',
				name: 'allowSubdomains',
				type: 'boolean',
				default: false,
				description: 'Whether to follow links to subdomains',
			},
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 200,
				description: 'Delay in milliseconds between requests',
			},
			{
				displayName: 'Exclude Paths',
				name: 'excludePaths',
				type: 'string',
				default: '',
				placeholder: 'e.g. /admin/.*,/private/.*',
				description: 'Comma-separated regex patterns for paths to exclude',
			},
			{
				displayName: 'Include Paths',
				name: 'includePaths',
				type: 'string',
				default: '',
				placeholder: 'e.g. /blog/.*,/docs/.*',
				description: 'Comma-separated regex patterns for paths to include',
			},
			{
				displayName: 'Max Depth',
				name: 'maxDepth',
				type: 'number',
				default: 5,
				description: 'Maximum link depth to crawl',
			},
			{
				displayName: 'Scrape Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{ name: 'HTML', value: 'html' },
					{ name: 'Markdown', value: 'markdown' },
					{ name: 'Plain Text', value: 'rawText' },
				],
				default: ['markdown'],
				description: 'The output formats for crawled pages',
			},
		],
	},
];
