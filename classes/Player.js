class Player {
    constructor() {
        this.div = Player.display();
        this.move();
    }

    // logica de miscare
    move() {
        console.log('miscare', this)
        // https://keycode.info/ de intrat pentru a testa codurile
        document.addEventListener('keyup', (event) => {

            console.log(this)

            const oldTop = parseInt(this.div.style.top);
            console.log("oldTop", oldTop);
            const oldLeft = parseInt(this.div.style.left);
//logica in functie de key, se putea face si cu switch -case , dar era inceputa cu if si am continuat asa
            if (event.keyCode === 40) { // arrow down 
                if (oldTop == 380){
                    return "depaseste div"
                }
                else{
                this.div.style.top = `${oldTop + 20}px`;
                console.log('arrow down', this.div.style.top)
                }

            }
            else if(event.keyCode === 38){ // up
                if (oldTop == 20){
                    return "depaseste div"
                }
                else{
                this.div.style.top = `${oldTop - 20}px`;
                console.log('arrow up', this.div.style.top)
                }

            }
            else if (event.keyCode == 37){// left 
                if (oldLeft == 20){
                    return "depaseste div"
                }
                else{
                this.div.style.left = `${oldLeft - 20}px`;
                console.log('arrow left', this.div.style.left)
                }
            }
            else if (event.keyCode == 39){// right
                if (oldLeft == 380){
                    return "depaseste div"
                }
                else{
                this.div.style.left = `${oldLeft + 20}px`;
                console.log('arrow right', this.div.style.left)
                }
            }
        }
        )
    }

    // afisarea div-ului
    static display() {
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "red";
        style.position = "absolute";
        style.top = "20px"
        style.left = "20px"
        console.log("in display ")
        document.body.appendChild(div);
        return div;

    }
}
