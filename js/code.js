// fetch('../data/data.json')
// .then((response)=> {
//     return response.json();
// })
// .then((data)=> {
//     console.table(data.results);
// })
// .catch(()=> {
//     console.log("Please try again later")
// })


// let data = [8, 9, 12, 1, "jamie-Lee", 28];
// console.log(data.filter(number)) 
// let onlyNumbers = data.filter(Numbers);
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a, b)=>{
//     if(a < b)
//         return -1;
//     return 1
// });
// console.log(sortedValues);

// console.log(data.slice(2, 3));
// let first = data.slice(0, 2);
// let second = data.slice(3);
// console.log(first);
// console.log(second);
// let finalResult = [...first, ...second];
// console.log(finalResult);
// splice(start, removeCount item1, item2...)
// let newData = data.splice(3, 3, "Martinus");
// console.log(data);
// async function fetchData() {
//     let res = await fetch("../data/");
//     let data =
// }
// fetch("../data/data.json")
// .then((res)=>{
//     return res.json();
// })
// .then(data=>{
//     console.log(data.results);
// })
// .catch(err=>{
//     console.log("Please Try again later");
// })

// Shortcut
// async function fetchData() {
//     let res= await fetch("../data/data.json");
//     let data = await res.json();
//     console.log(data.results);
// };
// (async function fetchData(){
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//     console.log(data.results)
// })();
let wrapper = document.querySelector('.wrapper');
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=50");
    let data = await res.json();
    return data.results;
};
(async function display(){
    let data = await fetchData();
    data.forEach( (item)=> {
        // console.log(item);
        // document.write(`<p>${item.gender}</p><br>`);
        wrapper.innerHTML +=`<div class="card" style="width:      18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
})();