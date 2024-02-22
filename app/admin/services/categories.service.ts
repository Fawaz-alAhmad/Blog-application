import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public firestore: Firestore = inject(Firestore);

  constructor(private toastr: ToastrService) { }

  public saveNewCategory(form: NgForm): void {

    let categoryData: Category = { category: form.value.category }
    const colRef = collection(this.firestore, 'categories');
    addDoc(colRef, categoryData)
      .then(() => {
        this.toastr.success(categoryData.category, 'category stored successfully')
        form.reset()
      })
      .catch(err => console.log(err))
  }

}
