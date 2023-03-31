import './App.css';
const pokemonGen1 = [{pkdxnr:"1: " ,name:"bisasam"}, {pkdxnr:"2: " ,name:"bisaknosp"}, {pkdxnr:"3: " ,name:"bisaflor"}, {pkdxnr:"4: " ,name:"glumanda"}, {pkdxnr:"5: " ,name:"glutexo"}, {pkdxnr:"6: " ,name:"glurak"}, {pkdxnr:"7: " ,name:"schiggy"}, {pkdxnr:"8: " ,name:"schillok"}, {pkdxnr:"9: " ,name:"turtok"}, {pkdxnr:"10: " ,name:"raupy"}, {pkdxnr:"11: " ,name:"safcon"}, {pkdxnr:"12: " ,name:"smettbo"}, {pkdxnr:"13: " ,name:"hornliu"}, {pkdxnr:"14: " ,name:"kokuna"}, {pkdxnr:"15: " ,name:"bibor"}, {pkdxnr:"16: " ,name:"taubsi"}, {pkdxnr:"17: " ,name:"tauboga"}, {pkdxnr:"18: " ,name:"tauboss"}, {pkdxnr:"19: " ,name:"rattfratz"}, {pkdxnr:"20: " ,name:"rattikarl"}, {pkdxnr:"21: " ,name:"habitak"}, {pkdxnr:"22: " ,name:"ibitak"}, {pkdxnr:"23: " ,name:"rettan"}, {pkdxnr:"24: " ,name:"arbok"}, {pkdxnr:"25: " ,name:"pikachu"}, {pkdxnr:"26: " ,name:"raichu"}, {pkdxnr:"27: " ,name:"sandan"}, {pkdxnr:"28: " ,name:"sandamer"}, {pkdxnr:"29: " ,name:"nidoran"}, {pkdxnr:"30: " ,name:"nidorina"}, {pkdxnr:"31: " ,name:"nidoqueen"}, {pkdxnr:"32: " ,name:"nidoran"}, {pkdxnr:"33: " ,name:"nidorino"}, {pkdxnr:"34: " ,name:"nidoking"}, {pkdxnr:"35: " ,name:"piepi"}, {pkdxnr:"36: " ,name:"pixi"}, {pkdxnr:"37: " ,name:"vulpix"}, {pkdxnr:"38: " ,name:"vulnona"}, {pkdxnr:"39: " ,name:"pummeluff"}, {pkdxnr:"40: " ,name:"knuddeluff"}, {pkdxnr:"41: " ,name:"zubat"}, {pkdxnr:"42: " ,name:"golbat"}, {pkdxnr:"43: " ,name:"myrapla"}, {pkdxnr:"44: " ,name:"duflor"}, {pkdxnr:"45: " ,name:"giflor"}, {pkdxnr:"46: " ,name:"paras"}, {pkdxnr:"47: " ,name:"parasek"}, {pkdxnr:"48: " ,name:"bluzuk"}, {pkdxnr:"49: " ,name:"omot"}, {pkdxnr:"50: " ,name:"digda"}, {pkdxnr:"51: " ,name:"digdri"}, {pkdxnr:"52: " ,name:"mauzi"}, {pkdxnr:"53: " ,name:"snobilikat"}, {pkdxnr:"54: " ,name:"enton"}, {pkdxnr:"55: " ,name:"entoron"}, {pkdxnr:"56: " ,name:"menki"}, {pkdxnr:"57: " ,name:"rasaff"}, {pkdxnr:"58: " ,name:"fukano"}, {pkdxnr:"59: " ,name:"arkani"}, {pkdxnr:"60: " ,name:"quapsel"}, {pkdxnr:"61: " ,name:"quaputzi"}, {pkdxnr:"62: " ,name:"quappo"}, {pkdxnr:"63: " ,name:"abra"}, {pkdxnr:"64: " ,name:"kadabra"}, {pkdxnr:"65: " ,name:"simsala"}, {pkdxnr:"66: " ,name:"machollo"}, {pkdxnr:"67: " ,name:"maschock"}, {pkdxnr:"68: " ,name:"machomei"}, {pkdxnr:"69: " ,name:"knofensa"}, {pkdxnr:"70: " ,name:"ultrigaria"}, {pkdxnr:"71: " ,name:"sarzenia"}, {pkdxnr:"72: " ,name:"tentacha"}, {pkdxnr:"73: " ,name:"tentoxa"}, {pkdxnr:"74: " ,name:"kleinstein"}, {pkdxnr:"75: " ,name:"georok"}, {pkdxnr:"76: " ,name:"geowaz"}, {pkdxnr:"77: " ,name:"ponita"}, {pkdxnr:"78: " ,name:"gallopa"}, {pkdxnr:"79: " ,name:"flegmon"}, {pkdxnr:"80: " ,name:"lahmus"}, {pkdxnr:"81: " ,name:"magnetilo"}, {pkdxnr:"82: " ,name:"magneton"}, {pkdxnr:"83: " ,name:"porenta"}, {pkdxnr:"84: " ,name:"dodu"}, {pkdxnr:"85: " ,name:"dodri"}, {pkdxnr:"86: " ,name:"jurob"}, {pkdxnr:"87: " ,name:"jugong"}, {pkdxnr:"88: " ,name:"sleima"}, {pkdxnr:"89: " ,name:"sleimok"}, {pkdxnr:"90: " ,name:"muschas"}, {pkdxnr:"91: " ,name:"austos"}, {pkdxnr:"92: " ,name:"nebulak"}, {pkdxnr:"93: " ,name:"alpollo"}, {pkdxnr:"94: " ,name:"gengar"}, {pkdxnr:"95: " ,name:"onix"}, {pkdxnr:"96: " ,name:"traumato"}, {pkdxnr:"97: " ,name:"hypno"}, {pkdxnr:"98: " ,name:"krabby"}, {pkdxnr:"99: " ,name:"kingler"}, {pkdxnr:"100: " ,name:"voltobal"}, {pkdxnr:"101: " ,name:"lektrobal"}, {pkdxnr:"102: " ,name:"owei"}, {pkdxnr:"103: " ,name:"kokowei"}, {pkdxnr:"104: " ,name:"tragosso"}, {pkdxnr:"105: " ,name:"knogga"}, {pkdxnr:"106: " ,name:"kicklee"}, {pkdxnr:"107: " ,name:"nockchan"}, {pkdxnr:"108: " ,name:"schlurp"}, {pkdxnr:"109: " ,name:"smogon"}, {pkdxnr:"110: " ,name:"smogmog"}, {pkdxnr:"111: " ,name:"rihorn"}, {pkdxnr:"112: " ,name:"rizeros"}, {pkdxnr:"113: " ,name:"chaneira"}, {pkdxnr:"114: " ,name:"tangela"}, {pkdxnr:"115: " ,name:"kangama"}, {pkdxnr:"116: " ,name:"seeper"}, {pkdxnr:"117: " ,name:"seemon"}, {pkdxnr:"118: " ,name:"goldini"}, {pkdxnr:"119: " ,name:"golking"}, {pkdxnr:"120: " ,name:"sterndu"}, {pkdxnr:"121: " ,name:"starmie"}, {pkdxnr:"122: " ,name:"pantimos"}, {pkdxnr:"123: " ,name:"sichlor"}, {pkdxnr:"124: " ,name:"rossana"}, {pkdxnr:"125: " ,name:"elektek"}, {pkdxnr:"126: " ,name:"magmar"}, {pkdxnr:"127: " ,name:"pinsir"}, {pkdxnr:"128: " ,name:"tauros"}, {pkdxnr:"129: " ,name:"karpador"}, {pkdxnr:"130: " ,name:"garados"}, {pkdxnr:"131: " ,name:"lapras"}, {pkdxnr:"132: " ,name:"ditto"}, {pkdxnr:"133: " ,name:"evoli"}, {pkdxnr:"134: " ,name:"aquana"}, {pkdxnr:"135: " ,name:"blitza"}, {pkdxnr:"136: " ,name:"flamara"}, {pkdxnr:"137: " ,name:"porygon"}, {pkdxnr:"138: " ,name:"amonitas"}, {pkdxnr:"139: " ,name:"amoroso"}, {pkdxnr:"140: " ,name:"kabuto"}, {pkdxnr:"141: " ,name:"kabutops"}, {pkdxnr:"142: " ,name:"aerodactyl"}, {pkdxnr:"143: " ,name:"relaxo"}, {pkdxnr:"144: " ,name:"arktos"}, {pkdxnr:"145: " ,name:"zapdos"}, {pkdxnr:"146: " ,name:"lavados"}, {pkdxnr:"147: " ,name:"dratini"}, {pkdxnr:"148: " ,name:"dragonir"}, {pkdxnr:"149: " ,name:"dragoran"}, {pkdxnr:"150: " ,name:"mewtu"}, {pkdxnr:"151: " ,name:"mew"}]




function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}


const Table = () => {
  return (
      <table border={ 1 }>
        <tbody>
          {pokemonGen1.map((value, key) => {
          return(
          <tr key={key}>
            <td id={value.pkdxnr}><p>{value.pkdxnr}{value.name}</p></td> 
          </tr>
            )
          })}
        </tbody>
      </table>
  )
}

export default App;
