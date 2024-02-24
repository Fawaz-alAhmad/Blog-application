import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { DocumentData } from '@angular/fire/firestore';
import { CategoryData } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories$!: Observable<CategoryData[]>

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories()
    this.categories$.subscribe(data=>console.log(data))
  }

  onSubmit(form: NgForm) {
    this.categoryService.saveNewCategory(form)
  }

  loadCategories() {
    this.categories$ = this.categoryService.loadData()
  }
}

//* with sub categories
// let categoryData = {
//   category: form.value.category
// }
// let subCategoryData = {
//   category: 'test'
// }

// const categoryColRef = collection(this.firestore, 'categories');
// addDoc(categoryColRef, categoryData)
//   .then((docRef: DocumentReference) => {
//     form.reset();
//     let ref = doc(this.firestore, `categories/${docRef.id}`);
//     const subCategoryColRef = collection(ref, 'subCollection');
//     addDoc(subCategoryColRef, subCategoryData)
//       .then(res => console.log(res.id))
//       .catch(error => console.log(error))
//   })
//   .catch(error => console.log(error))
