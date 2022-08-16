//. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?

console.log("connected")


// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 

const h2 = document.getElementsByTagName('h2');
for (let i = 0; i <h2.length; i++) {
    const element = h2[i];
    element.style.color = 'lightblue'; 
    
}

console.log(h2); 
h2[0].style.color='lightblue'; 

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

const section = document.getElementById('shoes').style.backgroundColor='tomato'; 

//৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

const card= document.getElementsByClassName('card'); 

for (let i=0; i<card.length; i++){
    card[i].style.borderRadius = '30px'; 
}

//৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

// document.getElementById('buy-now').addEventListener('click', function(){
//     console.log('I am clicked')
// })

function clicked(){ 
    console.log('I am clicked')
}


// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

// const buttonRemove = document.getElementsByClassName('btn'); 
// for (let i = 0; i < buttonRemove.length; i++) {
//     const element = buttonRemove[i];
//     console.log(element)
//     element.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
    
// }
// Solution 2 
const buttons = document.getElementsByClassName('panda-btn-bye-now'); 
for (const btn of buttons) {
    console.log(buttons)
   btn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
    })
    
}

// const secret = document.getElementById('secret-info')
// ; 
// secret.style.display = 'none'; 
// })


// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

const submitTextField = document.getElementById('submit-input-text').addEventListener('keyup', function(event){
   const inputField = event.target.value; 

   const submitButton = document.getElementById('btn-submit'); 

   if(inputField === 'email'){
        submitButton.removeAttribute('disabled')
   }
   else submitButton.setAttribute('disabled', true)
}); 

