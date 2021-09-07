(function () {
    var elements = document.querySelectorAll('.spoiler')
    var createSpoilerButton = function (element) {
        // Créer button

        var button = document.createElement('button')
        button.textContent = 'Voir le spoil'

        // Créer span
        var span = document.createElement('span')
        span.className = 'spoiler-content'
        span.innerHTML = element.innerHTML

        // Ajoute element au DOM
        element.innerHTML = '' //On vide le message
        element.appendChild(button)
        element.appendChild(span)

        // On supprime le bouton
        button.addEventListener('click', function () {
            button.parentNode.removeChild(button)
            span.classList.add('visible')
        })
    }
    for (var i = 0; i < elements.length; i++) {
        createSpoilerButton(elements[i])
    }
})()