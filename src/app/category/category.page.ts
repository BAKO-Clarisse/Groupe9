import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: Category[] ;

  constructor(private categorie: CategoryService) { }

  ngOnInit() {
     this.categories=this.categorie.getCategoriesService();
  }

}
