import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  filteredCategories: any[] = [];
  searchTerm: string = '';
  playerName = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/categories')
      .subscribe(data => {
        this.categories = data;
        this.filteredCategories = data;
      });
    this.playerName = this.route.snapshot.paramMap.get('playerName') || "";
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetFilter() {
    this.searchTerm = '';
    this.filteredCategories = [...this.categories];
  }

  goToCategory(categoryId: number, playerName: string) {
    this.router.navigate(['/quiz', categoryId, playerName]);
  }
}
