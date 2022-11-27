// import { Injectable } from "@angular/core";
// import { Product } from "./product.model";
// import { Observable, from } from "rxjs";
// import { Order } from "./order.model";

// @Injectable()
// export class StaticDataSource {
//     private products: Incident[] = [
//         new Incident(1, "Incident 1", "Category 1", "Incident 1 (Category 1)", 100),
//         new Incident(2, "Incident 2", "Category 1", "Incident 2 (Category 1)", 100),
//         new Incident(3, "Incident 3", "Category 1", "Incident 3 (Category 1)", 100),
//         new Incident(4, "Incident 4", "Category 1", "Incident 4 (Category 1)", 100),
//         new Incident(5, "Incident 5", "Category 1", "Incident 5 (Category 1)", 100),
//         new Incident(6, "Incident 6", "Category 2", "Incident 6 (Category 2)", 100),
//         new Incident(7, "Incident 7", "Category 2", "Incident 7 (Category 2)", 100),
//         new Incident(8, "Incident 8", "Category 2", "Incident 8 (Category 2)", 100),
//         new Incident(9, "Incident 9", "Category 2", "Incident 9 (Category 2)", 100),
//         new Incident(10, "Incident 10", "Category 2", "Incident 10 (Category 2)", 100),
//         new Incident(11, "Incident 11", "Category 3", "Incident 11 (Category 3)", 100),
//         new Incident(12, "Incident 12", "Category 3", "Incident 12 (Category 3)", 100),
//         new Incident(13, "Incident 13", "Category 3", "Incident 13 (Category 3)", 100),
//         new Incident(14, "Incident 14", "Category 3", "Incident 14 (Category 3)", 100),
//         new Incident(15, "Incident 15", "Category 3", "Incident 15 (Category 3)", 100),
//     ];

//     getIncidents(): Observable<Incident[]> {
//         return from([this.products]);
//     }
// }
