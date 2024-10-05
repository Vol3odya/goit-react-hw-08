import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css"


export default function Contact({ card }) {
  
  const dispatch = useDispatch();


  const handleDelete = (values) => {
    dispatch(deleteContact(values));
  };

  return (
    <div className={css.cart}>
      <div>
        <p className={css.text}>{card.name}</p>
        <p className={css.text}>{card.number}</p>
      </div>
      <button className={css.button} onClick={()=>handleDelete(card.id)}>Delete</button>
    </div>
  )
}
