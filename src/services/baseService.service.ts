import { Observable } from 'rxjs';
import { Model } from 'src/app/models/model.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Serializer } from '../app/serializers/base.serializer';
import { map } from 'rxjs/operators';// This is where I import map operator

export abstract class BaseService<T extends Model> {
    constructor(
        private httpClient: HttpClient
        ) {}
    
      protected url: string;
      protected abstract endpoint: string;
      protected headers: HttpHeaders;

      private get getApiEndpoint(): string {
        return `${this.url}/${this.url}`;
      }
    
      protected nameof<U>(key: keyof U, instance?: U): keyof U {
        return key;
      }
    
      protected getBase<T>(apiAction: string = '', id?: number | string, ): Observable<T> {
        return this.httpClient.get<T>(`${this.getApiEndpoint}${apiAction ? ('/' + apiAction) : ''}${id ? '/' + id : ''}`, { withCredentials: true });
      }
    
      protected putBase<T>(body?: any, id?: number | string, apiAction: string = '') {
        return this.httpClient.put<T>(`${this.getApiEndpoint}${id ? '/' + id : ''}${apiAction ? ('/' + apiAction) : ''}`, body, { headers: this.headers, withCredentials: true });
      }
    
      protected postBase<T>(body?: any, apiAction: string = ''): Observable<T> {
        return this.httpClient.post<T>(`${this.getApiEndpoint}${apiAction ? ('/' + apiAction) : ''}`, body, { headers: this.headers, withCredentials: true });
      }
    
      protected getByIdBase<T>(id: number | string, apiAction: string = ''): Observable<T> {
        return this.httpClient.get<T>(`${this.getApiEndpoint}${apiAction ? ('/' + apiAction) : ''}/${id}`, { withCredentials: true });
      }
    
      protected deleteBase<T>(params?: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.getApiEndpoint}/${params}`, { withCredentials: true });
      }
    
    }