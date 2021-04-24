import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Chapter } from 'src/app/category/chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
  chapter: Chapter
  constructor(private route:ActivatedRoute, private chapterService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('categoryId');
      let idcours= paramMap.get('courseId');
      let idchapter = paramMap.get('chapterId')

      console.log(idcours);
      this.chapter=this.chapterService.getOneCategoriesService(id).courses.find(cours=>cours.id==idcours).chapters.find(chapters=>chapters.id==idchapter)
    })
    console.log(this.chapter)
  }

}
