import type { INodeProperties } from 'n8n-workflow';

export const downloadFields: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		typeOptions: { rows: 10 },
		default: '',
		description: 'JavaScript/Puppeteer code that triggers a file download',
		displayOptions: {
			show: {
				operation: ['download'],
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'json',
		default: '{}',
		description: 'JSON context variables accessible in the code',
		displayOptions: {
			show: {
				operation: ['download'],
			},
		},
	},
];
