import type { INodeProperties } from 'n8n-workflow';

export const pdfFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['pdf'],
			},
		},
		options: [
			{
				displayName: 'Display Header Footer',
				name: 'displayHeaderFooter',
				type: 'boolean',
				default: false,
				description: 'Whether to display a header and footer',
			},
			{
				displayName: 'Footer Template',
				name: 'footerTemplate',
				type: 'string',
				default: '',
				description: 'HTML template for the print footer',
			},
			{
				displayName: 'Format',
				name: 'format',
				type: 'options',
				options: [
					{ name: 'A0', value: 'A0' },
					{ name: 'A1', value: 'A1' },
					{ name: 'A2', value: 'A2' },
					{ name: 'A3', value: 'A3' },
					{ name: 'A4', value: 'A4' },
					{ name: 'A5', value: 'A5' },
					{ name: 'A6', value: 'A6' },
					{ name: 'Ledger', value: 'Ledger' },
					{ name: 'Legal', value: 'Legal' },
					{ name: 'Letter', value: 'Letter' },
					{ name: 'Tabloid', value: 'Tabloid' },
				],
				default: 'Letter',
				description: 'Paper format for the PDF',
			},
			{
				displayName: 'Header Template',
				name: 'headerTemplate',
				type: 'string',
				default: '',
				description: 'HTML template for the print header',
			},
			{
				displayName: 'Landscape',
				name: 'landscape',
				type: 'boolean',
				default: false,
				description: 'Whether to use landscape orientation',
			},
			{
				displayName: 'Print Background',
				name: 'printBackground',
				type: 'boolean',
				default: false,
				description: 'Whether to print background graphics',
			},
			{
				displayName: 'Scale',
				name: 'scale',
				type: 'number',
				typeOptions: {
					minValue: 0.1,
					maxValue: 2,
				},
				default: 1,
				description: 'Scale of the webpage rendering (0.1 to 2)',
			},
		],
	},
];
