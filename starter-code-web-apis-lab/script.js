let usersList =[];


const usersURL = 'https://reqres.in/api/users?page=2';
axios.get(usersURL)
    .then(response => {
        // console.log(response.data)
        resPage.innerText =response.data.page;
        totalPages.innerText = response.data.total_pages;
        ad.innerText = JSON.stringify(response.data.support.text)
        return response.data.data;
    })
    .then(list => {
        usersList = list;
        console.log(usersList[2])
        avatar.src = usersList[2].avatar;
        name.innerText = usersList[2].first_name +" "+ usersList[2].last_name
        email.innerText = usersList[2].email;
    })


const resPage = document.querySelector('.res__page');
const totalPages = document.querySelector('.res__total-pages');

const avatar = document.querySelector('.res-users__avatar');
const name = document.querySelector('.res-users__name');
const email = document.querySelector('.res-users__email');
const ad = document.querySelector('.res__ad');