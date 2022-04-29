import { Injectable } from "@nestjs/common";
import { PDFService } from "@t00nday/nestjs-pdf";

@Injectable()
export class GeneratorService {

	constructor(
		private readonly pdfService: PDFService
	) {}

	generatorPdf() {
		return this.pdfService.toFile(
			'document',
			'test.pdf',
			{
				locals: {
					document: 'MANUAL',
					site: 'www.company.com',
					email: 'company@mail.com'
				},
				type: 'pdf',
				format: 'A4',
				orientation: 'portrait',
				border:  {
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				header: {
					height: '1px'
				}
			}
		);
	}
}