import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
  category: Category;
  constructor(private route:ActivatedRoute, private categoryService:CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('categoryId');
      this.category=this.categoryService.getOneCategoriesService(id);
    })
    console.log(this.category)
  }

}
