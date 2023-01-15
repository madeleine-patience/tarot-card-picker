document.querySelector('button').addEventListener('click', pullTarotCard)

let link = [
  `https://i.ibb.co/kgv32m8/01.png`,
  `https://i.ibb.co/kgv32m8/01.png`,
  `https://i.ibb.co/TWvmCPn/02.png`,
  `https://i.ibb.co/8Xhqw5P/03.png`,
  `https://i.ibb.co/pWVv4GR/04.png`,
  `https://i.ibb.co/dMMq3vs/05.png`,
  `https://i.ibb.co/ZfB8NkZ/06.png`,
  `https://i.ibb.co/m4QKbrC/07.png`,
  `https://i.ibb.co/sRLjGVZ/08.png`,
  `https://i.ibb.co/WG8LkcN/09.png`,
  `https://i.ibb.co/1TWnh1L/10.png`,
  `https://i.ibb.co/Z2by2jt/11.png`,
  `https://i.ibb.co/Ns5W4hR/12.png`,
  `https://i.ibb.co/XWvdy43/13.png`,
  `https://i.ibb.co/r4bBQ1w/14.png`,
  `https://i.ibb.co/xYVkt05/15.png`,
  `https://i.ibb.co/rkGQ33m/16.png`,
  `https://i.ibb.co/VLTLRLB/17.png`,
  `https://i.ibb.co/bL5wrvX/18.png`,
  `https://i.ibb.co/0CdkY1g/19.png`,
  `https://i.ibb.co/FxtT1cv/20.png`,
  `https://i.ibb.co/8c7vrP9/21.png`,
]

function pullTarotCard() {
  let emptyArr = []
  for (let i = 0; i <= 21; i++) {
    emptyArr.push(i)
  }
  let tarotCardNum = emptyArr[
    Math.floor(Math.random() * emptyArr.length)
  ].toString()

  let imageNums = tarotCardNum.slice()

  if (tarotCardNum.toString().length < 2) {
    tarotCardNum = '0' + tarotCardNum
  }

  fetch(`https://tarot-api.onrender.com/api/v1/cards/ar${tarotCardNum}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      console.log(tarotCardNum)
      document.querySelector('h2').innerText = data.card.name
      document.querySelector('h3').innerText = data.card.meaning_up
      document.querySelector('img').src = link[imageNums]
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}
