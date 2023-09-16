import { json, redirect } from "react-router-dom";
import url from "./url";

// createAction
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newTodo)
    })

    // redirect back to index page
    return redirect('/')
}

// updateAction
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id
    
    // construct request body
    const updatedTodo = {
        subject: formData.get('subject'),
        details: formData.get('details')
    }

    // send request to backend
    await fetch(url + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    })

    // redirect back to show page
    return redirect(`/post/${id}`)
}


// deleteAction
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id
    
    // send request to backen
    await fetch(url + id, {
        method: 'delete',
    })

    // redirect back to index page
    return redirect('/')
}
