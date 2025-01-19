import "./Thanks.css";

type ThanksProps ={
  dataProp:{
    name: string,
    review: string,
    comment: string
  }
} 

const Thanks = ({ dataProp }: ThanksProps) => {

  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        <strong>{dataProp.name}</strong>, a sua opinião é muito importante, em breve você receberá um cupom de <strong>10% de desconto para a sua próxima compra.</strong>
      </p>
      <br/>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: <strong>{dataProp.review}</strong></span>
       
      </p>
      <p className="review-data">
        <span>Comentário: <strong>{dataProp.comment}</strong>
        </span> 
      </p>
    </div>
  );

}

export default Thanks