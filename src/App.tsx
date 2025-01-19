import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi";

//Components
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import Steps from "./components/Steps"
import UserForm from "./components/UserForm"

//Hooks
import { useForm } from "./hooks/useForm"
import { useState } from "react"

//css
import './App.css'

//Tipando as propriedades do objeto 'FormTemplate' que será criado abaixo
type FormFields = {

  name: string,
  email: string,
  review: string,
  comment: string

}

//Objeto com objetivo de armazenar as informações do usuario, coletadas no formulário.
const FormTemplate: FormFields = {

  name: "",
  email: "",
  review: "",
  comment: ""

}


function App() {

  const [data, setData] = useState(FormTemplate)


  //arrow function com objetivo de atualizar o hook 'data'. A função recebe os valores anteriores de data e atualiza apenas o value da propriedade dentro de 'key'
  //Ex: name: Pedro
  const updateFieldHandler = (key: string, value: string) => {

    setData((prev) => {

      //Criado objeto com as propriedades anteriores, e alterada apenas a propriedade que correspondente a key com um novo valor. Retorna o novo objeto atualizado, que substitui o estado antigo
      return { ...prev, [key]: value }

    })

  }

  const enviar = () => {

    alert("Obrigado, formulário enviado!")

    window.location.reload()

  }


  const formComponents = [
    <UserForm dataProp={data} updateFieldHandlerProp={updateFieldHandler} />,
    <ReviewForm dataProp={data} updateFieldHandlerProp={updateFieldHandler} />,
    <Thanks dataProp={data} />
  ]


  //Desestruturando propriedades de retorno do hook para que as mesmas sejam utilizadas no App.jsx como variáveis de mesmo nome. Agora podemos utilizar aqui os valores das propriedades do Hook useForm.
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (

    <div className='App'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          {""}
          Ficamos felizes com sua compra, utilize o formulário para avaliar o produto.
        </p>
      </div>
      <div className='form-container'>

        {/* Component responsável por indicar as etapas do formulário. Recebe como argumento o indice(número) do hook useForm */}
        <Steps currentStepProp={currentStep} />



        {/* Função responsável por adicionar um numeral a mais no indice, que se encontra dentro da function 'changeStep'. Isso desencadeia a alteração de etapa do formulário. */}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>
            {/* Renderiza o componente atual na tela */}
            {currentComponent}
          </div>
          <div className='actions'>

            {/* Caso seja o primeiro passo do formulário, apenas botões de avançar, caso NÃO seja, botão de avançar e enviar */}
            {!isFirstStep ? (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>

            ) : (
              ""
            )}

            {/* Caso NÃO seja o ultimo passo do formulário, apenas botões de avançar, caso seja, botão de enviar */}
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Avançar</span>
              </button>
            ) : (
              <button type="button" onClick={() => enviar()}>
                <FiSend />
                <span>Enviar</span>
              </button>
            )}

          </div>
        </form>
      </div>
    </div>

  )
}

export default App
