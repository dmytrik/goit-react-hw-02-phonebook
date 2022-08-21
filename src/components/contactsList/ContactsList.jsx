import { PhoneList, PhoneContact, DeleteContact } from './ContactsList.styled';

export default function ContactsList({ phoneList, deleteContact }) {
  return (
    <>
      <PhoneList>
        {phoneList.map(({ id, name, number }) => (
          <PhoneContact key={id}>
            {name} : {number}
            <DeleteContact type="button" data-id={id} onClick={deleteContact}>
              Delete
            </DeleteContact>
          </PhoneContact>
        ))}
      </PhoneList>
    </>
  );
}
