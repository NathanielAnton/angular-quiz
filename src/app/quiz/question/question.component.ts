import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  categoryId: number = 0;
  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoryIdParam = this.route.snapshot.paramMap.get('categoryId');
    this.categoryId = categoryIdParam !== null ? +categoryIdParam : 1;
    console.log(this.categoryId);
    this.quizService.getQuizContent(this.categoryId);
  }
}
