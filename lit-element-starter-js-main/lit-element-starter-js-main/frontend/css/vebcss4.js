import {css} from 'lit';
export const vebcss=css`
:host {
   
  display: flex;
  justify-content: center; 
   
    position: relative;
   

}

.mod {
    background-color: rgba(158, 158, 158, 0.75);
    max-width: 150px;
    width: 25%;
    text-align: center;
    border-radius: 15px;
    padding: 4px;
	margin-left: -86px
}
.mod1{
    position: relative;
    display: block;
    transform: rotatex(177deg);
}

.textB {
	display: inline-block;
    width: 28px;
    height: 28px;
    right: auto;
    top: auto;
    color: red;
    position: relative;
    border-radius: 50%;
    background-color: white;
    font-size: 1.2rem;
    text-align: center;
}


.textA { color: #795548;
    position: relative;
    border-radius: 5%;
    background-color: white;
    font-size: 0.8rem;
    text-align: center;
}




.mod:hover{ background-color:#2196F3;}


.super {
    margin: 0;
    height: 100vh;
   /*  background-image: url(/webp/bcg-green.webp); */
    background-repeat: no-repeat;
    background-size: cover;
}

h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
}

.data {
    background-color: white;
}

.form {
    top: 20px;
    left: 20px;
    position: absolute;
}

.text-h4 {
    text-align: center;
}

.header {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.field {
    display: flex;
    flex-direction: column;
    min-height: 98%;
}

.buttons {
    right: 0;
    position: absolute;
}

.buttons_container {
    padding: 20px;
}

.left {
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.player-title {
    margin-top: -80px;
    margin-bottom: 80px;
}

.player3CardsContainer {
    position: relative;
    width: 300px;
    height: 120px;
    transform: rotate(-90deg)
}

.player2CardsContainer {
    position: relative;
    width: 300px;
    height: 120px;
    transform: rotate(90deg)
}

.player1CardsContainer {
    margin: 20px 0;
    position: relative;
    width: 300px;
    height: 120px;
    transform: scaleY(-1);
}

.player0CardsContainer {
    margin: 20px 0;
    position: relative;
    width: 300px;
    height: 120px;
}

.player1 {
    align-items: end;
}

.content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-grow: 1;
    flex: 1 0 auto;
    position: relative;
}

.card_table {
}

.deck_card {
    position: absolute;
	width:50px;
    height: 70px;
    border-radius: 7px;
	background-size: cover;
}

.deck_flex {
    position: absolute;
    width: 200px;
    display: flex;
   left: -81px;
   bottom: -56px;
    justify-content: center;
    align-items: center;
}

.table_grid {
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 65px);
    justify-items: center;
	position: relative;
    margin:0 auto;
	
}
.g_g {
   
	background-color:#0098ff94;
	height:89px;
	width:57px;
	margin:5px;
	opacity: 0.2;
}


.left {
    float: left;
    width: 100px;
    min-height: 100%;
}

.right {
    float: right;
    width: 100px;
    min-height: 100%;
}

.footer {
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
}

.card_img {
    width: 57px;
    height: 89px;
    border-radius: 7px;
    transition: transform 250ms;
	background-size: cover;
}

.cards_number-lastCard {
    transform: rotate(-90deg);
    position: absolute;
    right: 25%;
    z-index:auto;
}

.cards_number-6, .cards_number-5, .cards_number-4, .cards_number-3, .cards_number-2, .cards_number-1 {
    position: absolute;
}

.cards_number-6:nth-of-type(1) {
    transform: rotate(-35deg);
    top: 25px;
    left: 50px;
}

.cards_number-6:nth-of-type(2) {
    transform: rotate(-20deg);
    top: 10px;
    left: 80px;
}

.cards_number-6:nth-of-type(3) {
    transform: rotate(-5deg);
    left: 110px;
}

.cards_number-6:nth-of-type(4) {
    transform: rotate(5deg);
    right: 110px;
}

.cards_number-6:nth-of-type(5) {
    transform: rotate(20deg);
    top: 10px;
    right: 80px;
}

.cards_number-6:nth-of-type(6) {
    transform: rotate(35deg);
    top: 25px;
    right: 50px;
}
.cards_number-6:nth-of-type(7) {
    transform: rotate(35deg);
    top: 25px;
    right: 20px;
}

.cards_number-6:nth-of-type(8) {
    transform: rotate(35deg);
    top: 25px;
    right: -10px;
}
.cards_number-6:nth-of-type(9) {
    transform: rotate(35deg);
    top: 25px;
    right: -40px;
}

.cards_number-6:nth-of-type(10) {
    transform: rotate(35deg);
    top: 25px;
    right:-70px;
}





.cards_number-6-hover:hover {
    box-shadow: 0px 0px 10px yellow;
	 transform: translateY(-20px) scale(1.5); ;
}

.cards_number-6-hover:nth-of-type(1):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(-35deg) translateY(-20px) scale(1.5);
}

.cards_number-6-hover:nth-of-type(2):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(-20deg) translateY(-20px) scale(1.5) ;
}

.cards_number-6-hover:nth-of-type(3):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(-5deg) translateY(-20px) scale(1.5);
}

.cards_number-6-hover:nth-of-type(4):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(5deg) translateY(-20px) scale(1.5);
}

.cards_number-6-hover:nth-of-type(5):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(20deg) translateY(-20px) scale(1.5) ;
}

.cards_number-6-hover:nth-of-type(6):hover {
	 box-shadow: 0px 0px 10px yellow;
    transform: rotate(35deg) translateY(-20px) scale(1.5);
}


.move-to-0 {
    transform: translateX(20px)
}
  
  .cards_number-55 {
	  position:relative;
   width: 57px;
    height: 89px;
    border-radius: 7px;  
}
 .hearts6{
    background-image: url(./webp/hearts6.webp);
}
 .hearts7{
    background-image: url(./webp/hearts7.webp);
}
 .hearts8{
    background-image: url(./webp/hearts8.webp);
}
 .hearts9{
    background-image: url(./webp/hearts9.webp);
}
 .hearts10{
    background-image: url(./webp/hearts10.webp);
}

 .heartsA{
    background-image: url(./webp/heartsA.webp);
}
 .heartsK{
    background-image: url(./webp/heartsK.webp);
}
 .heartsQ{
    background-image: url(./webp/heartsQ.webp);
}
 .heartsJ{
    background-image: url(./webp/heartsJ.webp);
}
 .clubs6{
    background-image: url(./webp/clubs6.webp);
}
 .clubs7{
    background-image: url(./webp/clubs7.webp);
}
 .clubs8{
    background-image: url(./webp/clubs8.webp);
}
 .clubs9{
    background-image: url(./webp/clubs9.webp);
}
 .clubs10{
    background-image: url(./webp/clubs10.webp);
}
 .clubsA{
    background-image: url(./webp/clubsA.webp);
}
 .clubsK{
    background-image: url(./webp/clubsK.webp);
}
 .clubsQ{
    background-image: url(./webp/clubsQ.webp);
}
 .clubsJ{
    background-image: url(./webp/clubsJ.webp);
}
 .diamonds6{
    background-image: url(./webp/diamonds6.webp);
}
 .diamonds7{
    background-image: url(./webp/diamonds7.webp);
}
 .diamonds8{
    background-image: url(./webp/diamonds8.webp);
}
 .diamonds9{
    background-image: url(./webp/diamonds9.webp);
}
 .diamonds10{
    background-image: url(./webp/diamonds10.webp);
}
 .diamondsA{
    background-image: url(./webp/diamondsA.webp);
}
 .diamondsK{
    background-image: url(./webp/diamondsK.webp);
}
 .diamondsQ{
    background-image: url(./webp/diamondsQ.webp);
}
 .diamondsJ{
    background-image: url(./webp/diamondsJ.webp);
}
 .spades6{
    background-image: url(./webp/spades6.webp);
}
 .spades7{
    background-image: url(./webp/spades7.webp);
}
 .spades8{
    background-image: url(./webp/spades8.webp);
}
 .spades9{
    background-image: url(./webp/spades9.webp);
}
 .spades10{
    background-image: url(./webp/spades10.webp);
}
 .spadesA{
    background-image: url(./webp/spadesA.webp);
}
 .spadesK{
    background-image: url(./webp/spadesK.webp);
}
 .spadesQ{
    background-image: url(./webp/spadesQ.webp);
}
 .spadesJ{
    background-image: url(./webp/spadesJ.webp);
}

.card-back{ background-image: url(./webp/card-back.webp);}
p.q{display: inline-block;
    width: 100%;
    font-size: 46px;
	color:red;
	margin: 12px;
}
.g_n {
   
	background-color:#0098ff94;
	height:89px;
	width:57px;
	margin:5px;
	
}
.modn {
    background-color: rgba(158, 158, 158, 0.75);
    max-width: 150px;
    width: fit-content;
    text-align: center;
    border-radius: 15px;
    padding: 4px;
    color: red;
    margin-left: -86px;
    background-color: #9e9e9efa;
}


`