import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BrowserlessApi implements ICredentialType {
	name = 'browserlessApi';

	displayName = 'Browserless API';

	documentationUrl = 'https://docs.browserless.io';

	icon = {
		light: 'file:browserless.svg',
		dark: 'file:browserless.svg',
	} as const;

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'url',
			type: 'string',
			default: 'https://production-sfo.browserless.io',
			placeholder: 'e.g. https://production-sfo.browserless.io',
			description: 'The base URL of your Browserless instance',
		},
		{
			displayName: 'API Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your Browserless API token',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				token: '={{$credentials.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/chromium/content',
			method: 'POST',
			body: { url: 'https://example.com' },
		},
	};
}
