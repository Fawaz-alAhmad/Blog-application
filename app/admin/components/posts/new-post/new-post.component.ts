import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryData } from 'src/app/admin/models/category.model';
import { CategoriesService } from 'src/app/admin/services/categories.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Post } from 'src/app/admin/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {

  public postForm!: FormGroup;
  public titleSub?: Subscription;
  public imgSrc = '../../../../../assets/landscape-placeholder-svgrepo-com.svg';
  public selectedImg!: File;
  public categories$!: Observable<CategoryData[]>;
  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.buildForm();
    this.listenToTitleChanges();
    this.loadCategories();
  }

  get title() {
    return this.postForm.get('title')
  }
  get formControls() {
    return this.postForm.controls;
  }


  buildForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      permalink: [{ value: '', disabled: true }, Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      category: ['', Validators.required],
      imgInput: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  listenToTitleChanges() {
    this.titleSub = this.title?.valueChanges.pipe(
      map((title: string) => title.toLowerCase().replace(/\s+/g, '-'))
    ).subscribe(permalink => {
      this.postForm.patchValue({ permalink }, { emitEvent: false })
    })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedImg = input.files?.item(0) //of type file list

    if (selectedImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgSrc = reader.result as string;
      }
      reader.readAsDataURL(selectedImg)
      this.selectedImg = selectedImg
    }
  }

  loadCategories() {
    this.categories$ = this.categoriesService.loadData()
  }

  onSubmitPost() {

    const splitted = this.postForm.value.category.split('-')

    const post: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category:
      {
        categoryId: splitted[0],
        category: splitted[1]
      },
      postImgPath: '',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    }
    console.log(post)
  }

  ngOnDestroy(): void {
    this.titleSub?.unsubscribe()
  }

}
