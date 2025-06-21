import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

// console.log(FullList)
export default class ListTemplate implements DOMList {
    static instance: ListTemplate = new ListTemplate(document.getElementById('listItems') as HTMLUListElement)

    private constructor( public ul: HTMLUListElement  ){}
    clear(): void {
        this.ul.innerHTML = ''
    }
    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(item => {
            const listItem = document.createElement('li')
            listItem.classList.add('item')
            const check = document.createElement('input')
            check.setAttribute("id", item.id)
            check.checked = item.checked
            check.setAttribute("type", "checkbox");
            // input.setAttribute("tabIndex", '0');
            check.tabIndex = 0
            const label = document.createElement('label')
            label.setAttribute("htmlFor", item.id)
            label.textContent = item.item
            const button = document.createElement('button')
            button.textContent = 'X'
            button.classList.add('button')
            listItem.append(check)
            listItem.append(label)
            listItem.append(button)
            check.addEventListener("change", ()=>{
                item.checked = !item.checked
                fullList.save()
            })
            button.addEventListener("click", () => {
                fullList.removeItem(item.id)
                this.render(fullList)
                // it doesn't create this endless loop though because this is an event listener and it doesn't happen until that button is clicked and then we remove the item from the data and then we render the list without the item so that's all
            })
            this.ul.append(listItem)
    })
    }
}