import type { INodeProperties } from 'n8n-workflow';

export const exportFields: INodeProperties[] = [
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'export',
		description: 'The name for the exported file',
		displayOptions: {
			show: {
				operation: ['exportContent'],
			},
		},
	},
];
