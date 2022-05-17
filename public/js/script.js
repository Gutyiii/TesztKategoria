$(function(){

    const kategoriak = [];
    const kategAPI = "/kategoria";
    const token = $('meta[name="csrf-token"]').attr('content');
    const myAjax = new MyAjaxTokenes(token);
    const tomb = [];

    myAjax.getAjax(kategAPI, kategoriak, kategoriak);
    
    function kategoriak(){
        for (let index = 0; index < kategoriak.length; index++) {
            $("select").append("<option>"+ kategoriak[i] +"</option>")
        }
    }

    for (let index = 0; index < kategoriak.length; index++) {
        let apiVegpont = "/teszt/kategoria/"+kategoriak[index]+"";

        if(kategoriak[index]===0){
            let apiVegpont = "/teszt/kategoria/1";
            myAjax.getAjax(apiVegpont, tomb, adatokMegjelenites);
        }else{
            myAjax.getAjax(apiVegpont, tomb, adatokMegjelenites);
        }        
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
        if(adat===adat.helyes){
            this.node.css("background-color:green;");
        }else{
            this.node.css("background-color:red;");
        }
    });

    
});