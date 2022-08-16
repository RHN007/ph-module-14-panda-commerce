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