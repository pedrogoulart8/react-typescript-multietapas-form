import { ReactElement, FormEvent, useState } from "react";

//Estou informando ao TS que o argumento 'steps' é um array de elementos react. ex: [<ElementoA />, <ElementoB />, <ElementoC />]
export function useForm(steps: ReactElement[]){

    const [currentStep, setCurrentStep] = useState(0)

    //Definições de parametros. 'i' = numero. 'e', que é opcional(por isso o ?), chama um evento de formulário('FormEvent')
    function changeStep(i: number, e?:FormEvent) {

        if (e) e.preventDefault()

        //Caso a condição seja verdadeira, o return permite a execução do restante do código da função 'changeStep'
        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)

    }

    return{

         //Retorna o indice atual
         currentStep,

        //Função que permite a alteração do indice, consequentemente da etapa do formulario
        changeStep,

        //Propriedade criada para inserir um indice(numero) dentro do argumento 'steps', que será usado em app.jsx. O objeto 'formComponents', que tem como propriedades as etapas do formulario, será usado no argumento 'steps' e assim poderemos saber qual etapa atual do formulário.
        //Ex: formComponents[0], formComponents[1]...
        currentComponent: steps[currentStep],

        //Caso currentStep(indice atual - numero) + 1 seja o total de 'steps', retorne true
        isLastStep: currentStep + 1 === steps.length ? true : false,

        isFirstStep: currentStep === 0 ? true : false

       
    }

}