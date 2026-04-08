import type { INodeProperties } from 'n8n-workflow';

export const unblockFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['unblock'],
			},
		},
		options: [
			{
				displayName: 'Browser WS Endpoint',
				name: 'browserWSEndpoint',
				type: 'boolean',
				default: false,
				description: 'Whether to return a WebSocket endpoint for connecting to the browser session',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'boolean',
				default: true,
				description: 'Whether to return the page HTML content',
			},
			{
				displayName: 'Cookies',
				name: 'cookies',
				type: 'boolean',
				default: false,
				description: 'Whether to return cookies from the page',
			},
			{
				displayName: 'Screenshot',
				name: 'screenshot',
				type: 'boolean',
				default: false,
				description: 'Whether to return a screenshot of the page',
			},
			{
				displayName: 'TTL',
				name: 'ttl',
				type: 'number',
				default: 0,
				description: 'Time-to-live for the browser session in milliseconds',
			},
		],
	},
];
