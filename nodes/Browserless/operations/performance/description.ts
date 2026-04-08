import type { INodeProperties } from 'n8n-workflow';

export const performanceFields: INodeProperties[] = [
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'multiOptions',
		options: [
			{ name: 'Accessibility', value: 'accessibility' },
			{ name: 'Best Practices', value: 'best-practices' },
			{ name: 'Performance', value: 'performance' },
			{ name: 'PWA', value: 'pwa' },
			{ name: 'SEO', value: 'seo' },
		],
		default: ['performance'],
		description: 'Lighthouse audit categories to run',
		displayOptions: {
			show: {
				operation: ['performanceAudit'],
			},
		},
	},
];
