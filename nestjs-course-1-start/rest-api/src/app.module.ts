import { Module } from "@nestjs/common";
import { CourseModule } from "./courses/courses.module";

@Module({
  imports: [
    CourseModule
  ]

})
export class AppModule{

}
