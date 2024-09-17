let myjoke=[
            {
                "category": "Programming",
                "type": "single",
                "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 23,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "\"We messed up the keming again guys.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 20,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 12,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 43,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 184,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 42,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 28,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "ASCII silly question, get a silly ANSI.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 25,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 0,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 27,
                "safe": false,
                "lang": "en"
            }
        
    
]

// let x=Math.floor(Math.random()*myjoke.length-1);

// let x=Math.floor(Math.random()*myjoke.length);
// console.log(myjoke[x]);    
let c=document.getElementById('myjoke')

// let r=function sere(){
//     c.innerHTML=myjoke[x].joke;
//     // since myjoke[x] is a obj. use obj. to acces joke attributes ok [][]][][]]

// }

btn.addEventListener('click',function(r){
 let x=function sam(){
     let x=Math.floor(Math.random()*myjoke.length);
     console.log(myjoke[x]);    
    
     c.innerHTML=myjoke[x].joke;
    
    }
   x();
    //     // since myjoke[x] is a obj. use obj. to acces joke attributes ok [][]][][]]
    
});

btn2.addEventListener('click',function(e){
    console.log(e);
    let y=x()-1;
    
    console.log(myjoke[y]);
        // console.log(myjoke[x]);
    // let c=document.getElementById('joke')
    // c.innerHTML=myjoke[x-1].joke;
    c.innerHTML=myjoke[y].joke;
    // since myjoke[x] is a obj. use obj. to acces joke attributes ok [][]][][]]

})

