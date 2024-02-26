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

  public categories$!: Observable<CategoryData[]>;
  public formAction = 'Add';
  public categoryField = '';
  public categoryId = '';

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories$ = this.categoryService.loadData();
  }

  onSubmit(form: NgForm) {
    this.formAction === 'Add' ? this.saveNewCategory(form) : this.editCategoryData(form)
  }

  saveNewCategory(form: NgForm) {
    this.categoryService.saveNewCategory(form)
  }

  editCategoryData(form: NgForm) {
    this.categoryService.editData(this.categoryId, this.categoryField)
      .then(() => {
        form.reset();
        this.formAction = 'Add';
      })
  }

  displayCategoryInForm(category: string, id: string) {
    this.categoryField = category;
    this.formAction = 'Edit';
    this.categoryId = id;
  }

  deletedoc(id: string, category: string) {
    this.categoryService.deleteDocument(id, category);
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
