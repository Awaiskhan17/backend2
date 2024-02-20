import express from 'express'
const app = express()
app.use(express.static('dist'))
const port = process.env.PORT || 4000

app.get('/api/naruto' , (req , res)=>{
    const animaRecord = [{
     name : "Naruto",
     discraption : "It is about friendShip ,love , beliveing ,pain, hardWork , war",
     mc: 'Naruto Uzamaki',
     release_year:2003  
    },
    {
        name : "One-piece",
        discraption : 'It is about pirates , Good pirates and bad pirates and a trager',
        mc : 'Monkey De luffy',
        release_year:1999
    },
    {
        name : 'Bleach',
        discraption: 'It is about hard time pain love and family',
        mc: 'Ichigo Kurosaki',
        release_year:2004

    }
]
    res.send(animaRecord)
})

app.listen(port , ()=>{
    console.log(`https://localhost:${port}`)
})