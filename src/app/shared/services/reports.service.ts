import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@environment/environment"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient
  ) { }

  
  /**
   * Store a reports
   */
  obsoleteProducts = (report):Observable<any> => this.http.post(`${environment.apiUrl}/reports/obsolete-products`, report);

  inventoryDownProducts = ():Observable<any> => this.http.get(`${environment.apiUrl}/reports/inventory-down-products`);
  downloadInventoryDownProducts = ():Observable<any> => this.http.get(`${environment.downloadInventoryDownUrl}`);

}
