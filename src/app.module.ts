import { Module } from '@nestjs/common';
import { PDFModule } from "@t00nday/nestjs-pdf";

import { GeneratorModule } from "./generator/generator.module";

@Module({
  imports: [
    PDFModule.register({
      isGlobal: true,
      view: {
        root: 'templates',
        engine: 'handlebars',
        extension: 'hbs'
      }
    }),
    GeneratorModule
  ],
})
export class AppModule {}
