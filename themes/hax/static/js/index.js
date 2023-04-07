function toggleDropdown(event) {
    console.log('lol')
    const dropdown = document.querySelector('#dropdown')

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'
    } else {
        dropdown.style.display = 'block'
    }
}