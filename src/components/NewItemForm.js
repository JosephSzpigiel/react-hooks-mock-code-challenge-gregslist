
import React, {useState} from "react";

function NewItemForm({setListings}){
    const initialState = {
        description: '',
        location: '',
        image: ''
    }
    const [newItem, setNewItem] = useState(initialState)

    function changeHandler(e){
        setNewItem({...newItem, [e.target.name]: e.target.value})
    }

    function submitHandler(e){
        e.preventDefault();
        fetch('http://localhost:6001/listings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(r => r.json())
        .then(response=> setListings(currentValue => [...currentValue, response]))
        setNewItem(initialState)
    }

    return(
        <form onSubmit= {submitHandler}>
            <input name="description" placeholder="Description" value= {newItem.description} onChange={changeHandler}></input>
            <input name="image" placeholder="Image" value = {newItem.image} onChange={changeHandler}></input>
            <input name="location" placeholder="Location" value = {newItem.location} onChange={changeHandler}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewItemForm;