import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { browserlessApiRequest } from '../../shared/transport';
import { buildRequestOptions } from '../../shared/descriptions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as Record<
		string,
		unknown
	>;
	const options = this.getNodeParameter('options', index, {}) as Record<string, unknown>;

	const body: Record<string, unknown> = {
		url,
		...additionalFields,
		...buildRequestOptions(options),
	};

	const response = (await browserlessApiRequest.call(
		this,
		'POST',
		'/chromium/unblock',
		body,
	)) as IDataObject;

	return [{ json: response, pairedItem: { item: index } }];
}
