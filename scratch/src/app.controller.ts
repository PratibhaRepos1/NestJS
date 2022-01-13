import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/home')
    getRootRoute(): string {
        return 'hi there!';
    }
    @Get('/bye')
    getByeThere():string {
        return 'Bye There!';
    }

}