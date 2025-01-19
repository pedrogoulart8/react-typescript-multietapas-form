import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css"


//Tipando as propriedades do objeto 'dataProp', que é a prop do objeto 'data'. E também tipando os argumentos da função 'updateFieldHandler'
type ReviewProps = {

  dataProp:{
    review: string,
    comment: string,
  },
  updateFieldHandlerProp: ( key: string, value: string) => void
 

}

const ReviewForm = ({ dataProp, updateFieldHandlerProp }: ReviewProps) => {
  
  return (
    <div className="review-form">
      <div className="form-control score-container">

        <label className="radio-container">
          <input
            type="radio"
            value="Insatisfeito"
            name="review"
            required
            checked={dataProp.review === "Insatisfeito"}
            //Assim que alterado o input radio, o valor ficará armazenado o value da função 'updateFieldHandlerProp'
            onChange={(e) => updateFieldHandlerProp("review", e.target.value)}      
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Poderia ser melhor"
            name="review"
            checked={dataProp.review === "Poderia ser melhor"}
            onChange={(e) => updateFieldHandlerProp("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Satisfeito"
            name="review"
            checked={dataProp.review === "Satisfeito"}
           onChange={(e) => updateFieldHandlerProp("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Muito satisfeito"
            name="review"
            checked={dataProp.review === "Muito satisfeito"}
           onChange={(e) => updateFieldHandlerProp("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="cooment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          required
          value={dataProp.comment || ""}
          onChange={(e) => updateFieldHandlerProp("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );

}

export default ReviewForm