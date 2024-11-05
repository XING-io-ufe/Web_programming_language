// дараах шинж чанартай хийх ажилуудыг агуулсан tasks нэртэй массив үүсгэ.
//     title / string /
//     isComplete / boolean /
//     1. Шинэ ажил нэмэх addTask(x) функц зохио
// 2. Ажил гүйцэтгэсэн төлөв өөрчлөх completeTask(x) функц зохио
// 3. Бүх ажлын жагсаалтыг харуулах displayTasks() функц зохио
// Ажилуудыг хадгалах массив

let tasks = [
    { title: "Ажлаа хийх", isComplete: false },
    { title: "Сургуульд очих", isComplete: false },
    { title: "Хоол хийх", isComplete: true },
    { title: "Спорт зааланд явах", isComplete: false }
];


function addTask(title) {
    const newTask = {
        title: title,
        isComplete: false
    };
    tasks.push(newTask);
    console.log(`Ажил нэмэгдлээ: ${title}`);
}


function completeTask(x) {
    if (x >= 0 && x < tasks.length) {
        tasks[x].isComplete = true;
        console.log(`Ажил гүйцэтгэсэн: ${tasks[x].title}`);
    } else {
        console.log("Алдаа: Ажилын индекс буруу байна.");
    }
}


function displayTasks() {
    console.log("Ажилуудын жагсаалт:");
    for (let i = 0; i < tasks.length; i++) {
        const status = tasks[i].isComplete ? "Гүйцэтгэсэн" : "Гүйцэтгэх";
        console.log(`${i + 1}. ${tasks[i].title} - ${status}`);
    }
}


addTask("Bike driving");
displayTasks();

completeTask(1);
displayTasks();