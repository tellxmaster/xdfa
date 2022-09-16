
const largeMsg = document.getElementById('large-msg');
const shortMsg = document.getElementById('short-msg');
const searchBar = document.getElementById('search-input');

searchBar.addEventListener('focus', (e)=>{
    console.log('Me enfoco');
    console.log(e);
    shortMsg.classList.remove('active');
    largeMsg.classList.add('active');
})

searchBar.addEventListener('focusout', (e)=>{
    console.log('Me desenfoco');
    console.log(e);
    largeMsg.classList.remove('active');
    shortMsg.classList.add('active');
})
