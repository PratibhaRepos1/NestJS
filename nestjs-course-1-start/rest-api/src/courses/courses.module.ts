import { Module } from "@nestjs/common";
import { CourseController } from "./controllers/courses.controller";


@Module({
  controllers: [
    CourseController
  ]

})
export class CourseModule {

}
