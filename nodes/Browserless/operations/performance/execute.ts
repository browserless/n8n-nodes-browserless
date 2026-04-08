import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { browserlessApiRequest } from '../../shared/transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index) as string;
	const categories = this.getNodeParameter('categories', index, ['performance']) as string[];

	const body: Record<string, unknown> = {
		url,
		config: {
			extends: 'lighthouse:default',
			settings: {
				onlyCategories: categories,
			},
		},
	};

	const response = (await browserlessApiRequest.call(
		this,
		'POST',
		'/chromium/performance',
		body,
	)) as IDataObject;

	return [{ json: response, pairedItem: { item: index } }];
}
