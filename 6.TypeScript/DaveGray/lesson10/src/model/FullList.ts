import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}
export default class FullList implements List {
    // we put private keyword before constructor because I'm going to create a Singleton and that means there will only be one instance of this class created and we'll keep referring to that instance because we'll only have one list in our application so to do that I put private.
    static instance: FullList = new FullList()
    // we put default value empty array [] to _list
    private constructor(private _list: ListItem[] = []){}
    // we're instantiating FullList class and we'll always be able to refer to that as the instance of our class
    // it's just something that we can do because we know we're only going to have one list for our application 
    public get list(): ListItem[] {
        return this._list;
    }
    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return
        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList) ;
        parsedList.forEach(itemObject => {
            const newListItem = new ListItem(itemObject._id, itemObject._item, itemObject._checked)
            FullList.instance.addItem(newListItem)
        });
    }
    // that will save the list to our localStorage so then we can later on load it with our load method
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }
    clearList(): void {
        this._list = []
        // make sure we're writing over anything we have in local storage as well so the old list items don't reload because we wanted to clear list
        this.save()
    }
    
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
    
    
    
}