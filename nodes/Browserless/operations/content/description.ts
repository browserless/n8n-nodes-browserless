import type { INodeProperties } from 'n8n-workflow';

export const contentFields: INodeProperties[] = [
	{
		displayName: 'HTML',
		name: 'html',
		type: 'string',
		typeOptions: { rows: 5 },
		default: '',
		description: 'Raw HTML to render instead of navigating to a URL',
		displayOptions: {
			show: {
				operation: ['getContent'],
			},
		},
	},
];
