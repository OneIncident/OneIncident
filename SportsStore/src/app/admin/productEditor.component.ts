import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    templateUrl: "productEditor.component.html"
})

export class ProductEditorComponent {

    editing: boolean = false;
    prod: Product = new Product();

    constructor(private repository: ProductRepository,
        private router: Router,
        activeRoute: ActivatedRoute) 
    {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.prod = repository.getProduct(activeRoute.snapshot.params["id"]);
        }
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.prod);
        this.router.navigateByUrl("/admin/main/products");
    }
}