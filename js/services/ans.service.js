'use strict'

function getAns(onSuccess) {
    const xhr = new XMLHttpRequest()
    console.log('xhr.readyState BEFORE:', xhr.readyState)

    xhr.onreadystatechange = () => {
        console.log('xhr.readyState AFTER:', xhr.readyState)
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            console.log('ans:', ans)
            onSuccess(ans)
        }
    }

    xhr.open('GET', 'https://yesno.wtf/api', true)
    xhr.send()
}