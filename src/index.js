document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector('#list')
  const form = document.querySelector('#create-task-form')
  const description = document.querySelector('#new-task-description')
  const dueDate = document.querySelector('#due-date')
  const taskPriority = document.querySelector('#new-task-priority')
  
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()

  form.addEventListener("click", function() {

  })

  form.addEventListener("submit", function(e) {
    e.preventDefault()

    const li = document.createElement('li')   
    
    switch(taskPriority.value) {
      case "high":
        li.style = "color: red;"
        break;
      case "medium":
        li.style = "color: goldenrod;"
        break;
      case "low":
        li.style = "color: green;"
        break;
    }

    if (description.value) {
      if (dueDate.value === "") {
        li.innerHTML = (`${yyyy}-${mm}-${dd} - ${description.value}`)
      }
      if (dueDate.value !== "") {
        li.innerHTML = (`${dueDate.value} ${description.value} `)
      }

      list.appendChild(li)   
    }
    

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "X"
    deleteButton.id = "deleteButton"
    deleteButton.addEventListener("click", function() {
      li.parentNode.removeChild(li)
    })

    li.appendChild(deleteButton)
    form.reset()
  })
});
