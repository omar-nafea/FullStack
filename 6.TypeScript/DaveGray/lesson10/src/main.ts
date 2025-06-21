import './style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim()
        if (!newEntryText.length) return
        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1
        const newItem = new ListItem(itemId.toString(), newEntryText)
        fullList.addItem(newItem)
        input.value = ''
        template.render(fullList)
    })
    const clearItem = document.getElementById("clearItemsButton") as HTMLButtonElement
    clearItem.addEventListener("click", (): void =>{
        fullList.clearList()
        template.clear()
    })
    fullList.load()
    template.render(fullList)
} 

document.addEventListener('DOMContentLoaded', initApp)
// we can defer inside of the script tag of JavaScript as well I've just been in the habit of doing this for a long time and this essentially says we're not going to run our JavaScript until this Dom content is loaded we make sure those elements exist before we try to interact with them