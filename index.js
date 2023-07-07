// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "application/json"
//     })

//     res.end(JSON.stringify(

//          [
//             {
//                 "id": 1,
//                 "title": "Traditional Embroidered Kurti with Palazzo Set",
//                 "description": "Add elegance to your wardrobe with this beautifully embroidered kurti and palazzo set. Made from high-quality pure cotton, it offers both comfort and style. Perfect for festive occasions or casual gatherings.",
//                 "prevPrice": 870,
//                 "price": 618,
//                 "discountPercentage": 12.96,
//                 "review": 44987,
//                 "rating": 4.6,
//                 "stock": 94,
//                 "brand": "Zara",
//                 "category": "women-ethnic",
//                 "thumbnail": "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/k/9/m/m-y1001-klosia-original-imagmsx5thbg8bgj.jpeg?q=70",
//                 "images": [
//                     "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/k/9/m/m-y1001-klosia-original-imagmsx5thbg8bgj.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/t/y/r/m-y1001-klosia-original-imagmsx5sjsbcxzn.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/r/y/k/m-y1001-klosia-original-imagmsx5fjb7ebfs.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/6/x/h/m-y1001-klosia-original-imagmsx5bznjzpgx.jpeg?q=70",

//                 ]
//             },
//             {
//                 "id": 2,
//                 "title": "Elegant Silk Saree with Zari Border",
//                 "description": "Step into the world of grace and charm with this exquisite silk saree. The zari border adds a touch of opulence, making it perfect for weddings and special occasions. Embrace tradition with this timeless ensemble.",
//                 "prevPrice": 1199,
//                 "price": 899,
//                 "discountPercentage": 17.94,
//                 "review": 4987,
//                 "rating": 4.0,
//                 "stock": 34,
//                 "brand": "Puma",
//                 "category": "women-ethnic",
//                 "thumbnail": "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/u/2/1/l-jk173-jai-kurties-original-imageugcbqk36gvg.jpeg?q=70",
//                 "images": [
//                     "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/u/2/1/l-jk173-jai-kurties-original-imageugcbqk36gvg.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/9/a/a/l-jk173-jai-kurties-original-imageugcj6kzrqgm.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/9/a/a/l-jk173-jai-kurties-original-imageugcj6kzrqgm.jpeg?q=70",
//                     "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/ethnic-set/y/o/s/l-jk173-jai-kurties-original-imageugcfvgahxpp.jpeg?q=70"
//                 ]
//             }


//         ]

//     ))
// })

// server.listen(8080);


// const http = require("http");

// const todos = []

// const server = http.createServer(function (req, res) {
//     //Understanding the request 
//     console.log("Request", req.url)

//     if (req.url = "/todos") {

//         if (req.method === "GET") {
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify(todos));
//         } 
//     }
//     res.end("") 
// })



// server.listen(8080, () => {
//     console.log("Server is now started on 8080")
// })




// const http = require("http");

// const server = http.createServer(function (req, res) {

//     if (req.url == "/dominos" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" })
//         res.write("Welcome To Dominos")
//         res.end();
//     }
//     else if (req.url == "/contact" && req.method === "GET"){
//         res.writeHead(200,{ "Content-Type": "application/json"})
//         res.write(JSON.stringify({
//             branch:"badnawar",
//             contact:7000451236
//         }))
//         res.end();
//     } 
//     else{
//         res.writeHead(404,{ "Content-Type": "text/plain"})
//         res.write("wrong path")
//         res.end();
//     }
// }) 

// server.listen(8080, () => {
//     console.log("Server is now started on 8080")
// })




// ***************************************************************************************************************************

                                                    // ExpressJs


const express = require("express");
const app = express();

app.use(express.json())  //enhanced the power of expresss // to read the body

app.get("/welcome", (req, res) => {
    // res.writeHead(200,{"Content-Type":"text/plain"})
    // res.write("welcome dear...!")
    // res.end();
    res.send("welcome to the world")    //altenate of abobe commented lines
})

app.get("/contact", (req, res) => {
    // res.writeHead(200,{ "Content-Type": "application/json"})
    //     res.write(JSON.stringify({
    //         branch:"badnawar",
    //         contact:7000492993
    //     }))
    //     res.end();
    // res.send(
    //     {
    //         branch: "badnawar-choupati",  //also the status code is by default 200
    //         contact: 7000492993           // send the exact data
    //     }
    // )
      console.log("request url is", req.url)           //query param = ?
      console.log("request url is", req.query.name)



       res.set({                //custom header , also be set always before sendind the response
        "key":"some value"
       })
       res.status(200).send(              // to overide the defaault status code
        {
            branch: "badnawar-choupati",  //also the status code is by default 200
            contact: 7000492993           
        }
    ) 
})

app.get("/post/:postId", (req,res) =>{
    res.send(`postId is ${req.params.postId}`);   //params = dynamic rotes  //post/4  post/25...
}) 

app.post("/user", (req,res) =>{
    res.send(`user name is ${req.body.name}`)
})


app.listen(8080, () => { 
    console.log("server started")
})                