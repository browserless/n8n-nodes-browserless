import type { INodeProperties } from 'n8n-workflow';

export const smartScrapeFields: INodeProperties[] = [
	{
		displayName: 'Formats',
		name: 'formats',
		type: 'multiOptions',
		options: [
			{ name: 'HTML', value: 'html' },
			{ name: 'Links', value: 'links' },
			{ name: 'Markdown', value: 'markdown' },
			{ name: 'PDF', value: 'pdf' },
			{ name: 'Screenshot', value: 'screenshot' },
		],
		default: ['markdown'],
		description: 'The output formats to return',
		displayOptions: {
			show: {
				operation: ['smartScrape'],
			},
		},
	},
];
