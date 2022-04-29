import { Controller, Get } from "@nestjs/common";
import { GeneratorService } from "./generator.service";

@Controller('generator')
export class GeneratorController {

	constructor(
		private readonly generatorService: GeneratorService
	) {}

	@Get('/')
	generatePdf() {
		return this.generatorService.generatorPdf();
	}
}