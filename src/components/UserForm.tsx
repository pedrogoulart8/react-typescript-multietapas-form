//Tipado as propriedades do objeto dataProp e também tipado os argumentos da function 'updateFieldHandlerProp'
//Tanto a função quando o objeto serão usados como argumento para este componente
//Utilizado o 'void' pois esta função não retorna nenhum valor, ela apenas altera o estado de 'data'
type UserProps = {
    dataProp: {
        name: string,
        email: string,
    },
    updateFieldHandlerProp: (key: string, value: string) => void
       
}

const UserForm = ({ dataProp, updateFieldHandlerProp }: UserProps) => {
  return (

    <div>
        <div className="form-control">
            <label htmlFor="name">Nome</label>
            <input type="text"  
            name='text' 
            id='name' 
            placeholder='Digite seu nome' 
            required 
            value={dataProp.name || ""}
            //Quando houver mudança no input, é chamada a função 'updateFieldHandlerProp'. A mesma tem como objetivo preencher os argumentos. 'key' recebe a string 'name' e 'value' recebe o valor preenchido no input
            //Estes valores serão setados dentro do hook 'data', que é um objeto com outras propriedades além de 'name'
            onChange={(e) => updateFieldHandlerProp("name", e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input type="text"  
            name='email' 
            id='email' 
            placeholder='Digite seu E-mail' 
            required 
            value={dataProp.email || ""}
            onChange={(e) => updateFieldHandlerProp("email", e.target.value)}
            />
        </div>
    </div>

  )
}

export default UserForm