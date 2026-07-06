import React from "react";


export function Notes() {
    return (    
        <div className="notes">
            <h2>Notes</h2>
            <p>Keep track of your job applications and stay organized!</p>
            <ul>
                <li>Keep track of your job applications in one place.</li>
                <li>Set reminders for follow-ups and interviews.</li>
                <li>Organize your job search with ease.</li>
            </ul>
            <input type="text" placeholder="Add a note..." />

        </div>
    )
}