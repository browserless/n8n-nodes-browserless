import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { browserlessApiRequest, type BinaryResponse } from '../../shared/transport';
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

	const pdfOptions: Record<string, unknown> = {};

	if (additionalFields.format) pdfOptions.format = additionalFields.format;
	if (additionalFields.landscape) pdfOptions.landscape = additionalFields.landscape;
	if (additionalFields.printBackground) pdfOptions.printBackground = additionalFields.printBackground;
	if (additionalFields.displayHeaderFooter)
		pdfOptions.displayHeaderFooter = additionalFields.displayHeaderFooter;
	if (additionalFields.headerTemplate) pdfOptions.headerTemplate = additionalFields.headerTemplate;
	if (additionalFields.footerTemplate) pdfOptions.footerTemplate = additionalFields.footerTemplate;
	if (additionalFields.scale !== undefined) pdfOptions.scale = additionalFields.scale;

	const body: Record<string, unknown> = {
		url,
		options: pdfOptions,
		...buildRequestOptions(options),
	};

	const response = (await browserlessApiRequest.call(this, 'POST', '/chromium/pdf', body, {
		encoding: 'arraybuffer',
	})) as BinaryResponse;

	const binaryData = await this.helpers.prepareBinaryData(
		Buffer.from(response.body),
		'page.pdf',
		'application/pdf',
	);

	return [
		{
			json: { success: true },
			binary: { data: binaryData },
			pairedItem: { item: index },
		},
	];
}
