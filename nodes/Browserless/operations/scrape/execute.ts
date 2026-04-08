import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { browserlessApiRequest } from '../../shared/transport';
import { buildRequestOptions } from '../../shared/descriptions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index) as string;
	const elementsData = this.getNodeParameter('elements', index) as {
		elementValues: Array<{ selector: string }>;
	};
	const options = this.getNodeParameter('options', index, {}) as Record<string, unknown>;

	const elements = (elementsData.elementValues || []).map((e) => ({
		selector: e.selector,
	}));

	const body: Record<string, unknown> = {
		url,
		elements,
		...buildRequestOptions(options),
	};

	const response = await browserlessApiRequest.call(this, 'POST', '/chromium/scrape', body);

	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
