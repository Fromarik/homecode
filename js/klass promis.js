class Comment {
    constructor(text,number) {
        this.text = text
        this.number = number
        this.votesQty = 0
        this.votesQty2 = [1,2,3,4,5,6,7]

        this.upvote2 = () => {
          this.votesQty += 2
        }
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment ("First comment",47589234750293857)
const secondComment = new Comment (34567890,78923745235490)
const thirdComment = new Comment ("тут бубдет написанно много букав",99637428956238475)

console.log(firstComment)

console.log(this)

firstComment.upvote2()

console.log(firstComment)

console.log(firstComment.hasOwnProperty("upvote"))

console.log("_____")
console.log(firstComment,secondComment,thirdComment)

// задачки js поиск убийцы
// rest api 
//  api 
/// использование яндейкс карт 

let andreyStryng = "Вот тебе строка"

for (indsex of andreyStryng) {
 console.log(indsex)
}

andreyStryng.forEach(element => {
    console.log(element)
    
});