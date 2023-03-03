import { Controller, Get } from "@nestjs/common";
import { findAllCourses } from "../../../db-data";
import { Course } from '../../../../shared/course';


@Controller()
 export class CourseController {

  // @Get('/api/hello-world')
  // async helloWorld(): Promise<string> {
  //   return 'Hello World';

  // }

  @Get('/api/courses')
  async findAllCourses(): Promise <Course[] | any> {

    return findAllCourses();

    //return 'test';


  }

}
