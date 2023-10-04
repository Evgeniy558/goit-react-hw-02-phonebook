import { Component } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/contactForm/ContactsForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (formData) => {
    const { name, number } = formData;
    if (
      this.state.contacts.find((el) => {
        return el.name.toLocaleLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      }));
    }
  };

  handleSearch = (SearchValue) => {
    this.setState({ filter: SearchValue });
  };

  filter = () => {
    const results = this.state.contacts.filter((el) => {
      return el.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    return results;
  };

  deleteContact = (id) => {
    return this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => {
        return el.id !== id;
      }),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const displayedContacts = filter ? this.filter() : contacts;
    console.log("displayedContacts", displayedContacts.length);
    return (
      <div className="App">
        <header className={css.appheader}>
          <section className={css.section}>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addNewContact} />
          </section>
          <section className={css.section}>
            <h2>Contacts</h2>
            <Filter onChange={this.handleSearch} />
            {displayedContacts.length !== 0 ? (
              <ContactList
                displayedContacts={displayedContacts}
                onClick={this.deleteContact}
              />
            ) : (
              <p>No contacts</p>
            )}
          </section>
        </header>
      </div>
    );
  }
}
export default App;
