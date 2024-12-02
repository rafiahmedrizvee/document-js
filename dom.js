/* console.log(document.body)

const person ={
    age:26,
    name:'Rizvee'
}
console.log(person.age);
 */

/* const vlogTittle = document.getElementsByTagName("h3");
/* console.log(vlogTittle);
//for of loop using///
for (const vlog of vlogTittle){
console.log(vlog);
} */


/* const descriptions = document.getElementsByTagName('p')
console.log(descriptions);

for(const des of descriptions){
   des.style.background = 'blue'
    
}
 */


/* const selecteds = document.getElementsByClassName('design')
console.log(selecteds);

for (const select of selecteds){
    select.style.color='red'
    
}
 */


/* 
const lastTittle = document.getElementById('hero')
lastTittle.style.fontSize='50px'
lastTittle.style.color='red'
lastTittle.style.textAlign='center'

 */


/* 
const h1= document.createElement('h1')
h1.innerText = 'Hello World!'
console.log(h1);

const lastArticle = document.getElementById('last-article')
console.log(lastArticle);
lastArticle.prepend(h1)

 */


//vlog create in JS//

const h3 = document.createElement('h3');
h3.innerText = 'This is created by js';

const p = document.createElement('p');
p.innerText = 'Unde rerum totam quo sequi placeat ex reprehenderit? Ullam voluptatem facilis harum laborum cumque quos facere illum, ipsa velit rem nemo omnis explicabo esse autem hic praesentium animi repellat repellendus delectus. Iusto alias asperiores optio veritatis nulla, quaerat unde recusandae.'

const article = document.createElement('article');
article.appendChild(h3)
article.appendChild(p)
document.body.appendChild(article)




//style in article //
const articles = document.getElementsByTagName('article');
for (const article of articles){
    article.style.border = '2px solid green '
    article.style.padding = '20px'
    article.style.margin = '20px'
}
 
