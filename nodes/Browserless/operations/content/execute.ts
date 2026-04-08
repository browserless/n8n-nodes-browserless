import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { browserlessApiRequest } from '../../shared/transport';
import { buildRequestOptions } from '../../shared/descriptions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index, '') as string;
	const html = this.getNodeParameter('html', index, '') as string;
	const options = this.getNodeParameter('options', index, {}) as Record<string, unknown>;

	const body: Record<string, unknown> = {
		...buildRequestOptions(options),
	};

	if (html) {
		body.html = html;
	} else {
		body.url = url;
	}

	const response = await browserlessApiRequest.call(this, 'POST', '/chromium/content', body);

	return [{ json: { content: response }, pairedItem: { item: index } }];
}
