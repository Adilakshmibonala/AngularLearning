import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExtendedHttpClient {

  constructor(
    protected http: HttpClient
  ) {
  }

  async get(url: string, options?): Promise<any> {s
    url = this.checkurl(url);
    return await this.http.get(url, options).toPromise();
  }

  async post(url: string, body: any | null, options?): Promise<any> {
    url = this.checkurl(url);
    return await this.http.post(url, body, options).toPromise();
  }

  async put(url: string, body: any | null, options?): Promise<any> {
    url = this.checkurl(url);
    return await this.http.put(url, body, options).toPromise();
  }

  async patch(url: string, body: any | null, options?): Promise<any> {
    url = this.checkurl(url);
    return await this.http.patch(url, body, options).toPromise();
  }

  async delete(url: string, options?): Promise<any> {
    url = this.checkurl(url);
    return await this.http.delete(url, options).toPromise();
  }
  async deleteWithPayload(url: string,  body: any | null, options?): Promise<any> {
    url = this.checkurl(url);
    if(!options) options={}
    options['body']=body;
    return await this.http.request("delete",url, options).toPromise();
  }

  checkurl(url: string) {
    return "http://127.0.0.1:8000/api/v1/" + url;
  }

}
