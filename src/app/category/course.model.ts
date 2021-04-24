import { Chapter } from "./chapter.model";

export class Course{
  constructor(
    public id?: String,
    public title?: String,
    public description?: String,
    public imageUrl?: String,
    public chapters?: Chapter[]
  ){}
}
