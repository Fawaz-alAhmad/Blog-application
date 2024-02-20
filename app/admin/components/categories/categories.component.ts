import { Component, OnInit, inject } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, doc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public firestore: Firestore = inject(Firestore)

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    let categoryData = {
      category: form.value.category
    }
    let subCategoryData = {
      category: 'test'
    }

    const categoryColRef = collection(this.firestore, 'categories');
    addDoc(categoryColRef, categoryData)
      .then((docRef: DocumentReference) => {
        let ref = doc(this.firestore, `categories/${docRef.id}`);
        const subCategoryColRef = collection(ref, 'subCollection');
        addDoc(subCategoryColRef, subCategoryData)
          .then(res => console.log(res.id))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}
