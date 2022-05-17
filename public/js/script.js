$(function(){

    const kategoriaktomb = [];
    const kategAPI = "/kategoria";
    const token = $('meta[name="csrf-token"]').attr('content');
    const myAjax = new MyAjaxTokenes(token);
    const tomb = [];

    myAjax.getAjax(kategAPI, kategoriaktomb, kategoriak);

    let i = 0;

    function kategoriak(){
        for (i = 0; i < kategoriaktomb.length; i++) {
            $("select").append("<option>"+ kategoriaktomb[i].kategorianev +"</option>")
        }
        
    }


    let apiVegpont = "/teszt/kategoria/"+kategoriaktomb[i]+"";
    if(kategoriaktomb[i]===0){
        let apiVegpont = "/teszt/kategoria/1";
        myAjax.getAjax(apiVegpont, tomb, adatokMegjelenites);
    }else{
        myAjax.getAjax(apiVegpont, tomb, adatokMegjelenites);
    }        
    

    function adatokMegjelenites(){
        const szuloElem = $("#szulo");   
        const sablon = $(".sablon"); 
        szuloElem.empty();
        sablon.show();
        tomb.forEach(function (adat, index) {
            const node = sablon.clone().appendTo(szuloElem);
            const ujNode = new TesztKerdes(node, adat, index);
        });
        sablon.hide();
    };
    
    $(window).on("valtoz", (esemeny) => {
        let adat = esemeny.detail;
        if(adat === adat.helyes){
            this.node.css("background-color:green;");
        }else{
            this.node.css("background-color:red;");
        }
    });
});