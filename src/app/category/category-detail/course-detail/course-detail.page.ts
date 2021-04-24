import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category.service';
import { Course } from '../../course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  courses: Course
  constructor(private route:ActivatedRoute, private courseService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('categoryId');
      let idcours= paramMap.get('courseId');

      console.log(idcours);
      this.courses=this.courseService.getOneCategoriesService(id).courses.find(cours=>cours.id==idcours);
    })
    console.log(this.courses)
  }

}
