import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

import "./Steps.css"

//Responsável por tipar as props que o component irá receber. ex: currentStepProp é um número
type stepProps = {
    currentStepProp: number
}


//currentStepProp será usado como prop no App.tsx, e irá receber o valor de 'currentStep' como argumento.
const Steps = ({ currentStepProp }: stepProps) => {
    return (

        <div className="steps">
            <div className={`step ${currentStepProp == 0 ? "active" : ""}`}>
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStepProp == 1 ? "active" : ""}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStepProp == 2 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>

    )
}

export default Steps