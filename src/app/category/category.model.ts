import { Course } from "./course.model";

export class Category{
  constructor(
    public id ?: String,
    public title ?: String,
    public description ?: String,
    public imageUrl ?: String,
    public courses ?: Course[]

  ){}
}
