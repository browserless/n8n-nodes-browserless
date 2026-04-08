import type { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

interface BinaryResponse {
	body: Buffer;
	headers: Record<string, string>;
}

export async function browserlessApiRequest(
	this: IExecuteFunctions,
	method: 'GET' | 'POST' | 'DELETE',
	endpoint: string,
	body: object = {},
	options: {
		encoding?: 'arraybuffer';
	} = {},
) {
	const credentials = await this.getCredentials('browserlessApi');
	const baseUrl = (credentials.url as string).replace(/\/+$/, '');

	const requestOptions: IHttpRequestOptions = {
		method,
		url: `${baseUrl}${endpoint}`,
		body,
		json: !options.encoding,
	};

	if (options.encoding) {
		requestOptions.encoding = options.encoding;
		requestOptions.returnFullResponse = true;
		requestOptions.json = false;
	}

	return (await this.helpers.httpRequestWithAuthentication.call(
		this,
		'browserlessApi',
		requestOptions,
	)) as typeof options.encoding extends 'arraybuffer' ? BinaryResponse : object;
}

export type { BinaryResponse };
