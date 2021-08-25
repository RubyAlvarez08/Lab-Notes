import React, {useState} from 'react';
import "../App.css";

function Notes () {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    console.log(setEmail)



    return(
        <div className='notes'>
            <section>
                <h2>Jabubu Notes</h2>
                <input  placeholder='title' className='title'
                 onChange= {e => setTitle(e.target.value)} 
                 value={title}
                 />
                <textarea
                onChange={e => setNote(e.target.value)}
                value={note} 
                />
                <button>Guardar</button>
            </section>
            <main>
              <h1>Notes</h1>
            </main>
        </div>
    );
}
export default Notes;