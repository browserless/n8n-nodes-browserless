import type { INodeProperties } from 'n8n-workflow';

export const functionFields: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		typeOptions: { rows: 10 },
		required: true,
		default: '',
		placeholder:
			'e.g. export default async function ({ page }) {\n  await page.goto("https://example.com");\n  return { title: await page.title() };\n}',
		description: 'JavaScript/Puppeteer code to execute in the browser context',
		displayOptions: {
			show: {
				operation: ['runFunction'],
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'json',
		default: '{}',
		description: 'JSON context variables accessible in the function',
		displayOptions: {
			show: {
				operation: ['runFunction'],
			},
		},
	},
];
