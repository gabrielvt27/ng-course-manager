import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{

        this.courses = [
            {
                id: 1,
                name: "Angular Forms",
                imageUrl: "/assets/images/forms.png",
                price: 99.99,
                code: "XPS-895",
                duration: 120,
                rating: 4.5,
                release: "December, 2, 2019"
            },
            {
                id: 2,
                name: "Angular Style",
                imageUrl: "/assets/images/animations.png",
                price: 9.99,
                code: "XPS-895",
                duration: 90,
                rating: 5.0,
                release: "October, 12, 2020"
            },
            {
                id: 3,
                name: "Angular HTTP",
                imageUrl: "/assets/images/http.png",
                price: 45.99,
                code: "XPS-895",
                duration: 60,
                rating: 4,
                release: "January, 27, 2020"
            }
        ]
    }
}