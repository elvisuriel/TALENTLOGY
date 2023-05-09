
const Number = ({ListaNumeros}) => {

    const lista = [];
    for (let i = 1; i <= ListaNumeros; i++) {
      lista.push(<li key={i}>Elemento {i}</li>);
    }
    
return (

<div>
<ul>
    {lista}
</ul>

</div>

)
};

export default Number;