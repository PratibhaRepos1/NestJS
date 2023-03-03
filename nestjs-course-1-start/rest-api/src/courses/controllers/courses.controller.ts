import { Controller, Get } from "@nestjs/common";

@Controller()
 export class CourseController {

  @Get('/api/hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello World';

  }

}
