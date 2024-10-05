import Contact from "../Contact/Contact"
import { useSelector } from "react-redux";
import {selectFilteredContacts} from "../../redux/contacts/slise"
import css from "./ContactList.module.css"

export default function ContactList() {
  
  const selectContacts = useSelector(selectFilteredContacts);



  return (
    <ul className={css.main}>
      {selectContacts.map(value => {
        return (
          <li key={value.id} className={css.list}>
            <Contact
              card={value}
            />
          </li>
        );
      })}
    </ul>
  );
}
