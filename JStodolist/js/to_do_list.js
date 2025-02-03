document.addEventListener("DOMContentLoaded", () => {
    loadTasks(); // Sayfa yüklendiğinde local storage'dan verileri çek
});

const taskInput = document.getElementById("task");
const taskList = document.getElementById("list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");

// **Yeni görev ekleme fonksiyonu**
function newElement() {
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        showToast(errorToast); // Boş ekleme hatası
        return;
    }

    addTaskToDOM(taskValue);
    saveTask(taskValue); // Local Storage'a kaydet

    taskInput.value = ""; // Input'u temizle
    showToast(successToast); // Başarı bildirimi ekrana yazdır
}

// ** Görev DOM'a ekleme fonksiyonu**
function addTaskToDOM(taskText, isDone = false) {
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <span class="close">&times;</span>`;
    if (isDone) li.classList.add("checked");

    taskList.appendChild(li);

    li.querySelector(".close").addEventListener("click", removeTask);
    li.addEventListener("click", markAsDone);
}

// **Silme fonksiyonu**
function removeTask(event) {
    let taskItem = event.target.parentElement;
    removeTaskFromStorage(taskItem.firstChild.textContent.trim());
    taskItem.remove();
}

// **Yapıldı işaretleme fonksiyonu**
function markAsDone(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        toggleTaskStatus(event.target.firstChild.textContent.trim());
    }
}

// **Toast mesajlarını gösterme**
function showToast(toastElement) {
    let toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// **Local Storage işlemleri**
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: task, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ** Local Storage'dan görev silme**
function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t.text !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ** Tamamlandı durumu değiştirme**
function toggleTaskStatus(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(t => t.text === task ? { ...t, done: !t.done } : t);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ** Local Storage'dan görevleri yükleme**
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.done));
}
