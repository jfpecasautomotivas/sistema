import { Component, OnInit } from "@angular/core"
import { ProductsService } from "@shared/services/products.service"
import { Product } from "@shared/models/product"
import * as M from "materialize-css"
import { ActivatedRoute, Router, Params } from "@angular/router"
import { SalesService } from "@shared/services/sales.service"
import { AuthenticationService } from "@shared/services/authentication.service"
import { FormGroup, FormBuilder } from "@angular/forms"
import { SaleForm } from "@shared/forms/sales"
import { Pagination } from "@shared/models/pagination"

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent implements OnInit {
  public loading: boolean = false
  public productsInfos
  public loggedUser
  public selectedProduct: Product
  public amount: number
  public filter: string
  public filterType: string = "title"
  public screenType: string = ""
  public saleForm: FormGroup
  public page

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.authenticationService.currentUserValue
    this.screenType = this.route.snapshot.data.type
    this.initializeSaleForm()
    this.route.queryParams.subscribe(
      ({ page }) => {
        this.page = page
        this.haveFilter()
          ? this.search(`${this.service.filter}`, page)
          : this.getProducts(page)
      },
      (error) => M.toast({ html: error, classes: "fail" })
    )
    M.updateTextFields()
    this.initializeSelect()
    this.initializeModal()
    console.log(this.productsInfos)
  }

  ngOnDestroy() {
    this.service.filter = null
  }

  getProducts = (page?) =>
    this.service.get(page).subscribe(
      (data) => (this.productsInfos = data),
      (error) => M.toast({ html: error, classes: "fail" })
    )

  selectProduct = (product) => {
    this.selectedProduct = product
    this.saleForm.patchValue({ product_id: product.id })
  }

  get pagination() {
    return [...Array(this.productsInfos?.last_page).keys()]
  }

  initializeModal = () => {
    var elems = document.querySelectorAll(".modal")
    var instances = M.Modal.init(elems, {})
  }

  initializeSelect = () => {
    var elems = document.querySelectorAll("select")
    var instances = M.FormSelect.init(elems, {})
  }

  sell = () => {
    this.saleForm.controls["price"].setValue(
      this.saleForm.value.amount * this.selectedProduct.value_sell
    )

    this.salesService.store(this.saleForm.value).subscribe(
      (data) => {
        M.toast({ html: "Baixa cadastrada", classses: "succes" })
        this.haveFilter()
          ? this.search(`${this.service.filter}&page=${this.page}`)
          : this.getProducts(this.page)
      },
      (error) => {
        M.toast({ html: error?.amount, classes: "fail" })
      }
    )
  }

  addAmount = () =>
    this.service
      .update({
        id: this.selectedProduct.id,
        amount: this.amount + this.selectedProduct.amount,
      })
      .subscribe(
        (data) => {
          M.toast({ html: "Adicionado com sucesso", classses: "succes" })
          this.haveFilter()
            ? this.search(`${this.service.filter}&page=${this.page}`)
            : this.getProducts(this.page)
        },
        (error) => {
          M.toast({ html: error, classes: "fail" })
        }
      )

  search = (filter?, page?) => {
    this.service
      .search(filter ?? `${this.filterType}=${this.filter}`, page)
      .subscribe(
        (products: Pagination) => {
          this.productsInfos = products
          this.changingQueryParams()
        },
        (error) => M.toast({ html: error, classes: "fail" })
      )
  }
  haveFilter = () => this.service.filter

  initializeSaleForm = () => {
    this.saleForm = this.formBuilder.group(new SaleForm())
    this.saleForm.patchValue({ user_id: this.loggedUser.id })
  }

  cashMask = (value: number): string => {
    let formatedValue = String(value).replace(".", ",")
	if (!formatedValue.includes(',')) {
		formatedValue += ',00'
	}
    return formatedValue
  }

  private changingQueryParams() {
    this.router.navigate([], {
      queryParams: {
        page: this.productsInfos?.current_page,
      },
    })
  }

  delete = (product) =>
    this.service.delete(product?.id).subscribe(
      () => this.getProducts(),
      (error) => M.toast({ html: error, classes: "fail" })
    )
}
