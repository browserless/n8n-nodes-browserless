import type { INodeProperties } from 'n8n-workflow';

export const scrapeFields: INodeProperties[] = [
	{
		displayName: 'Elements',
		name: 'elements',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		default: { elementValues: [{ selector: '' }] },
		placeholder: 'Add Element',
		description: 'CSS selectors to extract data from the page',
		displayOptions: {
			show: {
				operation: ['scrape'],
			},
		},
		options: [
			{
				displayName: 'Element',
				name: 'elementValues',
				values: [
					{
						displayName: 'Selector',
						name: 'selector',
						type: 'string',
						default: '',
						placeholder: 'e.g. h1, .title, #content',
						description: 'CSS selector to target elements on the page',
					},
				],
			},
		],
	},
];
