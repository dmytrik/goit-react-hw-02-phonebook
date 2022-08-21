import { PhoneList, PhoneContact } from './ContactsList.styled';

export default function ContactsList({ phoneList }) {
  return (
    <>
      <PhoneList>
        {phoneList.map(({ id, name, number }) => (
          <PhoneContact key={id}>
            {name} : {number}
          </PhoneContact>
        ))}
      </PhoneList>
    </>
  );
}
