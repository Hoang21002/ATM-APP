import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public async set(key: string, value: string): Promise<void>{
    const currentValue = localStorage.getItem(key);
    const currentArray = currentValue ? JSON.parse(currentValue) : [] ;
    currentArray.push(value)
    localStorage.setItem(key, JSON.stringify(currentArray));
  }
  public async get(key: string): Promise<any[]> {
    try {
      const storedData = localStorage.getItem(key);
      const storedArray = storedData ? JSON.parse(storedData) : [];
      return Array.isArray(storedArray) ? storedArray : [];
    } catch (error) {
      console.error('Error while parsing stored data:', error);
      return [];
    }
  }
}
