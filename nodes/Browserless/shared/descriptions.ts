import type { INodeProperties } from 'n8n-workflow';

/** Shared URL field used by most operations */
export function getUrlField(operations: string[]): INodeProperties {
	return {
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. https://example.com',
		description: 'The URL of the page to process',
		displayOptions: {
			show: {
				operation: operations,
			},
		},
	};
}

/** Shared wait/navigation options used by many operations */
export function getWaitOptions(operations: string[]): INodeProperties {
	return {
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				operation: operations,
			},
		},
		options: [
			{
				displayName: 'Best Attempt',
				name: 'bestAttempt',
				type: 'boolean',
				default: false,
				description: 'Whether to proceed even if timeouts or async operations fail',
			},
			{
				displayName: 'Block Ads',
				name: 'blockAds',
				type: 'boolean',
				default: false,
				description: 'Whether to block ads using uBlock Origin',
			},
			{
				displayName: 'Wait For Selector',
				name: 'waitForSelector',
				type: 'string',
				default: '',
				placeholder: 'e.g. h1',
				description: 'Wait for a CSS selector to appear on the page before continuing',
			},
			{
				displayName: 'Wait For Timeout',
				name: 'waitForTimeout',
				type: 'number',
				default: 0,
				description: 'Wait for a specified number of milliseconds before continuing',
			},
			{
				displayName: 'Wait Until',
				name: 'waitUntil',
				type: 'options',
				options: [
					{ name: 'DOM Content Loaded', value: 'domcontentloaded' },
					{ name: 'Load', value: 'load' },
					{ name: 'Network Idle (0 Connections)', value: 'networkidle0' },
					{ name: 'Network Idle (2 Connections)', value: 'networkidle2' },
				],
				default: 'load',
				description: 'When to consider navigation as finished',
			},
		],
	};
}

/** Build the gotoOptions and wait options from the shared options collection */
export function buildRequestOptions(options: Record<string, unknown>): Record<string, unknown> {
	const result: Record<string, unknown> = {};

	if (options.waitUntil) {
		result.gotoOptions = { waitUntil: options.waitUntil };
	}

	if (options.waitForSelector) {
		result.waitForSelector = { selector: options.waitForSelector };
	}

	if (options.waitForTimeout) {
		result.waitForTimeout = options.waitForTimeout;
	}

	if (options.bestAttempt) {
		result.bestAttempt = options.bestAttempt;
	}

	if (options.blockAds) {
		result.blockAds = options.blockAds;
	}

	return result;
}
