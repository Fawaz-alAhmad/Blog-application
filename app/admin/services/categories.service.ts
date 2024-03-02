import { Injectable, inject } from '@angular/core';
import { DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Category, CategoryData } from '../models/category.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
        this.toastr.success(categoryData.category + 'stored successfully', 'Added ', {
          toastClass: 'yourclass ngx-toastr',
          positionClass: 'toast-top-center',
        })
        form.reset()
      })
      .catch(err => console.log(err))
  }

  public loadData(): Observable<CategoryData[]> {
    const colRef = collection(this.firestore, 'categories')
    return (collectionData(colRef, { idField: 'id' }) as Observable<CategoryData[]>)
      .pipe(
        map(categDocsStream => {
          return categDocsStream.map((document) => {
            const category = document.category;
            const id = document.id
            return { id, category }
          })
        })
      )
  }

  public editData(id: string, category: string): Promise<void> {
    const docRef = doc(this.firestore, 'categories/' + id);
    return updateDoc(docRef, { category })
  }

  public deleteDocument(id: string, category: string) {
    const docRef = doc(this.firestore, 'categories/' + id)
    deleteDoc(docRef)
      .then(() => {
        this.toastr.success(category + ' deleted successfully', 'Deleted! ', {
          toastClass: 'yourclass ngx-toastr',
          positionClass: 'toast-top-center',
        })
      })
      .catch(err => console.log(err))
  }

  public loadCategories(): Observable<Category[]> {
    const colRef = collection(this.firestore, 'categories');
    return collectionData(colRef).pipe(
      map(stream => stream.map((categDoc: DocumentData) => categDoc['category']))
    )
  }

}
