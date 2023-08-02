import Button from "../contactForm/button/Button";
import css from "./List.module.css";
const List = ({ contacts, displayedContacts, onClick }) => {
  return (
    <div>
      {" "}
      <ul>
        {contacts.length > 0 &&
          displayedContacts.map((el) => {
            return (
              <li key={el.id} className={css.list_item}>
                <div className={css.container_info}>
                  {el.name}: {el.number}{" "}
                </div>

                <Button
                  type="button"
                  onClick={() => onClick(el.id)}
                  typebutton={"button_del"}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default List;
