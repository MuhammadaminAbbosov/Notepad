const btnPlus = document.getElementById("btn-plus")
const ul = document.querySelector(".list")
const input = document.getElementById("input")
const checkBox = document.createElement("div")

let s = 0

function erorChiqar() {
    const erorText = document.querySelector("#eslatma")

    if (erorText.textContent.trim() == "Eslatma kiritilmadi !") return
    erorText.textContent = "Eslatma kiritilmadi !"
    erorText.style.color = "red"

    input.style.borderBottomColor = "red"
    setTimeout(function () {
        erorText.textContent = "Eslatma Kiriting"
        erorText.style.color = "grey"
        input.style.borderBottomColor = "grey"

        input.style[focus] = "border-bottom: 2px solid #4158d0;"
        input.style[valid] = "border-bottom: 2px solid #4158d0;"
    }, 1900)

}

/* <li>
    <div class="check-box" id="check-box">
        <input type="checkbox" name="" id="check-input">
        <p>Saom `</p>
    </div>
    <button>O'chirish</button>
</li> */

function create(text) {
    const li = document.createElement("li")
    const box = document.createElement("div")
    const deleteBtn = document.createElement("button")
    const checkInput = document.createElement("input")
    const noteText = document.createElement("p")

    li.id = `list-${s}`
    noteText.id = `note-${s}`
    noteText.textContent = text
    checkInput.type = "checkbox"
    deleteBtn.textContent = "O'chirish"

    box.classList.add("check-box")
    box.append(checkInput, noteText)
    li.append(box, deleteBtn)
    ul.appendChild(li)



    checkInput.addEventListener("click", function () {
        noteText.classList.toggle("checked")

        deleteBtn.classList.toggle("button-none")



        deleteBtn.addEventListener("click", function (e) {
            e.preventDefault()

            li.remove()
        })
    })
}



btnPlus.addEventListener("click", function (e) {
    e.preventDefault()

    if (input.value.trim() == "") erorChiqar()
    else {
        create(input.value)






        input.value = ""
        s++
    }
})

