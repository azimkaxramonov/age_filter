let data
let form = document.querySelector('form')
let name_inp = document.querySelector('.name_inp input')
let age_inp = document.querySelector('.age_inp input')
console.log(name_inp);
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(user => {
        data = user.users
        fl()
    })

let first_age = document.querySelector('.first_age')
let middle_age = document.querySelector('.middle_age')
let last_age = document.querySelector('.last_age')

function name(arr, cont) {
    for (let item of arr) {
        let elem = document.createElement('div')
        let h1 = document.createElement('h1')
        let info = document.createElement('div')
        let p_age = document.createElement('p')
        let p_number = document.createElement('p')

        elem.classList.add('elem')
        info.classList.add('info')

        h1.innerHTML = item.maidenName
        p_number = item.age

        cont.append(elem)
        elem.append(h1, info)
        info.append(p_age, p_number)


    }

}

function fl() {
    let xamro = data.filter((el) => {
        return el.age < 25

    })
    name(xamro, first_age)


    let xamro_two = data.filter((el) => {
        return el.age > 25 && el.age < 50

    })
    name(xamro_two, middle_age)



    let xamro_three = data.filter((el) => {
        return el.age > 50

    })
    name(xamro_three, last_age)
}


form.onsubmit = (event) => {
    event.preventDefault();

        fetch('https://dummyjson.com/users/add', {
            method: "POST",

            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(
                {
                    maidenName : name_inp.value,
                    age : age_inp.value
                }
            ) 
    })

            .then(res => res.json())
            .then(xrc => {
                data.push(xrc)
                fl()
            })
        
    }
  







