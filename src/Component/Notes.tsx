import React from "react";


export function Notes() { 
    
    function handleAddNote(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newnote = (document.querySelector('input') as HTMLInputElement).value;
            // Logic to add a note
        }
    return (    

      
        <div className="notes">
            <h2>Notes</h2>
            <p>Keep track of your job applications and stay organized!</p>
            <ul>
                <li>Keep track of your job applications in one place.</li>
                <li>Set reminders for follow-ups and interviews.</li>
                <li>Organize your job search with ease.</li>
            </ul>
            <form onSubmit={handleAddNote}>
                <input type="text" placeholder="Add a note..." />
                <button id="addbtn" type="submit">Add Note</button>
            </form>

        </div>


    )
}