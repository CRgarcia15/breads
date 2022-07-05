const React = require('react')
const Default = rquire('./layouts/Default')

function New () {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Names</label>
                <input type='text' name='name' id='name' required/>
                <label htmlFor='image'>Image</label>
                <input type='text' name='image' id='image'/>
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked/>
                <br/>
                <input type='submit'/>
            </form>
            <div className='backbutton'>
                <a href='/breads'><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = New