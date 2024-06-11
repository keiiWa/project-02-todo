console.log("oi");

const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");


//we will call this function while adding, deleting and checking-unchecking the tasks
function allTasks(){
    let tasks = document.querySelectorAll(".pending"); // pego todos os elementos com classe pending (recem adicionados)
    //assim aumento minha variavel de controle conforme adiciono as tasks, e uso a mesma para definir no display o numero delas pending
    
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length
    let allLists = document.querySelectorAll(".list")
    if(allLists.length > 0) {
        todoLists.style.marginTop = "20px"
        clearButton.style.pointerEvents = "auto"
        return
    }
    todoLists.style.marginTop = "0px"
    clearButton.style.pointerEvents = "none"
}




//add task while we put vaalue in text area and press enter




inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); // removes space of front and back
  
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list pending" onClick="handleStatus(this)">
            <input type="checkbox"/>
            <span class="task">${inputVal}

            </span>
            
            <i class="uil uil-trash-alt" onClick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML(
      "beforeend",
      liTag
    );
    inputField.value = ""
    allTasks()


     /*inserting liTag inside the list element
        O método insertAdjacentHTML permite que você insira texto HTML em uma posição específica em relação a um elemento no DOM (Document Object Model). A string "beforeend" é um dos valores possíveis para o segundo argumento deste método e define onde exatamente o HTML será inserido.

            Os valores possíveis para o segundo argumento de insertAdjacentHTML são:

            "beforebegin": Insere o HTML antes do elemento atual.
             "afterbegin": Insere o HTML como o primeiro filho do elemento atual.
             "beforeend": Insere o HTML como o último filho do elemento atual.
             "afterend": Insere o HTML após o elemento atual.
                                                                                     */      

            
    
  }

 
});

function handleStatus(e){
    const checkbox = e.querySelector("input")
    checkbox.checked = checkbox.checked ? false : true
    e.classList.toggle("pending")
    allTasks() //handleStatus é meio que uma simulação de deletar ela, sem de fato apagar, apenas registrar e trocar os numeros de pending
  
    
}

//deleting one element
function deleteTask(e) {
    e.parentElement.remove();
    allTasks()

}

//deleting all the tasks while we click on the clear button
clearButton.addEventListener("mouseover", () =>{
    let tasks = document.querySelectorAll(".pending")
    if(confirm(`Are you sure you want to delete all your (${tasks.length}) tasks?`)){
  todoLists.innerHTML = ""
  inputField.value = ""
  
  allTasks()

    }else{
        console.log("nothin")

    }
    
})
