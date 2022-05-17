class TesztKerdes{
    constructor(node, adat, index){
        this.node = node;
        this.kerdes = this.node.children(".kerdes");
        this.v1 = this.node.children(".v1");
        this.v2 = this.node.children(".v2");
        this.v3 = this.node.children(".v3");
        this.v4 = this.node.children(".v4");
        this.adat = adat;
        this.adat.index = index;
        this.setAdat(this.adat);
        let i = 0;
        if (i === 0){
            this.node.children(".v1").on("click", ()=>{ this.KattintasTrigger(); });
            this.node.children(".v2").on("click", ()=>{ this.KattintasTrigger(); });
            this.node.children(".v3").on("click", ()=>{ this.KattintasTrigger(); });
            this.node.children(".v4").on("click", ()=>{ this.KattintasTrigger(); });
        }else{
            this.node.children(".v1").on("click", ()=>{alert("Erre már válaszoltál")});
            this.node.children(".v2").on("click", ()=>{alert("Erre már válaszoltál")});
            this.node.children(".v3").on("click", ()=>{alert("Erre már válaszoltál")});
            this.node.children(".v4").on("click", ()=>{alert("Erre már válaszoltál")});
        }
        
    }

    setAdat(){
        this.kerdes.html(ertek.kerdes);
        this.v1.value(ertek.v1);
        this.v2.value(ertek.v2);
        this.v3.value(ertek.v3);
        this.v4.value(ertek.v4);
    }

    KattintasTrigger(){
        let esemeny = new CustomEvent("valtoz", { detail: this.adat });
        window.dispatchEvent(esemeny);
        this.node.css("background-color:blue");
    }
}