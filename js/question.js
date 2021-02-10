class Question {
    constructor() {
        this.title = createElement('h1');
        this.input1 = createInput("Enter Your Name");
        this.input2 = createInput("Enter the Option of Your Choice");
        this.button = createButton("Submit Your Answer");
        this.option4 = createElement('h4');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
    }

    display() {
        this.title.html("Vihaan's Quiz Game");
        this.title.position(350, 0);
        this.question.html("What is the capital of Peru?");
        this.question.position(150, 100);
        this.option1.html("A. Buenos Aires");
        this.option2.html("B. Quito");
        this.option3.html("C. Lima");
        this.option4.html("D. Bogota");
        this.option1.position(150, 120);
        this.option2.position(300, 120);
        this.option3.position(150, 140);
        this.option4.position(300, 140);
        this.input1.position(170, 200);
        this.input2.position(350, 200);
        this.button.position(290, 300);

        this.button.mousePressed(()=> {
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.question.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount++;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}