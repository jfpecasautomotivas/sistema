import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ProductForm } from '@shared/forms/products'
import { ProductsService } from '@shared/services/products.service'
import { CategoriesService } from '@shared/services/categories.service'
import * as M from 'materialize-css'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	public productForm: FormGroup
	public categories: any
	public autocomplete: any
	public selectedCategory: any
	public loading: boolean

	constructor(
		private formBuilder: FormBuilder,
		private productService: ProductsService,
		private categoriesService: CategoriesService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		M.updateTextFields()

		this.productForm = this.formBuilder.group(new ProductForm)
		this.getCategories()
		let id = this.route.snapshot.paramMap.get('id')

		if (id) this.getProductInfo(id)
	}

	onSubmit(): void {
		this.loading = true
			if(this.productForm.invalid) {
			return
		}

		if(this.productForm.value.id) {
			this.productService.update(this.productForm.value)
				.subscribe(
					() => M.toast({
						html: "Atualizado com sucesso",
						classes:'succes'
					}),
					error => M.toast({
						html: `Ocorreu um erro ao atualizar o produto:
						<br><span class="error">${error}</span>`,
						classes:'fail'
					}),
					() => this.loading = false
				)
		} else {
			this.productService.store(this.productForm.value)
				.subscribe(
					() => {
						M.toast({
							html: "Cadastrado com sucesso",
							classes:'succes'
						})
						this.productForm.reset()
					},
					error => {
						M.toast({
							html: `Ocorreu um erro ao cadastrar o produto:
							<br><span class="error">${error}</span>`,
							classes:'fail'
						})
						this.handleError(error)
						this.loading = false
					},
					() => this.loading = false
				)
		}
	}

	getProductInfo = (id: any): void => {
		this.productService.find(id)
			.subscribe(
				(product) => {
					this.productForm.patchValue(product)
					M.updateTextFields()
					M.textareaAutoResize(
						document.querySelector('.materialize-textarea')
					)
				},
				error => M.toast({
					html: `Ocorreu um erro ao buscar o produto:
					<br><span class="error">${error}</span>`,
					classes:'fail'
				})
			)
	}

	getCategories = (): void => {
		this.categoriesService.get()
			.subscribe((categories:any) => {
				this.categories = categories,
				error => M.toast({
					html: `Ocorreu um erro ao buscar as categorias:
					<br><span class="error">${error}</span>`,
					classes:'fail'
				})
			})
	}

	handleError = (e): void => {
		const formFields = Object.keys(this.productForm.value)
		const errorsFields = Object.keys(e)
		let fields:any = formFields.filter(val => errorsFields.includes(val))

		fields.map(f => {
			this.productForm.controls[f].setErrors({'unavailable': true})
		})
	}

	clean = (): void => {
		this.productForm.reset()
	}

	get formControls() { return this.productForm.controls }

}
